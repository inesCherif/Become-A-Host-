import * as types from "../actionTypes";

export const updateLanguages = (languages) => ({
  type: types.UPDATE_LAGUAGES_INFO,
  payload: {
    languages,
  },
});

export const updateEnglishLevel = (english_level) => ({
  type: types.UPDATE_ENGLISH_LEVEL,
  payload: {
    english_level,
  },
});
