// const Sequelize = require('sequelize');
//
// const sequelize = new Sequelize('sr', 'root', 'aaaaaa', {
//   host: 'localhost',
//   dialect: 'mysql',
//   pool: {
//     max: 10,
//     min: 0,
//     idle: 1000
//   }
// });
//
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('connect success');
//   })
//   .catch(e => {
//     console.log(e);
//   });
// require('babel-register');
// console.log(process.env.npm_config_islocal);
// var a = {
//   regexp: function(){
//     console.log('fasfas');
//   }
// };
// console.log(JSON.parse(JSON.stringify(a)));
// const { createpkp } = require('./libraries/vendor');
// const { crtDir, crtName } = require('./config');
// const mainpkp = createpkp(crtName, crtDir);
// console.log(mainpkp);
// const mysql = require('mysql2');
// const createDB = require('./libraries/mysqlHelper').default;
// // const closePool = require('./libraries/mysqlHelper').closePool;
// const { dbhost, dbname, dbuser, dbpwd, dbport, dbconnlimit } = require('./config');
// // const pool = createDB({ dbhost, dbname, dbuser, dbpwd, dbport, dbconnlimit });
// const master_settings = {
//     user       : dbuser,
//     host       : '127.0.0.1',
//     password   : dbpwd,
//     database   : dbname,
//     port : 3306
// };
// const slave_settings = {
//     user       : dbuser,
//     host       : '127.0.0.1',
//     password   : dbpwd,
//     database   : dbname,
//     port : 3307
// };
//
// const poolcluster = mysql.createPoolCluster()
// poolcluster.add('master', master_settings);
// poolcluster.add('slave', slave_settings);
// pool.insert({
//   id: 1,
//   name: 'zhangsan'
// }, 'demo').then(id => {
//   console.log(id);
// });
// pool.fetchData('*', 'demo', { id: 1 }).then(res => {
//   console.log(res);
//   setTimeout(() => {
//     closePool();
//   }, 3000);
// }).catch(e => {
//   console.log(e);
// });
// poolcluster.getConnection('slave', (err, connection) => {
//   if(err) {
//     console.log(err);
//   }
//   connection.query('select * from demo where id = 1', (err, results) => {
//     if(err) {
//       console.log(err)
//     }
//     console.log(results)
//   })
// })
// require('babel-register');
// // const rapnode = require('rap-node-plugin');
// const koa = require('koa');
// const { mock } = require('./server/middleware/mock/koa-mock');
// const mockOptions = require('./config').mockOptions;
// // global.RAP_FLAG = true;
// // rapnode.config(mockOptions.RAP_CONFIG);
// // rapnode.getRapData({
// //   url: '/v1/b',
// //   rap: true
// // }, () => {
// //   return {
// //     a: 1,
// //     b: 2
// //   };
// // }, (err, res) => {
// //   if (err) console.log(err);
// //   console.log(res);
// // });
// const app = new koa();
// app.use(mock(mockOptions));
// app.listen('3030', () => {
//   console.log('server listen on 3030');
// });
// require('babel-register')
// const entryPath = require('./config').entryPath;
// const Koa = require('koa')
// const locale = require('koa-locale') //  detect the locale
// const views = require('koa-views')   //  swig render
// const i18n = require('koa-i18n');
// const Router = require('koa-router');
// const koaStatic = require('./server/middleware/staticserver/koa-simple-static').koaStatic;
// const path = require('path')
// const app = new Koa()
// const router = new Router()
// const viewsPath = path.join(__dirname, 'views/src')
// const localePath = path.join(__dirname, 'locales')
// const publicPath = path.join(__dirname, 'public/src')
// // Required!
// locale(app)
//
//
// app.use(views(viewsPath, {
//   extension: 'pug'
// }));
// app.use(koaStatic({
//   root: publicPath
// }))
//
// //
// app.use(i18n(app, {
//   directory: localePath,
//   locales: ['zh-CN', 'en'], //  `zh-CN` defualtLocale, must match the locales to the filenames
//   modes: [
//     'query',                //  optional detect querystring - `/?locale=en-US`
//     'subdomain',            //  optional detect subdomain   - `zh-CN.koajs.com`
//     'cookie',               //  optional detect cookie      - `Cookie: locale=zh-TW`
//     'header',               //  optional detect header      - `Accept-Language: zh-CN,zh;q=0.5`
//     'url',                  //  optional detect url         - `/en`
//     'tld',                  //  optional detect tld(the last domain) - `koajs.cn`
//     function() {}           //  optional custom function (will be bound to the koa context)
//   ]
// }))
//
// // app.use(function (ctx) {
// //   ctx.body = ctx.i18n.__('locales.en');
// // })
//
// router.get('/', async (ctx, next) => {
//   await ctx.render('a')
// })
//
// router.get('/en', async (ctx, next) => {
// await ctx.render('a')
// })
//
// app.use(router.routes(), router.allowedMethods())
//
// app.listen(3030, () => {
//   console.log('server listen on 3030');
// })
// const serve = require('./server/middleware/staticserver');
// const Koa = require('koa');
// const fs = require('fs');
// const app = new Koa();
// const Router = require('koa-router');
// const router = new Router();
// // or use absolute paths
// app.use(serve({root: __dirname + '/public', cache: 1110000} ));
// router.get('/', ctx => {
//   ctx.type = 'html';
//   ctx.body = fs.readFileSync('./a.html');
// });
// app.use(router.routes(), router.allowedMethods());
// app.listen(3000);

// console.log('listening on port 3000');
/* eslint  no-cond-assign: 0 */
function upperCase(name, joiner = '_', ignore = '/') {
  let result = '';
  let upper;
  for (let char of name) {
    upper = char.toUpperCase();
    if (upper === char && char !== ignore) {
      char = joiner + char;
    } else {
      char = upper;
    }
    result += char;
  }
  return result;
}

console.log(upperCase('abc/casc/cdaEcv'));
