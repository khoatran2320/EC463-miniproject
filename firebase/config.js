// Import the functions you need from the SDKs you need
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9fV8ckN8qksj05BYuepH_tH6ks_OCpBA",
  authDomain: "ec463-miniproject-8f46b.firebaseapp.com",
  projectId: "ec463-miniproject-8f46b",
  storageBucket: "ec463-miniproject-8f46b.appspot.com",
  messagingSenderId: "31817567446",
  appId: "1:31817567446:web:c3b295a453968ac43ccd77"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export const fs = firebase.firestore();
export default auth;