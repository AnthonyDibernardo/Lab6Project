import React, {useState, useContext} from "react";
import IndividualComment from "./IndividualComment";
import { ThemeContext } from '../header.jsx';


function Post3() {
    let mode = useContext(ThemeContext);
    return (
        <div className={mode}>
            <BlogContent />
            <Comments />
        </div>
    );
}

export default Post3;

function BlogContent() {
    return (
        <main>
            <h3>SHPE National Convention</h3>
            <p id="author">Anthony DiBernardo</p>
            <p id="date">2025-10-30 22:42</p>
            <p id="body">Vivamus eget ultricies eros maecenas consequat ut dui habitasse eu, et ac. Suspendisse praesent maximus, gravida dui vivamus id ornare vel tristique orci, elementum. Magna aenean adipiscing tempor, dui, nisl ac habitasse pellentesque et ac mus. Nibh rhoncus mus est massa massa, consequat in in malesuada massa velit. Nisl, ultricies consequat ultricies, sagittis pellentesque dignissim nunc sed aenean urna porttitor. Dapibus dui, efficitur velit, ullamcorper duis morbi nulla eget cras turpis ante. Vel aenean velit eu at gravida, fermentum id nulla tristique, in id. Nunc cursus aliquam, ullamcorper platea, arcu bibendum lacus convallis dui elementum tortor. Ornare id, vestibulum id.</p>
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
