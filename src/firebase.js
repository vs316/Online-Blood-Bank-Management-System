import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgXPywAnpsXfqsTSdpFnFdS9E1EG0VETs",
  authDomain: "onl-bbms.firebaseapp.com",
  projectId: "onl-bbms",
  storageBucket: "onl-bbms.appspot.com",
  messagingSenderId: "773012139568",
  appId: "1:773012139568:web:786b350936288f091887f5",
  measurementId: "G-8SQFVXZRKW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
