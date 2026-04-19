import Link from 'next/link';
import { getProducts, getCategories } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import HeroAnimation from '@/components/HeroAnimation';

export default function Home() {
  const products = getProducts();
  
  // Pick demanded products for Featured section based on brochure keywords
  const demandedCategories = ['Hospital Furniture', 'Suction', 'Wheelchair', 'Walking', 'Commode'];
  const featuredProducts: typeof products = [];
  
  for (const dem of demandedCategories) {
    const item = products.find(p => p.Category.includes(dem) || p["Product Name"].includes(dem) || p.Category.includes('Premium'));
    if (item && !featuredProducts.some(fp => !!fp && fp.id === item.id)) {
      featuredProducts.push(item);
    }
  }
  const otherProducts = products.filter(p => !featuredProducts.some(fp => fp.id === p.id)).slice(0, 8 - featuredProducts.length);
  featuredProducts.push(...otherProducts);
  const categories = getCategories().slice(0, 6);
  const categoriesWithImages = categories.map(cat => {
    const p = products.find(prod => prod.Category === cat && prod.Images && prod.Images.length > 0);
    return {
      name: cat,
      image: p ? p.Images[0] : null
    };
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden py-12 lg:py-0">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/40 to-white -z-10"></div>
        <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px', color: 'var(--color-primary)' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[calc(100vh-80px)]">
          <div className="w-full lg:w-1/2 pt-12 lg:py-20 text-center lg:text-left flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl lg:leading-tight font-extrabold text-foreground tracking-tight mb-6">
              Medical Equipment <br />
              <span className="text-primary italic">&amp; Complete Mobility Solutions</span>
            </h1>
            <p className="text-lg text-muted mb-8 max-w-xl mx-auto lg:mx-0">
              We provide a wide range of high-quality medical equipment, surgical tables, hospital furniture, and wheelchairs tailored for your specific needs. Serving hospitals, NGOs &amp; Institutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/products" 
                className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-full shadow-sm text-white bg-primary hover:bg-cta focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all hover:shadow-lg hover:-translate-y-1"
              >
                View Products
              </Link>
              <a 
                href="https://wa.me/919989908123" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-8 py-3.5 border border-gray-200 text-base font-semibold rounded-full bg-white text-foreground hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all hover:shadow hover:-translate-y-1"
              >
                Contact on WhatsApp
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center pb-12 lg:pb-0">
            <HeroAnimation />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      {/*
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-3">Browse by Category</h2>
              <p className="text-muted text-lg max-w-2xl">Find the perfect wheelchair for your specific requirements.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categoriesWithImages.map((category) => (
              <Link 
                key={category.name} 
                href={`/products?category=${encodeURIComponent(category.name)}`}
                className="bg-bg-alt rounded-2xl p-6 text-center hover:bg-accent-blue hover:text-primary transition-colors flex flex-col items-center justify-center gap-4 group h-full border border-transparent hover:border-primary/20"
              >
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform overflow-hidden p-3 border border-gray-100">
                  {category.image ? (
                    <img src={category.image} alt={category.name} className="w-full h-full object-contain" />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                  )}
                </div>
                <h3 className="font-semibold text-sm leading-tight text-foreground group-hover:text-primary transition-colors">{category.name.split(' ').slice(0, 3).join(' ')}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Featured Products */}
      {/*
      <section className="py-16 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-3">Featured Products</h2>
              <p className="text-muted text-lg max-w-2xl">Discover our most popular and highly recommended mobility solutions.</p>
            </div>
            <Link href="/products" className="inline-flex items-center text-primary font-medium hover:text-cta transition-colors">
              View all products <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      */}

      

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Kubera Mobility?</h2>
            <p className="text-muted text-lg">We are committed to providing not just equipment, but a better quality of life through our carefully selected range of mobility solutions.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 rounded-3xl bg-accent-blue/30 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Premium Quality</h3>
              <p className="text-muted">All our products undergo strict quality checks to ensure safety, durability, and comfort for the user.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-accent-green/30 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-secondary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Best Prices</h3>
              <p className="text-muted">We offer the most competitive prices without compromising on the quality and features of the wheelchairs.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-orange-50 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-orange-500 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Expert Support</h3>
              <p className="text-muted">Our healthcare experts are available to guide you in choosing the right wheelchair for your specific condition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need help choosing the right wheelchair?</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl opacity-90">
            Our experts are ready to assist you. Contact us today for a free consultation and find the product that perfectly fits your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/919989908123" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-bold rounded-full shadow-sm text-primary bg-white hover:bg-gray-50 transition-colors"
            >
              Consult on WhatsApp
            </a>
            <a 
              href="tel:+919989908123" 
              className="inline-flex justify-center items-center px-8 py-3.5 border-2 border-white/30 text-base font-semibold rounded-full bg-transparent hover:bg-white/10 transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
