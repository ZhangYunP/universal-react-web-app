const templateFile = require('../config').templateFile;

module.exports = {
  ownDevConfig: {},
  useDevServer: {
    inline: true,
    historyApiFallback: {
      index: '/views/'
    }
  },
  hotEntry: ['react-hot-loader/patch'],
  vendors: ['react', 'react-dom', 'react-router', 'react-transition-group'],
  extractWebpackRuntime: 'inline',
  htmlWebpackPluginConfig: {
    htmlConfig: {
      template: `!!html-loader!${templateFile}`
    }
  }
};
