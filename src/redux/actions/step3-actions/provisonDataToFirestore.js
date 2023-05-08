import { db, auth } from "../../../firebase";
import {  updateActivityTransport, updatecarProblems, updatehostProvision } from "./provisionActions";

const provisionDataToFirestore = (dispatch, provision) => {
  const userId = auth.currentUser.uid;
  const applicationRef = db.collection("applications").doc(userId);

  if (
    provision.activityTransport &&
    provision.carProblems
  ) {
    applicationRef
      .set({ provision }, { merge: true })
      .then(() => {
        dispatch(updateActivityTransport({ activityTransport: '' }));
        dispatch(updatecarProblems({ carProblems: '' }));
        dispatch(updatehostProvision({ hostProvision: 'I am providing things' }));
      })
      .catch((error) => {
        console.error("Error writing form data to Firestore:", error);
      });
  } else {
    console.warn("Form data is incomplete.");
  }
};

export default provisionDataToFirestore;
