'use client';

import React from 'react';
import Link from 'next/link';
import { useMua } from '../../context/MuaContext';
import { ProductCard } from '../shop/ProductCard';
import { Sparkles, ArrowRight, ShoppingBag, Heart } from 'lucide-react';

export const ProductCollection: React.FC = () => {
  const { products } = useMua();

  return (
    <section id="shop" className="py-20 lg:py-28 bg-gradient-to-b from-[#FFF0F3] via-[#FFF9F9] to-[#FFF0F3] text-[#221217] relative overflow-hidden border-t border-[#FF6B8B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B8B]/20 border border-[#FF6B8B]/30 text-[#E83E8C] text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
            <Heart className="w-3.5 h-3.5 fill-[#FF6B8B]" />
            <span>The Lip Collection</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#221217]">
            Beauty you can take with you.
          </h2>

          <p className="text-xs sm:text-sm text-[#523B44] font-medium leading-relaxed">
            Formulated in Los Angeles with organic jojoba oil, hyaluronic acid, and botanical extracts. Designed to complement every skin tone and complete your signature look.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA to Full Shop */}
        <div className="mt-16 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-extrabold uppercase tracking-[0.2em] text-white bg-gradient-to-r from-[#FF6B8B] via-[#E83E8C] to-[#D4AF37] hover:shadow-[0_0_25px_rgba(255,107,139,0.5)] transition group shadow-xl"
          >
            <ShoppingBag className="w-4 h-4 text-white" />
            <span>Explore Full Beauty Collection</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
