// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCao5C12wS2mZ9K_7TjLn2KmZeNxLexA9w",
  authDomain: "myapp-764ce.firebaseapp.com",
  projectId: "myapp-764ce",
  storageBucket: "myapp-764ce.appspot.com",
  messagingSenderId: "148548644297",
  appId: "1:148548644297:web:5a0a8a10ec4f57a7990c18",
  measurementId: "G-2RJKX2MZ8W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
