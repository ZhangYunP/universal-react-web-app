const yargs = require('yargs');
const Router = require('koa-router');
const { proxy } = require('../../middleware/proxy/koa-http-proxy');
const { indexPage } = require('../../../config');
const { serverRender } = require('../../middleware/serverrender/koa-ssr');

const rootRouter = new Router();
const isssl = yargs.argv.isssl;
const fe = yargs.argv.ferender;

function rootApi(options) {
  if (fe) {
    rootRouter.get('/', async (ctx, next) => {
      if (isssl) {
        if (ctx.protocol === 'http') {
          ctx.status = 301;
          ctx.redirect(`${ctx.protocol}s://${ctx.hostname}:443`);
        }
      }
      await next();
    }, proxy({
      to: indexPage,
      isssl
    }));
  } else {
    rootRouter.get('/', async (ctx, next) => {
      if (isssl) {
        if (ctx.protocol === 'http') {
          ctx.status = 301;
          ctx.redirect(`${ctx.protocol}s://${ctx.hostname}:443`);
        }
      }
      await next();
    }, serverRender(options.template));
  }
  return rootRouter;
}

module.exports = rootApi;// 通过require调用，需要exports对象
