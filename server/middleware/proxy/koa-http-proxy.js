const url = require('url');
const rp = require('request-promise');
const pathToRegExp = require('path-to-regexp');
const { createCustomError } = require('../../../libraries/errorFactory');

function formatOpts(ctx, targetPath, reqOpts, opts) {
  if (!~targetPath.indexOf(/^http/)) {
    const protocol = opts.isssl ? 'https' : 'http';
    const hostname = opts.hostname || ctx.hostname;
    const port = opts.port || (opts.isssl ? 443 : 80);
    reqOpts.url = protocol + '://' + hostname + ':' + port + targetPath;
  } else {
    reqOpts.url = targetPath;
  }
  reqOpts.qs = opts.qs || ctx.query;
  reqOpts.headers = Object.assign((opts.headers || {}), ctx.headers);
  if (opts.auth) reqOpts.auth = opts.auth;
  if (opts.ca) reqOpts.ca = opts.auth;
  if (opts.agent) reqOpts.agent = opts.agent;
  if (opts.changeOrigin) reqOpts.headers.host = url.parse(reqOpts.url).host;
  reqOpts.method = opts.method || ctx.method;
  if (reqOpts.method.toLowerCase() === 'post') {
    if (opts.body) reqOpts.body = opts.body;
    switch (ctx.is('urlencoded', 'mutipart')) {
      case 'urlencoded':
        reqOpts.form = opts.from || ctx.request.body || {};
        break;
      case 'multipart':
        reqOpts.multipart = opts.multipart || ctx.request.body || {};
        break;
      default:
        break;
    }
  }
  if (opts.timeout) {
    reqOpts.timeout = opts.timeout;
  }
  reqOpts.gzip = opts.gzip || ctx.acceptsEncodings('gzip') === 'gzip' || false;
  reqOpts.jar = opts.jar || false;
  reqOpts.simple = opts.simple || false;
  reqOpts.strictSSL = opts.strictSSL || false;
  reqOpts.rejectUnauthorized = opts.rejectUnauthorized || false;
  reqOpts.resolveWithFullResponse = opts.resolveWithFullResponse !== false;
}

function proxy(opts) {
  if (!(opts.to || opts.map)) {
    throw createCustomError('proxy must need args target');
  }
  let matchedPath = [];
  const requestOpts = {};
  const keys = [];
  let targetPath = '';
  /* eslint no-cond-assign: 0 */
  const koaProxy = async (ctx, next) => {
    let from = opts.from || ctx.path;
    const re = pathToRegExp(from, keys);
    if (!(matchedPath = ctx.path.match(re))) {
      await next();
    } else {
      if (typeof opts.to !== 'string') {
        throw createCustomError('target must be string');
      }
      targetPath = opts.to.replace(/\$(\d+)|(:(\w+))/g, (matched, num, namedParam) => {
        if (namedParam) {
          let matchedIndex = 0;
          keys.every((key, index) => {
            if (key.name === namedParam) {
              matchedIndex = index + 1;
              return false;
            }
            return true;
          });
          return matchedPath[matchedPath];
        }
        return matchedPath[num];
      });
      formatOpts(ctx, targetPath, requestOpts, opts);
      /* eslint max-len: 0 */
      try {
        const res = await rp(requestOpts);
        if ((res.statusCode >= 200 && res.statusCode <= 300) || res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 304) {
          if (ctx.req.httpVersion === '1.0') {
            res.headers.connection = 'close';
            delete res.headers['transfer-encoding'];
          } else {
            res.headers.connection = 'keep-alive';
          }
          ctx.set(res.headers);
          ctx.status = res.statusCode;
          ctx.body = res.body;
        } else {
          ctx.status = res.statusCode;
          if (res.statusCode === 404) {
            ctx.body = 'not found';
          }
          ctx.body = 'internal server error';
        }
      } catch (e) {
        throw createCustomError(e, 'PROXYERROR', {
          isSerious: 0,
          origin: ctx.herf,
          requesturl: requestOpts.url,
          method: 'proxy'
        }, 'proxy request error');
      }
    }
  };
  return koaProxy;
}
exports.proxy = proxy;
