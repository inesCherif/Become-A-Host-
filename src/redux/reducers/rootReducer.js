import { combineReducers } from "redux";
import userReducer from "./reducer";
import formReducer from "./step1-reducers/formReducer";
import locationReducer from "./step1-reducers/locationReducer";
import languagesReducer from "./step1-reducers/languagesReducer";
import passionsReducer from "./step1-reducers/passionsReducer";
import expertiseReducer from "./step2-reducers/expertiseReducer";
import accessReducer from "./step2-reducers/accessReducer";
import ConnectionReducer from "./step2-reducers/connectionReducer";
import titleReducer from "./step3-reducers/titleReducers";
import descriptionReducer from "./step3-reducers/descriptionReducer";
import experienceDurationReducer from "./step3-reducers/experienceDurationReducer";
import provisionReducer from "./step3-reducers/provisionReducer";
import requirementsReducer from "./step3-reducers/requirementsReducer";
import locationsReducer from "./step3-reducers/locationsReducer";
import groupSizeReducer from "./step4-reducers/groupSizeReducers";
import availabilityReducer from "./step4-reducers/availibilityReducer";
import bookingReducer from "./step4-reducers/bookingReducers";
import reviewReducer from "./step4-reducers/reviewReducer";

const rootReducer = combineReducers({
  user: userReducer,
  form: formReducer,
  location: locationReducer,
  languages: languagesReducer,
  passions: passionsReducer,
  expertise: expertiseReducer,
  access: accessReducer,
  connection: ConnectionReducer,
  title: titleReducer,
  experience: descriptionReducer,
  experienceDuration: experienceDurationReducer,
  provision: provisionReducer,
  requirements: requirementsReducer,
  meetingLocation: locationsReducer,
  groupSize: groupSizeReducer,
  availability: availabilityReducer,
  booking: bookingReducer,
  guideLicense: reviewReducer,
});

export default rootReducer;
