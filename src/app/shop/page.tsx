'use client';

import React from 'react';
import { useMua } from '../../context/MuaContext';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { DemoNav } from '../../components/layout/DemoNav';
import { ProductCard } from '../../components/shop/ProductCard';
import { CartDrawer } from '../../components/shop/CartDrawer';
import { CheckoutModal } from '../../components/shop/CheckoutModal';
import { ToastContainer } from '../../components/ui/Toast';
import { BookingModal } from '../../components/booking/BookingModal';
import { Sparkles, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ShopPage() {
  const { products } = useMua();

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F1A17] flex flex-col justify-between">
      <DemoNav />
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Shop Page Banner */}
        <div className="bg-[#F5F0EB] border border-[#EFE8DF] rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#EFE8DF] text-[#8C6D53] text-xs font-semibold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Formulated in Los Angeles</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#1F1A17]">
            The Luxe Lip Collection
          </h1>

          <p className="text-xs sm:text-sm text-[#6B5B52] font-light max-w-2xl mx-auto leading-relaxed">
            Nourishing, high-shine lip formulas infused with organic botanical oils, hyaluronic acid, and vitamin E. Free US shipping on all orders over $50.
          </p>

          {/* Guarantees Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-8 text-xs text-[#8C6D53] border-t border-[#EFE8DF] max-w-xl mx-auto">
            <div className="flex items-center gap-1.5 font-medium">
              <Truck className="w-4 h-4 text-[#1F1A17]" />
              <span>Free US Shipping over $50</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#1F1A17]" />
              <span>Cruelty-Free &amp; Vegan</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <RotateCcw className="w-4 h-4 text-[#1F1A17]" />
              <span>30-Day Happiness Guarantee</span>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </main>

      <Footer />
      <CartDrawer />
      <CheckoutModal />
      <BookingModal />
      <ToastContainer />
    </div>
  );
}
