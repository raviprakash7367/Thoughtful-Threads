// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-3d931.firebaseapp.com",
  projectId: "mern-blog-3d931",
  storageBucket: "mern-blog-3d931.appspot.com",
  messagingSenderId: "288892022504",
  appId: "1:288892022504:web:33d7ca1184f90197a2635d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);