'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useMua } from '../../context/MuaContext';
import { DemoNav } from '../../components/layout/DemoNav';
import { Header } from '../../components/layout/Header';
import { Hero } from '../../components/landing/Hero';
import { BrandIntro } from '../../components/landing/BrandIntro';
import { ServicesSection } from '../../components/landing/ServicesSection';
import { PortfolioSection } from '../../components/landing/PortfolioSection';
import { ProductCollection } from '../../components/landing/ProductCollection';
import { WhyUpgradeSection } from '../../components/landing/WhyUpgradeSection';
import { PricingComparison } from '../../components/landing/PricingComparison';
import { TestimonialsSection } from '../../components/landing/TestimonialsSection';
import { LocationSection } from '../../components/landing/LocationSection';
import { Footer } from '../../components/layout/Footer';
import { BookingModal } from '../../components/booking/BookingModal';
import { CartDrawer } from '../../components/shop/CartDrawer';
import { CheckoutModal } from '../../components/shop/CheckoutModal';
import { ToastContainer } from '../../components/ui/Toast';
import { Zap, ArrowLeft, Crown } from 'lucide-react';

export default function SignaturePage() {
  const { activeDemoPackage, setActiveDemoPackage } = useMua();

  useEffect(() => {
    if (activeDemoPackage !== 'SIGNATURE') {
      setActiveDemoPackage('SIGNATURE');
    }
  }, [activeDemoPackage, setActiveDemoPackage]);

  return (
    <div className="min-h-screen bg-[#FFF9F9] text-[#221217]">
      <DemoNav />

      {/* Flagship Signature Page Banner */}
      <div className="bg-gradient-to-r from-[#7E0027] via-[#B81D47] to-[#E83E8C] text-white px-4 py-3 text-xs shadow-lg border-b border-[#FF6B8B]/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#121110] font-extrabold text-[10px] uppercase tracking-wider shrink-0 flex items-center gap-1 shadow-md">
              <Zap className="w-3 h-3 fill-[#121110]" /> $500 SIGNATURE PAGE
            </span>
            <span className="font-semibold text-[11px] tracking-wide text-white">
              ⚡ Live Flagship System: Unlocked 5-Step Appointment Calendar, Custom Intake Builder &amp; Lip Gloss Shopping Bag.
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/"
              className="px-4 py-1.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#7E0027] font-bold text-[11px] transition uppercase tracking-wider flex items-center gap-1.5 backdrop-blur-md shadow"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>View $300 Essential Page</span>
            </Link>

            <Link
              href="/pricing"
              className="px-3.5 py-1.5 rounded-full bg-[#D4AF37] text-[#121110] font-bold text-[11px] hover:bg-[#e6c200] transition uppercase tracking-wider flex items-center gap-1 shadow"
            >
              <Crown className="w-3.5 h-3.5" />
              <span>Compare Matrix</span>
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
