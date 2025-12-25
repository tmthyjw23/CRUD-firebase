import { useEffect, useState } from "react";

function Loading() {
    return (
        <>
            <div style={styles.loadingOverlay}>
            <div className="spinner"></div>
            <p style={{ color: "white", marginTop: "10px" }}>Memproses data...</p>
            </div>
        </>
    );
}

const styles = {
  // Style Loading
    loadingOverlay: {
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000
    }
};

export default Loading;