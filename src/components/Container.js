import React from 'react'

export default function Container(props) {
    return (
        <div style={{
          borderBottom: "dotted teal 5px",
          fontSize: "1.8rem",
          fontWeight: "bold",
          backgroundColor: "#E0FFFF",
          height: "100px"
        }}>
            {props.children}
        </div>
    )
}