import { getProducts, getCategories } from '@/lib/data';
import ProductListingClient from '@/components/ProductListingClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | Kubera Mobility Solutions',
  description: 'Browse our full catalog of qualitative wheelchairs and medical equipment.',
};

export default function ProductsPage() {
  const products = getProducts();
  const categories = getCategories();

  return (
    <ProductListingClient
      initialProducts={products}
      categories={categories}
    />
  );
}