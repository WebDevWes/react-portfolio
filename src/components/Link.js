import React from "react";

export default function Link(props) {
  return (
    <div style={{marginBottom: "10px"}}>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    </div>
  );
}
