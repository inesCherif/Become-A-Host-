import { UPDATE_TITLE } from "../../actions/actionTypes";

const initialState = {
  experienceTitle: "",
};

const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        experienceTitle: action.payload,
      };
    default:
      return state;
  }
};

export default titleReducer;

