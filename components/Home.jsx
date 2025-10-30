import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import './css/home.css'
import FirstPost from './Posts.jsx'

function Home() {
    return (
        <main>
            <h2>Welcome to Our Blog<br></br> below are our recent posts</h2>
            <ul>
                <li>First Post</li>
            </ul>
        </main>
    );
}
export default Home; 
