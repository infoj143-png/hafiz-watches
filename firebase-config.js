import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDq7tm2GTmzxzOzJ8wMebR9GN81vwh5fh4",
  authDomain: "hafiz-watches.firebaseapp.com",
  projectId: "hafiz-watches",
  storageBucket: "hafiz-watches.firebasestorage.app",
  messagingSenderId: "1085028449922",
  appId: "1:1085028449922:web:28a02320d99087d97cbe9b",
  measurementId: "G-CN014NGHV7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
