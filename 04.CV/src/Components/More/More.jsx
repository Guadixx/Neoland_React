import React from "react";
import "./More.css"

const More = ({languages,habilities}) => {
    return ( 
    <div className="more">
        <div className="language card">
            <h2>{languages.language}</h2>
            <p>{languages.wrlevel}</p>
            <p>{languages.splevel}</p>
        </div>
        <div className="habilities card">
            <p>{habilities}</p>
        </div>
    </div>
)}

export default More;