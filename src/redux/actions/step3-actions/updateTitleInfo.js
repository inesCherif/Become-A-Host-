import * as types from "../actionTypes";

export const updateTitleInfo = (experienceTitle) => ({
  type: types.UPDATE_TITLE,
  payload: experienceTitle,
});

