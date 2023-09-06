import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8ym8KNX_2CouVdFdZCRswa5gLfQh5NAw",
  authDomain: "blabla-f7d1c.firebaseapp.com",
  projectId: "blabla-f7d1c",
  storageBucket: "blabla-f7d1c.appspot.com",
  messagingSenderId: "371997180301",
  appId: "1:371997180301:web:b7d4aecf5faf107ed5fdc4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
