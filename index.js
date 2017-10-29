// require('babel-polyfill');
// include regenerator runtime and core-js
// if you use babel-preset-env and you can set useBuiltIns to be true, install babel-polyfill...
require('babel-register');
// a require hook, compile .js .jsx .es6, .es(notice: do not set modules to be false in .babelrc)
require('./app.js');
// back end entry
