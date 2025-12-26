import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDCBL6Z19KqjJXepe2nYQTUromy8L0DJCo",
    authDomain: "react-crud-firebase-learn.firebaseapp.com",
    projectId: "react-crud-firebase-learn",
    storageBucket: "react-crud-firebase-learn.firebasestorage.app",
    messagingSenderId: "265169069324",
    appId: "1:265169069324:web:0d7e41d4e5b86088b05529"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const posts = [
    { title: "test", body: "ini mengetest", author: "siapa?" },

];

const importData = async () => {
    for (const post of posts) {
        await addDoc(collection(db, "posts"), post);
    }
    console.log("Import selesai!");
};

importData();
