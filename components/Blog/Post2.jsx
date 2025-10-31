import React, {useState, useContext} from "react";
import IndividualComment from "./IndividualComment";
import { ThemeContext } from '../header.jsx';


function Post2() {
    let mode = useContext(ThemeContext);
    return (
        <div className={mode}>
            <BlogContent />
            <Comments />
        </div>
    );
}

export default Post2;

function BlogContent() {
    return (
        <main>
            <h3>CTF First Steps</h3>
            <p id="author">Anthony DiBernardo</p>
            <p id="date">2025-10-30 22:39</p>
            <p id="body">Nullam eget felis orci convallis, fermentum praesent dignissim nulla suspendisse tincidunt dui. Proin consectetur, dui, lacus lectus condimentum risus est pharetra dui nunc dolor. Dui id elementum, urna dictumst odio suspendisse ipsum nibh, imperdiet praesent ultricies. In, massa condimentum dui, faucibus nunc duis consectetur bibendum rutrum ut vivamus. Dui penatibus nunc ligula, lectus, pharetra semper dui venenatis consequat elementum purus. Sed nunc tincidunt egestas, eleifend convallis, dignissim tristique integer gravida at vestibulum. Tempor nam, elit, tortor suspendisse quis vel eu dui nibh id pretium. Dapibus diam nullam feugiat auctor nulla proin, consectetur ipsum tempus, lectus sit. Dapibus, aenean, condimentum felis.</p>
        </main>
    );
}
function Comments() {
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
