import uuid from 'uuid';
import Csrf from './csrf-class';
import {csrfSercet, csrfExp, csrfCookieKey, csrfFieldKey} from '../../../config';

const CONTEXT_CSRF = Symbol('context_csrf');
const CONTEXT_CSRF_ = Symbol('context_csrf_');

export default function(options, app) {
  let opts = options || {};
  const context = app.context;
  formatOpt(opts);
  warpCtx(context, opts);
  return async function (ctx, next) {
    if(matchedMethod(ctx.method.toLowerCase(), opts)) {
      initToken(ctx, opts);
      await next();
    }else {
      let _csrf = ctx[CONTEXT_CSRF];
      const token = ctx.csrf;
      if(_csrf.isNew) {
        ctx.cookies.set(opts.cookieKey, token, opts);
        _csrf.isNew = false;
      }
      const isValid = _csrf.verifiy(ctx);
      if(isValid) {
        await next();
      } else {
        ctx.body = {
          error : 'request is missing token'
        }
      }
    }
  }
}

function formatOpt(opts) {
  opts.excludeMethods = Array.isArray(opts.exclude) ? opts.exclude : ['get', 'options', 'head'];
  opts.secret =  opts.secret && typeof opts.secret == 'string' ? opts.secret : csrfSercet;
  opts.fieldKey = typeof opts.fieldKey !== 'undefined' ? opts.fieldKey : csrfFieldKey;
  opts.genid = typeof opts.genid == 'function' ? opts.genid : uuid.v4;
  opts.maxAge = typeof opts.maxAge === 'number' ? opts.maxAge : csrfExp;
  opts.cookieKey = encodeURIComponent(csrfCookieKey);
  opts.signed = opts.signed || false;
}

function warpCtx(ctx, opts) {
  Object.defineProperties(ctx, {
    [CONTEXT_CSRF] : {
      get() {
       if(this[CONTEXT_CSRF_]) return this[CONTEXT_CSRF_];
       this[CONTEXT_CSRF_] = new Csrf(opts);
       return this[CONTEXT_CSRF_];
     }
   },
   csrf : {
     get() {
       if(this._csrf) return this._csrf;
       this._csrf = this[CONTEXT_CSRF].createCsrf();
       return this._csrf;
     }
   },
   initFlag : {
     get() {
      return this._initFlag;
     },
     set(val) {
       this._initFlag = val;
     }
   }
  })
}

function initToken(ctx, opts) {
  if(!ctx.initFlag){
    const itoken = new Csrf(opts).createCsrf();
    ctx.cookies.set(opts.cookieKey, itoken, opts);
    ctx.initFlag = true;
  }
}

function matchedMethod(method, opts) {
  if(!~opts.excludeMethods.indexOf(method)) return false;
  return true;
}
