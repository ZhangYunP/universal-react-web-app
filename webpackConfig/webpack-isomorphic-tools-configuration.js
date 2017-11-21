const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const webpackAssetsPath = require('../config').webpackAssetsPath;

module.exports = 
{
  webpack_assets_file_path: webpackAssetsPath,
  // verbosity: 'no webpack stats',
  assets:
  {
    images:
    {
      extensions: ['png', 'jpg', 'gif', 'ico', 'jpeg']
    },
    fonts:
    {
      extensions: ['ttf', 'eot', 'woff', 'woff2']
    },
    media:
    {
      extensions: ['mp4', 'webm', 'ogg', 'mp3', 'wav', 'flac', 'acc']
    }
  }
}