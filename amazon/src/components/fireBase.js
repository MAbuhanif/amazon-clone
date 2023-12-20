// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_QCUEAwXmoT3zOPiSSebjVz-KOZM-Dig",
  authDomain: "frontend-3ae51.firebaseapp.com",
  projectId: "frontend-3ae51",
  storageBucket: "frontend-3ae51.appspot.com",
  messagingSenderId: "1022723438820",
  appId: "1:1022723438820:web:a2e4b9fde9f8edd08114f1",
  measurementId: "G-CYQMEFEGLR",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore();
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
export default firebase;
