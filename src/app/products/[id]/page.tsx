import { getProductById, getProducts } from '@/lib/data';
import { notFound } from 'next/navigation';
import ProductGallery from '@/components/ProductGallery';
import { ArrowLeft, Check, MessageSquare, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import WhatsAppShareButton from '@/components/WhatsAppShareButton';

// Generate static params so the site can be statically generated for speed
export async function generateStaticParams() {
  const products = getProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product["Product Name"]} | Kubera Mobility Solutions`,
    description: product.Description,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);

  if (!product) {
    notFound();
  }

  const { "Product Name": name, "Price (INR)": price, Brand: brand, Category: category, Description: description, Specifications: specs, Images: images } = product;

  // Filter out empty specifications
  const validSpecs = Object.entries(specs).filter((entry) => entry[1] && entry[1].trim() !== '');

  const cleanPrice = price ? price.replace(/\$/g, '') : '';
  
  const whatsappMessage = `Hi, I am interested in ${name} (Price: ₹${cleanPrice}). Can you provide more details?`;
  const whatsappUrl = `https://wa.me/919989908123?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-transparent px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50/50 via-white/0 to-transparent dark:from-teal-900/10 dark:via-gray-900/0"></div>
      
      <div className="max-w-2xl w-full text-center space-y-8 relative z-10">
        <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 bg-teal-100 dark:bg-teal-900/30 rounded-full animate-ping opacity-20"></div>
          <div className="relative z-10 w-32 h-32 bg-white dark:bg-gray-800 rounded-full shadow-2xl flex items-center justify-center overflow-hidden border border-teal-100 dark:border-teal-800">
            <div className="relative w-full h-full flex items-center justify-center bg-teal-50/30 dark:bg-teal-950/30">
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600 dark:text-teal-400 relative z-10 animate-pulse"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
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
            This product is currently being updated to bring you the best details and specifications. 
            Check back shortly!
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

  /*
  return (
    <div className="bg-bg-alt py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb *}
        <Link href="/products" className="inline-flex items-center text-muted hover:text-primary transition-colors mb-8 font-medium">
          <ArrowLeft size={20} className="mr-2" />
          Back to Products
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 lg:divide-x divide-gray-100">
            {/* Left Column: Images *}
            <div className="p-8 lg:p-12">
              <ProductGallery images={images} productName={name} />
            </div>

            {/* Right Column: Product Details *}
            <div className="p-8 lg:p-12 flex flex-col">
              <div className="mb-2 flex items-center gap-3">
                <span className="bg-accent-blue text-primary py-1 px-3 rounded-full text-sm font-semibold tracking-wider uppercase">
                  {category}
                </span>
                {brand && brand !== 'Generic/Unknown' && (
                  <span className="text-muted font-medium text-sm border-l border-gray-300 pl-3">
                    Brand: <span className="text-foreground">{brand}</span>
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 leading-tight">
                {name}
              </h1>

              <div className="flex items-end justify-between gap-3 mb-6 flex-wrap">
                <div className="flex items-end gap-3">
                  <span className="text-3xl font-extrabold text-primary tracking-tight">₹{cleanPrice}</span>
                  <span className="text-muted text-sm pb-1 mb-1">Tax excluded</span>
                </div>
                <WhatsAppShareButton productName={name} />
              </div>

              <div className="prose prose-blue max-w-none text-muted mb-8 text-base leading-relaxed">
                {description ? (
                  <p>{description}</p>
                ) : (
                  <p>A reliable and sturdy wheelchair designed to provide ultimate comfort and ease of use. Ideal for both temporary and long-term use.</p>
                )}
              </div>

              {/* Action Buttons *}
              <div className="flex flex-col sm:flex-row gap-4 mb-10 pt-6 border-t border-gray-100">
                <a 
                  href={whatsappUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-cta hover:bg-blue-700 text-white py-4 px-6 rounded-2xl font-bold transition-all hover:shadow-lg focus:ring-4 focus:ring-blue-100 active:scale-95"
                >
                  <MessageSquare size={20} />
                  Enquire on WhatsApp
                </a>
                <a 
                  href="tel:+919989908123" 
                  className="flex items-center justify-center gap-2 bg-bg-alt hover:bg-gray-100 text-foreground py-4 px-8 rounded-2xl font-bold transition-all shadow-sm border border-gray-200 focus:ring-4 focus:ring-gray-100 active:scale-95"
                >
                  <PhoneCall size={20} />
                  Call Now
                </a>
              </div>

              {/* Specifications Table *}
              {validSpecs.length > 0 && (
                <div className="mt-auto">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Check size={24} className="text-secondary" />
                    Product Specifications
                  </h3>
                  <div className="bg-bg-alt rounded-2xl border border-gray-100 overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <tbody className="divide-y divide-gray-100">
                        {validSpecs.map(([key, value], index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-transparent'}>
                            <td className="py-3.5 pl-6 pr-3 text-sm font-medium text-muted w-1/2">
                              {key}
                            </td>
                            <td className="py-3.5 pl-3 pr-6 text-sm text-foreground font-semibold w-1/2 break-words">
                              {value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  */
}
