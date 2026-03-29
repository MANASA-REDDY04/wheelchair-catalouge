import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';

export default function ProductCard({ product }: { product: Product & { id: string } }) {
  // Use the first image or a placeholder
  const imageUrl = product.Images && product.Images.length > 0 
    ? product.Images[0] 
    : '/placeholder.jpg'; // We can use a generic placeholder icon if needed, but the original ones seem to have links.

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full group">
      <Link href={`/products/${product.id}`} className="block relative aspect-square overflow-hidden bg-gray-50 flex-shrink-0">
        <Image 
          src={imageUrl} 
          alt={product["Product Name"]} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
        {product.Brand && product.Brand !== 'Generic/Unknown' && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-primary rounded-full shadow-sm">
            {product.Brand}
          </div>
        )}
      </Link>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-xs font-medium text-muted mb-2 uppercase tracking-wider">{product.Category}</div>
        <Link href={`/products/${product.id}`} className="group-hover:text-primary transition-colors">
          <h3 className="font-semibold text-foreground text-lg leading-tight mb-2 line-clamp-2">
            {product["Product Name"]}
          </h3>
        </Link>
        
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="font-bold text-lg text-primary">₹{product["Price (INR)"]?.replace(/\$/g, '')}</span>
          <a
            href={`https://wa.me/919989908123?text=${encodeURIComponent(`Hi, I am interested in ${product["Product Name"]}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-cta hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 outline-none"
            aria-label="Contact on WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
