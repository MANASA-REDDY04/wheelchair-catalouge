import { getProducts, getCategories } from '@/lib/data';
import ProductListingClient from '@/components/ProductListingClient';
import { Metadata } from 'next';
import { HardHat, Wrench, Hammer, Cog } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Products | Kubera Mobility Solutions',
  description: 'Browse our full catalog of qualitative wheelchairs and medical equipment.',
};

export default function ProductsPage() {
  const products = getProducts();
  const categories = getCategories();

  // The actual products listing is commented out below:
  // return <ProductListingClient initialProducts={products} categories={categories} />;

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-transparent px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50/50 via-white/0 to-transparent dark:from-teal-900/10 dark:via-gray-900/0"></div>
      
      <div className="max-w-2xl w-full text-center space-y-8 relative z-10">
        <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 bg-teal-100 dark:bg-teal-900/30 rounded-full animate-ping opacity-20"></div>
          <div className="relative z-10 w-32 h-32 bg-white dark:bg-gray-800 rounded-full shadow-2xl flex items-center justify-center overflow-hidden border border-teal-100 dark:border-teal-800">
            {/* The Animated Doodle */}
            <div className="relative w-full h-full flex items-center justify-center bg-teal-50/30 dark:bg-teal-950/30">
                <Cog className="absolute text-teal-400/40 w-16 h-16 animate-[spin_4s_linear_infinite] -bottom-3 -left-3" />
                <Cog className="absolute text-emerald-400/30 w-12 h-12 animate-[spin_3s_linear_infinite_reverse] top-2 right-1" />
                <HardHat className="text-teal-600 dark:text-teal-400 w-14 h-14 relative z-10 mb-2" />
                <Wrench className="absolute text-amber-500 w-7 h-7 animate-[bounce_2s_ease-in-out_infinite] top-[45%] right-[15%]" />
                <Hammer className="absolute text-rose-500 w-7 h-7 animate-[bounce_2.5s_ease-in-out_infinite] top-[20%] left-[15%]" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100/80 dark:bg-amber-900/40 border border-amber-200 dark:border-amber-800 px-4 py-1.5 text-sm font-medium text-amber-800 dark:text-amber-400 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Under Construction
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white pb-2">
            Curating New Horizons
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
            Our product catalog is currently being updated to bring you the best in mobility solutions. 
            Our team is working hard behind the scenes.
          </p>
        </div>

        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-8 py-3.5 text-sm font-medium text-white shadow-lg transition-all hover:bg-teal-700 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
