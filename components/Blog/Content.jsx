import React from "react";

function Content({value}){

    return(
        <div>
            <h3>{value.title}</h3>
            <p id="author">{value.author}</p>
            <p id="date">{value.date}</p>
            <p id="body">{value.body}</p>
        </div>
    );
}

export default Content;