import React from "react";
import ProfilePic from "../assets/profilePic.jpg"

export default function profilePic() {
  return (
    <div>
      <img
        src={ProfilePic}
        alt="Profile"
        style={{
          float: "left",
          width: "180px",
          borderRadius: "50%",
          marginLeft: "20px",
          marginRight: "20px",
          marginTop: "-40px",
        }}
      />
    </div>
  );
}
