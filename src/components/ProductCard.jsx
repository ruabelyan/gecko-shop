import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ gecko }) {
    return (
        <div className="product-card">
            <Link to={`/gecko/${gecko.id}`}>
                <div className="product-image">
                    <img src={gecko.image} alt={gecko.name} />
                    {!gecko.available && <div className="sold-out">Sold Out</div>}
                </div>
                <div className="product-info">
                    <h3 className="product-title">{gecko.name}</h3>
                    <p className="product-species">{gecko.species}</p>
                    <div className="product-meta">
                        <span className="morph">{gecko.morph}</span>
                        <span className="price">${gecko.price}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard
