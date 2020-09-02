import React from "react";

export default function Footer() {
  const getYear = () => new Date().getFullYear();

  return (
    <footer
      className="footer"
      style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
        height: "40px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        className="container"
        style={{
          width: "auto",
          maxWidth: "680px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <span className="text-muted">Copyright &#169; {getYear()}</span>
      </div>
    </footer>
  );
}
