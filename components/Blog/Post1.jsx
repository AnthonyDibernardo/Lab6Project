import React, {useState} from "react";
import Post from './post.jsx';
import Content from './Content.jsx';


function Post1() {
    return (
        <div>
            <Post
                Title="My First Blog Post" 
                Author="Anthony DiBernardo"
                Date="2025-10-30 22:43"
                Body="Cras ipsum quis praesent congue malesuada, nunc in, sed aenean nec id. Praesent, eget in ac convallis pretium, dapibus sem praesent in volutpat suspendisse. Ultricies pellentesque, lacus dignissim, sit congue euismod risus imperdiet ac hac dignissim. Eros, faucibus, faucibus consequat proin suspendisse purus convallis elementum et ligula at. Ac at consequat purus id, lacus, ante tellus facilisis nibh montes tortor. Vel, tempor, diam ipsum aliquam montes lectus sit dapibus eget at ultricies."
            />
        </div>
    );
}

export default Post1;
