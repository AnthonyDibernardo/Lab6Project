import React, { useState, useContext, useEffect} from "react";
import IndividualComment from "./IndividualComment";
import { ThemeContext } from '../Context.jsx';
import axios from 'axios';

function Post({Title, Author, Date, Body, comments}){
    let mode = useContext(ThemeContext);
    
    useEffect(() => {
        //Experimental and for testing
       axios.get("https://jsonplaceholder.typicode.com/posts/1").then(res =>console.log(res))
    });

    return (
        <main className={mode}>
            <h3>{Title}</h3>
            <p id="author">{Author}</p>
            <p id="date">{Date}</p>
            <p id="body">{Body}</p>
            <IndividualComment id={1}/> 
        </main>
    );
}

export default Post;

function Comments(){
    const [comment, setComment] = useState({
        name: "",
        content: ""
    });

    const [commentList, setCommentList] = useState([]);

    const addComment = (comment) => {
        setCommentList([...commentList, comment])
    };
    return(
        <div>
            <h2>Comments</h2>

            <input 
            value={comment.name}
            onChange={(e) => setComment({...comment, name: e.target.value})}
            placeholder="name"></input>
            <br />
            <textarea
            value={comment.content}
            onChange={(e) => setComment({...comment, content: e.target.value})}

            />
            <br />
            <button 
            type="submit"
            onClick={() => addComment(comment)}>
                Submit</button>


            {commentList.length === 0 ? (<p>There are no comments to display</p>) : (
            <div>
                <h3>Existing Comments</h3>
                <ul>
                    {commentList.map((value, index) => (
                        <IndividualComment value={value}></IndividualComment>
                    ))}
                </ul>
            </div>
            )}
            

        </div>
    );
}
