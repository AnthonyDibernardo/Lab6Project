import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from './Home.jsx'
import Contact from './Contact.jsx'
import Post1 from './Blog/Post1.jsx'
import Post2 from './Blog/Post2.jsx'
import Post3 from './Blog/Post3.jsx'
import './css/header.css'

function Header(){
    const [theme, setTheme] = useState('dark');
    const ThemeContext = createContext(theme);
    const toggleMode = () => {
        if(theme === 'dark'){
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }

    return (
        <header>
                <h1>Team 3's Blog</h1>
                <BrowserRouter>
                    <nav>
                        <Link className="pageNav" to="/">Home</Link> 
                        <Link className="pageNav" to="/contact">Contact</Link>
                    </nav>
                    <button type="button" onClick={toggleMode}>theme</button>
                    <ThemeContext.Provider value={theme}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/Post1" element={<Post1 />} />
                            <Route path="/Post2" element={<Post2 />} />
                            <Route path="/Post3" element={<Post3 />} />
                        </Routes>
                    </ThemeContext.Provider>
                </BrowserRouter>
        </header>
    );
}

export default Header;
export let ThemeContext = 'dark';
