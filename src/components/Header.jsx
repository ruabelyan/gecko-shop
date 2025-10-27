import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo">
                        <span className="logo-icon">🦎</span>
                        <span className="logo-text">Gecko Shop</span>
                    </Link>

                    <nav className="nav">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/available" className="nav-link">Available</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/terms" className="nav-link">Terms</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
                        <Link to="/cart" className="nav-link">
                            Cart <span className="cart-count">0</span>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header