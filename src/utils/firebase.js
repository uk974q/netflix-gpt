// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVlQ2D9lRtqe8lZM0cJsNOPa84-bjTBwg",
  authDomain: "myflixgpt.firebaseapp.com",
  projectId: "myflixgpt",
  storageBucket: "myflixgpt.appspot.com",
  messagingSenderId: "240694453810",
  appId: "1:240694453810:web:b5812c9416cd9475f93e2b",
  measurementId: "G-17QPLQ3MFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);