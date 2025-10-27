import React, { useState, useEffect } from 'react'
import LanguageSelector from './LanguageSelector'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

function Header() {
    const { t } = useLanguage()
    const [showLanguageSelector, setShowLanguageSelector] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5001/api/settings/show_language_selector')
            .then(res => res.json())
            .then(data => setShowLanguageSelector(data.value))
            .catch(err => {
                console.error('Error loading language selector setting:', err)
                setShowLanguageSelector(true) // Default to showing
            })
    }, [])

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo">
                        <span className="logo-icon">🦎</span>
                        <span className="logo-text">Gecko Shop</span>
                    </Link>

                    <nav className="nav">
                        <Link to="/" className="nav-link">{t('nav.home')}</Link>
                        <Link to="/available" className="nav-link">{t('nav.available')}</Link>
                        <Link to="/about" className="nav-link">{t('nav.about')}</Link>
                        <Link to="/terms" className="nav-link">{t('nav.terms')}</Link>
                        <Link to="/contact" className="nav-link">{t('nav.contact')}</Link>
                        <Link to="/cart" className="nav-link">
                            {t('nav.cart')} <span className="cart-count">0</span>
                        </Link>
                        {showLanguageSelector && <LanguageSelector />}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header