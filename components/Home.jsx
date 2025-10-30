import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import './css/home.css'
import Posts from "./Blog/Posts";


function Home() {
    return (
        <div>
            <h2>Welcome to Our Blog<br></br> below are our recent posts</h2>
                <Posts />
            
        </div>
    );
}
export default Home; 
