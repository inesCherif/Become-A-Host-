import { db, auth } from "../../../firebase";
import { updateHostedActivity,updateGuideTour } from "./expertiseActions";

const expertiseDataToFirestore = (dispatch, expertise) => {
  const userId = auth.currentUser.uid;
  const applicationRef = db.collection("applications").doc(userId);

  if (
    expertise.hostedActivity &&
    expertise.guideTour
  ) {
    applicationRef
      .set({ expertise }, { merge: true })
      .then(() => {
        dispatch(updateHostedActivity({ hostedActivity: '' }));
        dispatch(updateGuideTour({ guideTour: '' }));
      })
      .catch((error) => {
        console.error("Error writing form data to Firestore:", error);
      });
  } else {
    console.warn("Form data is incomplete.");
  }
};

export default expertiseDataToFirestore;
