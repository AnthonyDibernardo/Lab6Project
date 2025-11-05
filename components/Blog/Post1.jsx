import React, {useState} from "react";
import IndividualComment from "./IndividualComment";
import Post from './post.jsx'


function Post1() {
    return (
        <Post 
            Title="My First Blog Post" 
            Author="Anthony DiBernardo"
            Date="2025-10-30 22:43"
            Body="Cras ipsum quis praesent congue malesuada, nunc in, sed aenean nec id. Praesent, eget in ac convallis pretium, dapibus sem praesent in volutpat suspendisse. Ultricies pellentesque, lacus dignissim, sit congue euismod risus imperdiet ac hac dignissim. Eros, faucibus, faucibus consequat proin suspendisse purus convallis elementum et ligula at. Ac at consequat purus id, lacus, ante tellus facilisis nibh montes tortor. Vel, tempor, diam ipsum aliquam montes lectus sit dapibus eget at ultricies."
        />
    );
}

export default Post1;

function BlogContent() {
    return (
        <main>
            <h3>My First Blog Post</h3>
            <p id="author">Anthony DiBernardo</p>
            <p id="date">2025-10-30 22:43</p>
            <p id="body">Cras ipsum quis praesent congue malesuada, nunc in, sed aenean nec id. Praesent, eget in ac convallis pretium, dapibus sem praesent in volutpat suspendisse. Ultricies pellentesque, lacus dignissim, sit congue euismod risus imperdiet ac hac dignissim. Eros, faucibus, faucibus consequat proin suspendisse purus convallis elementum et ligula at. Ac at consequat purus id, lacus, ante tellus facilisis nibh montes tortor. Vel, tempor, diam ipsum aliquam montes lectus sit dapibus eget at ultricies.</p>
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
