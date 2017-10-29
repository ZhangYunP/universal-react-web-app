import * as ActionTypes from '../../constants';
import { REHYDRATE } from 'redux-persist/constants';

const initialState = {
  show: false,
  hold: false
};
/* eslint no-case-declarations: 0 */
/* eslint no-param-reassign: 0 */
export default function toggleShowState(state = initialState, action) {
//  console.log(state); state一直在变，为这个reduce上次返回的state
  switch (action.type) {
    case ActionTypes.ENTERNAV:
      return Object.assign({}, state, {
        show: true,
        leftPos: action.left,
        width: action.width,
        index: action.index
      });
    case ActionTypes.LEAVENAV:
      return Object.assign({}, state, {
        show: false,
        finalPos: state.hold ? state.finalPos : 0,
        finalWidth: state.hold ? state.finalWidth : 0,
        index: state.hold ? state.clickedIndex : -1
      });
    case ActionTypes.CLICKNAV:
      return Object.assign({}, state, {
        hold: true,
        finalPos: action.left,
        finalWidth: action.width,
        index: action.index,
        clickedIndex: action.index
      });
    case REHYDRATE:
      const incoming = action.payload.toggleShowState;
      if (incoming) return Object.assign({}, state, incoming, { fromStorage: true });
      return state;
    default:
      return state;
  }
}

export function toggleShowStateActionCreator(showType, left, width, index) {
  if (showType === 'mouseenter') {
    showType = ActionTypes.ENTERNAV;
  } else if (showType === 'click') {
    showType = ActionTypes.CLICKNAV;
  } else {
    showType = ActionTypes.LEAVENAV;
  }
  return dispatch => {
    dispatch({
      type: showType,
      left,
      width,
      index
    });
  };
}
