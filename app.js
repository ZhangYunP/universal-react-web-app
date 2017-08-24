import fs from 'fs';
import Koa from 'koa';
import zlib from 'zlib';
import Router from 'koa-router';
import koaBody from 'koa-body';
import session from 'koa-session';
import staticServ from 'koa-static';
import compress from 'koa-compress';
import {port, publicDir, appKey} from './config';
import middleWare from './server/middleware/index';

const app = new Koa();
const router = new Router();
const csrf = middleWare.csrf;
app.keys = appKey;
app.use(staticServ(publicDir))
app.use(session(app, {}));
//利用koabody这个中间件，我们可以在ctx.request.body这个对象中拿到想要的结果，返回结果如下:
//{fields: {fieldName: fieldValue......}, files: {fileFieldName: {size: fileSize, name: fileName, type: fileMimeType.....}}}
app.use(koaBody({
  multipart: true, //支持对enctype=multipart/form-data格式的表单解析
  formidable: {
    maxFieldsSize: 3*1024*1024,
    uploadDir: './',
    keepExtensions: true,
    //multiples: true, 默认支持多文件上传
  }
}));
app.use(csrf({httpOnly: false}, app));
app.use(compress({
  filter : function(contentType) {
    return /(image|text|video)/i.test(contentType)
  },
  threshold : 20 * 1024,
  flush: zlib.Z_SYNC_FLUSH
}))
router.post('/', (ctx) => {
  ctx.body = `post success! \nrequest body is ${JSON.stringify(ctx.request.body)}`;
});
router.get('/', (ctx) => {
  ctx.type = 'text/html';
  ctx.body = fs.readFileSync(__dirname + '/index.html');
});
router.get('/index', (ctx) => {
    ctx.type = 'text/html';
    ctx.body = fs.readFileSync(__dirname + '/index.html');
})
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
