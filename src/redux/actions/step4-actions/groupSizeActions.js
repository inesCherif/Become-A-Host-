import * as types from "../actionTypes";

export const updatePublicGroupSize = (publicGroupSize) => ({
  type: types.UPDATE_PUBLIC_GROUP_SIZE,
  payload: {
    publicGroupSize,
  },
});

export const updatePrivateGroupSize = (privateGroupSize) => ({
  type: types.UPDATE_PRIVATE_GROUP_SIZE,
  payload: {
    privateGroupSize,
  },
});


