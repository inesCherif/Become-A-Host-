import { UPDATE_DESCRIPTION } from "../../actions/actionTypes";

const initialState = {
    experienceDescription: "",
};

const descriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DESCRIPTION:
      return {
        ...state,
        experienceDescription: action.payload,
      };
    default:
      return state;
  }
};

export default descriptionReducer;

