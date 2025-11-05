import React, { createContext, useContext, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from './Home.jsx'
import Contact from './Contact.jsx'
import Post1 from './Blog/Post1.jsx'
import Post2 from './Blog/Post2.jsx'
import Post3 from './Blog/Post3.jsx'
import './css/header.css'

export const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: () => console.log("No Theme Provided"),
});
function Header(){
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light') ? 'dark' : 'light');
    }

    return (
        <header>
                <h1>Team 3's Blog</h1>
                <BrowserRouter>
                    <nav>
                        <Link className="pageNav" to="/">Home</Link> 
                        <Link className="pageNav" to="/contact">Contact</Link>
                    </nav>
                    <ThemeContext.Provider value={ {theme, toggleTheme }}>
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

export const useTheme = () => useContext(ThemeContext);
