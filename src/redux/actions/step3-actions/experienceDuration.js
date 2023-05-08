import * as types from "../actionTypes"
export function setSelectedDuration(duration) {
  return {
    type: types.SET_SELECTED_DURATION,
    duration,
  };
}
