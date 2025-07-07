// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// firebase auth
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOBjZbGfwcNMVIM1tLiPOrX4_0kkij0cg",
  authDomain: "logging-b1cd5.firebaseapp.com",
  projectId: "logging-b1cd5",
  storageBucket: "logging-b1cd5.firebasestorage.app",
  messagingSenderId: "136823058876",
  appId: "1:136823058876:web:6b3b693caa39ceec783bb9",
  measurementId: "G-V33848MFR9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export const GoogleAuthProvider = new GoogleAuthProvider();
export const analytics = getAnalytics(app);
