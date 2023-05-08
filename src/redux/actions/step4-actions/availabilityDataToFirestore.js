import { db, auth } from "../../../firebase";
import { UPDATE_EXPERIENCE_HOSTING_TIME } from "../actionTypes";
import { updateExperienceHostingDays } from "./availibilityActions";

const availabilityDataToToFirestore = (dispatch, availability) => {
  const userId = auth.currentUser.uid;
  const applicationRef = db.collection("applications").doc(userId);

  if (availability.selectedDaysNames) {
    applicationRef
      .set({ availability }, { merge: true })
      .then(() => {
        dispatch(
          updateExperienceHostingDays({ selectedDaysNames: "Saturday" })
        );

        dispatch(
          UPDATE_EXPERIENCE_HOSTING_TIME({ experienceStartTime: "09:00 AM" })
        );
      })
      .catch((error) => {
        console.error("Error writing form data to Firestore:", error);
      });
  } else {
    console.warn("Form data is incomplete.");
  }
};

export default availabilityDataToToFirestore;
