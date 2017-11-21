const createWebpackdevConfig = require('./webpack.dev.config').createWebpackdevConfig;
const createWebpackprodConfig = require('./webpack.prod.config').createWebpackprodConfig;
const vendors = require('../config').webpackVendors;
const htmlWebpackPluginConfig = require('../config').htmlWebpackPluginConfig;
const extractWebpackRuntime = require('../config').extractWebpackRuntime;
/* eslint max-len: ["error", 200] */
let webpackConfig;
const env = process.env.NODE_ENV || 'development';
const useLocal = process.env.npm_config_islocal || false;

if (env === 'development') {
  if (useLocal) {
    const {
      ownDevConfig,
      vendors,
      useDevServer,
      hotEntry,
      extractWebpackRuntime,
      htmlWebpackPluginConfig
    } = require('./webpack.local.config');
    webpackConfig = createWebpackdevConfig(ownDevConfig, useDevServer, hotEntry, {
      vendors,
      extractWebpackRuntime,
      htmlWebpackPluginConfig
    });
  } else {
    webpackConfig = createWebpackdevConfig({}, false, true, {
      vendors,
      extractWebpackRuntime,
      htmlWebpackPluginConfig
    });
  }
} else {
  if (useLocal) {
    const localConfig = require('./webpack.local.config');
    webpackConfig = localConfig;
  } else {
    webpackConfig = createWebpackprodConfig({}, { vendors });
  }
}

module.exports = webpackConfig;
