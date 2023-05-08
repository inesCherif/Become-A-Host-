import { db, auth } from "../../../firebase";
import { updateKids, updateAccessibilityFeatures, updateActivityLevel, updateSkillLevel, setSelectedAge } from "./requirementsActions";

const requirementsToDataToFirestore = (dispatch, requirements) => {
  const userId = auth.currentUser.uid;
  const applicationRef = db.collection("applications").doc(userId);

  if (
    requirements.accessibilityFeatures &&
    requirements.activityLevel &&
    requirements.skillLevel 
  ) {
    applicationRef
      .set({ requirements }, { merge: true })
      .then(() => {
        dispatch(updateKids({ kids: "Parents can't bring kids under 2 years" }));
        dispatch(updateAccessibilityFeatures({ accessibilityFeatures: "" }));
        dispatch(updateActivityLevel({ activityLevel: "" }));
        dispatch(updateSkillLevel({ skillLevel: "" }));
        dispatch(setSelectedAge({ age: "18" }));
      })
      .catch((error) => {
        console.error("Error writing form data to Firestore:", error);
      });
  } else {
    console.warn("Form data is incomplete.");
  }
};

export default requirementsToDataToFirestore;
