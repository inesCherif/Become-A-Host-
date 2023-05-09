import * as types from "../actionTypes";

export const updateDescriptionInfo = (experienceDescription) => ({
  type: types.UPDATE_DESCRIPTION,
  payload: experienceDescription,
});


export function setSelectedDuration(duration) {
  return {
    type: types.SET_SELECTED_DURATION,
    duration,
  };
}
