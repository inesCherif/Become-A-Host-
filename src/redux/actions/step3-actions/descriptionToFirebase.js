import { db, auth } from "../../../firebase";
import { updateDescriptionInfo } from "./updateDescriptionInfo";

const descriptionToFirestore = (dispatch, experience) => {
  const userId = auth.currentUser.uid;
  const applicationRef = db.collection("applications").doc(userId);

  if (experience.experienceDescription) {
    applicationRef
      .set({ experience }, { merge: true })
      .then(() => {
        dispatch(
          updateDescriptionInfo({
            experienceDescription: "",
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

export default descriptionToFirestore;
