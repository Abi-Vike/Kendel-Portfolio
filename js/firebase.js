// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAVp68MAayD3XlAsG1cPx4XrCUfAh8RgU",
  authDomain: "kendel-portfolio.firebaseapp.com",
  projectId: "kendel-portfolio",
  storageBucket: "kendel-portfolio.firebasestorage.app",
  messagingSenderId: "795296409780",
  appId: "1:795296409780:web:a840f2534fbf254f990fe1",
  measurementId: "G-NP33BTZZBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);