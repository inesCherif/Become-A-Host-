import { db, auth } from "../../../firebase";
import { updateCity, updateCountry, updateRegion, updateStreetAddress, updateZipCode } from "./locationsActions";

const locationsToFirestore = (dispatch, meetingLocation) => {
  const userId = auth.currentUser.uid;
  const applicationRef = db.collection("applications").doc(userId);

  if (
    meetingLocation.country &&
    meetingLocation.region &&
    meetingLocation.streetAddress &&
    meetingLocation.city &&
    meetingLocation.zipCode 
  ) {
    applicationRef
      .set({ meetingLocation }, { merge: true })
      .then(() => {
        dispatch(updateCountry({ country: "" }));
        dispatch(updateRegion({ region: "" }));
        dispatch(updateStreetAddress({ streetAddress: "" }));
        dispatch(updateCity({ city: "" }));
        dispatch(updateZipCode({ zipCode: "" }));
      })
      .catch((error) => {
        console.error("Error writing form data to Firestore:", error);
      });
  } else {
    console.warn("Form data is incomplete.");
  }
};

export default locationsToFirestore;
