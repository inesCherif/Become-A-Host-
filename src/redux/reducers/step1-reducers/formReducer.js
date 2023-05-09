import * as types from "../../actions/actionTypes";

const initialState = {
  // country: "",
  // region: "",
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_fIRST_NAME:
      return {
        ...state,
        firstName: action.payload.firstName,
      };
    case types.UPDATE_LAST_NAME:
      return {
        ...state,
        lastName: action.payload.lastName,
      };
    case types.UPDATE_BIRTHDAY_NAME:
      return {
        ...state,
        birthday: action.payload.birthday,
      };
    case types.UPDATE_NATIONALITY:
      return {
        ...state,
        nationality: action.payload.nationality,
      };
    case types.UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload.email,
      };

    case types.UPDATE_MOBILE:
      return {
        ...state,
        mobile: action.payload.mobile,
      };
    default:
      return state;
  }
};
export default formReducer;



// import * as types from "../../actions/actionTypes"

// const initialState = {
//   firstName: "",
//   lastName: "",
//   birthday: "",
//   nationality: "",
//   email: "",
//   mobile: "",
// };

// const formReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case types.UPDATE_USER_INFO:
//       return {
//         ...state,
//         firstName: action.payload.firstName,
//         lastName: action.payload.lastName,
//         birthday: action.payload.birthday,
//         nationality: action.payload.nationality,
//         email: action.payload.email,
//         mobile: action.payload.mobile,
//       };
//     default:
//       return state;
//   }
// };

// export default formReducer;
