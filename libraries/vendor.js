const moment = require('moment');
const uuid = require('uuid');
const { execSync } = require('child_process');
const  { createCustomError }  = require('./errorFactory');
const { spawn } = require('child_process');
const chalk = require('chalk');
const Logger = require('./winstonLog');

function getTime() {
  return moment().format('DD/MM/YYYY:HH:mm:ss ZZ');
}

function printLogger(string) {
  Logger.consolelog.debug(string);
}

function getResusetinfo(ctx) {
  const start = Date.now();
  const requestId = uuid.v4();
  const method = ctx.method;
  const url = ctx.path + (ctx.search ? ctx.search : '');
  const protocol = ctx.protocol.toLowerCase().match(/^https/) ? 'h2' : 'http/1.1';
  const ip = ctx.ip;
  const timestamp = getTime();
  const userAgent = ctx.headers['user-agent'];
  const referer = ctx.headers.referer;
  const userId = ctx.state.userId ? ctx.state.userId : ctx.ip + '-nologin';
  return {
    start,
    requestId,
    method,
    url,
    protocol,
    ip,
    timestamp,
    userAgent,
    referer,
    userId
  };
}

function ezSpawn(options) {
  return new Promise((resolve, reject) => {
    let childProcessData = '';
    const cmd = typeof options.cmd === 'string' ? options.cmd : '';
    const args = options.args || [];
    const opts = options.opts || {};
    const childProcess = spawn(cmd, args, opts);
    childProcess.on('close', (code) => {
      if (code !== 0) {
        reject(createCustomError('CHILDPROCESSERROR', { isSerious: 0, errCode: code, cmd }, 'execute childProcess error'));
      }
    });
    childProcess.stdout.on('data', (chunk) => {
      childProcessData += chunk.toString(opts.encoding || 'utf8');
    });
    childProcess.stdout.on('end', () => {
      resolve(childProcessData);
    });
    childProcess.stdin.end();
  });
}

function createpkp(crtName, crtDir) {
  try {
    const res = execSync(`openssl x509 -in ${crtName} -pubkey -noout | openssl rsa -pubin -outform der | openssl dgst -sha256 -binary | openssl enc -base64`, { cwd: crtDir });
    return res.toString().trim().replace(/\s/g, '');
  } catch (e) {
    if (process.platform === 'win32') {
      console.error(chalk.red('in windows system, you need install openssl.exe'));
    }
    throw createCustomError(e, 'CHILDPROCESSERROR', { isSerious: 0, method: 'createpkp' }, 'createpkp occued error');
  }
}

function registerGloabalResourceRelease(server, dbOperationCollection) {
  server.on('close', () => {
    dbOperationCollection.disconnect();
  });
}

module.exports = {
  getTime,
  getResusetinfo,
  ezSpawn,
  createpkp,
  printLogger,
  registerGloabalResourceRelease
};
