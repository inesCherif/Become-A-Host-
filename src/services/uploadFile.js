import { auth, db, storage } from "../firebase";

// export const sendImageToFirebase = async (dataUrl) => {
//   const result = await fetch(dataUrl);
//   const blob = await result.blob();
//   const storageRef = storage.ref(); // get a reference to the root directory of your Firebase Storage
//   const imageRef = storageRef.child("images/my-image.jpg"); // create a reference to the image file you want to upload
//   await imageRef.put(blob); // upload the image file to Firebase Storage
//   const previewUrl = await imageRef.getDownloadURL(); // get the download URL of the uploaded image
//   return previewUrl;
// };

// export const sendImageToFirebase = (dataUrl, onProgress) => {
//   const userId = auth.currentUser.uid;

//   return new Promise(async (resolve, reject) => {
//     try {
//       const result = await fetch(dataUrl);
//       const blob = await result.blob();
//       const storageRef = storage.ref();
//       const imageRef = storageRef.child(`images/${userId}/${Date.now()}.jpg`); // Use the user's UID and a timestamp to generate a unique image name
//       const uploadTask = imageRef.put(blob);

//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           // Get the upload progress and update the UI
//           const progress =
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           onProgress(progress);
//         },
//         (error) => {
//           reject(error);
//         },
//         async () => {
//           // Upload complete, get the download URL and add it to the user's application document in Firestore
//           const previewUrl = await imageRef.getDownloadURL();
//           const applicationRef = db.collection("applications").doc(userId);
//           await applicationRef.set({ photoUrl: previewUrl }, { merge: true }); // add the image URL to the user's application document in Firestore
//           resolve({ previewUrl, progress: 100 });
//         }
//       );
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

export const sendImageToFirebase = (dataUrl, onProgress) => {
  const userId = auth.currentUser.uid;

  return new Promise(async (resolve, reject) => {
    try {
      const result = await fetch(dataUrl);
      const blob = await result.blob();
      const storageRef = storage.ref();
      const imageRef = storageRef.child(`images/${userId}.jpg`); // Use the user's UID to generate a unique image name

      // Delete any existing image for the user
      await imageRef.delete().catch((error) => {
        // Ignore "not found" errors
        if (error.code !== "storage/object-not-found") {
          throw error;
        }
      });

      // Upload the new image
      const uploadTask = imageRef.put(blob);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get the upload progress and update the UI
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          onProgress(progress);
        },
        (error) => {
          reject(error);
        },
        async () => {
          // Upload complete, get the download URL and add it to the user's application document in Firestore
          const previewUrl = await imageRef.getDownloadURL();
          const applicationRef = db.collection("applications").doc(userId);
          await applicationRef.set({ photoUrl: previewUrl }, { merge: true }); // add the image URL to the user's application document in Firestore
          resolve({ previewUrl, progress: 100 });
        }
      );
    } catch (error) {
      reject(error);
    }
  });
};
