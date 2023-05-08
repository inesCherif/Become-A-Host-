import * as types from "../../actions/actionTypes";

const initialState = {
  publicGroupSize: "4",
  privateGroupSize: "4",
};

const groupSizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PUBLIC_GROUP_SIZE:
      return {
        ...state,
        publicGroupSize: action.payload.publicGroupSize,
      };
    case types.UPDATE_PRIVATE_GROUP_SIZE:
      return {
        ...state,
        privateGroupSize: action.payload.privateGroupSize,
      };
    default:
      return state;
  }
};
export default groupSizeReducer;
