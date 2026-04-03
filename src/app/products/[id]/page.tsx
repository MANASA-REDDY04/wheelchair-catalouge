import { getProductById, getProducts } from '@/lib/data';
import { notFound } from 'next/navigation';
import ProductGallery from '@/components/ProductGallery';
import { ArrowLeft, Check, MessageSquare, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import WhatsAppShareButton from '@/components/WhatsAppShareButton';

// Generate static params
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
    return { title: 'Product Not Found' };
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

  const {
    "Product Name": name,
    "Price (INR)": price,
    Brand: brand,
    Category: category,
    Description: description,
    Specifications: specs,
    Images: images
  } = product;

  const validSpecs = Object.entries(specs || {}).filter(
    ([, value]) => value && value.trim() !== ''
  );

  const cleanPrice = price ? price.replace(/\$/g, '') : '';

  const whatsappMessage = `Hi, I am interested in ${name} (Price: ₹${cleanPrice}). Can you provide more details?`;
  const whatsappUrl = `https://wa.me/919989908123?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-bg-alt py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center text-muted hover:text-primary transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Products
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 lg:divide-x divide-gray-100">

            {/* LEFT: Images */}
            <div className="p-8 lg:p-12">
              <ProductGallery images={images} productName={name} />
            </div>

            {/* RIGHT: Details */}
            <div className="p-8 lg:p-12 flex flex-col">

              {/* Category + Brand */}
              <div className="mb-2 flex items-center gap-3">
                <span className="bg-accent-blue text-primary py-1 px-3 rounded-full text-sm font-semibold uppercase">
                  {category}
                </span>
                {brand && brand !== 'Generic/Unknown' && (
                  <span className="text-muted text-sm border-l border-gray-300 pl-3">
                    Brand: <span className="text-foreground">{brand}</span>
                  </span>
                )}
              </div>

              {/* Product Name */}
              <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
                {name}
              </h1>

              {/* Price */}
              <div className="flex items-end justify-between gap-3 mb-6 flex-wrap">
                <div className="flex items-end gap-3">
                  <span className="text-3xl font-extrabold text-primary">
                    ₹{cleanPrice}
                  </span>
                  <span className="text-muted text-sm">Tax excluded</span>
                </div>
                <WhatsAppShareButton productName={name} />
              </div>

              {/* Description */}
              <div className="text-muted mb-8">
                {description ? (
                  <p>{description}</p>
                ) : (
                  <p>
                    A reliable and sturdy wheelchair designed for comfort and durability.
                  </p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl font-bold"
                >
                  <MessageSquare size={20} />
                  Enquire on WhatsApp
                </a>

                <a
                  href="tel:+919989908123"
                  className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 py-4 px-6 rounded-xl font-bold"
                >
                  <PhoneCall size={20} />
                  Call Now
                </a>

              </div>

              {/* Specifications */}
              {validSpecs.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Check size={20} />
                    Specifications
                  </h3>

                  <table className="w-full border">
                    <tbody>
                      {validSpecs.map(([key, value], index) => (
                        <tr key={index} className="border-b">
                          <td className="p-2 font-medium">{key}</td>
                          <td className="p-2">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}