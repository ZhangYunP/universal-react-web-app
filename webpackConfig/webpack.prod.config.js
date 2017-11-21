const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const InlineChunkManifestHtmlWebpackPlugin = require('inline-chunk-manifest-html-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const createRules = require('./webpack.util').createRules;
const createExtractCss = require('./webpack.util').createExtractCss;
const getCustomEnv = require('./webpack.util').getCustomEnv;
const extractCommonChunks = require('./webpack.util').extractCommonChunks;
const createHtmlWebpackPlugin = require('./webpack.util').createHtmlWebpackPlugin;
const entryPath = require('../config').entryPath;
const outputPath = require('../config').outputPath;
const publicPath = require('../config').publicPath;
const publicUrl = require('../config').publicUrl;
const postcssPath = require('../config').postcssPath;
const cssPath = require('../config').cssPath;
const shouldUseSourceMap = require('../config').shouldUseSourceMap;
const createWebpackBaseConfig = require('./webpack.common.config');
/* eslint max-len: ["error", 200] */
const nodeEnv = 'production';

const baseConfigTemplate = createWebpackBaseConfig({}, publicUrl);

const htmlWebpackPluginTemplate = createHtmlWebpackPlugin({
  htmlConfig: {
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true
    },
    chunksSortMode: 'dependency'
  }
});

const extractCSS = createExtractCss({
  filename: `${cssPath}/[name].[contenthash:8].css`,
  allChunks: true,
  publicPath
});

const cssProdRule = createRules({
  test: 'css',
  use: [
    {
      loader: require.resolve('css-loader'),
      options: {
        modules: true,
        importLoaders: 1,
        localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
        sourceMap: shouldUseSourceMap
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: postcssPath
        }
      }
    }
  ]
}, extractCSS);

exports.createWebpackprodConfig = (ownProdConfig, options) => {
  const prodConfigTemplate = {
    bail: true,
    devtool: shouldUseSourceMap ? 'source-map' : false,
    entry: {
      index: [
        require.resolve('./client.polyfills'),
        entryPath
      ]
    },
    output: {
      path: outputPath,
      filename: '[name].[chunkhash].js',
      chunkFilename: '[id].[chunkhash].js',
      publicPath,
      devtoolModuleFilenameTemplate: 'webpack'
    },
    plugins: [
      new webpack.HashedModuleIdsPlugin(), // keep module id stable ,enforce NamedModulesPlugin
      new webpack.optimize.ModuleConcatenationPlugin(), // webpack3.0, Scope Hoisting
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.IgnorePlugin(/caniuse-lite\/data\/regions/), // postcss
      extractCSS,
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          safe: true
        }
      }),
      new UglifyJSPlugin({
        compress: {
          warnings: false,
          comparisons: false
        },
        output: {
          comments: false,
          ascii_only: true
        },
        sourceMap: shouldUseSourceMap
      }),
      new SWPrecacheWebpackPlugin({
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'service-worker.js',
        logger(message) {
          if (message.indexOf('Total precache size is') === 0) {
            return;
          }
          if (message.indexOf('Skipping static resource') === 0) {
            return;
          }
          console.log(message);
        },
        minify: true,
        navigateFallback: publicUrl + '/index.html',
        navigateFallbackWhitelist: [/^(?!\/__).*/],
        staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
      })
    ]
  };
  if (options.vendors) extractCommonChunks(prodConfigTemplate, options.vendors);

  return merge(prodConfigTemplate, baseConfigTemplate, htmlWebpackPluginTemplate, cssProdRule, (ownProdConfig || {}));
};
