import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import { getGeckos } from '../data/geckos'

function ProductGrid({ category, geckos: propGeckos }) {
    const [geckos, setGeckos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadGeckos()
    }, [category])

    const loadGeckos = async () => {
        try {
            setLoading(true)
            const data = await getGeckos(category === 'all' ? 'all' : category, true)
            setGeckos(data)
        } catch (error) {
            console.error('Error loading geckos:', error)
        } finally {
            setLoading(false)
        }
    }

    // Use prop geckos if provided (for backward compatibility)
    const displayGeckos = propGeckos || geckos
    const filteredGeckos = category === 'all'
        ? displayGeckos
        : displayGeckos.filter(gecko => gecko.category === category)

    if (loading) {
        return (
            <div className="product-grid">
                <div className="loading-message">
                    <p>Loading geckos...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="product-grid">
            {filteredGeckos.length > 0 ? (
                filteredGeckos.map(gecko => (
                    <ProductCard key={gecko.id} gecko={gecko} />
                ))
            ) : (
                <div className="no-geckos-message">
                    <p>No geckos found in this category.</p>
                </div>
            )}
        </div>
    )
}

export default ProductGrid