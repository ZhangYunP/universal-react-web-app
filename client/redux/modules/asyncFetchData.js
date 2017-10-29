import 'isomorphic-fetch';
import * as ActionTypes from '../../constants';

const initialState = {
  data: {},
  err: ''
};

export default function asyncFetchData(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCHSUCESS:
      return Object.assign({}, state, { data: action.data });
    case ActionTypes.FETCHERROR:
      return Object.assign({}, state, { err: action.err });
    default:
      return state;
  }
}

export const asyncFetchDataActionCreator = () => dispatch => {
  return fetch('https://route.showapi.com/1438-2', { mode: 'cors' })
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: ActionTypes.FETCHSUCESS,
        data: json
      });
    })
    .catch(e => {
      dispatch({
        type: ActionTypes.FETCHERROR,
        err: e
      });
    });
};
