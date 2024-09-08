// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJcM49ASvOxJXVoir0atU7tFjvdbE1zEc",
  authDomain: "hekto-api.firebaseapp.com",
  projectId: "hekto-api",
  storageBucket: "hekto-api.appspot.com",
  messagingSenderId: "914089530097",
  appId: "1:914089530097:web:fe74bb30675bd6f35c4f50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig