// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgs1qeZKHCZ_qsLyQGQkNmKtRrnfGqadw",
  authDomain: "phone-verification-e6e85.firebaseapp.com",
  projectId: "phone-verification-e6e85",
  storageBucket: "phone-verification-e6e85.appspot.com",
  messagingSenderId: "640712132136",
  appId: "1:640712132136:web:b0f0e5937ce92f6617d71d",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
