import React, { useState, useEffect } from 'react'
import { getCategories } from '../data/geckos'
import { useLanguage } from '../context/LanguageContext'

function Filter({ selectedCategory, onCategoryChange, categories: propCategories }) {
    const [categories, setCategories] = useState([])
    const { t } = useLanguage()

    useEffect(() => {
        loadCategories()
    }, [])

    const loadCategories = async () => {
        try {
            const data = await getCategories()
            setCategories(data)
        } catch (error) {
            console.error('Error loading categories:', error)
        }
    }

    const displayCategories = propCategories || categories

    if (displayCategories.length === 0) {
        return null
    }
    return (
        <div className="filter-bar">
            <h2 className="filter-title">{t('common.filter')}</h2>
            <div className="filter-buttons">
                {displayCategories.map(category => (
                    <button
                        key={category.id}
                        className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                        onClick={() => onCategoryChange(category.id)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Filter