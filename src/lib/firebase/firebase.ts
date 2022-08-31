// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKvaBpypk218cXdFFaajEBjfpxRh8NXO4",
  authDomain: "fujisan-sommelier-auth.firebaseapp.com",
  projectId: "fujisan-sommelier-auth",
  storageBucket: "fujisan-sommelier-auth.appspot.com",
  messagingSenderId: "73675267897",
  appId: "1:73675267897:web:0840c3e08c085819b892e8",
  measurementId: "G-9LQHH2FKH0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
