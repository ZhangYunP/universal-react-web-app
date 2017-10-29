const Router = require('koa-router');
const { apiPath } = require('../../config');
const loadOwnModules = require('../../libraries/loadOwnModules');

const apiRouter = new Router();

function apiCreator(options) {
  const dbOperationCollection = options.dbOperationCollection;
  const template = options.template;
  return loadOwnModules(apiPath, apiRouter, { dbOperationCollection, template });
}

module.exports = apiCreator;
