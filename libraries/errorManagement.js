const Logger = require('./winstonLog');
// const { sendAliSMS } = require('./aliyunSMS');
// const sendMail = require('./aliyunMail');
const { createCustomError } = require('./errorFactory');

class ErrorManagement {
  handleError(ctx, e) {
    console.log(e.name);
    console.log(e.message);
    console.log(e.stack);
    console.log(e.info);
  }
}
module.exports = ErrorManagement;
