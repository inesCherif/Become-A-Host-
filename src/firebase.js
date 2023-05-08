import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCL6j4vcz8usNh0uAR9c1o7kJyS3UKgJZQ",
  authDomain: "become-a-host-test.firebaseapp.com",
  projectId: "become-a-host-test",
  storageBucket: "become-a-host-test.appspot.com",
  messagingSenderId: "727698374594",
  appId: "1:727698374594:web:4821ddcf28cd6305aee05b",
};
// init firebase app
firebase.initializeApp(firebaseConfig);

// Create a reference to the Firestore database
const db = firebase.firestore();
// Enable offline persistence
// db.enablePersistence();

const settings = {
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED,
  synchronizeTabs: true, 
};

db.settings(settings);

// const storage = getStorage(firebase.initializeApp(firebaseConfig));
const storage = firebase.storage();

// init services
const auth = firebase.auth();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const googleAuthProvider = () => auth.signInWithPopup(provider);
export { auth, facebookAuthProvider, db, storage };
