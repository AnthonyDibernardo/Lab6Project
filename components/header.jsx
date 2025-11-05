import React, { createContext, useContext, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import { ThemeContext } from "./Context.jsx";
import './css/header.css'

function Header(){
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
            setTheme((prevTheme) => (prevTheme === 'light') ? 'dark' : 'light');
    };

    return (
        <header>
                <h1>Team 3's Blog</h1>
                <nav>
                    <Link className="pageNav" to="/">Home</Link> 
                    <Link className="pageNav" to="/contact">Contact</Link>
                </nav>
        </header>
    );
}

export default Header;
