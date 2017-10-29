const fs = require('fs');
const path = require('path');
const Router = require('koa-router');
const { createCustomError } = require('./errorFactory');
const { printLogger } = require('./vendor');
/* eslint max-len: 0 */
const env = process.env.NODE_ENV || 'development';

function loadOwnModules(dirname, exportsOne = {}, options = {}) {
  if (arguments.length < 2) {
    const argserr = createCustomError('ARGUMENTSERROR', { isSerious: 0, dir: __dirname, method: 'loadOwnModules' }, 'loadOwnModules need 2 arguments');
    throw argserr;
  }
  try {
    const files = fs.readdirSync(dirname);
    files.forEach(file => {
      if (file.indexOf('index.js') === -1 && file.charAt(0) !== '.') {
        const filePath = `${dirname}/${file}`;
        const resolvedModule = require(path.resolve(filePath));
        if (exportsOne instanceof Router) {
          if (env === 'development') {
            printLogger('autoload router file: ' + path.resolve(filePath));
          }
          if (!(resolvedModule instanceof Router) && typeof resolvedModule === 'function') {
            exportsOne.use(resolvedModule(options).routes(), resolvedModule(options).allowedMethods());
          } else {
            exportsOne.use(resolvedModule.routes(), resolvedModule.allowedMethods());
          }
        } else {
          if (env === 'development') {
            printLogger('autoload middleware file: ' + path.resolve(filePath));
          }
          exportsOne[file] = resolvedModule;
        }
      }
    });
    return exportsOne;
  } catch (e) {
    console.log(e);
    const readdirerr = createCustomError(e, 'FILEEERROR', { isSerious: 1, dir: __dirname, method: 'fs.readdirSync' }, 'can not read this dir');
    throw readdirerr;
  }
}

module.exports = loadOwnModules;
