import React from "react";
import './css/App.css'

function Post() {
    return (
        <main>
            <h3>My First Blog Post</h3>
            <p id="author">Anthony DiBernardo</p>
            <p id="date">Thu Oct 23 2025 15:53:00</p>
            <p id="body">Cras ipsum quis praesent congue malesuada, nunc in, sed aenean nec id. Praesent, eget in ac convallis pretium, dapibus sem praesent in volutpat suspendisse. Ultricies pellentesque, lacus dignissim, sit congue euismod risus imperdiet ac hac dignissim. Eros, faucibus, faucibus consequat proin suspendisse purus convallis elementum et ligula at. Ac at consequat purus id, lacus, ante tellus facilisis nibh montes tortor. Vel, tempor, diam ipsum aliquam montes lectus sit dapibus eget at ultricies.</p>
            <form action="/submit-comment" method="POST">
                <textarea name="comment" placeholder="Write your comment here..." required></textarea>
                <button type="submit">Submit</button>
            </form>
            <h3>Existing Comments</h3>
            <ul>
                <li class="Comment">comment 1</li>
                <li class="Comment">comment 2</li>
                <li class="Comment">comment 3</li>
            </ul>
        </main>
    );
}

export default Post
