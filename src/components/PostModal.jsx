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

const styles = {
    overlay: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.7)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 },
    modal: { backgroundColor: "blue", padding: "25px", borderRadius: "10px", width: "90%", maxWidth: "400px", display: "flex", flexDirection: "column", gap: "10px" }
};

export default PostModal;
