import React, {useEffect, useState} from "react";
import axios from "axios";

function Content({title, content, authorID }){
    const [loading, setLoading] = useState(true);
    const [postData, setPostData] = useState();
    const [author, setAuthor] = useState();
    useEffect(() => {
       axios.get(`https://jsonplaceholder.typicode.com/users/${authorID}`)
        .then(response => {
            response => console.log(response);
            setAuthor(response.data);
        })
        .catch(error => console.error('Error fetching posts:', error))
        .finally(() => setLoading(false));
    }, []);
    return(
        <div>
            <h3>{title}</h3>
            {loading ? (<p>Loading</p>) : (<p id="author">{author.username} &lt;{author.email}&gt;</p>)}
            <p id="body">{content}</p>
        </div>
    );
}

export default Content;
