import productsData from '@/data/products.json';
import { Product } from '@/types';

// We map over the products to generate a unique ID based on the name
export const getProducts = (): (Product & { id: string })[] => {
  return (productsData as Product[]).map((product, index) => {
    // Generate a URL-friendly slug as the ID
    const baseSlug = product["Product Name"]
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
      
    // Append index to avoid collisions
    return {
      ...product,
      id: `${baseSlug}-${index}`,
    };
  });
};

export const getProductById = (id: string) => {
  const products = getProducts();
  return products.find(p => p.id === id) || null;
};

export const getCategories = () => {
  const products = getProducts();
  const categories = new Set(
    products
      .map(p => p.Category)
      .filter(c => c && typeof c === 'string' && !c.includes('http') && !c.includes('.webp'))
  );
  return Array.from(categories);
};

export const getBrands = () => {
  const products = getProducts();
  const brands = new Set(products.map(p => p.Brand));
  return Array.from(brands);
};
