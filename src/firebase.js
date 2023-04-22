import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDk_tcyM3zj0mmI6Vzc2GIfAr2vdp_OdiI",
  authDomain: "chat-app-a321a.firebaseapp.com",
  projectId: "chat-app-a321a",
  storageBucket: "chat-app-a321a.appspot.com",
  messagingSenderId: "423007240403",
  appId: "1:423007240403:web:1ab29c651e3096040dd426"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
