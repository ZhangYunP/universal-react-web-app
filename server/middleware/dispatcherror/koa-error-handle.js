const ErrorManagement = require('../../../libraries/errorManagement');

function dispatchError() {
  return async function (ctx, next) {
    try {
      await next();
    } catch (e) {
      return new ErrorManagement().handleError(ctx, e);
    }
  };
}
exports.dispatchError = dispatchError;
