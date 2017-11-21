const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
const createRules = require('./webpack.util').createRules;
const getCustomEnv = require('./webpack.util').getCustomEnv;
const createHappyPlugin = require('./webpack.util').createHappyPlugin;
const fontsPath = require('../config').fontsPath;
const imagesPath = require('../config').imagesPath;
const mediaPath = require('../config').mediaPath;
const nodeModulesPath = require('../config').nodeModulesPath;
/* eslint max-len: ["error", 200] */
const env = process.env.NODE_ENV || 'development';

let webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools-configuration'));
// disable asset cache, make asset can hot reload
if (env === 'development') webpackIsomorphicToolsPlugin = webpackIsomorphicToolsPlugin.development();
  
const createWebpackBaseConfig = (extraOptions = {}, publicUrl = '') => {
  const env = getCustomEnv(publicUrl);
  const jsPreRule = createRules({
    test: 'script',
    enforce: 'pre',
    use: [
      {
        loader: require.resolve('eslint-loader'),
        options: {
          formatter: eslintFormatter,
          eslintPath: require.resolve('eslint')
        }
      }
    ]
  });

  const jsRule = createRules({
    test: 'script',
    exclude: /node_modules/,
    use: ['happypack/loader?id=js']
  });

  const jsLoader =  {
    loader: require.resolve('babel-loader'),
    options: {
      cacheDirectory: true,
      babelrc: false,
      presets: [['env', {
        targets: {
          browsers: ['last 2 versions', 'ie >= 8'] // browserlist, react 15 do not support ie 8
        },
        loose: true,
        modules: false // webpack can add tree shaking tag
      }], 'react', 'stage-2'],
      plugins: ['syntax-dynamic-import', ['react-css-modules', {
        handleMissingStyleName: 'ignore' // babel-plugin-react-css-modules is fast
        // and you can use it like css modules
      }], 'transform-runtime'],
      env: {
        development: {
          plugins: [
            'react-hot-loader/babel'
          ]
        }
      }
    }
  }

  const fontRule = createRules({
    test: webpackIsomorphicToolsPlugin.regularExpression('fonts'),
    use: [
      {
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: path.join(fontsPath, '[name].[hash:10].[ext]')
        }
      }
    ]
  });

  const imageRule = createRules({
    test: webpackIsomorphicToolsPlugin.regularExpression('images'),
    use: [
      {
        loader: require.resolve('file-loader'),
        options: {
          limit: 10000,
          name: path.join(imagesPath, '[name].[hash:10].[ext]')
        }
      }
    ]
  });

  const mediaRule = createRules({
    test: webpackIsomorphicToolsPlugin.regularExpression('media'),
    use: [
      {
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: path.join(mediaPath, '[name].[hash:10].[ext]')
        }
      }
    ]
  });

  const commonConfig = {
    stats: 'errors-only',
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      modules: ['node_modules', nodeModulesPath]
    },
    plugins: [
      new webpack.DefinePlugin(env.stringified),
      createHappyPlugin('js', [jsLoader]),
      webpackIsomorphicToolsPlugin
    ],
    module: {
      strictExportPresence: true
    }
  };

  const webpackBaseConfig = merge(
    jsPreRule,
    jsRule,
    fontRule,
    imageRule,
    mediaRule,
    commonConfig,
    extraOptions
  );

  return webpackBaseConfig;
};

module.exports = createWebpackBaseConfig;
