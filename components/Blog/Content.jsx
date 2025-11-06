import React from "react";

function Content({title, content, author}){

    return(
        <div>
            <h3>{title}</h3>
            <p id="author">{author}</p>
            <p id="body">{content}</p>
        </div>
    );
}

export default Content;