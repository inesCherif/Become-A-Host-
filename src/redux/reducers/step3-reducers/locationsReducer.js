import * as types from "../../actions/actionTypes";

const initialState = {
  country: "",
  region: "",
};

const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_COUNTRY:
      return {
        ...state,
        country: action.payload.country,
      };
    case types.UPDATE_REGION:
      return {
        ...state,
        region: action.payload.region,
      };
    case types.UPDATE_STREET_ADDRESS:
      return {
        ...state,
        streetAddress: action.payload.streetAddress,
      };
    case types.UPDATE_CITY:
      return {
        ...state,
        city: action.payload.city,
      };
    case types.UPDATE_ZIP_CODE:
      return {
        ...state,
        zipCode: action.payload.zipCode,
      };
    default:
      return state;
  }
};
export default locationsReducer;
