'use client';

import { Share2 } from 'lucide-react';

interface WhatsAppShareButtonProps {
  productName: string;
}

export default function WhatsAppShareButton({ productName }: WhatsAppShareButtonProps) {
  const handleShare = () => {
    const text = `Check out this product: ${productName} \n\n${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <button 
      onClick={handleShare} 
      className="flex flex-row items-center gap-2 text-primary hover:text-blue-700 font-medium transition-colors text-sm py-2 px-4 bg-primary/10 rounded-full hover:bg-primary/20"
      aria-label="Share via WhatsApp"
    >
      <Share2 size={16} />
      <span>Share Product</span>
    </button>
  );
}
