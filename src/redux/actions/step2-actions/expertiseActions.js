import * as types from "../actionTypes"

export const updateHostedActivity = (activity) => ({
  type: types.UPDATE_HOSTED_ACTIVITY,
  payload: activity,
});

export const updateGuideTour = (tour) => ({
  type: types.UPDATE_GUIDE_TOUR,
  payload: tour,
});
