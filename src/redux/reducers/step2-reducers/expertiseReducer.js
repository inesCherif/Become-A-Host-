import * as types from "../../actions/actionTypes";

const initialState = {
  hostedActivity: "",
  guideTour: "",
};

const expertiseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_HOSTED_ACTIVITY:
      return {
        ...state,
        hostedActivity: action.payload,
      };
    case types.UPDATE_GUIDE_TOUR:
      return {
        ...state,
        guideTour: action.payload,
      };
    default:
      return state;
  }
};
export default expertiseReducer;
