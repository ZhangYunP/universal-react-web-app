const fs = require('fs');
const path = require('path');
const rapnode = require('rap-node-plugin');
const pathToRegExp = require('path-to-regexp');
const { createCustomError } = require('../../../libraries/errorFactory');

let localMock;

const exist = fs.existsSync(path.join(__dirname, 'local.js'));
if (exist) {
  localMock = require('./local').default;
}

function getRapData(url, rap = true, localFn = () => {}) {
  return new Promise((reslove, reject) => {
    rapnode.getRapData({
      url,
      rap
    }, localFn, (err, res) => {
      if (err) {
        reject(err);
      }
      reslove(res);
    });
  });
}

function mock(options) {
  return async (ctx, next) => {
    global.RAP_FLAG = options.USE_RAP;
    rapnode.config(options.RAP_CONFIG);
    const pathRE = pathToRegExp(options.MOCK_PATH);
    const currentPath = ctx.path;
    const method = ctx.method.toLowerCase();
    let matchedLocal = false;
    if (localMock) {
      for (let local of localMock) {
        if (currentPath === local.path && method === local.method) {
          matchedLocal = local.mockdata;
          break;
        }
      }
    }
    if (!matchedLocal) {
      if (currentPath.match(pathRE)) {
        try {
          const res = await getRapData(currentPath);
          ctx.type = 'application/json';
          ctx.body = res;
        } catch (e) {
          throw createCustomError(e, 'MOCKERROR', { isSerious: 0, method: 'mock' }, 'request mock data occued error');
        }
      } else {
        await next();
      }
    } else {
      try {
        const res = await getRapData(currentPath, false, () => {
          return matchedLocal;
        });
        ctx.type = 'application/json';
        ctx.body = res;
      } catch (e) {
        throw createCustomError(e, 'MOCKERROR', { isSerious: 0, method: 'mock' }, 'return local mock data occued error');
      }
    }
  };
}
exports.mock = mock;
