import React from "react";
import { useParams } from "react-router";
import Post from "./post";
import IndividualComment from "./IndividualComment";

function IndividualPost(){
    const { id } = useParams();
    console.log(id);
    return(
        <div>
            <Post id={id} />
            <h3>Comments</h3>
            <IndividualComment id={id} />
        </div>
    );
}

export default IndividualPost;
