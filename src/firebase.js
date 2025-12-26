import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCBL6Z19KqjJXepe2nYQTUromy8L0DJCo",
    authDomain: "react-crud-firebase-learn.firebaseapp.com",
    projectId: "react-crud-firebase-learn",
    storageBucket: "react-crud-firebase-learn.firebasestorage.app",
    messagingSenderId: "265169069324",
    appId: "1:265169069324:web:0d7e41d4e5b86088b05529"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
