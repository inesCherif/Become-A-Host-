import { db, auth } from "../../../firebase";
import { setSelectedDuration, updateDescriptionInfo } from "./experienceActions";

const experienceToFirebase = (dispatch, experience) => {
  const userId = auth.currentUser.uid;
  const applicationRef = db.collection("applications").doc(userId);

  if (experience.experienceDescription && experience.experienceDuration) {
    applicationRef
      .set({ experience }, { merge: true })
      .then(() => {
        dispatch(
          updateDescriptionInfo({
            experienceDescription: "",
          })
        );
        dispatch(
          setSelectedDuration({
            experienceDuration: "2 hours",
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

export default experienceToFirebase;
