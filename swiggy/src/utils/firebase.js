// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz17UycYiAMzgD09dsx1puaP5M47truNM",
  authDomain: "swiggylite-9015e.firebaseapp.com",
  projectId: "swiggylite-9015e",
  storageBucket: "swiggylite-9015e.firebasestorage.app",
  messagingSenderId: "461894648193",
  appId: "1:461894648193:web:87379ee4e0a0ba1ec5a880",
  measurementId: "G-87LXF0K7C6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
