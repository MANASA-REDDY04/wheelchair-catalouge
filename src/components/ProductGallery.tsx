'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProductGallery({ images, productName }: { images: string[], productName: string }) {
  const [activeImage, setActiveImage] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square bg-bg-alt rounded-2xl flex items-center justify-center text-muted">
        No image available
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="aspect-square relative bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm flex items-center justify-center p-4">
        <Image
          src={images[activeImage]}
          alt={`${productName} - Image ${activeImage + 1}`}
          fill
          className="object-contain p-8 transform transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                activeImage === index 
                  ? 'border-primary shadow-md transform scale-105' 
                  : 'border-transparent bg-white hover:border-primary/30 hover:shadow-sm'
              }`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${index + 1}`}
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 25vw, 10vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
