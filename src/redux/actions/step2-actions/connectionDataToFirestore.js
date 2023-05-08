import { db, auth } from "../../../firebase";
import { updateConnectionActivity } from "./connectionAction";

const connectionDataToFirestore = (dispatch, connection) => {
  const userId = auth.currentUser.uid;
  const applicationRef = db.collection("applications").doc(userId);

  if (connection.communication_style) {
    applicationRef
      .set({ connection }, { merge: true })
      .then(() => {
        dispatch(updateConnectionActivity({ communication_style: "" }));
      })
      .catch((error) => {
        console.error("Error writing form data to Firestore:", error);
      });
  } else {
    console.warn("Form data is incomplete.");
  }
};

export default connectionDataToFirestore;
