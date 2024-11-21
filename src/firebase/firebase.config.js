// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoK80l6QxaCd_X9illmBNMhkPF4uDuyns",
    authDomain: "career-path-c3906.firebaseapp.com",
    projectId: "career-path-c3906",
    storageBucket: "career-path-c3906.firebasestorage.app",
    messagingSenderId: "176346695103",
    appId: "1:176346695103:web:fb0b263cbe1d76003e8d0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;