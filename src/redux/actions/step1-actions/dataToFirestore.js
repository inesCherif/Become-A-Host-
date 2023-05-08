import { db, auth } from "../../../firebase";
import { updateUserInfo } from "./formActions";

const dataToFirestore = (dispatch, form) => {
  const userId = auth.currentUser.uid;
  const applicationRef = db.collection("applications").doc(userId);

  if (
    form.firstName &&
    form.lastName &&
    form.birthday &&
    form.nationality &&
    form.email &&
    form.mobile
  ) {
    applicationRef
      .set({ form }, { merge: true })
      .then(() => {
        dispatch(
          updateUserInfo({
            firstName: "",
            lastName: "",
            birthday: "",
            nationality: "",
            email: "",
            mobile: "",
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

export default dataToFirestore;
