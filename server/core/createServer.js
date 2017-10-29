const Router = require('koa-router');
const yargs = require('yargs');
const spdy = require('spdy');
const apiCreator = require('../../server/api');
const createReloadServer = require('./devReloadServer');
const installMiddleware = require('./installMiddleware');
const { coookieKey, viewsTemplate, spdyOpts } = require('../../config');
/* eslint no-else-return: 0 */
const argv = yargs.argv;
const env = process.env.NODE_ENV || 'development';

function createServer(app, dbOperationCollection) {
  let reloadServer;
  let sslReloadServer;
  let sslServer;

  require('marko/node-require');
  const template = require(viewsTemplate);

  const router = new Router();

  app.keys = coookieKey;

  const apiRouter = apiCreator({
    dbOperationCollection,
    template
  });

  if (env === 'development') {
    const devReloadServer = createReloadServer(app, argv.isssl);
    const reloadRouter = devReloadServer.Reloadrouter;
    reloadServer = devReloadServer.reloadServer;
    sslReloadServer = devReloadServer.sslReloadServer;
    router.use(reloadRouter.routes(), reloadRouter.allowedMethods());
  }

  installMiddleware(app, router, apiRouter);

  if (env === 'development') {
    return { sslserver: sslReloadServer, server: reloadServer };
  } else {
    if (argv.isssl) {
      sslServer = spdy.createServer(spdyOpts, app.callback());
    }
    return { sslserver: sslServer, server: app };
  }
}
module.exports = createServer;
