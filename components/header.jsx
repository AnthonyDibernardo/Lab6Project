import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './css/header.css'
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
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
                        </nav>
                        <button type="button" onClick={toggleTheme}>Toggle Theme</button>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/posts/:id" element={<IndividualPost />} />
                        </Routes>
                    </ThemeContext>
                </BrowserRouter>
        </header>
    );
}

export default Header;
