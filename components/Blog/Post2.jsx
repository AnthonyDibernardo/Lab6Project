import React, {useState, useContext} from "react";
import { ThemeContext } from "../Context.jsx";
import Post from "./post.jsx";


function Post2() {
    console.log(useContext(ThemeContext));
    return (
        <div>
            <Post 
                Title="CTF First Steps" 
                Author="Anthony DiBernardo"
                Date="2025-10-30 22:39"
                Body="Nullam eget felis orci convallis, fermentum praesent dignissim nulla suspendisse tincidunt dui. Proin consectetur, dui, lacus lectus condimentum risus est pharetra dui nunc dolor. Dui id elementum, urna dictumst odio suspendisse ipsum nibh, imperdiet praesent ultricies. In, massa condimentum dui, faucibus nunc duis consectetur bibendum rutrum ut vivamus. Dui penatibus nunc ligula, lectus, pharetra semper dui venenatis consequat elementum purus. Sed nunc tincidunt egestas, eleifend convallis, dignissim tristique integer gravida at vestibulum. Tempor nam, elit, tortor suspendisse quis vel eu dui nibh id pretium. Dapibus diam nullam feugiat auctor nulla proin, consectetur ipsum tempus, lectus sit. Dapibus, aenean, condimentum felis."
            />
        </div>
    );
}

export default Post2;

