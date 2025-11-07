import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './css/header.css'
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import Post1 from "./Blog/Post1.jsx"
import Post2 from "./Blog/Post2.jsx"
import Post3 from "./Blog/Post3.jsx"
import PostList from "./postList/PostList.jsx";
import IndividualPost from "./Blog/IndividualPost.jsx";
import { ThemeContext } from "./Context.jsx";

function Header(){
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
            setTheme((prevTheme) => (prevTheme === 'light') ? 'dark' : 'light');
    };

    return (
        <header>
                <h1>Team 3's Blog</h1>
                <BrowserRouter>
                    <ThemeContext value={theme}>
                        <nav>
                            <Link className="pageNav" to="/">Home</Link> 
                            <Link className="pageNav" to="/contact">Contact</Link>
                            <Link className="pageNav" to="/posts">Blog Posts</Link>
                            <Link className="pageNav" to="/posts/1">First Post</Link>
                        </nav>
                        <button type="button" onClick={toggleTheme}>Toggle Theme</button>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/posts" element={<PostList />}/>
                            <Route path="/posts/:post_id" element={<IndividualPost />}/>
                        </Routes>
                    </ThemeContext>
                </BrowserRouter>
        </header>
    );
}

export default Header;
