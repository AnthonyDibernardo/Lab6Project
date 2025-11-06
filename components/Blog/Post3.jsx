import React, {useState, useContext} from "react";
import { ThemeContext } from '../Context.jsx';
import Post from "./post.jsx";

function Post3() {
    console.log(useContext(ThemeContext));
    return (
        <div>
            <Post 
                Title="SHPE National Convention" 
                Author="Anthony DiBernardo"
                Date="2025-10-30 22:42"
                Body="Vivamus eget ultricies eros maecenas consequat ut dui habitasse eu, et ac. Suspendisse praesent maximus, gravida dui vivamus id ornare vel tristique orci, elementum. Magna aenean adipiscing tempor, dui, nisl ac habitasse pellentesque et ac mus. Nibh rhoncus mus est massa massa, consequat in in malesuada massa velit. Nisl, ultricies consequat ultricies, sagittis pellentesque dignissim nunc sed aenean urna porttitor. Dapibus dui, efficitur velit, ullamcorper duis morbi nulla eget cras turpis ante. Vel aenean velit eu at gravida, fermentum id nulla tristique, in id. Nunc cursus aliquam, ullamcorper platea, arcu bibendum lacus convallis dui elementum tortor. Ornare id, vestibulum id."
            />
        </div>
    );
}

export default Post3;

