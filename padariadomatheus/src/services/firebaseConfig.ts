// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2XtpqP37mPA7F9omv425ZvhhTBM-r1Yc",
  authDomain: "projetopadaria-c81cc.firebaseapp.com",
  projectId: "projetopadaria-c81cc",
  storageBucket: "projetopadaria-c81cc.firebasestorage.app",
  messagingSenderId: "1035261339309",
  appId: "1:1035261339309:web:a0802d3d3e0cd4ed2b0824"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;