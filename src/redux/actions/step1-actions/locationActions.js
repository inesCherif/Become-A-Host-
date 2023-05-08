import * as types from "../actionTypes";

export const updateLocationInfo = (country, city, years_of_living, adress) => ({
  type: types.UPDATE_LOCATION_INFO,
  payload: {
    country,
    city,
    years_of_living,
    adress,
  },
});
