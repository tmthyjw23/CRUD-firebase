const PostForm = ({ onSubmit, values, onChange }) => (
    <>
        <input name="title" value={values.title} onChange={onChange} placeholder="Judul" />
        <input name="body" value={values.body} onChange={onChange} placeholder="Isi" />
        <input name="author" value={values.author} onChange={onChange} placeholder="Author" />
        <button onClick={onSubmit}>Simpan</button>
    </>
);

export default PostForm;
