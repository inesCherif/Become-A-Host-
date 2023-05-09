import { db, auth } from "../../../firebase";
import { updateUserAdress, updateUserCity, updateUserCountry, updateYearsOfLiving } from "./locationActions";

const locationDataToFirestore = (dispatch, location) => {
  const userId = auth.currentUser.uid;
  const applicationRef = db.collection("applications").doc(userId);

  if (
    location.country &&
    location.city &&
    location.years_of_living &&
    location.address 
  ) {
    applicationRef
      .set({ location }, { merge: true })
      .then(() => {
        dispatch(updateUserCountry({ country: "" }));
        dispatch(updateUserCity({ city: "" }));
        dispatch(updateYearsOfLiving({ years_of_living: "" }));
        dispatch(updateUserAdress({ address: "" }));
      })
      .catch((error) => {
        console.error("Error writing form data to Firestore:", error);
      });
  } else {
    console.warn("Form data is incomplete.");
  }
};

export default locationDataToFirestore;
