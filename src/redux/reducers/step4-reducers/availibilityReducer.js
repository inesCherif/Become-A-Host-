import * as types from "../../actions/actionTypes";

const initialState = {
  selectedDaysNames: "Saturday",
  experienceStartTime: "09:00 AM",
};

const availabilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_EXPERIENCE_HOSTING_DAYS:
      return {
        ...state,
        selectedDaysNames: action.payload.selectedDaysNames,
      };
    case types.UPDATE_EXPERIENCE_HOSTING_TIME:
      return {
        ...state,
        experienceStartTime: action.payload.experienceStartTime,
      };
    default:
      return state;
  }
};
export default availabilityReducer;
