import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Available from './pages/Available'
import ProductDetail from './pages/ProductDetail'
import Favorites from './pages/Favorites'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/available" element={<Available />} />
                        <Route path="/gecko/:id" element={<ProductDetail />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App