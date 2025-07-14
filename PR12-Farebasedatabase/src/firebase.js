// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5rF5fy6Ikb2GMY2l5D-_hAdu2Kltg01c",
  authDomain: "pr-12-firebase-database-7d38a.firebaseapp.com",
  projectId: "pr-12-firebase-database-7d38a",
  storageBucket: "pr-12-firebase-database-7d38a.firebasestorage.app",
  messagingSenderId: "852089499545",
  appId: "1:852089499545:web:c24b2165603c8e2b346d08",
  measurementId: "G-65F3KKL0D3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);