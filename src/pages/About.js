import React from "react";
import Container from "../components/Container";
import ProfilePic from "../images/profilePic.jpg";

export default function About() {
  return (
    <Container>
      <img
        src={ProfilePic}
        alt="Profile"
        style={{
          float: "left",
          width: "180px",
          borderRadius: "50%",
          marginLeft: "20px",
        }}
      />
      <div
        style={{
          borderBottom: "dotted teal 5px",
          fontSize: "1.8rem",
          fontWeight: "bold",
        }}
      >
        About Me
      </div>
    </Container>
  );
}
