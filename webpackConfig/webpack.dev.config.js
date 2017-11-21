const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const createRules = require('./webpack.util').createRules;
const useHot = require('./webpack.util').useHot;
const createExtractCss = require('./webpack.util').createExtractCss;
const extractCommonChunks = require('./webpack.util').extractCommonChunks;
const createHtmlWebpackPlugin = require('./webpack.util').createHtmlWebpackPlugin;
const entryPath = require('../config').entryPath;
const version = require('../config').version;
const cssPath = require('../config').cssPath;
const outputPath = require('../config').outputPath;
const devPublicPath = require('../config').devPublicPath;
const nodeModulesPath = require('../config').nodeModulesPath;
const createWebpackBaseConfig = require('./webpack.common.config');
/* eslint max-len: ["error", 200] */
/* eslint no-param-reassign: 0 */
const env = 'development';
let commonsChunkTemplate;
let htmlWebpackPluginTemplate = {};
const baseConfigTemplate = createWebpackBaseConfig();

//if you do not extract css text into .css file, the ssr will cause
//page flash. because, the entry script will inject style tag into
//page head after backend return htmlstring(because style-loader)
const extractCSS = createExtractCss({
  filename: `${cssPath}/[name].css`,
  allChunks: true,
  publicPath: devPublicPath
});

const cssDevRule = createRules({
  test: 'css',
  use: [{
    loader: require.resolve('css-loader'),
    options: {
      modules: true,
      importLoaders: 1,
      localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
    }
  }]
}, extractCSS, env);

exports.createWebpackdevConfig = (ownDevConfig, useDevServer, hotEntry, options = {}) => {
  if (typeof ownDevConfig === 'function') {
    ownDevConfig = ownDevConfig();
  }
  if (toString.call(ownDevConfig) !== '[object Object]') {
    throw new Error('ownDevConfig must be function or object');
  }
  const devConfigTemplate = {
    devtool: 'cheap-module-source-map',
    entry: {
      index: [
        require.resolve('./client.polyfills'),
        entryPath
      ]
    }, // entry chunk
    output: {
      path: `${outputPath}`,
      pathinfo: true,
      filename: `${version}/dist/js/[name].js`, // when webpack-dev-server with hot flag(--hot cli), you can not use [chunkhash] ,but you can use [hash]
      chunkFilename: `${version}/dist/js/[id].js`, // put another word , dont use hash in development environment, because it may make memeory leak
      publicPath: devPublicPath
    },
    plugins: [
      extractCSS,
      new webpack.NamedModulesPlugin(),
      new CaseSensitivePathsPlugin(),
      new WatchMissingNodeModulesPlugin(nodeModulesPath),
      new FriendlyErrorsWebpackPlugin()
    ],
    node: {
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty'
    },
    performance: {
      hints: false
    }
  };

  if (options.vendors) extractCommonChunks(devConfigTemplate, options.vendors, options.extractWebpackRuntime);

  if (options.htmlWebpackPluginConfig) {
    htmlWebpackPluginTemplate = createHtmlWebpackPlugin(options.htmlWebpackPluginConfig);
  }

  if (useDevServer) {
    devConfigTemplate.devServer = useDevServer;
    devConfigTemplate.devServer.publicPath = devConfigTemplate.output.publicPath;
    devConfigTemplate.devServer.hot = useHot(hotEntry);
  }

  if (useHot(hotEntry)) {
    if (!useDevServer) {
      devConfigTemplate.entry.index.unshift(require.resolve('./dev-client'));
    }
    const hmre = new webpack.HotModuleReplacementPlugin();
    devConfigTemplate.plugins.push(hmre);
  }

  return merge(devConfigTemplate, baseConfigTemplate, cssDevRule, htmlWebpackPluginTemplate, (ownDevConfig || {}));
};
