import * as ActionTypes from '../../constants';

const initialState = {
  one: 0,
  two: 0
};

export default function ensureNumber(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ENSUREFIRSTNUMBER:
      return Object.assign({}, state, { one: action.number });
    case ActionTypes.ENSURESECONDNUMBER:
      return Object.assign({}, state, { two: action.number });
    default:
      return state;
  }
}

export function ensureNumberActionCreator(number, isFirst) {
  return dispatch => {
    const type = isFirst ? ActionTypes.ENSUREFIRSTNUMBER : ActionTypes.ENSURESECONDNUMBER;
    return dispatch({
      type,
      number
    });
  };
}
