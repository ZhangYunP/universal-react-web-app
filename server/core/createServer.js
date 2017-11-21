const Router = require('koa-router');
const yargs = require('yargs');
const spdy = require('spdy');
const createReloadServer = require('./devReloadServer');
const useMiddlewareAndRoutes = require('./useMiddlewareAndRoutes');
const { coookieKey, spdyOpts } = require('../../config');
/* eslint no-else-return: 0 */
const argv = yargs.argv;
const env = process.env.NODE_ENV || 'development';

function createServer(app, dbOperationCollection) {
  let reloadServer;
  let sslReloadServer;
  let sslServer;

  require('marko/node-require');

  const router = new Router();

  app.keys = coookieKey;

  if (env === 'development') {
    const devReloadServer = createReloadServer(app, argv.isssl);
    const reloadRouter = devReloadServer.Reloadrouter;
    reloadServer = devReloadServer.reloadServer;
    sslReloadServer = devReloadServer.sslReloadServer;
    router.use(reloadRouter.routes(), reloadRouter.allowedMethods());
  }

  useMiddlewareAndRoutes(app, router, dbOperationCollection);

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
