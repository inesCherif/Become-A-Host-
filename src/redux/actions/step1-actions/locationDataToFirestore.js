import { db, auth } from "../../../firebase";
import { updateLocationInfo } from "./locationActions";

const locationDataToFirestore = (dispatch, location) => {
  const userId = auth.currentUser.uid;
  const applicationRef = db.collection("applications").doc(userId);

  if (
    location.country &&
    location.city &&
    location.years_of_living &&
    location.adress
  ) {
    applicationRef
      .set({ location }, { merge: true })
      .then(() => {
        dispatch(
          updateLocationInfo({
            country: "",
            city: "",
            years_of_living: "",
            adress: "",
          })
        );
      })
      .catch((error) => {
        console.error("Error writing form data to Firestore:", error);
      });
  } else {
    console.warn("Form data is incomplete.");
  }
};

export default locationDataToFirestore;
