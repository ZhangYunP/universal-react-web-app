const { EventEmitter } = require('events');
const { poolOptions } = require('./config');
const connectPool = require('./server/core/dbpool');
const initializeServer = require('./server/core/initServer');
const handleUncaughtException = require('./server/core/uncaughtException');

const ev = new EventEmitter();

handleUncaughtException();

ev.on('db-ready', (pool, isCluster) => {
  initializeServer(pool, isCluster);
});

connectPool(poolOptions, ev);

ev.emit('boot-ready');
