import React from "react";

function Comments() {
    return (
        <form action="/submit-comment" method="POST">
            <textarea name="comment" placeholder="Write your comment here..." required></textarea>
            <button type="submit">Submit</button>

            <h3>Existing Comments</h3>
            <ul>
                <li>comment 1</li>
                <li>comment 2</li>
                <li>comment 3</li>
            </ul>
        </form>
    );
}
export default Comments;
