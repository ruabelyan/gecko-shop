import React, { useState } from 'react';

const GeckoGallery = ({ geckos }) => {
    const [selectedGecko, setSelectedGecko] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!geckos || geckos.length === 0) {
        return null;
    }

    const openGeckoViewer = (gecko, index) => {
        setSelectedGecko(gecko);
        setCurrentIndex(index);
    };

    const closeViewer = () => {
        setSelectedGecko(null);
    };

    const navigateGecko = (direction) => {
        let newIndex = currentIndex + direction;
        if (newIndex < 0) newIndex = geckos.length - 1;
        if (newIndex >= geckos.length) newIndex = 0;
        setCurrentIndex(newIndex);
        setSelectedGecko(geckos[newIndex]);
    };

    const selectedData = selectedGecko || geckos[currentIndex];

    return (
        <>
            <div className="gecko-gallery">
                {geckos.map((gecko, index) => (
                    <div
                        key={gecko.id}
                        className="gallery-item"
                        onClick={() => openGeckoViewer(gecko, index)}
                    >
                        {gecko.image && (
                            <img
                                src={gecko.image}
                                alt={gecko.name}
                                className="gallery-image"
                                loading="lazy"
                            />
                        )}
                        {!gecko.image && (
                            <div className="gallery-placeholder">
                                <span className="placeholder-icon">🦎</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {selectedGecko && (
                <div className="gecko-viewer-overlay" onClick={closeViewer}>
                    <div className="viewer-content" onClick={(e) => e.stopPropagation()}>
                        {/* Main Image */}
                        <div className="viewer-main-image">
                            {selectedData.image ? (
                                <img src={selectedData.image} alt={selectedData.name} />
                            ) : (
                                <div className="viewer-placeholder">
                                    <span className="placeholder-icon-large">🦎</span>
                                </div>
                            )}

                            {/* Close Button */}
                            <button className="viewer-close" onClick={closeViewer}>
                                <i className="fas fa-times"></i>
                            </button>

                            {/* Navigation Arrows */}
                            <button
                                className="viewer-nav viewer-prev"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateGecko(-1);
                                }}
                            >
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <button
                                className="viewer-nav viewer-next"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateGecko(1);
                                }}
                            >
                                <i className="fas fa-chevron-right"></i>
                            </button>

                            {/* Logo */}
                            <div className="viewer-logo">
                                <span className="logo-icon">🦎</span>
                                <span className="logo-text">GECKO</span>
                            </div>
                        </div>

                        {/* Info Panel */}
                        <div className="viewer-info">
                            <div className="info-handle">@papa_pharm_armenia</div>
                            <div className="info-date">
                                {new Date(selectedData.created_at || Date.now()).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric'
                                }).toUpperCase()}
                            </div>
                            <div className="info-description">
                                {selectedData.name} ({selectedData.morph}) #{selectedData.species?.toLowerCase().replace(/\s+/g, '')}
                            </div>
                            <div className="info-tags">
                                #{selectedData.category || 'gecko'} #leopardgecko #geckoshop
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default GeckoGallery;

