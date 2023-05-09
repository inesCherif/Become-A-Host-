import * as types from "../actionTypes";

export const updatePassions = (userPassions) => ({
  type: types.UPDATE_PASSIONS_INFO,
  payload: {
    userPassions,
  },
});

export const updateFavoriteCityFeatures = (myFavoriteCityFeature) => ({
  type: types.UPDATE_FAV_CITY_FEATURES,
  payload: {
    myFavoriteCityFeature,
  },
});

export const updateSelfDescription = (selfDescription) => ({
  type: types.UPDATE_SELF_DESCRIPTION,
  payload: {
    selfDescription,
  },
});
