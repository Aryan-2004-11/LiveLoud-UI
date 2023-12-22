import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCPVNovajRDLCi2DBbWO1mfLQ4IyqAOMl4",
  authDomain: "liveloud-93752.firebaseapp.com",
  projectId: "liveloud-93752",
  storageBucket: "liveloud-93752.appspot.com",
  messagingSenderId: "471511767251",
  appId: "1:471511767251:web:eb70e8083ea2b4f8071c26",
  measurementId: "G-6CJQ7FDJ5E"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app)
export const auth = getAuth(app)
