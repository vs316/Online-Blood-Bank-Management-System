import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgXPywAnpsXfqsTSdpFnFdS9E1EG0VETs",
  authDomain: "onl-bbms.firebaseapp.com",
  projectId: "onl-bbms",
  storageBucket: "onl-bbms.appspot.com",
  messagingSenderId: "773012139568",
  appId: "1:773012139568:web:786b350936288f091887f5",
  measurementId: "G-8SQFVXZRKW",
};
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const auth = firebase.auth();
const db = firestore;

export { db, auth };
