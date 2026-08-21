'use client';

import React, { useEffect } from 'react';
import { useMua } from '../../context/MuaContext';
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
import { FloatingPillWidget } from '../../components/ui/FloatingPillWidget';

export default function SignaturePage() {
  const { activeDemoPackage, setActiveDemoPackage } = useMua();

  useEffect(() => {
    if (activeDemoPackage !== 'SIGNATURE') {
      setActiveDemoPackage('SIGNATURE');
    }
  }, [activeDemoPackage, setActiveDemoPackage]);

  return (
    <div className="min-h-screen bg-[#FFF9F9] text-[#221217]">
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
      <FloatingPillWidget />
    </div>
  );
}
