import * as ActionTypes from '../../constants';

const initialState = {
  one: 0,
  two: 0
};

export default function ensureNumber(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ENSURE_FIRST_NUMBER:
      return Object.assign({}, state, { one: action.number });
    case ActionTypes.ENSURE_SECOND_NUMBER:
      return Object.assign({}, state, { two: action.number });
    default:
      return state;
  }
}

export function ensureNumberActionCreator(number, isFirst) {
  const type = isFirst ? ActionTypes.ENSURE_FIRST_NUMBER : ActionTypes.ENSURE_SECOND_NUMBER;
  return {
    type,
    number
  };
}
