import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyArd2TMBbMtYLL0hUaFprm0eVzfyITawfI",
  authDomain: "crwn-db-ab7e3.firebaseapp.com",
  projectId: "crwn-db-ab7e3",
  storageBucket: "crwn-db-ab7e3.appspot.com",
  messagingSenderId: "1029957259681",
  appId: "1:1029957259681:web:b648c63236eae09ce2bbe0",
  measurementId: "G-MGZV6K83D3",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error, creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
