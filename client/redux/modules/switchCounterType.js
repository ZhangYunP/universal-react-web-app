import * as ActionTypes from '../../constants';

const initialState = {
  method: ''
};

export default function switchCounterType(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SWITCH_TYPE:
      return Object.assign({}, state, { method: action.method });
    default:
      return state;
  }
}

export function switchCounterTypeActionCreator(method) {
  return {
    type: ActionTypes.SWITCH_TYPE,
    method
  };
}
