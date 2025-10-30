import React from "react";
import { useToggle } from '../hooks/useToggle.js'

function Comment(){
    const [comment, setComment] = useState('');

    const [show, toggleShow] = useToggle();



    return(

        <div>
            <h2>Comments</h2>
            <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}

            />
            <button type="submit">Submit</button>

            <h3>Existing Comments</h3>
            <button onClick={toggleShow}>Show Comments</button>
            {show && (
                <ul>
                    <li>{comment}</li>
                </ul>

            )}

        </div>
    );
}
export default Comment;