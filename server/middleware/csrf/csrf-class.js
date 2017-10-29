const crypto = require('crypto');

class Csrf {
  constructor(opts) {
    this.opts = opts;
    this.secret = this.opts.secret;
    this.isNew = true;
  }

  createCsrf() {
    const uuid = this.opts.genid();
    const expire = Date.now() + this.opts.maxAge;
    const data = this.base64Encode({uuid, expire});
    const sign = crypto.createHmac('md5', this.secret).update(data, 'base64').digest('base64');
    return `${data}-${sign}`;
  }

  verifiy(ctx) {
  const key = this.opts.fieldKey;
  const clientCsrf = ctx.request.body[key] || ctx.request.body.fields[key] || ctx.headers[key];
  const csrfArr = clientCsrf.split('-');
  const data = csrfArr[0];
  const sign = csrfArr[1];
  if(this.base64Decode(data).expire && this.base64Decode(data).expire < Date.now()) return false;
  const calSign =  crypto.createHmac('md5', this.secret).update(data, 'base64').digest('base64');
  if(calSign === sign) return true;
  return false;
  }

  base64Encode(obj) {
    const jsonstr = JSON.stringify(obj);
    return Buffer.from(jsonstr).toString('base64');
  }

  base64Decode(str) {
    const jsonstr = Buffer.from(str, 'base64').toString();
    return JSON.parse(jsonstr);
  }

}
module.exports = Csrf;
