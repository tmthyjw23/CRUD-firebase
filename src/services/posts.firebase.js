import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from "firebase/firestore";
import { db } from "../firebase";

const postsRef = collection(db, "posts");

export const getPosts = async () => {
    const snapshot = await getDocs(postsRef);
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
};

export const addPost = async (data) => {
    const docRef = await addDoc(postsRef, data);
    return { id: docRef.id, ...data };
};

export const updatePost = async (id, data) => {
    const ref = doc(db, "posts", id);
    await updateDoc(ref, data);
    return { id, ...data };
};

export const deletePost = async (id) => {
    const ref = doc(db, "posts", id);
    await deleteDoc(ref);
    };
