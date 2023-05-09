import { UPDATE_DESCRIPTION,SET_SELECTED_DURATION } from "../../actions/actionTypes";

const initialState = {
  experienceDescription: "",
  experienceDuration: '2 hours',
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DESCRIPTION:
      return {
        ...state,
        experienceDescription: action.payload,
      };
    case SET_SELECTED_DURATION:
      return {
        ...state,
        experienceDuration: action.duration,
      };
    default:
      return state;
  }
};

export default experienceReducer;
