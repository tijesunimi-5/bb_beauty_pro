'use client';

import React from 'react';
import Link from 'next/link';
import { useMua } from '../../context/MuaContext';
import { ProductCard } from '../shop/ProductCard';
import { Sparkles, ArrowRight, ShoppingBag } from 'lucide-react';

export const ProductCollection: React.FC = () => {
  const { products } = useMua();

  return (
    <section id="shop" className="py-20 lg:py-28 bg-[#FAF6F0] text-[#1F1A17] relative overflow-hidden border-t border-[#EFE8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F0EB] border border-[#EFE8DF] text-[#8C6D53] text-xs font-semibold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Lip Collection</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1F1A17]">
            Beauty you can take with you.
          </h2>

          <p className="text-xs sm:text-sm text-[#6B5B52] font-light leading-relaxed">
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
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#FAF8F5] bg-[#1F1A17] hover:bg-[#382E29] shadow-xl transition group"
          >
            <ShoppingBag className="w-4 h-4 text-[#C5A880]" />
            <span>Explore Full Beauty Collection</span>
            <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
