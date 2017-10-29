const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const InlineChunkManifestHtmlWebpackPlugin = require('inline-chunk-manifest-html-webpack-plugin');
// const HtmlWebpackPugPlugin = require('../utilities/html-webpack-pug-plugin');
const templateDiskPath = require('../config').templateDiskPath;
const templateInject = require('../config').templateInject;
const useLocal = process.env.npm_config_islocal || false;
/* eslint max-len: ["error", 200] */
const prefix = /^UNIVERSAL_REACT_WEB_APP_/i;

exports.webpackMap = {
  css: /\.css(\?(.*?))?$/,
  less: /\.less(\?(.*?))?$/,
  sass: /\.sass(\?(.*?))?$/,
  scss: /\.scss(\?(.*?))?$/,
  script: /\.(js|jsx)(\?(.*?))?$/,
  font: /\.(ttf|eot|woff|woff2)(\?(.*?))?$/,
  img: /\.(png|jpe?g|gif|webp|bmp)(\?(.*?))?$/,
  media: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
  svg: /\.svg(\?(.*?))?$/
};

exports.createLoader = (options = {}, extractCSS) => {
  if (typeof options.test === 'string') options.test = exports.webpackMap[options.test];
  if (!(options.test instanceof RegExp)) throw new Error('test must be RegExp');
  if (!options.use) throw new Error('use must be exists');
  if (!Array.isArray(options.use)) options.use = [options.use];
  if (options.test.test('.css') || options.test.test('.less') || options.test.test('.sass') || options.test.test('.scss')) {
    if (extractCSS) {
      const extractLoader = {
        use: options.use,
        fallback: 'style-loader'
      };
      options.use = extractCSS.extract(extractLoader);
    }
  }
  return ({
    module: {
      rules: [options]
    }
  });
};

exports.createExtractCss = (filename, env = 'development') => {
  const extractCSS = new ExtractTextPlugin({
    filename,
    disable: env === 'development',
    allChunks: true
  });
  return extractCSS;
};

exports.generateSourceMaps = ({ type }) => ({ devtool: type });

exports.getCustomEnv = (publicUrl) => {
  const raw = Object.keys(process.env)
    .filter(key => prefix.test(key))
    .reduce((env, key) => {
      env[key] = process.env[key];
      return env;
    }, {
      NODE_ENV: process.env.NODE_ENV || 'development',
      PUBLIC_URL: publicUrl
    });
  const stringified = {
    'process.env': Object.keys(raw)
      .reduce((env, key) => {
        env[key] = JSON.stringify(raw[key]);
        return env;
      }, {})
  };
  return { raw, stringified };
};

exports.createHtmlWebpackPlugin = (options = {
  htmlConfig: {},
  scriptsConfig: {},
  preloadConfig: {},
  diskConfig: {}
}, env = 'development') => {
  const htmlPlugins = [];
  const htmlConfig = Object.assign({
    inject: templateInject,
    alwaysWriteToDisk: (env === 'development' && useLocal),
    showErrors: env === 'development'
  }, options.htmlConfig);

  const scriptsConfig = options.scriptsConfig;

  const preloadConfig = options.preloadConfig;

  const webpackhtmlplugin = new HtmlWebpackPlugin(htmlConfig);
  const scriptexthtmlplugin = new ScriptExtHtmlWebpackPlugin(scriptsConfig);
  const preloadwebpackplugin = new PreloadWebpackPlugin(preloadConfig);

  htmlPlugins.push(webpackhtmlplugin, scriptexthtmlplugin, preloadwebpackplugin);

  if (env === 'development' && useLocal) {
    const diskConfig = Object.assign({
      outputPath: templateDiskPath
    }, options.diskConfig);

    const htmltodiskplugin = new HtmlWebpackHarddiskPlugin(diskConfig);

    htmlPlugins.push(htmltodiskplugin);
  }

  return {
    plugins: htmlPlugins
  };
};

// exports.createPugWebpackPlugin = (options) => {
//   const htmlwebpackpluginconfig = options.htmlConfig || {
//     template: process.env.TEMP_PATH || 'index.html',
//     inject: true
//   };
//   const webpackhtmlplugin = new HtmlWebpackPlugin(htmlwebpackpluginconfig);
//   const pugwebpackpluginconfig = options.pugConfig || {};
//   const pugext = new HtmlWebpackPugPlugin(pugwebpackpluginconfig);
//   return {
//     plugins: [
//       webpackhtmlplugin,
//       pugext
//     ]
//   };
// };

exports.extractCommonChunks = (config, vendors, extractWebpackRuntime) => {
  let commonsChunkPlugin;
  const chunkPlugins = [];

  if (Array.isArray(vendors)) {
    config.entry.vendor = vendors;
    commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context &&
        module.context.indexOf('node_modules') !== -1;
      }
    });
  } else if (toString.call(vendors) === '[object Object]') {
    const chunksName = [];
    Object.keys(vendors).forEach((v) => {
      config.entry[v] = Array.isArray(vendors[v]) ? vendors[v] : [vendors[v]];
      chunksName.push(v);
    });
    commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
      names: chunksName,
      minChunks: function (module) {
        return module.context &&
        module.context.indexOf('node_modules') !== -1; // module.context is module path
      }
    });
  } else {
    return;
  }

  chunkPlugins.push(commonsChunkPlugin);

  if (extractWebpackRuntime) {
    const mainfestPlugin = new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    });

    switch (extractWebpackRuntime) {
      case 'file':
        chunkPlugins.push(mainfestPlugin);
        break;
      case 'inline': {
        const inlineChunkMainfestPlugin = new InlineChunkManifestHtmlWebpackPlugin();
        chunkPlugins.push(mainfestPlugin, inlineChunkMainfestPlugin);
        break;
      }
      default:
        break;
    }
  }

  config.plugins.push(...chunkPlugins);
};

exports.useHot = function (hotEntry) {
  if (Array.isArray(hotEntry)) {
    if (hotEntry[0] && typeof hotEntry[0] === 'string' && hotEntry.length > 0) return true;
    return false;
  } else if (typeof hotEntry === 'boolean') {
    return hotEntry;
  }
  return false;
};
