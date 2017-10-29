const { createCustomError } = require('../../libraries/errorFactory');
const { isArray, isObject, ObjectKey } = require('../../utilities/base');
/* eslint no-underscore-dangle: 0 */
/* eslint max-len: 0 */
function errorHandle(err, message, method) {
  throw createCustomError(err, 'DBERROR', {
    isSerious: 0,
    method
  }, message);
}

function _connectCB(sql, values, resolve, reject) {
  return (err, connection) => {
    if (err) {
      reject(err);
    }
    connection.execute(sql, values, (err, results) => {
      if (err) {
        reject(err);
      }
      // console.log(pool._freeConnections._list.indexOf(connection)); // -1
      connection.release();
      // console.log(pool._freeConnections._list.indexOf(connection)); // 0
      resolve(results);
    });
  };
}

function _parseWhere(where, joiner) {
  let values = [];
  let escapeStr = '';
  if (!~joiner.indexOf('and') && !~joiner.indexOf('or')) {
    errorHandle(new Error(), ' _parseWhere method second argument must be and or', '_parseWhere');
  }
  if (isObject(where)) {
    for (let key in where) {
      if (where.hasOwnProperty(key)) {
        escapeStr += `${key} = ? ${joiner} `;
        values.push(where[key]);
      }
    }
    escapeStr = escapeStr.split(' ').slice(0, -2).join(' ');
    return { values, escapeWhereString: escapeStr };
  }
  return { values: null, escapeWhereString: where };
}

function repository(pool, isCluster) {
  function query(sql, values, isCluster, type) {
    return new Promise((resolve, reject) => {
      if (!pool) {
        reject(new Error('db pool is not exist'));
      }
      if (!!isCluster && type === 'write') {
        pool.getConnection('master', _connectCB(sql, values, resolve, reject));
      } else if (!!isCluster && type === 'read') {
        pool.getConnection('slave*', _connectCB(sql, values, resolve, reject));
      } else if (!isCluster) {
        pool.getConnection(_connectCB(sql, values, resolve, reject));
      } else {
        errorHandle(new Error(), 'db query occued error', 'query');
      }
    });
  }
  /* eslint no-param-reassign: 0 */
  function fetchData(fields, table, where, order, limit, flag = 'and') {
    fields = isArray(fields) ? fields.join(',') : fields;
    let sql = `select ${fields} from ${table} where `;
    let { values, escapeWhereString } = _parseWhere(where, flag);
    sql += `${escapeWhereString} `;
    if (order) {
      sql += `order by ${order} `;
    }
    if (limit) {
      sql += `limit ${limit}`;
    }
    return query(sql, values, isCluster, 'read');
  }
  function deleteData(table, where, flag = 'and') {
    let sql = `delete from ${table} where `;
    let { values, escapeWhereString } = _parseWhere(where, flag);
    sql += `${escapeWhereString}`;
    return query(sql, values, isCluster, 'write').then(result => {
      return result.affectedRows;
    }, err => {
      errorHandle(err, 'db delete occued error', 'delete');
    });
  }
  function updateData(fieldsPair, table, where, flag = 'and') {
    let fieldsKeyArr = isObject(fieldsPair) ? ObjectKey(fieldsPair) : [];
    let fieldstr = '';
    let fieldval = [];
    fieldsKeyArr.forEach((str, key) => {
      fieldstr += `${key} = ?,`;
      fieldval.push(fieldsPair[key]);
    });
    let { values, escapeWhereString } = _parseWhere(where, flag);
    values = fieldval.concat(values);
    fieldstr = fieldstr.substr(0, fieldstr.length - 1);
    let sql = `update ${table} set ${fieldstr} where ${escapeWhereString}`;
    return query(sql, values, isCluster, 'write');
  }
  function insertData(fieldsPair, table) {
    if (isObject(fieldsPair)) {
      let sql = `insert into ${table} set ? `;
      return query(sql, fieldsPair, isCluster, 'write').then(result => {
        return result.insertId;
      }, err => {
        errorHandle(err, 'db insert occued error', 'insert');
      });
    }
  }
  function closePool() {
    if (!pool) {
      errorHandle(new Error(), 'have not pool, so you can not close pool', 'closePool');
    }
    pool.end(err => {
      if (err) {
        errorHandle(err, 'close pool occued error', 'closePool');
      }
    });
  }
  return {
    query: query,
    fetch: fetchData,
    delete: deleteData,
    update: updateData,
    insert: insertData,
    disconnect: closePool
  };
}

function prepare(pool, isCluster) {
  return new Promise((resolve, reject) => {
    if (!pool) {
      reject(new Error('db pool is not exist'));
    } else {
      resolve(repository(pool, isCluster));
    }
  });
}
module.exports = prepare;
