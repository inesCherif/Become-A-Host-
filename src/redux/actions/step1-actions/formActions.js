import * as types from "../actionTypes"

export const updateUserInfo = (firstName, lastName,birthday,nationality,email,mobile) => ({
  type: types.UPDATE_USER_INFO,
  payload: {
    firstName,
    lastName,
    birthday,
    nationality,
    email,
    mobile,
  }
});



