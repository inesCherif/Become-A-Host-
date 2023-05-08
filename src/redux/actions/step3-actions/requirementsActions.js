import * as types from "../actionTypes";

export const updateKids = (kids) => ({
  type: types.UPDATE_KIDS,
  payload: kids,
});

export const updateAccessibilityFeatures = (accessibilityFeatures) => ({
  type: types.UPDATE_ACCESSIBILITY_FEATURES,
  payload: accessibilityFeatures,
});

export const updateActivityLevel = (activityLevel) => ({
  type: types.UPDATE_ACTIVITY_LEVEL,
  payload: activityLevel,
});

export const updateSkillLevel = (skillLevel) => ({
  type: types.UPDATE_SKILL_LEVEL,
  payload: skillLevel,
});


export function setSelectedAge(age) {
  return {
    type: types.UPDATE_SELECTED_AGE,
    payload: age,
  };
}
