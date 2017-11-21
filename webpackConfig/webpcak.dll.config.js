const webpack = require('webpack');
const path = require('path');
const vendors = require('../config').webpackVendors;

module.exports = {
  entry: toString.call(vendors) === '[object Objectt]' ? vendors : { vendor: vendors },
  output: {
    path: path.resolve('public/src/js'),
    filename: '[name].js',
    library: '[name]_[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: '[name]_[hash]',
      context: __dirname
    })
  ]
};
