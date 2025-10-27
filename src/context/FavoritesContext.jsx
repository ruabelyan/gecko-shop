import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within FavoritesProvider');
    }
    return context;
};

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Load favorites from localStorage on mount
    useEffect(() => {
        try {
            const saved = localStorage.getItem('gecko-favorites');
            if (saved) {
                setFavorites(JSON.parse(saved));
            }
        } catch (error) {
            console.error('Error loading favorites:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Save favorites to localStorage whenever it changes
    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('gecko-favorites', JSON.stringify(favorites));
        }
    }, [favorites, isLoading]);

    const addToFavorites = (gecko) => {
        setFavorites((prev) => {
            if (!prev.find((f) => f.id === gecko.id)) {
                return [...prev, gecko];
            }
            return prev;
        });
    };

    const removeFromFavorites = (geckoId) => {
        setFavorites((prev) => prev.filter((f) => f.id !== geckoId));
    };

    const isFavorite = (geckoId) => {
        return favorites.some((f) => f.id === geckoId);
    };

    const clearFavorites = () => {
        setFavorites([]);
    };

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        clearFavorites,
        isLoading,
    };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
};

