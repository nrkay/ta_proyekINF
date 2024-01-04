// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {
    collection,
    getFirestore,
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBna5SeDFGnB_j_Ffej0yQiFLwkkn4AySg",
  authDomain: "antybully-3f346.firebaseapp.com",
  projectId: "antybully-3f346",
  storageBucket: "antybully-3f346.appspot.com",
  messagingSenderId: "626921473708",
  appId: "1:626921473708:web:c2983b290aee8786f5c109",
  measurementId: "G-36L8JJM61Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
