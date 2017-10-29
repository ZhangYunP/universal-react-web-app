const Router = require('koa-router');

const aroute = new Router();

aroute.get('/a', ctx => {
  ctx.body = {
    foo: 'bar'
  };
});

module.exports = aroute;
