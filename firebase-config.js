// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDq7tm2GTmzxzOzJ8wMebR9GN81vwh5fh4",
  authDomain: "hafiz-watches.firebaseapp.com",
  projectId: "hafiz-watches",
  storageBucket: "hafiz-watches.firebasestorage.app",
  messagingSenderId: "1085028449922",
  appId: "1:1085028449922:web:28a02320d99087d97cbe9b",
  measurementId: "G-CN014NGHV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const auth = getAuth(app);
const db = getFirestore(app);

// Export
export { app, auth, db };
