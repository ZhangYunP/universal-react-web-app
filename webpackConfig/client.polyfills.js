// global entry add 'babel-polyfill' or .babelrc plugins add 'transfrom-runtime' option
if (typeof Promise === 'undefined') {
  window.Promise = require('promise/lib/es6-extensions.js');
}

if (typeof Set === 'undefined') {
  window.Map = require('core-js/es6/map');
  window.Set = require('core-js/es6/set');
}

require('isomorphic-fetch');

Object.assign = require('object-assign');
