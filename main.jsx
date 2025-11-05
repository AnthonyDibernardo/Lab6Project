import { StrictMode, BrowserRouter, Routes, Route } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './components/Router.jsx'
import Header from './components/header.jsx'
import Home from './components/Home.jsx'
import Footer from './components/footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
    <Header />
    <BrowserRouter>
        <Home />
    </BrowserRouter>
    <Footer />
  </StrictMode>,
)
