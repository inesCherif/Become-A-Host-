import * as types from "../actionTypes";

export const updateCutoff = (cutoffTime) => ({
  type: types.UPDATE_CUTOFF_TIME,
  payload: {
    cutoffTime,
  },
});

export const updateDatesRequest = (datesRequest) => ({
  type: types.UPDATE_DAYS_REQUEST,
  payload: {
    datesRequest,
  },
});
