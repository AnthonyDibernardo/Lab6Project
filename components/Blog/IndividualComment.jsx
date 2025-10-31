import React from "react";

function IndividualComment({value}){

    return(
    <div>
    <p>name: {value.name}</p>
    <p>"{value.content}"</p>
    </div>
    );
}

export default IndividualComment;