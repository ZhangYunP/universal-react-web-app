const moment = require('moment');
const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const { logPath } = require('../config');
const { createCustomError } = require('./errorFactory');
/* eslint no-param-reassign: 0 */
/* eslint vars-on-top: 0 */
/* eslint max-len: 0 */
const syslogLevel = winston.config.syslog.levels;
const allowedLevels = Object.keys(syslogLevel);

winston.setLevels(syslogLevel);
// { emerg: 0, alert: 1, crit: 2, error: 3, warning: 4, notice: 5, info: 6, debug: 7 }

const env = process.env.NODE_ENV || 'development';
const dateFormat = () => moment().format('YYYY-MM-DD HH:MM:ss:SSS');

function createTransports(Type, level, name, filename, extraOpts = {}, handleExceptions = false) {
  const transportsOpts = {};
  if (arguments.length < 2) {
    throw createCustomError('LOGGERERROR', { isSerious: 0, method: 'createTransports' }, 'The parameter of the createTransports exist error');
  } else if (arguments.length === 3) {
    if (typeof arguments[2] === 'string') {
      transportsOpts.filename = name;
    } else if (typeof arguments[2] === 'object') {
      extraOpts = name;
      Object.assign(transportsOpts, extraOpts);
    }
  } else if (arguments.length > 3) {
    Object.assign(transportsOpts, extraOpts);
    transportsOpts.name = name;
    transportsOpts.filename = filename;
  }
  transportsOpts.level = level;
  transportsOpts.handleExceptions = handleExceptions;
  transportsOpts.timestamp = dateFormat;
  if (!~allowedLevels.indexOf(transportsOpts.level)) {
    throw createCustomError('LOGGERERROR', { isSerious: 0, method: 'createTransports' }, 'The parameter of the createTransports exist error');
  }
  if (!~['Console', 'File'].indexOf(Type)) {
    return new Type(transportsOpts);
  }
  return new (winston.transports[Type])(transportsOpts);
}

function createWinstonLog(transports) {
  return new (winston.Logger)({ transports });
}

//   var options = {
//   from: new Date - 24 * 60 * 60 * 1000,
//   until: new Date,
//   limit: 10,
//   start: 0,
//   order: 'desc',
//   fields: ['message']
// };
function queryLogger(options) {
  winston.query(options, function (err, results) {
    if (err) {
      throw createCustomError(err, 'LOGGERERROR', { isSerious: 0, method: 'querylogger' }, 'query logger occued error');
    }
    return results;
  });
}

try {
  var alllogTransport = createTransports(DailyRotateFile, 'debug', 'alllog', logPath + '/-all.log', {
    prepend: true, maxsize: 10 * 1024 * 1024, datePattern: 'yyyy-MM-dd', json: false
  });
  var consoleTransport = createTransports('Console', 'debug', { colorize: true, json: false });
  var dblogTransport = createTransports('File', 'info', 'dblog', logPath + '/db.log', { json: false });
  var accesslogTransport = createTransports('File', 'info', 'accesslog', logPath + '/access.log', { json: false });
  var errorlogTransport = createTransports('File', 'error', 'errorlog', logPath + '/error.log', { json: false });
  var critlogTransport = createTransports('File', 'crit', 'critlog', logPath + '/error.log', { json: false });
  var alertlogTransport = createTransports('File', 'alert', 'alertlog', logPath + '/error.log', { json: false });
  var crashlogTransport = createTransports('File', 'emerg', 'crashlog', logPath + '/crash.log', { json: false });
} catch (e) {
  const transportserror = createCustomError(e, 'LOGGERERROR', { isSerious: 0, method: 'createTransports' }, 'createTransports occued error');
  throw transportserror;
}

const allErrorTransports = [errorlogTransport, critlogTransport, alertlogTransport, crashlogTransport];

try {
  var dblog = createWinstonLog([dblogTransport, alllogTransport]);
  var accesslog = createWinstonLog([accesslogTransport, alllogTransport]);
  var consolelog = createWinstonLog([consoleTransport]);
  var msglog = createWinstonLog([alllogTransport]);
  var errorlog = createWinstonLog(allErrorTransports);
} catch (e) {
  const logerror = createCustomError(e, 'LOGGERERROR', { isSerious: 0, method: 'createWinstonLog' }, 'createWinstonLog occued error');
  throw logerror;
}

accesslog.exitOnError = false;
errorlog.exitOnError = false;

[dblog, accesslog, consolelog, msglog, errorlog].forEach((logger) => {
  logger.on('error', (e) => {
    throw createCustomError(e, 'LOGGERERROR', { isSerious: 0, logger }, 'logger occued error');
  });
});

const Logger = {
  dblog,
  accesslog,
  consolelog,
  msglog,
  errorlog,
  queryLogger
};

module.exports = Logger;
