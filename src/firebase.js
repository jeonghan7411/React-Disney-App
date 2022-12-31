// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdJWHOSMRAztwmz63i14-cTeV429Zhzlc",
  authDomain: "react-disney-plus-app-7be3a.firebaseapp.com",
  projectId: "react-disney-plus-app-7be3a",
  storageBucket: "react-disney-plus-app-7be3a.appspot.com",
  messagingSenderId: "692913504578",
  appId: "1:692913504578:web:d0ba294f59ae195cfc88db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
