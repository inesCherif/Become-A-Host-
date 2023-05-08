import * as types from "../../actions/actionTypes";

const initialState = {
  country: "",
  city: "",
  years_of_living: "",
  adress: "",
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_LOCATION_INFO:
      return {
        ...state,
        country: action.payload.country,
        city: action.payload.city,
        years_of_living: action.payload.years_of_living,
        adress: action.payload.adress,
      };
    default:
      return state;
  }
};

export default locationReducer;
