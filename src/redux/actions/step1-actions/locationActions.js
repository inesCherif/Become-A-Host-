// import * as types from "../actionTypes";

// export const updateLocationInfo = (country, city, years_of_living, adress) => ({
//   type: types.UPDATE_LOCATION_INFO,
//   payload: {
//     country,
//     city,
//     years_of_living,
//     adress,
//   },
// });


import * as types from "../actionTypes";

export const updateUserCountry = (country) => ({
  type: types.UPDATE_USER_COUNTRY,
  payload: {
    country,
  },
});

export const updateUserCity = (city) => ({
  type: types.UPDATE_USER_CITY,
  payload: {
    city,
  },
});


export const updateYearsOfLiving = (years_of_living) => ({
  type: types.UPDATE_USER_YEARS_OF_LIVING,
  payload: {
    years_of_living,
  },
});


export const updateUserAdress = (address) => ({
  type: types.UPDATE_USER_ADDRESS,
  payload: {
    address,
  },
});




