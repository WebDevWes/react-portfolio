import React from "react";

export default function Footer() {
  return (
    <footer className="footer" style={{position: "absolute", bottom: "0", width: "100%", height: "40px",lineHeight: "60px", backgroundColor: "#f5f5f5"}}>
      <div className="container" style={{width: "auto", maxWidth: "680px"}}>
        <span className="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>
  );
}
