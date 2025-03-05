// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIrwdaFNFpWdKR9t_PZ_vvA0S1BZzl3PU",
  authDomain: "book-store-mern-app-1c8f6.firebaseapp.com",
  projectId: "book-store-mern-app-1c8f6",
  storageBucket: "book-store-mern-app-1c8f6.firebasestorage.app",
  messagingSenderId: "726673442654",
  appId: "1:726673442654:web:49cc135a0e881cfe82b1cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
