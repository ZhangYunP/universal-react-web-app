const mysql = require('mysql2');
const { createCustomError } = require('../../libraries/errorFactory');
/* eslint max-len: 0 */
function connectPool(opts, ev) {
  ev.once('boot-ready', () => {
    if (opts.isCluster) {
      let poolcluster;
      const clusterOption = opts.clusterOption || {};
      const masterSetting = opts.master_setting;
      const slaveSettings = Array.isArray(opts.slave_settings) ? opts.slave_settings : [opts.slave_settings];
      try {
        if (!poolcluster) {
          poolcluster = mysql.createPoolCluster(clusterOption);
        }
      } catch (e) {
        throw createCustomError(e, 'DBERROR', {
          isSerious: 1,
          method: 'connect'
        }, 'create db pool cluster occued error');
      }
      if (poolcluster) {
        poolcluster.add('master', masterSetting);
        slaveSettings.forEach((slaveConfig, index) => {
          poolcluster.add(`slave${index}`, slaveConfig);
        });
      }
      ev.emit('db-ready', poolcluster, opts.isCluster);
    } else {
      if (!opts.database) {
        throw createCustomError(new Error(), 'DBERROR', {
          isSerious: 1,
          method: 'connect'
        }, 'db connect need database');
      }
      let pool;
      try {
        if (!pool) {
          pool = mysql.createPool(opts);
        }
      } catch (e) {
        throw createCustomError(e, 'DBERROR', {
          isSerious: 1,
          method: 'connect'
        }, 'create db pool occued error');
      }
      ev.emit('db-ready', pool, false);
    }
  });
}
module.exports = connectPool;
