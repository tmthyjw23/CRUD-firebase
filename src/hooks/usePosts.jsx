import { useEffect, useState } from "react";
import {
    fetchPosts,
    createPost,
    updatePostById,
    deletePostById
} from "../services/posts.service";

const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loadPosts = async () => {
        setLoading(true);
        try {
        const res = await fetchPosts();
        setPosts(res.data);
        } catch {
        setError("Gagal memuat data");
        } finally {
        setLoading(false);
        }
    };

    const addPost = async (post) => {
        setLoading(true);
        try {
        const res = await createPost(post);
        setPosts(prev => [...prev, res.data]);
        } finally {
        setLoading(false);
        }
    };

    const updatePost = async (id, post) => {
        setLoading(true);
        try {
        const res = await updatePostById(id, post);
        setPosts(prev =>
            prev.map(p => (p.id === id ? res.data : p))
        );
        } finally {
        setLoading(false);
        }
    };

    const deletePost = async (id) => {
        setLoading(true);
        try {
        await deletePostById(id);
        setPosts(prev => prev.filter(p => p.id !== id));
        } finally {
        setLoading(false);
        }
    };

    useEffect(() => {
        loadPosts();
    }, []);

    return {
        posts,
        loading,
        error,
        addPost,
        updatePost,
        deletePost
    };
};

export default usePosts;
