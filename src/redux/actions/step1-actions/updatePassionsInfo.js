import * as types from "../actionTypes";

export const updatePassionsInfo = (userPassions, myFavoriteCityFeature,selfDescription) => ({
  type: types.UPDATE_PASSIONS_INFO,
  payload: {
    userPassions,
    myFavoriteCityFeature,
    selfDescription,
  },
});
