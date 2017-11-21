import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counter from './counter';
import ensureNumber from './ensureNumber';
import asyncFetchData from './asyncFetchData';
import switchCounterType from './switchCounterType';
import toggleShowState from './toggleShowState';

const counterPersistReducerConfig = {
  key: 'counter',
  storage
};

const counterRersistReducer = persistReducer(counterPersistReducerConfig, counter);

const rootReducer = combineReducers({
  counter: counterRersistReducer,
  ensureNumber,
  asyncFetchData,
  switchCounterType,
  ...toggleShowState
});

export default rootReducer;
