const fs = require('fs');
const path = require('path');
/*
DB config
 */
const dbhost = '127.0.0.1';
const dbname = 'sr';
const dbuser = 'root';
const dbpwd = 'aaaaaa';
const masterPort = 3306;
const slavePort = 3307;
const dbconnlimit = 50;
// exports.poolOptions = {
//   isCluster: true,
//   clusterOption: {},
//   master_setting: {
//     user: dbuser,
//     host: dbhost,
//     password: dbpwd,
//     database: dbname,
//     port: masterPort,
//     connectionLimit: dbconnlimit
//   },
//   slave_settings: {
//     user: dbuser,
//     host: dbhost,
//     password: dbpwd,
//     database: dbname,
//     port: slavePort,
//     connectionLimit: dbconnlimit
//   }
// };
exports.poolOptions = {
  user: dbuser,
  host: dbhost,
  password: dbpwd,
  database: dbname,
  port: masterPort,
  connectionLimit: dbconnlimit
};
/*
permission config
 */

/*
koa config
 */
exports.port = 80;
exports.sslPort = 443; // 监听1024以下端口需要root身份
exports.coookieKey = ['abcdef', 'hijklm'];
exports.publicDir = path.join(__dirname, 'public/');
const certPath = path.join(__dirname, 'ownCert');
const certName = 'servercert.pem';
const keyName = 'serverkey.pem';
const serverKeyPath = path.join(certPath, keyName);
const serverCertPath = path.join(certPath, certName);
const serverKey = fs.readFileSync(`${serverKeyPath}`);
const serverCert = fs.readFileSync(`${serverCertPath}`);
exports.spdyOpts = {
  key: serverKey,
  cert: serverCert,
  spdy: {
    protocols: ['h2', 'spdy/3.1', 'http/1.1'],
    plain: false,
    connection: {
      windowSize: 1024 * 1024,
      autoSpdy31: false
    }
  }
};
exports.apiPath = path.join(__dirname, 'server/api');
exports.middlewarePath = path.join(__dirname, 'server/middleware');
exports.compressType = /(image|text|video|font)/i;
exports.compressThreshold = 20 * 1024;
exports.maxFieldsSize = 3 * 1024 * 1024;
exports.uploadDir = path.join(__dirname, 'upload');
exports.viewsPath = path.join(__dirname, 'views');
exports.viewsTemplate = path.join(exports.viewsPath, 'index.marko');
exports.version = 'v1';
exports.indexPage = 'index.html';
/**
 * webpack config
 */
exports.postcssPath = path.join(__dirname, 'webpackConfig/postcss.config.js');
exports.imagesPath = 'src/images';
exports.fontsPath = 'src/fonts';
exports.mediaPath = 'src/media';
exports.entryPath = path.join(__dirname, 'client/index.js');
exports.devPublicPath = '/';
exports.publicPath = 'localhost';
exports.outputPath = exports.publicDir;
exports.cssPath = 'src/css';
exports.templateFile = path.join(__dirname, 'views/src/index.marko');
exports.templateDiskPath = exports.viewsPath;
exports.templateInject = true;
exports.nodeModulesPath = path.join(__dirname, 'node_modules');
exports.shouldUseSourceMap = true;
exports.hotEntry = [
  'eventsource-polyfill',
  'react-hot-loader/patch',
  'webpack-hot-middleware/client?reload=true'
];
exports.webpackVendors = ['react', 'react-dom', 'react-router', 'react-transition-group'];
exports.extractWebpackRuntime = 'file';
exports.htmlWebpackPluginConfig = {
  htmlConfig: {
    template: `!!html-loader!${exports.templateFile}`,
    filename: exports.viewsTemplate
  },
  scriptsConfig: {
    // preload: /\.js$/,
    defaultAttribute: 'defer'
  },
  preloadConfig: {
    rel: 'preload',
    as(entry) {
      if (/\.css$/.test(entry)) return 'style';
      if (/\.woff$/.test(entry)) return 'font';
      if (/\.png$/.test(entry)) return 'image';
      return 'script';
    },
    include: 'asyncChunks' // ['home'], 'all'
  }
};
/*
csrf config
 */
exports.csrfSercet = ('00000' + Math.floor(Math.random() * 0xFFFFF)).slice(-6);
exports.csrfExp = 24 * 60 * 60 * 1000;
exports.csrfCookieKey = 'csrf_token';
exports.csrfFieldKey = '_csrf';
/**
 * helmet config
 */
exports.pkpMaxage = 7776000;
exports.crtName = 'servercert.pem';
exports.crtDir = certPath;
exports.crtName2 = 'servercert.pem';
exports.crtDir2 = certPath;
exports.cspDirectives = {
  defaultSrc: ["'none'"],
  baseUri: ["'self'"],
  connectSrc: ["'self'", 'wss://localhost', 'https://route.showapi.com/1438-2', 'wss://remotedev.io'],
  formAction: ["'self'"],
  styleSrc: ["'self'", "'unsafe-inline'"],
  scriptSrc: ["'self'", "'unsafe-inline'"],
  frameAncestors: ["'none'"],
  mediaSrc: ["'self'"],
  imgSrc: ["'self'", 'data:'],
  childSrc: ["'none'"],
  blockAllMixedContent: true
};
/**
 * logfile config
 */
exports.logPath = path.join(__dirname, 'logs');
/**
  * aliyun config
  */
exports.accessId = 'LTAIpaEcHqtPVSWC';
exports.accessKey = 'IoMzzl3J9hQpzHjplBZ6Cw4uvPf0T3';
exports.PhoneNumbers = 13672227481;
exports.SignName = 'polo张';
exports.alterTemplateCode = 'SMS_89550089';
exports.verifyTemplateCode = 'SMS_89965001';
exports.mailuser = 'polo';
exports.mailpassword = 'yapbt19911012AS';
exports.maindomain = 'pmail.wobukai.xin';
/**
 * mock config
 */
exports.mockOptions = {
  MOCK_PATH: '/v1/(.*)',
  USE_RAP: true,
  RAP_CONFIG: {
    host: '127.0.0.1',
    port: 8080,
    projectId: 1,
    mock: '/mockjsdata/',
    wrapper: ''
  }
};
