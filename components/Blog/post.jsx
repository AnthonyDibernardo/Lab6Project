import React, { useState, useContext} from "react";
import IndividualComment from "./IndividualComment";
import { ThemeContext } from '../Context.jsx';

function Post({post}){
    let mode = useContext(ThemeContext);

    return (
        <main className={mode}>
            <h3>{post.Title}</h3>
            <p id="author">{post.Author}</p>
            <p id="date">{post.Date}</p>
            <p id="body">{post.Content}</p>
            <Comments /> 
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
