import React from 'react'

export default function Container(props) {
    return (
        <div style={{alignItems: "center", margin: "auto", backgroundColor: "#E0FFFF", width: "80%"}}>
            {props.children}
        </div>
    )
}