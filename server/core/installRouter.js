const apiCreator = require('../api');
const viewsTemplate = require('../../config').viewsTemplate;
const { createCustomError } = require('../../libraries/errorFactory');
/* eslint max-len: 0 */
function installRouter(app, router, dbOperationCollection) {
  if (!app || !router) {
     throw createCustomError(new Error(), 'ROUTERERROR', { isSerious: 1, method: 'installRouter' }, 'install router occued error');  
  }

  const template = require(viewsTemplate);

  const apiRouter = apiCreator({
    dbOperationCollection,
    template
  });

  router.use(apiRouter.routes(), apiRouter.allowedMethods());

  app.use(router.routes(), router.allowedMethods());
}

module.exports = installRouter;
