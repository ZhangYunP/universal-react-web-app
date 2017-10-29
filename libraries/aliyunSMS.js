const SMSClient = require('@alicloud/sms-sdk');
const { createCustomError } = require('./errorFactory');
const { getTime } = require('./vendor');
const Logger = require('./winstonLog');

const env = process.env.NODE_ENV || 'development';

function createSMSClient(admin) {
  return new SMSClient({ accessKeyId: admin.accessId, secretAccessKey: admin.accessKey });
}

async function sendAliSMS(config) {
  const smsClient = createSMSClient(config.admin);
  const result = await smsClient.sendSMS({
    PhoneNumbers: config.PhoneNumbers,
    SignName: config.SignName,
    TemplateCode: config.TemplateCode,
    TemplateParam: config.TemplateParam
  });
  const { Code } = result;
  if (Code === 'OK') {
    if (env === 'development') {
      Logger.consolelog.debug('info:messge send success, sendTime:' + getTime() + ', phone:' + config.PhoneNumbers);
    }
    Logger.msglog.info('info:messge send success, sendTime:' + getTime() + ', phone:' + config.PhoneNumbers);
    return result;
  }
  const msgerr = createCustomError('SMSERROR', { isSerious: 0, PhoneNumbers: config.PhoneNumbers, method: 'sendAliSMS' }, 'message send fail');
  throw msgerr;
}

async function queryAliSMS(config) {
  const smsClient = createSMSClient(config.admin);
  const queryResult = await smsClient.queryDetail({
    PhoneNumber: config.PhoneNumber,
    SendDate: config.SendDate,
    PageSize: config.PageSize,
    CurrentPage: config.CurrentPage
  });
  const { Code, SmsSendDetailDTOs } = queryResult;
  if (Code === 'OK') {
    if (env === 'development') {
      Logger.consolelog.debug('info:messge query success,time:' + getTime() + ',phone:' + config.PhoneNumbers);
    }
    Logger.msglog.info('info:messge query success,time:' + getTime() + ',phone:' + config.PhoneNumbers);
    return SmsSendDetailDTOs;// SmsSendDetailDTOs.sendStatus === 3表示发送成功
  }
  const msgerr = createCustomError('SMSERROR', { isSerious: 0, PhoneNumbers: config.PhoneNumbers, method: 'queryAliSMS' }, 'message query fail');
  throw msgerr;
}

exports.sendAliSMS = sendAliSMS;
exports.queryAliSMS = queryAliSMS;
