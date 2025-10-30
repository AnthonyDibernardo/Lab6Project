import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import './css/home.css'
import Posts from "./Blog/Posts";


function Home() {
    return (
        <main>
            <h2>Welcome to Our Blog<br></br> below are our recent posts</h2>
            <ul>
                <Posts />
            </ul>
        </main>
    );
}
export default Home; 
