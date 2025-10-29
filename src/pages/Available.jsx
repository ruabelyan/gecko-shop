import React, { useState, useEffect } from 'react'
import { API_BASE_URL } from '../config'
import { useNavigate } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid'
import { getAvailableGeckos, getCategories } from '../data/geckos'
import { useLanguage } from '../context/LanguageContext'
import '../assets/scss/pages/_available-grid.scss'

function Available() {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [categories, setCategories] = useState([])
    const availableGeckos = getAvailableGeckos()
    const { t } = useLanguage()
    const navigate = useNavigate()

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/categories`)
            const data = await response.json()
            const cats = data.categories.filter(c => c.id !== 'all' && c.image)
            setCategories(cats)
        } catch (error) {
            console.error('Error fetching categories:', error)
            // Fallback to default categories
            const defaultCategories = [
                { id: 'macularius', name: 'Leopard Geckos', image: 'https://images.unsplash.com/photo-1518665750801-883bf1905352?w=400&h=400&fit=crop' },
                { id: 'angramainyu', name: 'Iraqi Geckos', image: 'https://images.unsplash.com/photo-1565992441121-4367c2968f11?w=400&h=400&fit=crop' },
                { id: 'fuscus', name: 'E. fuscus', image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=400&h=400&fit=crop' },
                { id: 'hardwickii', name: 'E. hardwickii', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=400&fit=crop' }
            ]
            setCategories(defaultCategories)
        }
    }

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId)
    }

    if (selectedCategory) {
        return (
            <div className="page-available">
                <div className="container">
                    <button
                        className="back-button"
                        onClick={() => setSelectedCategory(null)}
                    >
                        ← {t('nav.backToCategories')}
                    </button>
                    <h1 className="page-title">{categories.find(c => c.id === selectedCategory)?.name || 'Geckos'}</h1>
                    <ProductGrid
                        category={selectedCategory}
                        geckos={availableGeckos}
                    />
                </div>
            </div>
        )
    }

    return (
        <div className="page-available">
            <div className="available-notice">
                <p className="notice-text">
                    All shipments must be received. Extreme weather & holidays can delay shipping. Thanks!
                </p>
                <p className="notice-highlight">
                    Now offering Supplements to be shipped with your gecko!
                </p>
            </div>

            <div className="container">
                <div className="category-grid">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="category-card"
                            onClick={() => handleCategoryClick(category.id)}
                        >
                            <div className="category-image-wrapper">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="category-image"
                                />
                                <div className="geckoboa-logo">
                                    <span className="logo-text">GECKO</span>
                                    <span className="logo-icon">🦎</span>
                                </div>
                            </div>
                            <div className="category-label">
                                {category.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Available
