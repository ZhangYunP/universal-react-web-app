import { call, put, take, fork } from 'redux-saga/effects';
import * as ActionTypes from '../../constants';
import ownApi from './api';

function* fetchApiSaga() {
  try {
    const result = yield call(ownApi.fetchDemo);
    yield put({ type: ActionTypes.FETCH_SUCESS, data: result });
    return result;
  } catch (e) {
    yield put({ type: ActionTypes.FETCH_ERROR, error: e });
  }
}

function* watchFetchSaga() {
  while (true) {
    yield take(ActionTypes.FETCH_START);
    yield fork(fetchApiSaga);
  }
}

export default fetchApiSaga;
