import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } 
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDcEyLPFBlwLtThzkClZkIaaltaHICouaU",
  authDomain: "login-2bd46.firebaseapp.com",
  projectId: "login-2bd46",
  storageBucket: "login-2bd46.firebasestorage.app",
  messagingSenderId: "529654054460",
  appId: "1:529654054460:web:9b7e2fe3eaee792fc6cd39",
  measurementId: "G-J9VLY9DDLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut, onAuthStateChanged };