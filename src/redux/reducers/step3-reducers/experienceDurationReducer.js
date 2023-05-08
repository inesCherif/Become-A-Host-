import { SET_SELECTED_DURATION } from "../../actions/actionTypes";

const initialState = {
    experienceDuration: '2 hours',
  };

const experienceDurationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_DURATION:
      return {
        ...state,
        experienceDuration: action.duration,
      };
    default:
      return state;
  }
};

export default experienceDurationReducer;