import * as types from "../../actions/actionTypes";

const initialState = {
    guideLicense: "",
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_GUIDE_LICENSE:
      return {
        ...state,
        guideLicense: action.payload,
      };
    default:
      return state;
  }
};
export default reviewReducer;
