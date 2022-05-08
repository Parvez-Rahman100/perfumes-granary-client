// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId ,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId ,


  // apiKey: "AIzaSyD7BvA8QZ1CZHAhzX5WoYLHxvFDkClI3qw",
  // authDomain: "perfumes-granary.firebaseapp.com",
  // projectId: "perfumes-granary",
  // storageBucket: "perfumes-granary.appspot.com",
  // messagingSenderId: "669265864660",
  // appId: "1:669265864660:web:eec9439ac6b2b360de5841"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;