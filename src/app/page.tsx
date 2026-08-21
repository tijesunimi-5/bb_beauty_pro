'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useMua } from '../context/MuaContext';
import { DemoNav } from '../components/layout/DemoNav';
import { Header } from '../components/layout/Header';
import { Hero } from '../components/landing/Hero';
import { BrandIntro } from '../components/landing/BrandIntro';
import { ServicesSection } from '../components/landing/ServicesSection';
import { PortfolioSection } from '../components/landing/PortfolioSection';
import { ProductCollection } from '../components/landing/ProductCollection';
import { WhyUpgradeSection } from '../components/landing/WhyUpgradeSection';
import { PricingComparison } from '../components/landing/PricingComparison';
import { TestimonialsSection } from '../components/landing/TestimonialsSection';
import { LocationSection } from '../components/landing/LocationSection';
import { Footer } from '../components/layout/Footer';
import { BookingModal } from '../components/booking/BookingModal';
import { CartDrawer } from '../components/shop/CartDrawer';
import { CheckoutModal } from '../components/shop/CheckoutModal';
import { ToastContainer } from '../components/ui/Toast';
import { ArrowRight, Sparkles, Crown } from 'lucide-react';

export default function Home() {
  const { activeDemoPackage, setActiveDemoPackage } = useMua();

  useEffect(() => {
    if (activeDemoPackage !== 'ESSENTIAL') {
      setActiveDemoPackage('ESSENTIAL');
    }
  }, [activeDemoPackage, setActiveDemoPackage]);

  return (
    <div className="min-h-screen bg-[#FFF9F9] text-[#221217]">
      <DemoNav />

      {/* Essential Page Banner */}
      <div className="bg-gradient-to-r from-[#221217] via-[#3A1420] to-[#221217] text-white px-4 py-3 text-xs shadow-lg border-b border-[#FF6B8B]/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="px-2.5 py-0.5 rounded-full bg-[#FF6B8B] text-white font-extrabold text-[10px] uppercase tracking-wider shrink-0 flex items-center gap-1 shadow-md">
              <Sparkles className="w-3 h-3" /> $300 ESSENTIAL PAGE
            </span>
            <span className="font-medium text-[11px] tracking-wide text-white/90">
              Refined Digital Home: Includes Custom Beauty Site, Services Showcase &amp; Basic Booking Request Form.
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/signature"
              className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FF6B8B] hover:opacity-95 text-white font-bold text-[11px] transition uppercase tracking-wider flex items-center gap-1.5 shadow-lg"
            >
              <span>View $500 Signature Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/pricing"
              className="px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-[11px] transition uppercase tracking-wider flex items-center gap-1"
            >
              <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Compare</span>
            </Link>
          </div>
        </div>
      </div>

      <Header />
      <main>
        <Hero />
        <BrandIntro />
        <ServicesSection />
        <PortfolioSection />
        <ProductCollection />
        <WhyUpgradeSection />
        <PricingComparison />
        <TestimonialsSection />
        <LocationSection />
      </main>
      <Footer />

      <BookingModal />
      <CartDrawer />
      <CheckoutModal />
      <ToastContainer />
    </div>
  );
}
