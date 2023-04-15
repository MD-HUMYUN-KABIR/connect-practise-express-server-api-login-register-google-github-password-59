// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg5CFN_6TAn8U0ZWjvs4neIxoLGDMy-Ys",
  authDomain: "express-server-api-login.firebaseapp.com",
  projectId: "express-server-api-login",
  storageBucket: "express-server-api-login.appspot.com",
  messagingSenderId: "1090418353825",
  appId: "1:1090418353825:web:2118651edec629d2a8f2e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;