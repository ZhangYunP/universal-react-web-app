const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const HappyPack = require('happypack');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const InlineChunkManifestHtmlWebpackPlugin = require('inline-chunk-manifest-html-webpack-plugin');
const templateDiskPath = require('../config').templateDiskPath;
const templateInject = require('../config').templateInject;
const cssPath = require('../config').cssPath;
const publicPath = require('../config').publicPath;
const useLocal = process.env.npm_config_islocal || false;
/* eslint max-len: ["error", 200] */
const prefix = /^UNIVERSAL_REACT_WEB_APP_/i;
const happyThreadPool = HappyPack.ThreadPool({ size: 4 });

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

exports.createRules = (options = {}, extractCSS, env = 'production') => {
  if (typeof options.test === 'string') options.test = exports.webpackMap[options.test];
  if (!options.use) throw new Error('use must be exists');
  if (!Array.isArray(options.use)) options.use = [options.use];
  if (options.test.test('.css') || options.test.test('.less') || options.test.test('.sass') || options.test.test('.scss')) {
    if (extractCSS) {
      const extractLoader = {
        fallback: 'style-loader',
        use: options.use
      };
      options.use = extractCSS.extract(extractLoader);
      if (env === 'development') {
        options.use = ['css-hot-loader'].concat(options.use); // in development, extracttextplugin
                                                              // can not hot reload style, because
                                                              // css text has be extracted into .css
                                                              // file, so I use css-hot-loader to
                                                              // hot reload css with extracttextplugin
      }
    }
  }
  return ({
    module: {
      rules: [options]
    }
  });
};

exports.createExtractCss = (options) => {
  const extractCSS = new ExtractTextPlugin({
    filename: options.filename || cssPath,
    allChunks: options.allChunks || false,
    // when use commonchunksplugin and these common chunks had extract 
    // css from ExtractTextPlugin.extract, allChunks must be true
    publicPath: options.publicPath || publicPath
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
    alwaysWriteToDisk: env === 'development',
    showErrors: env === 'development'
  }, options.htmlConfig);

  const scriptsConfig = options.scriptsConfig;

  const preloadConfig = options.preloadConfig;

  const webpackhtmlplugin = new HtmlWebpackPlugin(htmlConfig);
  const scriptexthtmlplugin = new ScriptExtHtmlWebpackPlugin(scriptsConfig);
  const preloadwebpackplugin = new PreloadWebpackPlugin(preloadConfig);

  htmlPlugins.push(webpackhtmlplugin, scriptexthtmlplugin, preloadwebpackplugin);

  if (env === 'development') {
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

exports.createHappyPlugin = function(id, loaders) {
  return new HappyPack({
    id: id,
    loaders: loaders,
    threadPool: happyThreadPool,

    // make happy more verbose with HAPPY_VERBOSE=1
    verbose: process.env.HAPPY_VERBOSE === '1',
  });
}
