import * as types from "../actionTypes";

export const updateExperienceHostingDays = (selectedDaysNames) => ({
  type: types.UPDATE_EXPERIENCE_HOSTING_DAYS,
  payload: {
    selectedDaysNames,
  },
});


export const updateExperienceStartTime = (experienceStartTime) => ({
  type: types.UPDATE_EXPERIENCE_HOSTING_TIME,
  payload: {
    experienceStartTime,
  },
});


