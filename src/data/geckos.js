import { getGeckos, getGeckoById, getCategories } from '../services/api.js';

// For backward compatibility, these functions now use the API
export const geckos = []; // Will be populated by API

export let categories = [];
export let availableGeckos = [];

// Initialize on module load
(async () => {
    try {
        const geckosData = await getGeckos();
        availableGeckos.length = 0;
        availableGeckos.push(...geckosData);

        const categoriesData = await getCategories();
        categories.length = 0;
        categories.push(...categoriesData);
    } catch (error) {
        console.error('Error initializing geckos data:', error);
    }
})();

// Legacy export functions for compatibility
export const getAvailableGeckos = () => {
    return availableGeckos.filter(g => g.available === 1 || g.available === true);
}

// This is the main function to get geckos - now uses API
export { getGeckos, getGeckoById, getCategories };
