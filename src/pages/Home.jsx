import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid'
import GeckoGallery from '../components/GeckoGallery'
import Filter from '../components/Filter'
import { useLanguage } from '../context/LanguageContext'
import { getGeckos } from '../data/geckos'
import '../assets/scss/pages/_available-grid.scss'

function Home() {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [categories, setCategories] = useState([])
    const [allGeckos, setAllGeckos] = useState([])
    const { t } = useLanguage()
    const navigate = useNavigate()

    useEffect(() => {
        fetchCategories()
        fetchAllGeckos()
    }, [])

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:5001/api/categories')
            const data = await response.json()
            const cats = data.categories.filter(c => c.id !== 'all' && c.image)
            setCategories(cats)
        } catch (error) {
            console.error('Error fetching categories:', error)
            const defaultCategories = [
                { id: 'macularius', name: 'Leopard Geckos', image: 'https://images.unsplash.com/photo-1518665750801-883bf1905352?w=400&h=400&fit=crop' },
                { id: 'angramainyu', name: 'Iraqi Geckos', image: 'https://images.unsplash.com/photo-1565992441121-4367c2968f11?w=400&h=400&fit=crop' },
                { id: 'fuscus', name: 'E. fuscus', image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=400&h=400&fit=crop' },
                { id: 'hardwickii', name: 'E. hardwickii', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=400&fit=crop' }
            ]
            setCategories(defaultCategories)
        }
    }

    const fetchAllGeckos = async () => {
        try {
            const data = await getGeckos('all', true)
            setAllGeckos(data)
        } catch (error) {
            console.error('Error fetching geckos:', error)
        }
    }

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId)
    }

    if (selectedCategory !== 'all') {
        return (
            <div className="page-home">
                <div className="container">
                    <button
                        className="back-button"
                        onClick={() => setSelectedCategory('all')}
                    >
                        ← Back to All Categories
                    </button>
                    <Filter
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                    />
                    <ProductGrid category={selectedCategory} geckos={null} />
                </div>
            </div>
        )
    }

    return (
        <div className="page-home">
            <section className="hero">
                <div className="container">
                    <h1 className="hero-title">{t('home.title')}</h1>
                    <p className="hero-subtitle">{t('home.subtitle')}</p>
                </div>
            </section>

            <div className="container">
                <h2 className="section-title">Gecko Gallery</h2>
                <GeckoGallery geckos={allGeckos} />

                <div className="divider-section">
                    <h2 className="section-title">Shop by Category</h2>
                </div>

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

export default Home
