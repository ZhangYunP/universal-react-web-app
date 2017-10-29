const nodemailer = require('nodemailer');
const { promisify } = require('util');
const { createCustomError } = require('./errorFactory');
const { getTime } = require('./vendor');
const Logger = require('./winstonLog');

// var config = {
//     from: '<username@userdomain>', // sender address mailfrom must be same with the user
//     to: 'x@x.com, xx@xx.com', // list of receivers
//     cc:'haha<xxx@xxx.com>', // copy for receivers
//     bcc:'haha<xxxx@xxxx.com>', // secret copy for receivers
//     subject: 'Hello', // Subject line
//     text: 'Hello world', // plaintext body
//     html: '<b>Hello world</b><img src="cid:01" style="width:200px;height:auto">', // html body
//     attachments: [
//         {
//             filename: 'text0.txt',
//             content: 'hello world!'
//         },
//         {
//             filename: 'text1.txt',
//             path: './app.js'
//         },{
//             filename:'test.JPG',
//             path:'./Desert.jpg',
//             cid:'01'
//        }
//     ],
// };
const env = process.env.NODE_ENV || 'development';

function createMailTransporter(auth) {
  const transporter = nodemailer.createTransport({
    host: 'smtpdm.aliyun.com',
    port: 25,
    secureConnection: true, // use SSL
    auth: {
      user: auth.user, // user name
      pass: auth.password // password
    }
  });
  return transporter;
}

async function sendMail(config) {
  const transporter = createMailTransporter(config.auth);
  const promisifySend = promisify(transporter.sendMail);
  const res = await promisifySend(config);
  if (!res.error) {
    if (env === 'development') {
      Logger.consolelog.debug('info:mail send success,sendTime:' + getTime() + ',from:' + config.from);
    }
    Logger.msglog.info('info:mail send success,sendTime:' + getTime() + ',from:' + config.from);
    return res.info.response;
  }
  const mailerr = createCustomError(res.error, 'MAILERROR', { isSerious: 0, from: config.from, method: 'sendMail' }, 'mail send fail');
  throw mailerr;
}

module.exports = sendMail;
