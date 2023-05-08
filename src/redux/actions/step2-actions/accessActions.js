import * as types from "../actionTypes"

export const updateAccessActivity = (activity) => ({
  type: types.UPDATE_ACCESS,
  payload: activity,
});
