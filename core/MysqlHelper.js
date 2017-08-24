import mysql from 'mysql';
import { dbhost, dbname, dbuser, dbpwd, dbport, dbchar, dbconnlimit } from '../config';
import { isArray, isObject, ObjectKey } from '../base'

export default class MysqlHelper {
  constructor(dbhost, dbname, dbuser, dbpwd, dbport, dbchar, dbconnlimit) {
    this.pool = this._initialDB(dbhost, dbname, dbuser, dbpwd, dbport, dbchar, dbconnlimit);
  }

  static dbpool; //静态属性需要es7支持

  _initialDB(dbhost, dbname, dbuser, dbpwd, dbport, dbchar, dbconnlimit) {
    return mysql.createPool({
       host : dbhost,
       user : dbuser,
       password : dbpwd,
       database : dbname,
       port : dbport,
       charset : dbchar,
       connectionLimit : dbconnlimit
     })
  }

  static createInstance(dbhost, dbname, dbuser, dbpwd, dbport, dbchar, dbconnlimit) {
    if(!MysqlHelper.dbpool) {
      MysqlHelper.dbpool = new MysqlHelper(dbhost, dbname, dbuser, dbpwd, dbport, dbchar, dbconnlimit);
    }
    return MysqlHelper.dbpool;
  }

  query(sql, replace) {
    return new Promise((resolve, reject) => {
      if(!this.pool){
        reject('database connect error');
      }
      this.pool.getConnection((err, connection) => {
        if(err) {
          reject(err);
        }
        connection.query(sql, replace, (err, results) => {
          if(err) {
            reject(err);
          }
          resolve(results);
        })
      })
    })
  }

  _parseWhere(where, andor) {
    let values = [];
    let keystr = '';
    if(!~andor.indexOf('and') && !~andor.indexOf('or')) {
      throw new Error('where connectives must be and or');
      return;
    }
    if(isObject(where)) {
      for(var key in where) {
        if(where.hasOwnProperty(key)){
          keystr += `${key} = ? ${andor} `;
          values.push(where.key);
        }
      }
      keystr = keystr.split(' ').slice(0, -2).join(' ');
      return {wvalues : values, wkey : keystr};
    }
      return {wvalues : null, wkey : where};
  }

  fetchData(fields, table, where, order, limit, flag = 'and') {
      let fields = isArray(fields) ? fields.join(',') : fields;
      let sql = `select ${fields} from ${table} where `;
      let {wvalues, wkey} = this._parseWhere(where, flag);
      sql += `${wkey} `;
      if(order) {
        sql += `order by ${order} `;
      }
      if(limit) {
        sql += `limit ${limit}`
      }
      return this.query(sql, wvalues);
  }

  delete(table, where, flag = 'and') {
    let sql = `delete from ${table} where `;
    let {wvalues, wkey} = this._parseWhere(where, flag);
    sql += `${wkey}`;
    return this.query(sql, wvalues).then((result) => {
      return result.affectedRows;
    });
  }

  update(fieldsPair, table, where, flag = 'and') {
    let fieldsKeyArr = isObject(fieldsPair) ? ObjectKey(fieldsPair) : [];
    let fieldstr = '';
    let fieldval = [];
    fieldsKeyArr.map((str, key) => {
      fieldstr += `${key} = ?,`;
      fieldval.push(fieldsPair[key]);
    })
    let {wvalues, wkey} = this._parseWhere(where, flag);
    let wvalues = fieldval.concat(wvalues);
    let fieldstr = fieldstr.substr(0, fieldstr.length - 1);
    let sql = `update ${table} set ${fieldstr} where ${wkey}`;
    return this.query(sql, wvalues);
  }

  insert(fieldsPair, table) {
    if(isObject(fieldsPair)) {
      let sql =  `insert into ${table} set ? `;
      return this.query(sql, fieldsPair).then((result) => {
        return result.insertId;
      });
    }
  }
}
