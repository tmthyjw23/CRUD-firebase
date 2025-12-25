const PostCard = ({ post, onEdit, onDelete }) => (
    <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden group transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10">
        <div className="p-7">
            <h3 className="text-xl font-semibold text-gray-100 mb-3 group-hover:text-blue-400 transition-colors">{post.title}</h3>
            <p className="text-gray-400 leading-relaxed mb-6">{post.body}</p>
            <div className="flex justify-between items-center">
                <small className="text-gray-500 font-medium">{post.author}</small>
                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        onClick={() => onEdit(post)}
                        className="text-sm font-semibold text-blue-400 hover:text-blue-300"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onDelete(post.id)}
                        className="text-sm font-semibold text-red-400 hover:text-red-300"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default PostCard;
