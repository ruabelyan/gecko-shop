import React from 'react';
import '../assets/scss/components/_loader.scss';

export const Loader = ({ size = 'medium', fullScreen = false }) => {
    return (
        <div className={`loader-container ${fullScreen ? 'fullscreen' : ''}`}>
            <div className={`loader loader-${size}`}>
                <div className="loader-spinner"></div>
                <p className="loader-text">Loading...</p>
            </div>
        </div>
    );
};

export const SkeletonCard = () => {
    return (
        <div className="skeleton-card">
            <div className="skeleton-image"></div>
            <div className="skeleton-content">
                <div className="skeleton-title"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-price"></div>
            </div>
        </div>
    );
};

export const SkeletonGrid = ({ count = 6 }) => {
    return (
        <div className="skeleton-grid">
            {Array.from({ length: count }).map((_, i) => (
                <SkeletonCard key={i} />
            ))}
        </div>
    );
};

export default Loader;

