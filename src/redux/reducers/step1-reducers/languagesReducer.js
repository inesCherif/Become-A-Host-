import * as types from "../../actions/actionTypes";

const initialState = {
  languages: "",
  english_level: "",
};

const languagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_LAGUAGES_INFO:
      return {
        ...state,
        languages: action.payload.languages,
      };
    case types.UPDATE_ENGLISH_LEVEL:
      return {
        ...state,
        english_level: action.payload.english_level,
      };
    default:
      return state;
  }
};
export default languagesReducer;

