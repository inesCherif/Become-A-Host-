import { db, auth } from "../../../firebase";
import { updatePrivateGroupSize, updatePublicGroupSize } from "./groupSizeActions";

const groupSizeDataToToFirestore = (dispatch, groupSize) => {
  const userId = auth.currentUser.uid;
  const applicationRef = db.collection("applications").doc(userId);

  if (
    groupSize.publicGroupSize &&
    groupSize.privateGroupSize 
  ) {
    applicationRef
      .set({ groupSize }, { merge: true })
      .then(() => {
        dispatch(updatePublicGroupSize({ publicGroupSize: "4" }));
        dispatch(updatePrivateGroupSize({ privateGroupSize: "4" }));
      })
      .catch((error) => {
        console.error("Error writing form data to Firestore:", error);
      });
  } else {
    console.warn("Form data is incomplete.");
  }
};

export default groupSizeDataToToFirestore;
