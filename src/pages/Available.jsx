import React, { useState } from 'react'
import ProductGrid from '../components/ProductGrid'
import Filter from '../components/Filter'
import { getAvailableGeckos, getCategories } from '../data/geckos'

function Available() {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const availableGeckos = getAvailableGeckos()
    const availableCategories = getCategories()

    return (
        <div className="page-available">
            <div className="container">
                <h1 className="page-title">Available Geckos</h1>
                <p className="page-subtitle">Browse our current selection of Eublepharis species ready for their new homes.</p>

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
