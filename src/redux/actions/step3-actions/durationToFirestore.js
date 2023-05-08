import { db, auth } from "../../../firebase";
import { setSelectedDuration} from "./experienceDuration";

const durationToFirestore = (dispatch, experienceDuration) => {
  const userId = auth.currentUser.uid;
  const applicationRef = db.collection("applications").doc(userId);

  if (experienceDuration.experienceDuration) {
    applicationRef
      .set({ experienceDuration }, { merge: true })
      .then(() => {
        dispatch(
          setSelectedDuration({
            experienceDuration: "",
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

export default durationToFirestore;