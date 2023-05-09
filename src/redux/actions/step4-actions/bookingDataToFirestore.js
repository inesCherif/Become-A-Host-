import { db, auth } from "../../../firebase";
import { updateCutoff, updateDatesRequest } from "./bookingActions";

const bookingDataToToFirestore = (dispatch, booking) => {
  const userId = auth.currentUser.uid;
  const applicationRef = db.collection("applications").doc(userId);

  if (booking.cutoffTime) {
    applicationRef
      .set({ booking }, { merge: true })
      .then(() => {
        dispatch(updateCutoff({ cutoffTime: "1 hour before Start time" }));
      })
      .catch((error) => {
        console.error("Error writing form data to Firestore:", error);
      });
  } else {
    console.warn("Form data is incomplete.");
  }
};

export default bookingDataToToFirestore;
