const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const createLoader = require('./webpack.util').createLoader;
const getCustomEnv = require('./webpack.util').getCustomEnv;
const fontsPath = require('../config').fontsPath;
const imagesPath = require('../config').imagesPath;
const mediaPath = require('../config').mediaPath;
const nodeModulesPath = require('../config').nodeModulesPath;
/* eslint max-len: ["error", 200] */

const createWebpackBaseConfig = (extraOptions = {}, publicUrl = '') => {
  const env = getCustomEnv(publicUrl);
  const jsPreloader = createLoader({
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

  const jsloader = createLoader({
    test: 'script',
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
          babelrc: false,
          presets: [['env', {
            targets: {
              browsers: ['last 2 versions', 'ie >= 8'] // browserlist, react 15 do not support ie 8
            },
            loose: true,
            modules: false // webpack tree shaking
          }], 'react', 'stage-2'],
          plugins: ['syntax-dynamic-import', ['react-css-modules', {
            handleMissingStyleName: 'ignore'
          }]],
          env: {
            development: {
              plugins: [
                'react-hot-loader/babel'
              ]
            }
          }
        }
      }
    ]
  });

  const fontloader = createLoader({
    test: 'font',
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

  const imageloader = createLoader({
    test: 'img',
    use: [
      {
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: path.join(imagesPath, '[name].[hash:10].[ext]')
        }
      }
    ]
  });

  const medialoader = createLoader({
    test: 'media',
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
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      modules: ['node_modules', nodeModulesPath]
    },
    plugins: [
      new webpack.DefinePlugin(env.stringified)
    ],
    module: {
      strictExportPresence: true
    }
  };

  const webpackBaseConfig = merge(
    jsPreloader,
    jsloader,
    fontloader,
    imageloader,
    medialoader,
    commonConfig,
    extraOptions
  );

  return webpackBaseConfig;
};

module.exports = createWebpackBaseConfig;
