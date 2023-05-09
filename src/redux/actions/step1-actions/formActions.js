import * as types from "../actionTypes";

export const updateFirstName = (firstName) => ({
  type: types.UPDATE_fIRST_NAME,
  payload: {
    firstName,
  },
});

export const updateLastName = (lastName) => ({
  type: types.UPDATE_LAST_NAME,
  payload: {
    lastName,
  },
});


export const updateBirthday = (birthday) => ({
  type: types.UPDATE_BIRTHDAY_NAME,
  payload: {
    birthday,
  },
});


export const updateNationality = (nationality) => ({
  type: types.UPDATE_NATIONALITY,
  payload: {
    nationality,
  },
});

export const updateEmail = (email) => ({
  type: types.UPDATE_EMAIL,
  payload: {
    email,
  },
});

export const updateMobile = (mobile) => ({
  type: types.UPDATE_MOBILE,
  payload: {
    mobile,
  },
});


// import * as types from "../actionTypes"

// export const updateUserInfo = (firstName, lastName,birthday,nationality,email,mobile) => ({
//   type: types.UPDATE_USER_INFO,
//   payload: {
//     firstName,
//     lastName,
//     birthday,
//     nationality,
//     email,
//     mobile,
//   }
// });


