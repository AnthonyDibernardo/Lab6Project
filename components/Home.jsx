import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router";
import { ThemeContext } from './Context.jsx';
import './css/home.css';
import axios from "axios";



function Home() {
    let mode = useContext(ThemeContext);
    const [loading, setLoading] = useState(true);
    const [posts, setPost] = useState([]);
    const [error, setError] = useState(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
       axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
            setPost(res.data)
            console.log(res);
        })
        .catch(error => {
            setError('Error fetching posts:', error)
            setHasError(true);
        })
        .finally(() => setLoading(false));
    }, []);
    if(hasError) console.log(error);
    return (
        <div className={mode}>
            <h2>Welcome to Our Blog<br></br> below are our posts</h2>
            {loading ? (
                <p>Loading</p>
            ) : (
                posts.map( post => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))   
            )
            }
        </div>
    );
}
export default Home; 
