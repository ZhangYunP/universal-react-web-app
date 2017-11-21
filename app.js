const WebpackIsomorphicTools = require('webpack-isomorphic-tools');

const projectBasePath = require('./config').projectBasePath;

const webpackIsomorphicToolsConfig = require('./webpackConfig/webpack-isomorphic-tools-configuration');

global.webpackIsomorphicTools = new WebpackIsomorphicTools(webpackIsomorphicToolsConfig)
.server(projectBasePath, function() {
  // this is back end server entry
  require('./serverStart');
});
