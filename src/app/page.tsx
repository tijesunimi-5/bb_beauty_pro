'use client';

import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { DemoNav } from '../components/layout/DemoNav';
import { Hero } from '../components/landing/Hero';
import { BrandIntro } from '../components/landing/BrandIntro';
import { ServicesSection } from '../components/landing/ServicesSection';
import { PortfolioSection } from '../components/landing/PortfolioSection';
import { ProductCollection } from '../components/landing/ProductCollection';
import { PricingComparison } from '../components/landing/PricingComparison';
import { WhyUpgradeSection } from '../components/landing/WhyUpgradeSection';
import { LocationSection } from '../components/landing/LocationSection';
import { TestimonialsSection } from '../components/landing/TestimonialsSection';
import { FinalCtaSection } from '../components/landing/FinalCtaSection';
import { CartDrawer } from '../components/shop/CartDrawer';
import { CheckoutModal } from '../components/shop/CheckoutModal';
import { BookingModal } from '../components/booking/BookingModal';
import { ToastContainer } from '../components/ui/Toast';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F1A17] selection:bg-[#C5A880] selection:text-[#1F1A17]">
      <DemoNav />
      <Header />
      
      <main>
        <Hero />
        <BrandIntro />
        <ServicesSection />
        <PortfolioSection />
        <ProductCollection />
        <PricingComparison />
        <WhyUpgradeSection />
        <LocationSection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>

      <Footer />
      <CartDrawer />
      <CheckoutModal />
      <BookingModal />
      <ToastContainer />
    </div>
  );
}
