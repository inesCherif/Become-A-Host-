import { db, auth } from "../../../firebase";
import { updateGuideLicense } from "./reviewActions";

const reviewDataToFirestore = (dispatch, guideLicense) => {
  const userId = auth.currentUser.uid;
  const applicationRef = db.collection("applications").doc(userId);

  if (guideLicense.guideLicense) {
    applicationRef
      .set({ guideLicense }, { merge: true })
      .then(() => {
        dispatch(updateGuideLicense({ guideLicense: "" }));
      })
      .catch((error) => {
        console.error("Error writing form data to Firestore:", error);
      });
  } else {
    console.warn("Form data is incomplete.");
  }
};

export default reviewDataToFirestore;
