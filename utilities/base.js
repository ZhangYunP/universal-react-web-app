function isArray(arr) {
  if (!arr) {
    throw new Error('isArray lack arguments');
  }
  if (Array.isArray) {
    return Array.isArray(arr);
  }
  return Object.prototype.toString.call(arr) === '[object Array]';
}

function isObject(obj) {
  if (!obj) {
    throw new Error('isObject lack arguments');
  }
  return Object.prototype.toString.call(obj) === '[object Object]';
}

function ObjectKey(obj) {
  if (!obj) {
    throw new Error('ObjectKey lack arguments');
  }
  if (isObject(obj)) {
    let result = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push(key);
      }
    }
    return result;
  }
}
module.exports = {
  isArray,
  isObject,
  ObjectKey
};
