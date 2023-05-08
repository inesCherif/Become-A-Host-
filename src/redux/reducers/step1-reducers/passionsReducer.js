import * as types from "../../actions/actionTypes";

const initialState = {
  userPassions: "",
  myFavoriteCityFeature: "",
  selfDescription: "",
};

const passionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PASSIONS_INFO:
      return {
        ...state,
        userPassions: action.payload.userPassions,
        myFavoriteCityFeature: action.payload.myFavoriteCityFeature,
        selfDescription: action.payload.selfDescription,
      };
    default:
      return state;
  }
};

export default passionsReducer;
