// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfhoXowwlVwHcNPjt7lgbeiNrSgfJgnnM",
  authDomain: "square-phone.firebaseapp.com",
  projectId: "square-phone",
  storageBucket: "square-phone.appspot.com",
  messagingSenderId: "548012439981",
  appId: "1:548012439981:web:2456e64c50238bcfc74924"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
