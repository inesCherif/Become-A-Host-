import * as types from "../actions/actionTypes";
//  Redux reducer function for managing the state of a user
const initialState = {
  // property indicates whether the user data is currently being loaded or not
  loading: false,
  //   object that represents the currently authenticated user
  currentUser: null,
  //   object contains any error messages related to user data.
  error: null,
};


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_START:
      case types.LOGIN_START:
        case types.GOOGLE_SIGN_IN_START:
      return {
        ...state,
        loading: true,
      };
      case types.SET_USER :
        return {
          ...state,
          loading: false,
          currentUser: action.payload
        }
    case types.REGISTER_SUCCESS:
      case types.LOGIN_SUCCESS:
        case types.GOOGLE_SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case types.REGISTER_FAIL:
      case types.LOGIN_FAIL:
        case types.GOOGLE_SIGN_IN_FAIL:
      return {
        ...state,
        laoding: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
