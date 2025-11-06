import React, { useContext } from "react";
import { BrowserRouter, Link } from "react-router";
import { ThemeContext } from './Context.jsx';
import './css/home.css';



function Home() {
    let mode = useContext(ThemeContext);
    return (
        <div className={mode}>
            <h2>Welcome to Our Blog<br></br> below are our recent posts</h2>
            <nav>
                
            </nav>
        </div>
    );
}
export default Home; 
