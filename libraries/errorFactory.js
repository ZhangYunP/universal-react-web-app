const VError = require('verror');
const { getTime } = require('./vendor');
/* eslint no-param-reassign: 0 */
function createCustomError(e, name, meta, msg) {
  let customError = null;
  const errorOccuredTime = getTime();
  if (arguments.length === 1) {
    msg = e;
    e = null;
    customError = new VError(msg + ', errorOccuredTime: ' + errorOccuredTime);
  } else if (arguments.length === 2) {
    if (e instanceof Error) {
      msg = name;
      name = null;
      customError = new VError(e, msg);
    } else if (toString.call(e) === '[object Object]') {
      meta = e;
      msg = name;
      e = null;
      name = null;
      meta = { info: meta };
      meta.info.errorOccuredTime = errorOccuredTime;
      customError = new VError(meta, msg);
    } else {
      msg = e + ', ' + name;
      customError = new VError(msg + ', errorOccuredTime: ' + errorOccuredTime);
    }
  } else if (arguments.length === 3) {
    msg = meta;
    meta = name;
    meta = { info: meta };
    if (e instanceof Error) {
      name = null;
      meta.cause = e;
    } else {
      name = e;
      e = null;
      meta.name = name;
    }
    meta.info.errorOccuredTime = errorOccuredTime;
    customError = new VError(meta, msg);
  } else if (arguments.length === 4 || arguments.length > 4) {
    meta = { info: meta };
    meta.cause = e;
    meta.name = name;
    meta.info.errorOccuredTime = errorOccuredTime;
    const args = [].slice.call(arguments).slice(4);
    customError = new VError(meta, msg, ...args);
  } else {
    throw new VError('createCustomError must need arguments');
  }
  if (customError) {
    const info = VError.info(customError);
    customError.info = info || {};
  }
  return customError;
}
exports.createCustomError = createCustomError;
