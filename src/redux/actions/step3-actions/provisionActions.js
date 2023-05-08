import * as types from "../actionTypes";

export const updatehostProvision = (hostProvision) => ({
  type: types.UPDATE_HOST_PROVISION,
  payload: hostProvision,
});

export const updateActivityTransport = (activityTransport) => ({
  type: types.UPDATE_TRANSPORT,
  payload: activityTransport,
});

export const updatecarProblems = (carProblems) => ({
  type: types.UPDATE_CAR,
  payload: carProblems,
});
