import * as types from "../../actions/actionTypes";

const initialState = {
  userPassions: "",
  myFavoriteCityFeature: "",
  selfDescription: "",
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PASSIONS_INFO:
      return {
        ...state,
        userPassions: action.payload.userPassions,
      };
    case types.UPDATE_FAV_CITY_FEATURES:
      return {
        ...state,
        myFavoriteCityFeature: action.payload.myFavoriteCityFeature,
      };
    case types.UPDATE_SELF_DESCRIPTION:
      return {
        ...state,
        selfDescription: action.payload.selfDescription,
      };
    default:
      return state;
  }
};
export default locationReducer;
