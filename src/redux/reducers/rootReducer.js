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
});

export default rootReducer;
