import * as types from "../../actions/actionTypes";

const initialState = {
  country: "",
  region: "",
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_USER_COUNTRY:
      return {
        ...state,
        country: action.payload.country,
      };
    case types.UPDATE_USER_CITY:
      return {
        ...state,
        city: action.payload.city,
      };
    case types.UPDATE_USER_YEARS_OF_LIVING:
      return {
        ...state,
        years_of_living: action.payload.years_of_living,
      };
    case types.UPDATE_USER_ADDRESS:
      return {
        ...state,
        address: action.payload.address,
      };
    default:
      return state;
  }
};

export default locationReducer;
