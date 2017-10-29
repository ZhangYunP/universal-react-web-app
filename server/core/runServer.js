const { createCustomError } = require('../../libraries/errorFactory');

function runServer(app, sslserver, options) {
  const ownServer = { sslserver: null, server: null };
  const port = options.port || 80;
  const sslPort = options.sslPort || 443;
  let serverIsRuningCount = 0;
  const TOTALSERVERCOUNT = sslserver ? 2 : 1;
  return new Promise((resolve, reject) => {
    if (!app || !port) {
      reject(createCustomError('SERVERERROR', { isSerious: 1, method: 'runServer' }, 'runServer occued error'));
    }
    if (sslserver) {
      const sslServer = sslserver.listen(sslPort, () => {
        ownServer.sslserver = sslServer;
        serverIsRuningCount += 1;
        if (serverIsRuningCount === TOTALSERVERCOUNT) {
          resolve(ownServer);
        }
      });
    }
    const server = app.listen(port, () => {
      ownServer.server = server;
      serverIsRuningCount += 1;
      if (serverIsRuningCount === TOTALSERVERCOUNT) {
        resolve(ownServer);
      }
    });
  });
}
module.exports = runServer;
