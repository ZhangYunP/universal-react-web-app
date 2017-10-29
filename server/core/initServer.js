const Koa = require('koa');
const prepare = require('./repository');
const runServer = require('./runServer');
const createServer = require('./createServer');
const { printLogger } = require('../../libraries/vendor');
const { port, sslPort } = require('../../config');
const { registerGloabalResourceRelease } = require('../../libraries/vendor');
const { createCustomError } = require('../../libraries/errorFactory');

const app = new Koa();
const options = { port, sslPort };
const env = process.env.NODE_ENV || 'development';

async function initializeServer(pool, isCluster) {
  let dbOperationCollection;
  let ownServer;

  try {
    dbOperationCollection = await prepare(pool, isCluster);
  } catch (e) {
    throw createCustomError(e, 'DBERROR', { isSerious: 1, method: 'prepare' }, 'create pool occued error');
  }

  const { sslserver, server } = createServer(app, dbOperationCollection);

  try {
    ownServer = await runServer(server, sslserver, options);
  } catch (e) {
    throw createCustomError(e, 'SERVERERROR', { isSerious: 1, method: 'runServer' }, 'runServer occued error');
  }

  if (env === 'development') {
    printLogger(`server is listening on ${port}`);
  }

  if (ownServer.server) {
    registerGloabalResourceRelease(ownServer.server, dbOperationCollection);
  } else {
    throw createCustomError(new Error(), 'SERVERERROR', { isSerious: 1, method: 'runServer' }, 'runServer do not return a server instance');
  }

  if (ownServer.sslserver) {
    if (env === 'development') {
      printLogger(`sslserver is listening on ${sslPort}`);
    }
    registerGloabalResourceRelease(ownServer.sslserver, dbOperationCollection);
  }
}
module.exports = initializeServer;
