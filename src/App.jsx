// import { useEffect, useState } from "react";
// import api from "./services/api";
// import Loading from "./screen/loading.jsx";

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [author, setAuthor] = useState("");
  
//   const [editingId, setEditingId] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false); // State Loading

//   useEffect(() => {
//     loadPosts();
//   }, []);

//   // 1. Ambil Data (GET)
//   const loadPosts = async () => {
//     setIsLoading(true);
//     try {
//       const res = await api.get("/posts");
//       setPosts(res.data);
//     } catch (err) {
//       alert("Gagal memuat data");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const isInputValid = () => {
//     if (!title.trim() || !body.trim() || !author.trim()) {
//       alert("Semua field harus diisi!");
//       return false;
//     }
//     return true;
//   };

//   // 2. Tambah Data (POST)
//   const addPost = async () => {
//     if (!isInputValid()) return;
//     setIsLoading(true);
//     const maxId = posts.length > 0 ? Math.max(...posts.map(p => Number(p.id))) : 0;
//     const newPost = { id: (maxId + 1).toString(), title, body, author };

//     try {
//       const res = await api.post("/posts", newPost);
//       setPosts([...posts, res.data]);
//       resetForm();
//     } catch (err) {
//       alert("Gagal menambah data");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleEditClick = (post) => {
//     setEditingId(post.id);
//     setTitle(post.title);
//     setBody(post.body);
//     setAuthor(post.author);
//     setIsModalOpen(true);
//   };

//   // 3. Update Data (PATCH)
//   const updatePost = async () => {
//     if (!isInputValid()) return;
//     setIsLoading(true);
//     try {
//       const res = await api.patch(`/posts/${editingId}`, { title, body, author });
//       setPosts(posts.map(post => (post.id === editingId ? res.data : post)));
//       closeModal();
//       alert("Berhasil diperbarui!");
//     } catch (err) {
//       alert("Gagal memperbarui");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // 4. Hapus Data (DELETE)
//   const deletePost = async (id) => {
//     if (!window.confirm("Hapus data ini?")) return;
//     setIsLoading(true);
//     try {
//       await api.delete(`/posts/${id}`);
//       setPosts(posts.filter(p => p.id !== id));
//     } catch (err) {
//       alert("Gagal menghapus");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     resetForm();
//   };

//   const resetForm = () => {
//     setTitle("");
//     setBody("");
//     setAuthor("");
//     setEditingId(null);
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", fontFamily: "Arial" }}>
//       <h1>CRUD Manager</h1>

//       {/* --- LOADING SCREEN OVERLAY --- */}
//       {isLoading && (
//       <Loading /> )}


//       {/* FORM TAMBAH */}
//       {!isModalOpen && (
//         <div style={styles.formContainer}>
//           <h3>Tambah Post Baru</h3>
//           <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Judul..." style={styles.input} />
//           <input value={body} onChange={e => setBody(e.target.value)} placeholder="Isi Post..." style={styles.input} />
//           <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Nama Author..." style={styles.input} />
//           <button onClick={addPost} style={{ ...styles.button, backgroundColor: "#3498db" }}>Tambah Post</button>
//         </div>
//       )}

//       {/* MODAL EDIT */}
//       {isModalOpen && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.modalContent}>
//             <h3 style={{ color: "white" }}>Edit Post (ID: {editingId})</h3>
//             <label style={{ color: "white" }}>Judul:</label>
//             <input value={title} onChange={e => setTitle(e.target.value)} style={styles.input} />
//             <label style={{ color: "white" }}>Isi:</label>
//             <input value={body} onChange={e => setBody(e.target.value)} style={styles.input} />
//             <label style={{ color: "white" }}>Penulis:</label>
//             <input value={author} onChange={e => setAuthor(e.target.value)} style={styles.input} />
            
//             <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
//               <button onClick={updatePost} style={{ ...styles.button, backgroundColor: "#2ecc71" }}>Simpan</button>
//               <button onClick={closeModal} style={{ ...styles.button, backgroundColor: "#e74c3c" }}>Batal</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* LIST SECTION */}
//       <div style={{ marginTop: "20px" }}>
//         {posts.map((post) => (
//           <div key={post.id} style={styles.card}>
//             <div style={{ color: "white" }}>
//               <strong>#{post.id} - {post.title}</strong>
//               <p style={{ fontSize: "14px", margin: "5px 0" }}>{post.body}</p>
//               <small>Penulis: {post.author}</small>
//             </div>
//             <div style={{ marginTop: "10px" }}>
//               <button onClick={() => handleEditClick(post)} style={styles.actionBtn}>Edit</button>
//               <button onClick={() => deletePost(post.id)} style={{ ...styles.actionBtn, color: "#ff7675" }}>Hapus</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   formContainer: { display: "flex", flexDirection: "column", gap: "10px", marginBottom: "30px", padding: "15px", border: "1px solid #ddd", borderRadius: "8px" },
//   input: { padding: "10px", borderRadius: "4px", border: "1px solid #ccc", marginBottom: "5px" },
//   button: { padding: "10px", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" },
//   card: { backgroundColor: "#6c5ce7", padding: "15px", borderRadius: "8px", marginBottom: "15px" },
//   actionBtn: { marginRight: "10px", padding: "5px 10px", cursor: "pointer", border: "none", borderRadius: "3px", backgroundColor: "white", color: "#0984e3" },
//   modalOverlay: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.7)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 },
//   modalContent: { backgroundColor: "blue", padding: "25px", borderRadius: "10px", width: "90%", maxWidth: "400px", display: "flex", flexDirection: "column", gap: "10px" },
  
// };

// export default App;



import Home from "./pages/Home";

function App() {
  return <Home />;
}

export default App;
