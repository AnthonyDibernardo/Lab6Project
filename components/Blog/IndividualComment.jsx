import React, { useEffect, useState } from "react";
import axios from 'axios';

function IndividualComment({id}){
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(res =>{
                setComments(res.data)
            })
            .catch(error => console.log(error))
            .finally(setLoading(false));
    }, []);
    return(
        <div>
            {loading ? (
                <p>Loading</p>
            ) : (
                comments.map( comment => (
                    <div key={comment.id}>
                        <p>{comment.name}</p>
                        <p>{comment.body}</p>
                    </div>
                ))   
            )
            }
        </div>
    );
}

export default IndividualComment;
