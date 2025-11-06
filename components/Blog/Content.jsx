import React from "react";

function Content({title, author, date, body}){

    return(
        <div>
            <h3>{title}</h3>
            <p id="author">{author}</p>
            <p id="date">{date}</p>
            <p id="body">{body}</p>
        </div>
    );
}

export default Content;