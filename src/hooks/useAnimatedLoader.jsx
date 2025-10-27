import { useEffect, useState } from 'react';

export const useAnimatedLoader = (loading, delay = 0) => {
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        if (loading) {
            const timer = setTimeout(() => setShowLoader(true), delay);
            return () => clearTimeout(timer);
        } else {
            setShowLoader(false);
        }
    }, [loading, delay]);

    return showLoader;
};

