import { initializeApp, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC6WJdpEJmJqvCQpD0dS_jJjMDvpGSLEiY",
    authDomain: "speedy-rite-401115.firebaseapp.com",
    projectId: "speedy-rite-401115",
    storageBucket: "speedy-rite-401115.appspot.com",
    messagingSenderId: "281762499856",
    appId: "1:281762499856:web:a1f8156bd353e6e9f5a995",
    measurementId: "G-4571T8S3C4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);


