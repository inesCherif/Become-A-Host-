import * as types from "../../actions/actionTypes";

const initialState = {
  cutoffTime: "1 hour before Start time",
  datesRequest: "don't Allow people to request dates and times not listed"
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_CUTOFF_TIME:
      return {
        ...state,
        cutoffTime: action.payload.cutoffTime,
      };
    case types.UPDATE_DAYS_REQUEST:
      return {
        ...state,
        datesRequest: action.payload.datesRequest,
      };
    default:
      return state;
  }
};
export default bookingReducer;
