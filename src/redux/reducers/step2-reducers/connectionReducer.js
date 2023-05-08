import * as types from "../../actions/actionTypes";

const initialState = {
  communication_style: "",
};

const ConnectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_CONNECTION:
      return {
        ...state,
        communication_style: action.payload,
      };
    default:
      return state;
  }
};
export default ConnectionReducer;
