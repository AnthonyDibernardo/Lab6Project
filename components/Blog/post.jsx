import React, { useState, useContext, useEffect} from "react";
import { ThemeContext } from '../Context.jsx';
import axios from 'axios';
import Content from './Content.jsx';

function Post({id}){
    let mode = useContext(ThemeContext);

    const [loading, setLoading] = useState(true);
    const [postData, setPostData] = useState();

    useEffect(() => {
        //Experimental and for testing
       axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            response => console.log(response);
            setPostData(response.data);
        })
        .catch(error => console.error('Error fetching posts:', error))
        .finally(() => setLoading(false));
        if(loading) return <p>loading</p>
        setLoading(true);
    }, []);

    return (
        <main className={mode}>
            {loading ? (<p>Loading</p>) : (<>
                <Content 
                title={postData.title}
                content={postData.body}
                author={postData.userId}
                />
            </>)}
        </main>
    );
}

export default Post;

