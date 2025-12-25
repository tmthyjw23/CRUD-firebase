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
        <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto py-6 px-6">
          <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            TechSphere
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-10 px-6">
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-300 mb-5">Share Your Insight</h2>
          <PostForm
              values={form}
              onChange={onChange}
              onSubmit={submit}
              isEditing={!!editing}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>

        <PostModal open={!!editing} onClose={() => setEditing(null)}>
            <PostForm values={form} onChange={onChange} onSubmit={submit} isEditing={!!editing} />
        </PostModal>

        {loading && <Loading />}
      </main>
    </div>
    );
};

export default Home;
