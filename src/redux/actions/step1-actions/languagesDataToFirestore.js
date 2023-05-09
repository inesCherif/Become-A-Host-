import { db, auth } from "../../../firebase";
import { updateEnglishLevel, updateLanguages } from "./languagesActions";

const languagesDataToFirstore = (dispatch, languages) => {
  const userId = auth.currentUser.uid;
  const applicationRef = db.collection("applications").doc(userId);

  if (languages.languages && languages.english_level) {
    applicationRef
      .set({ languages }, { merge: true })
      .then(() => {
        dispatch(updateLanguages({ languages: "" }));
        dispatch(updateEnglishLevel({ english_level: "" }));
      })
      .catch((error) => {
        console.error("Error writing form data to Firestore:", error);
      });
  } else {
    console.warn("Form data is incomplete.");
  }
};

export default languagesDataToFirstore;
