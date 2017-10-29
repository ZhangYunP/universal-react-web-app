import { combineReducers } from 'redux';
import counter from './counter';
import ensureNumber from './ensureNumber';
import asyncFetchData from './asyncFetchData';
import switchCounterType from './switchCounterType';
import toggleShowState from './toggleShowState';

const rootReducer = combineReducers({
  counter,
  ensureNumber,
  asyncFetchData,
  switchCounterType,
  toggleShowState
});

export default rootReducer;
