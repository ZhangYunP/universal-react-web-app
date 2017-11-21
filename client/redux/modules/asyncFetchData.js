import * as ActionTypes from '../../constants';
/* eslint quotes: 0 */
const initialState = {
  data: {},
  err: ''
};

export default function asyncFetchData(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_SUCESS:
      return Object.assign({}, state, { data: action.data });
    case ActionTypes.FETCH_ERROR:
      return Object.assign({}, state, { err: action.err });
    default:
      return state;
  }
}

export const startFetch = () => ({
  type: ActionTypes.FETCH_START
});
