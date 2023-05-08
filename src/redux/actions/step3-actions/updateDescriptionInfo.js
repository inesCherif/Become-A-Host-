import * as types from "../actionTypes";

export const updateDescriptionInfo = (experienceDescription) => ({
  type: types.UPDATE_DESCRIPTION,
  payload: experienceDescription,
});

