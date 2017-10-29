import * as ActionTypes from '../../constants';

const initialState = {
  method: ''
};

export default function switchCounterType(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SWITCHTYPE:
      return Object.assign({}, state, { method: action.method });
    default:
      return state;
  }
}

export function switchCounterTypeActionCreator(method) {
  return dispatch => {
    return dispatch({
      type: ActionTypes.SWITCHTYPE,
      method
    });
  };
}
