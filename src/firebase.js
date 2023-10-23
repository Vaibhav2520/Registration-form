// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "registeration-80600.firebaseapp.com",
  projectId: "registeration-80600",
  storageBucket: "registeration-80600.appspot.com",
  messagingSenderId: "787370301517",
  appId: process.env.FIREBASE_APP_ID,
  measurementId: "G-EFWYTC8DF5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
