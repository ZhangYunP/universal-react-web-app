/*
DB config
 */
export const dbhost = 'localhost';
export const dbname = 'sr';
export const dbuser = 'root';
export const dbpwd = 123456;
export const dbport = 3306;
export const dbchar = 'utf8';
export const dbconnlimit = 10;
/*
permission config
 */

/*
koa instance config
 */
export const port = 3000;
export const publicDir = __dirname + '/assert/';
export const appKey = ['abcdef', 'hijklm'];
/*
csrf config
 */
export const csrfSercet = ('00000' + Math.floor(Math.random() * 0xFFFFF)).slice(-6);
export const csrfExp = 24 * 60 * 60 * 1000;
export const csrfCookieKey = 'csrf_token';
export const csrfFieldKey = '_csrf';
