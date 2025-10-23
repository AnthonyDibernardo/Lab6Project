import React from "react";
import './css/header.css'

function Header(){
    return (
        <header>
                <h1>Team 3's Blog</h1>
                <ul>
                    <li><a href="/">home</a></li>
                    <li><a href="/about">about</a></li>
                    <li><a href="/contact">contact</a></li>
                </ul>
        </header>
    );
}

export default Header;
