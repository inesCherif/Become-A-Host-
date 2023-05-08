import { db, auth } from "../../../firebase";
import { updateAccessActivity } from "./accessActions";

const accessDataToFirestore = (dispatch, access) => {
  const userId = auth.currentUser.uid;
  const applicationRef = db.collection("applications").doc(userId);

  if (
    access.guests_ability_to_do_activity
  ) {
    applicationRef
      .set({ access }, { merge: true })
      .then(() => {
        dispatch(updateAccessActivity({ guests_ability_to_do_activity: '' }));
      })
      .catch((error) => {
        console.error("Error writing form data to Firestore:", error);
      });
  } else {
    console.warn("Form data is incomplete.");
  }
};

export default accessDataToFirestore;