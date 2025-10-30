import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Footer />

  </StrictMode>,
)
