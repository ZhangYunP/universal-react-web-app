const webpack = require('webpack');
const { PassThrough } = require('stream');
const compose = require('koa-compose');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const installRouter = require('../../core/installRouter');
const webpackConfig = require('../../../webpackConfig/webpack.config');
const { createCustomError } = require('../../../libraries/errorFactory');

const koaDevMiddleware = (compiler, opts) => {
  const expressMiddleware = devMiddleware(compiler, opts);

  async function middleware (ctx, next) {
    await expressMiddleware(ctx.req, {
      end: (content) => {
        ctx.body = content;
      },
      setHeader: (name, value) => {
        ctx.set(name, value);
      }
    }, next);
  }

  middleware.getFilenameFromUrl = expressMiddleware.getFilenameFromUrl;
  middleware.waitUntilValid = expressMiddleware.waitUntilValid;
  middleware.invalidate = expressMiddleware.invalidate;
  middleware.close = expressMiddleware.close;
  middleware.fileSystem = expressMiddleware.fileSystem;

  return middleware;
}

const koaHotMiddleware = (compiler, opts) => {
  const expressMiddleware = hotMiddleware(compiler, opts);

  async function middleware (ctx, next) {
    let stream = new PassThrough();
    ctx.body = stream;
    await expressMiddleware(ctx.req, {
      write: stream.write.bind(stream),
      writeHead: (status, headers) => {
        ctx.status = status;
        ctx.set(headers);
      }
    }, next);
  }

  middleware.publish = expressMiddleware.publish;

  return middleware;
}

function koaDevServer(app, router, dbOperationCollection) {
  try {
    var compiler = webpack(webpackConfig);
  } catch (e) {
    throw createCustomError(e, 'COMPILERERROR', { isSerious: 1, method: 'webpack' }, 'webpack compile occued error');
  }

  const dev = koaDevMiddleware(compiler, {
    noInfo: false,// show webpack stats in console
    publicPath: webpackConfig.output.publicPath
  });

  const hot = koaHotMiddleware(compiler, {
    heartbeat: 3000
  });

  dev.waitUntilValid(() => {
    installRouter(app, router, dbOperationCollection);
  });

  // compiler.plugin('compilation', function (compilation) {
  //   compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
  //     hot.publish({ action: 'reload' })
  //     cb()
  //   })
  // });

  return compose([dev, hot]);
}

exports.koaDevServer = koaDevServer;
