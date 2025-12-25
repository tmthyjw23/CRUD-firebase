import { useState } from "react";
import usePosts from "../hooks/usePosts";
import PostForm from "../components/PostForm";
import PostModal from "../components/PostModal";
import PostCard from "../components/PostCard";
import Loading from "../components/Loading";

const Home = () => {
    const { posts, loading, addPost, updatePost, deletePost } = usePosts();

    const [form, setForm] = useState({ title: "", body: "", author: "" });
    const [editing, setEditing] = useState(null);

    const onChange = e =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const submit = () => {
        editing
        ? updatePost(editing.id, form)
        : addPost(form);

        setEditing(null);
        setForm({ title: "", body: "", author: "" });
    };

    return (
        <div>
        {loading && <Loading />}

        <PostForm
            values={form}
            onChange={onChange}
            onSubmit={submit}
        />

        {posts.map(post => (
            <PostCard
            key={post.id}
            post={post}
            onEdit={p => {
                setEditing(p);
                setForm(p);
            }}
            onDelete={deletePost}
            />
        ))}

        <PostModal open={!!editing} onClose={() => setEditing(null)}>
            <PostForm values={form} onChange={onChange} onSubmit={submit} />
        </PostModal>
        </div>
    );
};

export default Home;
