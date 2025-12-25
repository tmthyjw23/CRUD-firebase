const PostForm = ({ onSubmit, values, onChange, isEditing }) => (
    <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
        <div className="space-y-6">
            <input
                name="title"
                value={values.title}
                onChange={onChange}
                placeholder="Post Title"
                className="w-full px-5 py-3 bg-gray-900 border-gray-700 border rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <textarea
                name="body"
                value={values.body}
                onChange={onChange}
                placeholder="What's on your mind?"
                className="w-full px-5 py-3 bg-gray-900 border-gray-700 border rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                rows="5"
            />
            <input
                name="author"
                value={values.author}
                onChange={onChange}
                placeholder="Your Name"
                className="w-full px-5 py-3 bg-gray-900 border-gray-700 border rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button
                onClick={onSubmit}
                className="w-full bg-linear-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all transform hover:scale-105"
            >
                {isEditing ? "Update Post" : "Submit Post"}
            </button>
        </div>
    </div>
);

export default PostForm;

