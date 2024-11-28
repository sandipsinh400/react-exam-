// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChd3exvMe-2oXYWD8if6pEnm4weA2CGGU",
  authDomain: "fir-e14c9.firebaseapp.com",
  databaseURL: "https://fir-e14c9-default-rtdb.firebaseio.com",
  projectId: "fir-e14c9",
  storageBucket: "fir-e14c9.firebasestorage.app",
  messagingSenderId: "211602951847",
  appId: "1:211602951847:web:4ca1670848c78e54f81582"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth