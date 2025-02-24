import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Optionally import the services that you want to use
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// import {...} from 'firebase/database';
import { doc, getDoc } from "firebase/firestore";
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDYWrHkHWc9rsBcqa2dBJjEzFRTQiOV4Os",
  authDomain: "mk5instagram.firebaseapp.com",
  projectId: "mk5instagram",
  storageBucket: "mk5instagram.firebasestorage.app",
  messagingSenderId: "547063852359",
  appId: "1:547063852359:web:6f52b91da434915e32b062",
  measurementId: "G-TC54DSTSRR",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const db = getFirestore(app);
export const addUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
export const newtreh = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
