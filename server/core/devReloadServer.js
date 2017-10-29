const reload = require('koa-reload');
const http = require('http');
const spdy = require('spdy');
const { spdyOpts } = require('../../config');

function createReloadServer(app, isssl) {
  let sslReloadServer;
  const reloadServer = http.createServer(app.callback());
  if (isssl) {
    sslReloadServer = spdy.createServer(spdyOpts, app.callback());
    reload(sslReloadServer);
  }
  const Reloadrouter = reload(reloadServer).Reloadrouter;
  return { reloadServer, Reloadrouter, sslReloadServer };
}
module.exports = createReloadServer;
