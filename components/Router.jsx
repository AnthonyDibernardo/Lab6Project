import React, { BrowserRouter, Routes, Route } from 'react'
import Home from './Home.jsx'
import Contact from './Contact.jsx'
import Post1 from './Blog/Post1.jsx'
import Post2 from './Blog/Post2.jsx'
import Post3 from './Blog/Post3.jsx'
function Router(){
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Post1" element={<Post1 />} />
                <Route path="/Post2" element={<Post2 />} />
                <Route path="/Post3" element={<Post3 />} />
            </Routes>
    </BrowserRouter>
}
export default Router;
