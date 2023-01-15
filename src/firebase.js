import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9irZNLszirWhOZyyWy8rgzi-x735wpRI",
  authDomain: "bchat-ae4c9.firebaseapp.com",
  projectId: "bchat-ae4c9",
  storageBucket: "bchat-ae4c9.appspot.com",
  messagingSenderId: "177827379212",
  appId: "1:177827379212:web:600d7f7c7a62813461d629",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
