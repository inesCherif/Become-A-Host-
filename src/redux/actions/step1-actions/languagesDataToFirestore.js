import { db, auth } from "../../../firebase";
import { updateLanguagesInfo } from "./languagesActions";

const languagesDataToFirstore = (dispatch, languages) => {
  const userId = auth.currentUser.uid;
  const applicationRef = db.collection("applications").doc(userId);

  if (
    languages.languages &&
    languages.english_level 
  ) {
    applicationRef
      .set({ languages }, { merge: true })
      .then(() => {
        dispatch(
            updateLanguagesInfo({
            languages: "",
            english_level: "",
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

export default languagesDataToFirstore;
