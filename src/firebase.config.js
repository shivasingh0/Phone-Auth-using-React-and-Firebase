
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9CvYaPqZ3wRDIHCuA6LWg4Ih5wSrr6ok",
  authDomain: "login-signup-auth-daec3.firebaseapp.com",
  projectId: "login-signup-auth-daec3",
  storageBucket: "login-signup-auth-daec3.appspot.com",
  messagingSenderId: "578122537970",
  appId: "1:578122537970:web:adac349a672a5c0ae0696b",
  measurementId: "G-1FHXNPFXSF"
}

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
