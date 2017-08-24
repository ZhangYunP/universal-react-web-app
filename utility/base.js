export isArray(arr) {
  if(!arr) {
    throw new Error('isArray lack arguments');
    return false;
  }
  if(Array.isArray) {
    return Array.isArray(arr);
  }else {
    return Object.prototype.toString.call(arr) === '[object Array]';
  }
}

export isObject(obj) {
  if(!obj) {
    throw new Error('isObject lack arguments');
    return fales;
  }
  return Object.prototype.toString.call(obj) === '[object Object]';
}

export ObjectKey(obj) {
  if(!obj) {
    throw new Error('ObjectKey lack arguments');
    return false;
  }
  if(isObject(obj)) {
    let result = [];
    for(var key in obj) {
      if(obj.hasOwnProperty(key)) {
        result.push(key);
      }
    }
    return result;
  }
}
