import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from './Home.jsx'
import Contact from './Contact.jsx'
import './css/header.css'

function Header(){
    return (
        <header>
                <h1>Team 3's Blog</h1>
                <BrowserRouter>
                    <nav>
                        <Link class="pageNav" to="/">Home</Link> 
                        <Link class="pageNav" to="/contact">Contact</Link> 
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </BrowserRouter>
        </header>
    );
}

export default Header;
