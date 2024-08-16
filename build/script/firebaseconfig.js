import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB2XrAjqYTWFqsRFdnLcNbgpoToLtUmv7A",
  authDomain: "e-commerce-app-5bf13.firebaseapp.com",
  projectId: "e-commerce-app-5bf13",
  storageBucket: "e-commerce-app-5bf13.appspot.com",
  messagingSenderId: "406019077453",
  appId: "1:406019077453:web:e93410146fb6754425f304",
  measurementId: "G-7F6C434D38"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
