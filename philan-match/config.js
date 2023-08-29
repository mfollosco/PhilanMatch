// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
//https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhXzOM09R4jJjr04Urfz3VnDp4QQ5DTmk",
  authDomain: "philan-match.firebaseapp.com",
  projectId: "philan-match",
  storageBucket: "philan-match.appspot.com",
  messagingSenderId: "411075852530",
  appId: "1:411075852530:web:42ee6f374633ba1f11b86b"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase  }