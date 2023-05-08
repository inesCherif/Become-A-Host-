import { db, auth } from "../../../firebase";
import { updatePassionsInfo } from "./updatePassionsInfo";

const passionsDataToFirestore = (dispatch, passions) => {
  const userId = auth.currentUser.uid;
  const applicationRef = db.collection("applications").doc(userId);

  if (
    passions.userPassions &&
    passions.myFavoriteCityFeature &&
    passions.selfDescription
  ) {
    applicationRef
      .set({ passions }, { merge: true })
      .then(() => {
        dispatch(
          updatePassionsInfo({
            userPassions: "",
            myFavoriteCityFeature: "",
            selfDescription: "",
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

export default passionsDataToFirestore;
