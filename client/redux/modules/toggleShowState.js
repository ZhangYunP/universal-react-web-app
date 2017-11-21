import enforceDispatchBindAction from '../enforceDispatchBindAction';
/* eslint no-nested-ternary: 0 */
/* eslint object-curly-newline: 0 */

const name = 'toggleShowState';

const initialState = {
  show: false,
  hold: false
};

const dispatchAction = {};

dispatchAction.enterNav = [
  (leftPos, width, index) => ({ leftPos, width, index }),
  { show: true, isFirst: false }
];

dispatchAction.clickNav = [
  (finalPos, finalWidth, index) => ({
    finalPos, finalWidth, index, clickedIndex: index
  }),
  { hold: true, fromLocation: false }
];

dispatchAction.locationNav = [
  (locationPos, locationWidth, index) => ({
    locationPos, locationWidth, index, locationIndex: index
  }),
  { fromLocation: true, isFirst: true }
];

dispatchAction.leaveNav = [
  null,
  {
    show: false,
    finalPos: state => state.hold ? state.finalPos : (state.fromLocation
      ? state.locationPos
      : 0),
    finalWidth: state => state.hold ? state.finalWidth : (state.fromLocation
      ? state.locationWidth
      : 0),
    index: state => state.hold ? state.clickedIndex : (state.fromLocation
      ? state.locationIndex
      : -1)
  }
];

const final = enforceDispatchBindAction(
  name,
  dispatchAction,
  initialState
);

export default final.reducer;
export const mapDispatch = final.mapDispatch;
export const mapState = final.mapState;
