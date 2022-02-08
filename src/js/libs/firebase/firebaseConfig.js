// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getStorage} from "firebase/storage"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWX1c4Oh0ASGtbhO7C2JqsYUR5GCEPNgI",
  authDomain: "storefront-79639.firebaseapp.com",
  databaseURL: "https://storefront-79639-default-rtdb.firebaseio.com",
  projectId: "storefront-79639",
  storageBucket: "storefront-79639.appspot.com",
  messagingSenderId: "486486536022",
  appId: "1:486486536022:web:e9465daf9e52fd60d130f7",
  measurementId: "G-DYQ0S4BW5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);


export{ db, storage }