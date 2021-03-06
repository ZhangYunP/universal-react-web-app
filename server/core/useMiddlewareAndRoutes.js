const zlib = require('zlib');
const argv = require('yargs').argv;
const koaBody = require('koa-body');
const helmet = require('koa-helmet');
const session = require('koa-session');
const compress = require('koa-compress');
const middleware = require('../middleware');
const installRouter = require('./installRouter');
const { createpkp } = require('../../libraries/vendor');
const {
  publicDir, compressType, compressThreshold, maxFieldsSize, uploadDir,
  pkpMaxage, crtDir, crtName, crtDir2, crtName2, cspDirectives
} = require('../../config');

const env = process.env.NODE_ENV || 'development';
const isssl = argv.isssl;

const mainpkp = createpkp(crtName, crtDir);
const subpkp = createpkp(crtName2, crtDir2);

const {
  csrf,
  proxy,
  recordaccessinfo,
  dispatcherror,
  staticserver,
  koadevserver
} = middleware;

function useMiddlewareAndRoutes(app, router, dbOperationCollection) {
  if (env === 'development') app.use(koadevserver(app, router, dbOperationCollection)); // webpack dev server

  app.use(dispatcherror());

  app.use(recordaccessinfo({}));

  if (isssl) {
    app.use(helmet()); // hsts have some promblem in chrome
    app.use(helmet.hpkp({
      maxAge: pkpMaxage,
      sha256s: [mainpkp, subpkp],
      includeSubdomains: true
    }));
    app.use(helmet.contentSecurityPolicy({
      directives: cspDirectives,
      browserSniff: false
    }));
  }

  // when you enter the location bar, the browser will set request header cache-control: max-age=0
  // and froce browser to request the assert
  app.use(staticserver({ root: publicDir, cache: { image: 1100000, javascript: 1100000 } }));

  app.use(session(app, {}));

  app.use(koaBody({
    multipart: true, // support enctype=multipart/form-data
    formidable: {
      maxFieldsSize,
      uploadDir,
      keepExtensions: true
      // multiples: true, // default options
    }
  }));

  app.use(csrf({ httpOnly: false, secure: false }, app));

  app.use(compress({
    filter: function (contentType) {
      return compressType.test(contentType);
    },
    threshold: compressThreshold,
    flush: zlib.Z_SYNC_FLUSH
  }));

  if (env !== 'development') {
    installRouter(app, router, dbOperationCollection);
  }
}

module.exports = useMiddlewareAndRoutes;
