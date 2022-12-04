import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBioU7fb4KocxgEdSXgEn3LCZ2qMl136Sw",
  authDomain: "hihi-ca905.firebaseapp.com",
  projectId: "hihi-ca905",
  storageBucket: "hihi-ca905.appspot.com",
  messagingSenderId: "907884536304",
  appId: "1:907884536304:web:5fc1c7aac196c2902dfd35",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
