const webpack = require('webpack');
const koaWebpack = require('koa-webpack');
const webpackConfig = require('../../../webpackConfig/webpack.config');

function koaDevServer() {
  const compiler = webpack(webpackConfig);

  const koaWebpackMiddleware = koaWebpack({
    compiler,
    dev: {
      publicPath: webpackConfig.output.publicPath,
      noInfo: true // disable webpack compile info in console
    },
    hot: {
      heartbeat: 3000
    }
  });

  return koaWebpackMiddleware;
}

exports.koaDevServer = koaDevServer;
