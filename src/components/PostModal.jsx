const PostModal = ({ open, children, onClose }) => {
    if (!open) return null;

    return (
        <div style={styles.overlay}>
        <div style={styles.modal}>
            {children}
            <button onClick={onClose}>Tutup</button>
        </div>
        </div>
    );
};

export default PostModal;
