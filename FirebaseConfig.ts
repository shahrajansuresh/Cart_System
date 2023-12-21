// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrkRJTs-sko4EkVTRptKu6bevdX4JjSi8",
  authDomain: "react-native-cart-system.firebaseapp.com",
  projectId: "react-native-cart-system",
  storageBucket: "react-native-cart-system.appspot.com",
  messagingSenderId: "501060342771",
  appId: "1:501060342771:web:8c2ee718085ce5d79ef886",
  measurementId: "G-DQD71TE6XD"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
// export const ANALYTICS = getAnalytics(FIREBASE_APP);