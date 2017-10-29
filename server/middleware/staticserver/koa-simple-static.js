const fs = require('fs');
const mime = require('mime');
const util = require('util');
const crypto = require('crypto');
const { createCustomError } = require('../../../libraries/errorFactory');
const {
  resolve,
  normalize,
  parse,
  basename,
  extname,
  sep
} = require('path');
/* eslint no-use-before-define: 0 */

const stat = util.promisify(fs.stat);
const readFile = util.promisify(fs.readFile);

function koaStatic(opts) {
  const cache = {};
  let fileContent;

  return async (ctx, next) => {
    let done = false;

    const send = async (ctx, opts) => {
      if (ctx.method === 'HEAD' || ctx.method === 'GET') {
        if (ctx.fresh) {
          done = true;
          ctx.status = 304;
          return;
        }

        let type;
        let stats;
        let maxage = 0;
        let isShow = false;
        let pathParts = [];
        const root = opts.root
          ? normalize(resolve(opts.root))
          : '';
        let path = ctx.path;

        path = path.substr(parse(path).root.length);
        path = resolve(root, path);
        path = decodeURIComponent(path);

        if (cache[path]) {
          done = true;
          console.log('cache');
          ctx.type = cache[path].type;
          ctx.body = cache[path].body;
          return;
        }

        const trailingSlash = path[path.length - 1] === '/';
        const index = opts.index || '';
        const extensions = Array.isArray(opts.extensions)
          ? opts.extensions
          : false;
        const gzip = opts.gzip !== false;
        const setHeaders = opts.setHeaders;

        if (setHeaders && typeof setHeaders !== 'function') {
          throw createCustomError({
            isSerious: 0,
            method: 'koaStatic'
          }, 'setHeaders occued error');
        }

        pathParts = path.substr(root.length).split(sep);

        isShow = pathParts.every((part) => {
          if (part[0] === '.') return false;
          return true;
        });

        if (!isShow) return;

        if (trailingSlash && index) path += index;

        if (ctx.acceptsEncodings('gzip', 'deflate', 'identity') === 'gzip' && gzip && (fs.existsSync(path + '.gz'))) {
          path += '.gz';
          ctx.set('Content-Encoding', 'gzip');
          ctx.res.removeHeader('Content-Length');
        }

        if (extensions && !/\..*$/.exec(path)) {
          const list = [].concat(extensions);
          for (let i = 0; i < list.length; i++) {
            let ext = list[i];
            if (typeof ext !== 'string') {
              throw createCustomError({
                isSerious: 0,
                method: 'koaStatic'
              }, 'ext occued error');
            }
            if (!/^\./.exec(ext)) ext = '.' + ext;
            if (fs.existsSync(path + ext)) {
              path += ext;
              type = ext;
              break;
            }
          }
        }

        try {
          stats = await stat(path);
          if (stats.isDirectory()) {
            if (index) {
              path += '/' + index;
              stats = await stat(path);
            } else {
              return;
            }
          }
        } catch (err) {
          const notfound = ['ENOENT', 'ENAMETOOLONG', 'ENOTDIR'];
          if (notfound.includes(err.code)) return;
          throw createCustomError(err, 'STATICERROR', {
            isSerious: 0,
            method: 'koaStatic',
            path
          }, 'path stat occued error');
        }

        if (setHeaders) setHeaders(ctx.res, path, stats);

        ctx.set('Content-Length', stats.size);

        if (!type) {
          type = extname(basename(path, '.gz'));
        }

        if (type.charAt(0) === '.') {
          type = type.substr(1);
        }

        const mType = mime.getType(type);

        if (!ctx.response.get('Last-Modified')) ctx.set('Last-Modified', stats.mtime.toUTCString());

        if (!ctx.response.get('Cache-Control')) {
          if (opts.cache && typeof opts.cache === 'object') {
            const cacheTypes = Object.keys(opts.cache);
            cacheTypes.every((ctype, index) => {
              if (mType.indexOf(ctype) !== -1) {
                maxage = opts.cache[ctype];
                return false;
              }
              return true;
            });
          } else if (opts.cache && typeof opts.cache === 'number') {
            maxage = opts.cache;
          }
          if (typeof maxage === 'number' && maxage > 0) {
            ctx.set('Cache-Control', 'max-age=' + (maxage / 1000) + ', public');
          }
        }

        fileContent = await readFile(path);

        if ((maxage > 0 && !ctx.response.get('Etag'))) {
          ctx.response.etag = crypto.createHash('md5').update(fileContent).digest('hex');
        }

        done = true;

        cache[path] = {
          type,
          body: fileContent
        };

        ctx.type = type;
        ctx.body = fileContent;
      }
    };

    await send(ctx, opts);

    if (!done) {
      await next();
    }
  };
}
exports.koaStatic = koaStatic;
