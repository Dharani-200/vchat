
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA1toS4gCZDDVtpRBT0s9vP2SMLhQQR2N4",
  authDomain: "chat-894d0.firebaseapp.com",
  projectId: "chat-894d0",
  storageBucket: "chat-894d0.appspot.com",
  messagingSenderId: "489172651041",
  appId: "1:489172651041:web:85ce0213d5cabbafa2e760",
  measurementId: "G-PYPN96T5BL"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

//const analytics = getAnalytics(app);