import { bindActionCreators } from 'redux';
/* eslint no-param-reassign: 0 */
const final = {};
const result = [];
const actionMap = {};
const reducerMap = {};
const moduleName = require('../../package.json').name || '';

/**
 * @param {array} arr
 * @return {array}
 */
function flattenArray(arr) {
  arr.forEach(item => {
    if (Array.isArray(item)) {
      flattenArray(item);
    } else {
      result.push(item);
    }
  });
  return result;
}

/**
 * @param {string} name
 * @param {string} sep
 */
function camelcase(name, sep = '_') {
  return name.split(sep).map((key, i) => {
    if (i === 0) {
      return key.toLowerCase();
    }
    return key.charAt(0) + key.slice(1).toLowerCase();
  }).join('');
}

/**
 * @param {string} name
 * @param {string} joiner
 */
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

/**
 * @param {object} object
 * @param {*} args
 */
function callFuncInObj(object = {}, state, action) {
  const keys = Object.keys(object);
  if (!keys.length) return {};
  return keys.reduce((pureObject, item) => {
    const val = typeof object[item] === 'function'
      ? object[item](state, action)
      : object[item];
    pureObject[item] = val;
    return pureObject;
  }, {});
}

/**
 * @param {function} func
 */
function getFuncName(func) {
  const funcName = func.toString().match(/^function\s+(\w+)\(\).*?/)[1];
  if (funcName) return funcName;
  throw new Error('can not found function name');
}

/**
 * @param {function} flowFunc
 * @param {string} scope
 */
function actionFactory(payloadCreator, type) {
  return (...args) => ({
    type,
    payload: payloadCreator ? payloadCreator(...args) : args
  });
}

/**
 * @param {string} name
 * @param {object} dispatchAction
 * @param {object} initialState
 */
function enforceDispatchBindAction(name, dispatchAction, initialState = {}) {
  if (!name || typeof name !== 'string') {
    throw new Error('the reducer name must be a string');
  }
  const prefix = moduleName + '/' + name;

  if (toString.call(dispatchAction) !== '[object Object]') {
    throw new Error('dispatchAction must be a object');
  }

  Object.keys(dispatchAction).forEach(type => {
    const actionType = upperCase(prefix + '/' + type);
    const dispatchMapper = dispatchAction[type];
    const payloadCreator = dispatchMapper[0];
    const actionCreator = actionFactory(payloadCreator, actionType);
    const extraState = dispatchMapper[1];
    reducerMap[actionType] = (state, action) => {
      const extra = callFuncInObj(extraState, state, action);
      return Object.assign({}, state, action.payload, extra);
    };
    actionMap[type] = actionCreator;
  });

  const ownReducer = (state = initialState, action) => {
    if (!(action.type in reducerMap)) return state;
    return reducerMap[action.type](state, action);
  };

  final.reducer = {
    [name]: ownReducer
  };

  const mapDispatch = exportTypes => {
    if (exportTypes && Array.isArray(exportTypes)) {
      const bindActionMap = exportTypes.reduce((exportsObj, type) => {
        exportsObj[type] = actionMap[type];
        return exportsObj;
      }, {});

      return dispatch => {
        return {
          ...bindActionCreators(bindActionMap, dispatch)
        };
      };
    }
  };

  final.mapDispatch = mapDispatch;

  const mapState = exportStates => {
    if (exportStates && Array.isArray(exportStates)) {
      const bindStateMap = states => {
        return exportStates.reduce((exportsObj, state) => {
          exportsObj[state] = states[name][state];
          return exportsObj;
        }, {});
      };

      return bindStateMap;
    }
  };

  final.mapState = mapState;

  return final;
}

export default enforceDispatchBindAction;
