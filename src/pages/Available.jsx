import React, { useState } from 'react'
import ProductGrid from '../components/ProductGrid'
import Filter from '../components/Filter'
import { getAvailableGeckos, getCategories } from '../data/geckos'
import { useLanguage } from '../context/LanguageContext'

function Available() {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const availableGeckos = getAvailableGeckos()
    const availableCategories = getCategories()
    const { t } = useLanguage()

    return (
        <div className="page-available">
            <div className="container">
                <h1 className="page-title">{t('available.title')}</h1>
                <p className="page-subtitle">{t('available.subtitle')}</p>

                <Filter
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    categories={availableCategories}
                />

                <ProductGrid
                    category={selectedCategory}
                    geckos={availableGeckos}
                />
            </div>
        </div>
    )
}

export default Available
