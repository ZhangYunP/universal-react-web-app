export const projectName = require('../../package.json').name;

export const PLUS = `@@${projectName}/counter/PLUS`;
export const MINUS = `@@${projectName}/counter/MINUS`;
export const TIMES = `@@${projectName}/counter/TIMES`;
export const DIVIDE = `@@${projectName}/counter/DIVIDE`;
export const ENSURE_FIRST_NUMBER = `@@${projectName}/ensureNumber/ENSURE_FIRST_NUMBER`;
export const ENSURE_SECOND_NUMBER = `@@${projectName}/ensureNumber/ENSURE_SECOND_NUMBER`;
export const FETCH_START = `@@${projectName}/asyncFetchData/FETCH_START`;
export const FETCH_SUCESS = `@@${projectName}/asyncFetchData/FETCH_SUCESS`;
export const FETCH_ERROR = `@@${projectName}/asyncFetchData/FETCH_ERROR`;
export const SWITCH_TYPE = `@@${projectName}/switchCounterType/SWITCH_TYPE`;
export const ENTER_NAV = `@@${projectName}/toggleShowState/ENTER_NAV`;
export const LEAVE_NAV = `@@${projectName}/toggleShowState/LEAVE_NAV`;
export const CLICK_NAV = `@@${projectName}/toggleShowState/CLICK_NAV`;
export const LOCATION_NAV = `@@${projectName}/toggleShowState/LOCATION_NAV`;
