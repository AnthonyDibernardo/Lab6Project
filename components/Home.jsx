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
                <Link className="postNav" to="/Post3"><h3>SHPE National Conference</h3></Link> 
                <Link className="postNav" to="/Post2"><h3>CTF First Steps</h3></Link> 
                <Link className="postNav" to="/Post1"><h3>My First Post</h3></Link> 
            </nav>
        </div>
    );
}
export default Home; 
