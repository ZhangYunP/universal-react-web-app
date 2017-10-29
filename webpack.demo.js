const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
/* eslint no-template-curly-in-string: 0 */
/* eslint no-useless-escape: 0 */
/* eslint max-len: 0 */
module.exports = {
  entry: {
    index: path.join(__dirname, 'a.js')
  },
  output: {
    path: __dirname,
    filename: 'b.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '!!html-loader!./index.marko'
    })
  ]
};
