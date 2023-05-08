import * as types from "../actionTypes"

export const updateConnectionActivity = (activity) => ({
  type: types.UPDATE_CONNECTION,
  payload: activity,
});
