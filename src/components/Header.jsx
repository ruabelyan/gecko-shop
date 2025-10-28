import { useState, useEffect } from 'react'
import LanguageSelector from './LanguageSelector'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useFavorites } from '../context/FavoritesContext'

function Header() {
    const { t } = useLanguage()
    const { favorites } = useFavorites()
    const [showLanguageSelector, setShowLanguageSelector] = useState(true)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const favoritesCount = favorites.length

    useEffect(() => {
        fetch('http://localhost:5001/api/settings/show_language_selector')
            .then(res => res.json())
            .then(data => setShowLanguageSelector(data.value))
            .catch(err => {
                console.error('Error loading language selector setting:', err)
                setShowLanguageSelector(true) // Default to showing
            })
    }, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    // Disable body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <Link to="/" className="logo" onClick={closeMobileMenu}>
                            <span className="logo-icon">🦎</span>
                            <span className="logo-text">Papa Pharm Armenia</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="nav desktop-nav">
                            <Link to="/" className="nav-link">{t('nav.home')}</Link>
                            <Link to="/available" className="nav-link">{t('nav.available')}</Link>
                            <Link to="/about" className="nav-link">{t('nav.about')}</Link>
                            <Link to="/contact" className="nav-link">{t('nav.contact')}</Link>
                            <Link to="/favorites" className="nav-link">
                                {t('nav.favorites')}
                                {favoritesCount > 0 && (
                                    <span className="favorites-count">{favoritesCount}</span>
                                )}
                            </Link>
                            {showLanguageSelector && <LanguageSelector />}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="mobile-menu-toggle"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu"
                        >
                            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-sidebar-overlay" onClick={closeMobileMenu}></div>
                <div className="mobile-sidebar-content">
                    <div className="mobile-sidebar-header">
                        <Link to="/" className="mobile-logo" onClick={closeMobileMenu}>
                            <span className="logo-icon">🦎</span>
                            <span className="logo-text">Papa Pharm Armenia</span>
                        </Link>
                        <button className="mobile-close-btn" onClick={closeMobileMenu}>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <nav className="mobile-nav">
                        <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
                            <i className="fas fa-home"></i>
                            {t('nav.home')}
                        </Link>
                        <Link to="/available" className="mobile-nav-link" onClick={closeMobileMenu}>
                            <i className="fas fa-store"></i>
                            {t('nav.available')}
                        </Link>
                        <Link to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>
                            <i className="fas fa-info-circle"></i>
                            {t('nav.about')}
                        </Link>
                        <Link to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>
                            <i className="fas fa-envelope"></i>
                            {t('nav.contact')}
                        </Link>
                        <Link to="/favorites" className="mobile-nav-link" onClick={closeMobileMenu}>
                            {t('nav.favorites')}
                            {favoritesCount > 0 && (
                                <span className="favorites-count">{favoritesCount}</span>
                            )}
                        </Link>
                        {showLanguageSelector && (
                            <div className="mobile-language-selector">
                                <LanguageSelector />
                            </div>
                        )}
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header