const { createCustomError } = require('../../libraries/errorFactory');
const ErrorManagement = require('../../libraries/errorManagement');

function handleUncaughtException() {
  process.on('uncaughtException', (err) => {
    console.log(err);
  });
  process.on('unhandledRejection', (reason, err) => {
    console.log(reason);
  });
}
module.exports = handleUncaughtException;
