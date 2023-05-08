import * as types from "../../actions/actionTypes";
const initialState = {};

export const experienceStepsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EXPERIENCE_STEPS:
      return {
        ...state,
        experienceSteps: action.payload,
      };
    default:
      return state;
  }
};
