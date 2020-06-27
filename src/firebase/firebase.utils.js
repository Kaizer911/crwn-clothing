import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAZ7rcbeK-RHiye_wLCbqahlxSyUnp6FSE",
  authDomain: "crwn-db-17933.firebaseapp.com",
  databaseURL: "https://crwn-db-17933.firebaseio.com",
  projectId: "crwn-db-17933",
  storageBucket: "crwn-db-17933.appspot.com",
  messagingSenderId: "714278685541",
  appId: "1:714278685541:web:4cabd278a2764b7f74af8c",
  measurementId: "G-P8P0YDCD1E",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
