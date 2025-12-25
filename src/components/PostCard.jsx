const PostCard = ({ post, onEdit, onDelete }) => (
    <div>
        <strong>{post.title}</strong>
        <p>{post.body}</p>
        <small>{post.author}</small>
        <button onClick={() => onEdit(post)}>Edit</button>
        <button onClick={() => onDelete(post.id)}>Hapus</button>
    </div>
);

export default PostCard;
