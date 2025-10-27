import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getGeckoById } from '../data/geckos'

function ProductDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const gecko = getGeckoById(id)

    if (!gecko) {
        return (
            <div className="container">
                <div className="error-page">
                    <h2>Gecko Not Found</h2>
                    <p>The gecko you're looking for doesn't exist.</p>
                    <button onClick={() => navigate('/')}>Go Home</button>
                </div>
            </div>
        )
    }

    return (
        <div className="page-product-detail">
            <div className="container">
                <div className="product-detail-grid">
                    <div className="product-image">
                        <img src={gecko.image} alt={gecko.name} />
                    </div>

                    <div className="product-info">
                        <button className="back-button" onClick={() => navigate(-1)}>
                            ← Back
                        </button>

                        <h1 className="product-name">{gecko.name}</h1>
                        <p className="product-species">{gecko.species}</p>

                        <div className="product-meta">
                            <span className="morph">{gecko.morph}</span>
                            <span className="age">{gecko.age}</span>
                            <span className="gender">{gecko.gender}</span>
                        </div>

                        <div className="product-description">
                            <p>{gecko.description}</p>
                        </div>

                        <div className="product-purchase">
                            <div className="price">${gecko.price}</div>
                            <button className="btn-add-to-cart">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
