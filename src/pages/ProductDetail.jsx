import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useFavorites } from '../context/FavoritesContext'
import { getGeckoById } from '../data/geckos'

function ProductDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { t } = useLanguage()
    const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites()
    const [gecko, setGecko] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchGecko()
    }, [id])

    const fetchGecko = async () => {
        try {
            const data = await getGeckoById(id)
            setGecko(data)
        } catch (error) {
            console.error('Error fetching gecko:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleFavoriteClick = () => {
        if (!gecko) return
        if (isFavorite(gecko.id)) {
            removeFromFavorites(gecko.id)
        } else {
            addToFavorites(gecko)
        }
    }

    if (loading) {
        return (
            <div className="page-product-detail">
                <div className="container">
                    <div className="product-detail-grid">
                        <div className="skeleton-image" style={{ minHeight: '500px' }}></div>
                        <div className="product-info">
                            <div className="skeleton-text" style={{ width: '100px', marginBottom: '1rem' }}></div>
                            <div className="skeleton-title" style={{ width: '70%', height: '40px', marginBottom: '1rem' }}></div>
                            <div className="skeleton-text" style={{ width: '60%', marginBottom: '1rem' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (!gecko) {
        return (
            <div className="container">
                <div className="error-page">
                    <h2>{t('product.notFound.title')}</h2>
                    <p>{t('product.notFound.description')}</p>
                    <button onClick={() => navigate('/')}>{t('product.notFound.goHome')}</button>
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
                            ← {t('nav.back')}
                        </button>

                        <div className="product-header">
                            <h1 className="product-name">{gecko.name}</h1>
                            <button
                                className={`favorite-btn ${isFavorite(gecko.id) ? 'active' : ''}`}
                                onClick={handleFavoriteClick}
                                aria-label={isFavorite(gecko.id) ? t('favorites.remove.label') : t('favorites.add.label')}
                            >
                                <i className={isFavorite(gecko.id) ? 'fas fa-heart' : 'far fa-heart'}></i>
                            </button>
                        </div>

                        <p className="product-species">{gecko.species}</p>

                        {!gecko.available && <div className="sold-out-badge">{t('product.soldOut')}</div>}

                        <div className="product-meta">
                            <div className="meta-item">
                                <span className="meta-label">{t('product.morph')}:</span>
                                <span className="meta-value">{gecko.morph || 'N/A'}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">{t('product.age')}:</span>
                                <span className="meta-value">{gecko.age || 'N/A'}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">{t('product.gender')}:</span>
                                <span className="meta-value">{gecko.gender || 'N/A'}</span>
                            </div>
                        </div>

                        <div className="product-description">
                            <h3>{t('product.description')}:</h3>
                            <p>{gecko.description || 'No description available.'}</p>
                        </div>

                        <div className="product-purchase">
                            <div className="price">${gecko.price}</div>
                            <button className="btn-ask-gecko" onClick={() => window.location.href = `mailto:info@papa-pharm-armenia.com?subject=Inquiry about ${gecko.name}`}>
                                <i className="fas fa-envelope"></i>
                                {t('product.askForGecko')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
