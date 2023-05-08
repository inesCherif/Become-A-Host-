import * as types from "../actionTypes";

export const updateCountry = (country) => ({
  type: types.UPDATE_COUNTRY,
  payload: {
    country,
  },
});

export const updateRegion = (region) => ({
  type: types.UPDATE_REGION,
  payload: {
    region,
  },
});


export const updateStreetAddress = (streetAddress) => ({
  type: types.UPDATE_STREET_ADDRESS,
  payload: {
    streetAddress,
  },
});


export const updateCity = (city) => ({
  type: types.UPDATE_CITY,
  payload: {
    city,
  },
});

export const updateZipCode = (zipCode) => ({
  type: types.UPDATE_ZIP_CODE,
  payload: {
    zipCode,
  },
});