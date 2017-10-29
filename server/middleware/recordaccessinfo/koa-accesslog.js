const { getResusetinfo } = require('../../../libraries/vendor');
const Logger = require('../../../libraries/winstonLog');

const env = process.env.NODE_ENV || 'development';
const clog = Logger.consolelog;
const alog = Logger.accesslog;

function recordaccessinfo(opts) {
  opts.ignoreRoutes = opts.ignoreRoutes || [];
  return async (ctx, next) => {
    const reqinfo = getResusetinfo(ctx);
    const {
      start,
      requestId,
      method,
      url,
      protocol,
      ip,
      timestamp,
      userAgent,
      referer,
      userId
    } = reqinfo;
    await next();
    if (!~opts.ignoreRoutes.indexOf(url)) {
      const status = ctx.status;
      const length = ctx.length;
      const end = Date.now();
      const duration = end - start;
      const accessinfo = `${ip} - - [${duration}] "${method} ${url} ${protocol}" ${status} ${timestamp} ${length} "${referer}" "${userAgent}"  - - ${requestId} ${userId}`;
      if (opts.rewrite) {
        alog.rewrites.push(opts.rewrite);
        clog.rewrites.push(opts.rewrite);
      }
      if (opts.filter) {
        alog.filters.push(opts.filter);
        clog.filters.push(opts.filter);
      }
      if (env === 'development') {
        clog.debug(accessinfo);
      }
      alog.info(accessinfo);
    }
  };
}
exports.recordaccessinfo = recordaccessinfo;
