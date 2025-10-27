import React, { useState } from 'react'
import ProductGrid from '../components/ProductGrid'
import Filter from '../components/Filter'

function Home() {
    const [selectedCategory, setSelectedCategory] = useState('all')

    return (
        <div className="page-home">
            <section className="hero">
                <div className="container">
                    <h1 className="hero-title">Eublepharis Gecko Collection</h1>
                    <p className="hero-subtitle">Premium Quality Leopard Geckos & Morphs</p>
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
