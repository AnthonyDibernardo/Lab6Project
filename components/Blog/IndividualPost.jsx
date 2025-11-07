import React, { useState } from "react";
import { useParams } from "react-router";
import Post from "./post";
import IndividualComment from "./IndividualComment";
import axios from "axios";

function IndividualPost(){
    const { id } = useParams();
    const [comment, setComment] = useState({
        postId: {id}, 
        id: "6",
        name: "",
        email: "",
        body: ""
    });
    const addComment = (comment) => {
        axios.post(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
            comment
        })
        .then (response => {
            console.log(response);
        })
        .catch (error => {
            console.log(error);
        })
    };
    return(
        <div>
            <Post id={id} />
            <h3>Comments</h3>
            <IndividualComment id={id} />
            <input 
                value={comment.name}
                onChange={(e) => setComment({...comment, name: e.target.value})}
                placeholder="name">
            </input>
            <input 
                value={comment.email}
                onChange={(e) => setComment({...comment, email: e.target.value})}
                placeholder="email">
            </input>
                <br />
                <textarea
                    value={comment.content}
                    onChange={(e) => setComment({...comment, content: e.target.value})}
                />
                <br />
                <button 
                    type="submit"
                    onClick={() => addComment(comment)}>
                    Submit
                </button>
        </div>
    );
}

export default IndividualPost;
