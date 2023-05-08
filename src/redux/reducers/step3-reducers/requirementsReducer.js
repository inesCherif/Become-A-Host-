import * as types from "../../actions/actionTypes";

const initialState = {
  kids: "Parents can't bring kids under 2 years",
  accessibilityFeatures: "",
  activityLevel: "",
  skillLevel: "",
  age: "18",
};

const requirementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_KIDS:
      return {
        ...state,
        kids: action.payload,
      };
    case types.UPDATE_ACCESSIBILITY_FEATURES:
      return {
        ...state,
        accessibilityFeatures: action.payload,
      };
    case types.UPDATE_ACTIVITY_LEVEL:
      return {
        ...state,
        activityLevel: action.payload,
      };

    case types.UPDATE_SKILL_LEVEL:
      return {
        ...state,
        skillLevel: action.payload,
      };

    case types.UPDATE_SELECTED_AGE:
      return {
        ...state,
        age: action.payload,
      };
    default:
      return state;
  }
};
export default requirementsReducer;
