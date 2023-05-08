import { db, auth } from "../../../firebase";
import { updateTitleInfo } from "./updateTitleInfo";

const titleToFirestore = (dispatch, title) => {
  const userId = auth.currentUser.uid;
  const applicationRef = db.collection("applications").doc(userId);

  if (title.experienceTitle) {
    applicationRef
      .set({ title }, { merge: true })
      .then(() => {
        dispatch(
          updateTitleInfo({
            experienceTitle: "",
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

export default titleToFirestore;
