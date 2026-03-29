'use client';

import { useState, useMemo } from 'react';
import { Product } from '@/types';
import ProductCard from '@/components/ProductCard';
import { Search, Filter, X } from 'lucide-react';

interface Props {
  initialProducts: (Product & { id: string })[];
  categories: string[];
}

export default function ProductListingClient({ initialProducts, categories }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchesSearch = product["Product Name"].toLowerCase().includes(searchQuery.toLowerCase()) || 
                            (product.Brand && product.Brand.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory ? product.Category === selectedCategory : true;
      
      return matchesSearch && matchesCategory;
    });
  }, [initialProducts, searchQuery, selectedCategory]);

  return (
    <div className="bg-bg-alt py-12 min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-gray-200">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Our Products</h1>
            <p className="text-muted text-lg">Browse our complete collection of mobility aids.</p>
          </div>
          <div className="mt-4 md:mt-0 text-sm font-medium text-muted bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            Showing {filteredProducts.length} products
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button 
            className="lg:hidden flex items-center justify-center gap-2 w-full py-3 bg-white rounded-xl shadow-sm border border-gray-100 font-medium text-foreground hover:bg-gray-50 active:scale-95 transition-transform"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          >
            <Filter size={18} />
            {isMobileFiltersOpen ? 'Hide Filters' : 'Show Filters'}
          </button>

          {/* Sidebar */}
          <div className={`lg:w-1/4 flex-shrink-0 ${isMobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-28">
              {/* Search */}
              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-3 uppercase text-xs tracking-wider">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none text-foreground text-sm transition-shadow bg-bg-alt/50"
                  />
                  <div className="absolute left-3 top-3.5 text-muted">
                    <Search size={18} />
                  </div>
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-3.5 text-muted hover:text-foreground"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </div>

              {/* Categories Filter */}
              <div>
                <h3 className="font-semibold text-foreground mb-4 uppercase text-xs tracking-wider">Categories</h3>
                <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  <label className="flex items-start gap-3 p-2 rounded-lg hover:bg-bg-alt cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === ''}
                      onChange={() => setSelectedCategory('')}
                      className="mt-1 w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary focus:ring-2"
                    />
                    <span className={`text-sm ${selectedCategory === '' ? 'font-medium text-primary' : 'text-gray-600'}`}>All Products</span>
                  </label>
                  {categories.map((category) => (
                    <label key={category} className="flex items-start gap-3 p-2 rounded-lg hover:bg-bg-alt cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="mt-1 w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary focus:ring-2"
                      />
                      <span className={`text-sm ${selectedCategory === category ? 'font-medium text-primary' : 'text-gray-600'}`}>{category}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100 flex flex-col items-center">
                <div className="w-20 h-20 bg-bg-alt rounded-full flex items-center justify-center text-muted mb-4">
                  <Search size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">No products found</h3>
                <p className="text-muted max-w-md mx-auto mb-6">We couldn&apos;t find any products matching your current search and filter criteria.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('');
                  }}
                  className="px-6 py-2.5 bg-primary/10 text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
