// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdE6bMrdniFSvHzNSwFqLnMIhaA6lw6ww",
  authDomain: "netflixgpt-eac9e.firebaseapp.com",
  projectId: "netflixgpt-eac9e",
  storageBucket: "netflixgpt-eac9e.appspot.com",
  messagingSenderId: "1038431450326",
  appId: "1:1038431450326:web:077cbebecb76e1e3e14577",
  measurementId: "G-0L0Q8H2TVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();