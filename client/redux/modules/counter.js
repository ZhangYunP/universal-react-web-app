import * as ActionTypes from '../../constants';
/* eslint no-param-reassign: 0 */
const initialState = {
  count: 0
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.PLUS:
      return Object.assign({}, state, { count: action.number1 + action.number2 });
    case ActionTypes.MINUS:
      return Object.assign({}, state, { count: action.number1 - action.number2 });
    case ActionTypes.TIMES:
      return Object.assign({}, state, { count: action.number1 * action.number2 });
    case ActionTypes.DIVIDE:
      return Object.assign({}, state, { count: action.number1 / action.number2 });
    default:
      return state;
  }
}

export function counterActionCreator(type, number1, number2) {
  return dispatch => {
    type = `@${ActionTypes.projectName}/counter/${type}`;
    dispatch({
      type,
      number1,
      number2
    });
  };
}
