// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDMxpD4Pd5ok2wRJb45ynDMgryQNaJyxQ",
  authDomain: "limeroad-auth.firebaseapp.com",
  projectId: "limeroad-auth",
  storageBucket: "limeroad-auth.appspot.com",
  messagingSenderId: "125586039612",
  appId: "1:125586039612:web:c18958ccf8dc8371bd7439",
  measurementId: "G-PL60Z4K181"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export default app;