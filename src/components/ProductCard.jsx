import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import { useLanguage } from '../context/LanguageContext'

function ProductCard({ gecko }) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites()
    const { t } = useLanguage()
    const [showInquiry, setShowInquiry] = useState(false)
    const [inquiryEmail, setInquiryEmail] = useState('')
    const [inquiryMessage, setInquiryMessage] = useState('')
    const [inquiryStatus, setInquiryStatus] = useState(null)

    const handleFavoriteClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (isFavorite(gecko.id)) {
            removeFromFavorites(gecko.id)
        } else {
            addToFavorites(gecko)
        }
    }

    const handleAskForGecko = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setShowInquiry(true)
    }

    const handleSubmitInquiry = async (e) => {
        e.preventDefault()
        e.stopPropagation()

        const subject = `Inquiry about ${gecko.name} (ID: ${gecko.id})`
        const body = `Hello,\n\nI am interested in purchasing: ${gecko.name}\nSpecies: ${gecko.species}\nMorph: ${gecko.morph}\nPrice: $${gecko.price}\n\nMy email: ${inquiryEmail}\n\nMessage: ${inquiryMessage}\n\nPlease let me know if this gecko is still available.\n\nThank you!`

        // Send email using mailto
        const mailtoLink = `mailto:textexample@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

        try {
            // Open mail client
            window.location.href = mailtoLink

            // Simulate email check
            setInquiryStatus('sending')

            // After a short delay, show success message
            setTimeout(() => {
                setInquiryStatus('sent')
                setShowInquiry(false)
                setInquiryEmail('')
                setInquiryMessage('')

                // Show success message
                alert(`Your email has been sent! Please check your email client.\nIf it didn't open automatically, you can send to: textexample@gmail.com`)
            }, 1500)
        } catch (error) {
            setInquiryStatus('error')
            console.error('Error sending email:', error)
        }
    }

    return (
        <>
            <div className="product-card">
                <Link to={`/gecko/${gecko.id}`}>
                    <div className="product-image">
                        <img src={gecko.image} alt={gecko.name} />
                        {!gecko.available && <div className="sold-out">Sold Out</div>}
                        <button
                            className={`favorite-btn ${isFavorite(gecko.id) ? 'active' : ''}`}
                            onClick={handleFavoriteClick}
                            aria-label={isFavorite(gecko.id) ? 'Remove from favorites' : 'Add to favorites'}
                        >
                            <i className={isFavorite(gecko.id) ? 'fas fa-heart' : 'far fa-heart'}></i>
                        </button>
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
                <div className="product-actions">
                    <button
                        className="btn-ask-gecko"
                        onClick={handleAskForGecko}
                    >
                        <i className="fas fa-envelope"></i>
                        Ask for this Gecko
                    </button>
                </div>
            </div>

            {/* Inquiry Modal */}
            {showInquiry && (
                <div className="inquiry-modal">
                    <div className="inquiry-modal-overlay" onClick={() => setShowInquiry(false)}></div>
                    <div className="inquiry-modal-content">
                        <div className="inquiry-modal-header">
                            <h2>Ask for {gecko.name}</h2>
                            <button className="close-btn" onClick={() => setShowInquiry(false)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <form onSubmit={handleSubmitInquiry}>
                            <div className="form-group">
                                <label htmlFor="inquiry-email">Your Email *</label>
                                <input
                                    type="email"
                                    id="inquiry-email"
                                    value={inquiryEmail}
                                    onChange={(e) => setInquiryEmail(e.target.value)}
                                    required
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inquiry-message">Message</label>
                                <textarea
                                    id="inquiry-message"
                                    value={inquiryMessage}
                                    onChange={(e) => setInquiryMessage(e.target.value)}
                                    rows="4"
                                    placeholder="Optional message..."
                                />
                            </div>
                            <div className="inquiry-modal-footer">
                                <button
                                    type="button"
                                    className="btn-cancel"
                                    onClick={() => setShowInquiry(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn-submit"
                                    disabled={inquiryStatus === 'sending'}
                                >
                                    {inquiryStatus === 'sending' ? (
                                        <>
                                            <i className="fas fa-spinner fa-spin"></i>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-envelope"></i>
                                            Send Inquiry
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProductCard
