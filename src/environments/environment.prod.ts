// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyGsYGI74ZDhvfH29BBSQbcspnGjnDtg0",
  authDomain: "infernorave-d2fff.firebaseapp.com",
  projectId: "infernorave-d2fff",
  storageBucket: "infernorave-d2fff.firebasestorage.app",
  messagingSenderId: "662263417077",
  appId: "1:662263417077:web:2cea54762a0e3de59f5dbc",
  measurementId: "G-PLEJCXBS35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);