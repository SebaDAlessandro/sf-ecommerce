// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCtUq0oaWjPJBVoNwp7nPybP0iL1rEiTfc",
  authDomain: "sf-ecommerce-76f8b.firebaseapp.com",
  projectId: "sf-ecommerce-76f8b",
  storageBucket: "sf-ecommerce-76f8b.appspot.com",
  messagingSenderId: "911194511175",
  appId: "1:911194511175:web:8c9c551a2f0bb738115e62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app