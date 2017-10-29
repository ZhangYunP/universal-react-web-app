const { middlewarePath } = require('../../config');
const loadOwnModules = require('../../libraries/loadOwnModules');

const middleware = {};

loadOwnModules(middlewarePath, middleware);

module.exports = middleware;
