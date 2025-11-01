import { API_BASE_URL } from '../config';

// Fetch all geckos with pagination support
export const getGeckos = async (category = 'all', availableOnly = true, limit = null, offset = 0) => {
  try {
    const params = new URLSearchParams();
    if (category !== 'all') params.append('category', category);
    if (availableOnly) params.append('available_only', 'true');
    if (limit) {
      params.append('limit', limit);
      params.append('offset', offset);
    }

    const response = await fetch(`${API_BASE_URL}/geckos?${params.toString()}`);
    if (!response.ok) throw new Error('Failed to fetch geckos');

    const data = await response.json();
    return data.geckos || [];
  } catch (error) {
    console.error('Error fetching geckos:', error);
    // Fallback to mock data
    const allGeckos = getMockGeckos();
    // Apply pagination to mock data
    if (limit) {
      return allGeckos.slice(offset, offset + limit);
    }
    return allGeckos;
  }
};

// Get total count of geckos for a category
export const getGeckosCount = async (category = 'all', availableOnly = true) => {
  try {
    const params = new URLSearchParams();
    if (category !== 'all') params.append('category', category);
    if (availableOnly) params.append('available_only', 'true');

    const response = await fetch(`${API_BASE_URL}/geckos?${params.toString()}`);
    if (!response.ok) throw new Error('Failed to fetch geckos');

    const data = await response.json();
    return data.geckos ? data.geckos.length : 0;
  } catch (error) {
    console.error('Error fetching geckos count:', error);
    const allGeckos = getMockGeckos();
    return allGeckos.length;
  }
};

// Fetch a single gecko by ID
export const getGeckoById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/geckos/${id}`);
    if (!response.ok) throw new Error('Failed to fetch gecko');

    const data = await response.json();
    return data.gecko;
  } catch (error) {
    console.error('Error fetching gecko:', error);
    // Fallback to mock data
    return getMockGeckos().find(gecko => gecko.id === parseInt(id));
  }
};

// Fetch all categories
export const getCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`);
    if (!response.ok) throw new Error('Failed to fetch categories');

    const data = await response.json();
    return data.categories || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    // Fallback to mock categories
    return [
      { id: 'all', name: 'All Species' },
      { id: 'macularius', name: 'Leopard Geckos' },
      { id: 'angramainyu', name: 'Iraqi Geckos' },
      { id: 'fuscus', name: 'E. fuscus' },
      { id: 'hardwickii', name: 'E. hardwickii' }
    ];
  }
};

// Fallback mock data
const getMockGeckos = () => {
  return [
    {
      id: 1,
      name: "Classic Leopard Gecko",
      species: "Eublepharis macularius",
      morph: "Normal",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1518665750801-883bf1905352?w=800",
      age: "Juvenile",
      gender: "Unknown",
      description: "Beautiful classic leopard gecko with high-contrast spots. Perfect starter gecko with great temperament.",
      available: 1,
      category: "macularius"
    },
    {
      id: 2,
      name: "Albinos Leopard Gecko",
      species: "Eublepharis macularius",
      morph: "Tremper Albino",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=800",
      age: "Adult",
      gender: "Male",
      description: "Stunning Tremper albino with vibrant orange patterns and red eyes. Exceptional quality.",
      available: 1,
      category: "macularius"
    },
    {
      id: 3,
      name: "High Yellow Leopard Gecko",
      species: "Eublepharis macularius",
      morph: "High Yellow",
      price: 119.99,
      image: "https://images.unsplash.com/photo-1470093851219-69951fcbb533?w=800",
      age: "Sub-adult",
      gender: "Female",
      description: "Bright yellow coloration with reduced black spotting. Healthy and well-started juvenile.",
      available: 1,
      category: "macularius"
    },
    {
      id: 4,
      name: "Blazing Blizzard Leopard Gecko",
      species: "Eublepharis macularius",
      morph: "Blazing Blizzard",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1516893842880-5d5a34eb4b69?w=800",
      age: "Adult",
      gender: "Male",
      description: "Rare blazing blizzard morph with stunning white coloration and yellow hints.",
      available: 1,
      category: "macularius"
    },
    {
      id: 5,
      name: "RAPTOR Leopard Gecko",
      species: "Eublepharis macularius",
      morph: "RAPTOR",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4dea?w=800",
      age: "Adult",
      gender: "Female",
      description: "Premium RAPTOR (Red-eyed APTOR) with glowing red eyes and beautiful pattern.",
      available: 0,
      category: "macularius"
    },
    {
      id: 6,
      name: "Enigma Leopard Gecko",
      species: "Eublepharis macularius",
      morph: "Enigma",
      price: 179.99,
      image: "https://images.unsplash.com/photo-1577739549075-5be0e3d3dcd9?w=800",
      age: "Juvenile",
      gender: "Unknown",
      description: "Unique Enigma morph with irregular pattern distribution. Healthy juvenile.",
      available: 1,
      category: "macularius"
    },
    {
      id: 7,
      name: "Eublepharis angramainyu",
      species: "Eublepharis angramainyu",
      morph: "Wild Type",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1518665750801-883bf1905352?w=800",
      age: "Adult",
      gender: "Male",
      description: "Rare Iraqi gecko with unique patterning. Perfect for experienced keepers.",
      available: 1,
      category: "angramainyu"
    },
    {
      id: 8,
      name: "Eublepharis fuscus",
      species: "Eublepharis fuscus",
      morph: "Wild Type",
      price: 279.99,
      image: "https://images.unsplash.com/photo-1518665750801-883bf1905352?w=800",
      age: "Adult",
      gender: "Female",
      description: "Beautiful Eublepharis fuscus with distinct coloration. Excellent specimens.",
      available: 1,
      category: "fuscus"
    },
    {
      id: 9,
      name: "Eublepharis hardwickii",
      species: "Eublepharis hardwickii",
      morph: "Wild Type",
      price: 289.99,
      image: "https://images.unsplash.com/photo-1518665750801-883bf1905352?w=800",
      age: "Sub-adult",
      gender: "Unknown",
      description: "Stunning Eublepharis hardwickii with unique characteristics.",
      available: 1,
      category: "hardwickii"
    },
    {
      id: 10,
      name: "Mack Snow Leopard Gecko",
      species: "Eublepharis macularius",
      morph: "Mack Snow",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800",
      age: "Juvenile",
      gender: "Female",
      description: "Stunning Mack Snow with reduced pigmentation creating beautiful contrast.",
      available: 1,
      category: "macularius"
    }
  ];
};

