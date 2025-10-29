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

export const SkeletonCard = ({ small = false }) => {
    return (
        <div className={`skeleton-card ${small ? 'skeleton-small' : ''}`}>
            <div className="skeleton-image"></div>
            <div className="skeleton-content">
                <div className="skeleton-title"></div>
                <div className="skeleton-text"></div>
                {/* <div className="skeleton-price"></div> */}
            </div>
        </div>
    );
};

export const SkeletonGrid = ({ count = 6, small = false }) => {
    return (
        <div className={`skeleton-grid ${small ? 'skeleton-grid-small' : ''}`}>
            {Array.from({ length: count }).map((_, i) => (
                <SkeletonCard key={i} small={small} />
            ))}
        </div>
    );
};

export default Loader;

