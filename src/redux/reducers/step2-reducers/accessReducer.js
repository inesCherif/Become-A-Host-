import * as types from "../../actions/actionTypes";

const initialState = {
  guests_ability_to_do_activity: "",
};

const accessReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_ACCESS:
      return {
        ...state,
        guests_ability_to_do_activity: action.payload,
      };
    default:
      return state;
  }
};
export default accessReducer;
