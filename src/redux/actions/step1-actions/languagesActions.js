import * as types from "../actionTypes";

export const updateLanguagesInfo = (languages, english_level) => ({
  type: types.UPDATE_LAGUAGES_INFO,
  payload: {
    languages,
    english_level,
  },
});
