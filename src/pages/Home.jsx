import React, { useState } from 'react'
import ProductGrid from '../components/ProductGrid'
import Filter from '../components/Filter'
import { useLanguage } from '../context/LanguageContext'

function Home() {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const { t } = useLanguage()

    return (
        <div className="page-home">
            <section className="hero">
                <div className="container">
                    <h1 className="hero-title">{t('home.title')}</h1>
                    <p className="hero-subtitle">{t('home.subtitle')}</p>
                </div>
            </section>

            <div className="container">
                <Filter
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                />
                <ProductGrid category={selectedCategory} geckos={null} />
            </div>
        </div>
    )
}

export default Home
