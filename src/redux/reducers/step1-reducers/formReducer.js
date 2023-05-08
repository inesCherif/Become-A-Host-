import * as types from "../../actions/actionTypes"

const initialState = {
  firstName: "",
  lastName: "",
  birthday: "",
  nationality: "",
  email: "",
  mobile: "",
};



const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_USER_INFO:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        birthday: action.payload.birthday,
        nationality: action.payload.nationality,
        email: action.payload.email,
        mobile: action.payload.mobile,
      };
    default:
      return state;
  }
};

export default formReducer;