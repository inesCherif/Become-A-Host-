import * as types from "../../actions/actionTypes";

const initialState = {
  hostProvision: "I am providing things",
  activityTransport: "",
  carProblems: "",
};

const provisionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_TRANSPORT:
      return {
        ...state,
        activityTransport: action.payload,
      };
    case types.UPDATE_CAR:
      return {
        ...state,
        carProblems: action.payload,
      };
    case types.UPDATE_HOST_PROVISION:
      return {
        ...state,
        hostProvision: action.payload,
      };
    default:
      return state;
  }
};
export default provisionReducer;
