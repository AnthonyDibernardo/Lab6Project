import React, { useState, useContext, useEffect} from "react";
import { useParams } from "react-router";
import IndividualComment from "./IndividualComment";
import { ThemeContext } from '../Context.jsx';
import axios from 'axios';
import Content from './Content.jsx';

function Post({Title, Author, Date, Body, comments}){
    let mode = useContext(ThemeContext);

    const params = useParams();

    const [loading, setLoading] = useState(true);
    const [postData, setPostData] = useState();

    console.log(postData);
    
    useEffect(() => {
        //Experimental and for testing
       axios.get("https://jsonplaceholder.typicode.com/posts").then(res =>console.log(res))
        .then(response => setPostData(response.data))
        .catch(error => console.error('Error fetching posts:', error))
        .finally(() => setLoading(false));
    }, []);

    return (
        <main className={mode}>
            {loading ? (<p>Loading</p>) : (<>
                <Content 
                title={postData.title}
                content={postData.body}
                author={postData.author}
                />

                <Comments /> 
            </>)}
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
