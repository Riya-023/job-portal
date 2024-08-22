// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdH-6J2t-FgZ-G-o64JOXcKbMYs410l4o",
  authDomain: "job-portol-e2d76.firebaseapp.com",
  projectId: "job-portol-e2d76",
  storageBucket: "job-portol-e2d76.appspot.com",
  messagingSenderId: "924365386888",
  appId: "1:924365386888:web:90e465056162e03c3c5b3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};