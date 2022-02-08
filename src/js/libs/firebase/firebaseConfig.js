// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getStorage} from "firebase/storage"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIbHRkz3KA2UGcOCWzJCfbd1ZBefHuGss",
  authDomain: "chocolatestore-f86cb.firebaseapp.com",
  databaseURL: "https://chocolatestore-f86cb-default-rtdb.firebaseio.com",
  projectId: "chocolatestore-f86cb",
  storageBucket: "chocolatestore-f86cb.appspot.com",
  messagingSenderId: "348373430667",
  appId: "1:348373430667:web:74aacb5f4105599f1fbf8e",
  measurementId: "G-SZVKQHH1TX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app)


export{ db, storage }