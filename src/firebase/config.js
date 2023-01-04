// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKPkXh9PxI_LwXH23FcDxi6vlKkSxt4tY",
  authDomain: "proyectofinalreact-ae1c9.firebaseapp.com",
  projectId: "proyectofinalreact-ae1c9",
  storageBucket: "proyectofinalreact-ae1c9.appspot.com",
  messagingSenderId: "182921593030",
  appId: "1:182921593030:web:7c78e526e8acf08a2a97c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore = () => app

