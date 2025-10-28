import React from 'react'
import { useFavorites } from '../context/FavoritesContext'
import { useLanguage } from '../context/LanguageContext'
import ProductCard from '../components/ProductCard'
import '../assets/scss/pages/_favorites.scss'

function Favorites() {
    const { favorites, clearFavorites } = useFavorites()
    const { t } = useLanguage()

    return (
        <div className="page-favorites">
            <div className="container">
                <div className="favorites-header">
                    <h1 className="page-title">
                        <i className="fas fa-heart"></i>
                        {t('favorites.title')}
                    </h1>
                    {favorites.length > 0 && (
                        <button className="btn-clear-favorites" onClick={clearFavorites}>
                            <i className="fas fa-trash"></i>
                            {t('favorites.clearAll')}
                        </button>
                    )}
                </div>

                {favorites.length === 0 ? (
                    <div className="empty-favorites">
                        <div className="empty-icon">
                            <i className="far fa-heart"></i>
                        </div>
                        <h2>{t('favorites.empty.title')}</h2>
                        <p>{t('favorites.empty.description')}</p>
                        <button className="btn-browse" onClick={() => window.location.href = '/available'}>
                            <i className="fas fa-store"></i>
                            {t('favorites.empty.browse')}
                        </button>
                    </div>
                ) : (
                    <div className="favorites-grid">
                        {favorites.map(gecko => (
                            <ProductCard key={gecko.id} gecko={gecko} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Favorites

