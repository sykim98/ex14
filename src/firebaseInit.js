// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI8uCHzuqDBMAlZJmYtvbNq6Zg10vvijE",
  authDomain: "react-340cf.firebaseapp.com",
  databaseURL: "https://react-340cf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-340cf",
  storageBucket: "react-340cf.appspot.com",
  messagingSenderId: "59169157170",
  appId: "1:59169157170:web:fb843a75fcedf509798c2b",
  measurementId: "G-L5BB0MD49L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);