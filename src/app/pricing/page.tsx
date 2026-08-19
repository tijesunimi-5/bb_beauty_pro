'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { DemoNav } from '../../components/layout/DemoNav';
import { PricingComparison } from '../../components/landing/PricingComparison';
import { ToastContainer } from '../../components/ui/Toast';
import { BookingModal } from '../../components/booking/BookingModal';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#121110] text-[#FAF8F5] flex flex-col justify-between">
      <DemoNav />
      <Header />
      
      <main className="flex-1">
        <PricingComparison />
      </main>

      <Footer />
      <BookingModal />
      <ToastContainer />
    </div>
  );
}
