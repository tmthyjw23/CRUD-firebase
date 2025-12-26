import { useEffect, useState } from "react";
import {
    getPosts,
    addPost,
    updatePost,
    deletePost
} from "../services/posts.firebase";

const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadPosts = async () => {
        setLoading(true);
        const data = await getPosts();
        setPosts(data);
        setLoading(false);
    };

    const create = async (post) => {
        const newPost = await addPost(post);
        setPosts(prev => [...prev, newPost]);
    };

    const update = async (id, post) => {
        await updatePost(id, post);
        setPosts(prev =>
        prev.map(p => (p.id === id ? { ...p, ...post } : p))
        );
    };

    const remove = async (id) => {
        await deletePost(id);
        setPosts(prev => prev.filter(p => p.id !== id));
    };

    useEffect(() => {
        loadPosts();
    }, []);

    return { posts, loading, create, update, remove };
};

export default usePosts;
