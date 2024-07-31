// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLSkalgZtHmHKhZK06sKemaDqEAIamA88",
  authDomain: "helping-hands-charity.firebaseapp.com",
  projectId: "helping-hands-charity",
  storageBucket: "helping-hands-charity.appspot.com",
  messagingSenderId: "746330192211",
  appId: "1:746330192211:web:b4e00f6f16e63ba6c0c9a6",
  measurementId: "G-0LZ3ELKQQS" // Optional
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
