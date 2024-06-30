// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW2iaLCmoV0ACiXi7XfCqCHeWBZu9O5yI",
  authDomain: "homeatz-60525.firebaseapp.com",
  projectId: "homeatz-60525",
  storageBucket: "homeatz-60525.appspot.com",
  messagingSenderId: "664660524236",
  appId: "1:664660524236:web:baa4d51ffe067cd3ae5669",
  measurementId: "G-F1B60XE854"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);