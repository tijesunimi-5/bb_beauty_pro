'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useMua } from '../../context/MuaContext';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { DemoNav } from '../../components/layout/DemoNav';
import { ToastContainer } from '../../components/ui/Toast';
import { CartDrawer } from '../../components/shop/CartDrawer';
import { CheckoutModal } from '../../components/shop/CheckoutModal';
import { BookingModal } from '../../components/booking/BookingModal';
import { BookingRequest } from '../../types';
import {
  Search,
  CheckCircle2,
  Clock,
  XCircle,
  Calendar,
  MapPin,
  Sparkles,
  CreditCard,
  Phone,
  ArrowLeft,
  Upload,
} from 'lucide-react';
import { motion } from 'framer-motion';

function StatusContent() {
  const searchParams = useSearchParams();
  const initialRef = searchParams.get('ref') || 'AURA-8402';
  const { bookingRequests, profile, uploadPaymentProof } = useMua();

  const [searchRef, setSearchRef] = useState<string>(initialRef);
  const [activeRequest, setActiveRequest] = useState<BookingRequest | null>(null);

  useEffect(() => {
    if (searchRef) {
      const found = bookingRequests.find(
        (r) => r.id.toLowerCase() === searchRef.trim().toLowerCase() || r.id.toLowerCase() === `aura-${searchRef.trim().toLowerCase()}`
      );
      setActiveRequest(found || null);
    }
  }, [searchRef, bookingRequests]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = bookingRequests.find(
      (r) => r.id.toLowerCase() === searchRef.trim().toLowerCase() || r.id.toLowerCase() === `aura-${searchRef.trim().toLowerCase()}`
    );
    setActiveRequest(found || null);
  };

  const handleSimulatedProofUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && activeRequest) {
      const simulatedUrl = 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop';
      uploadPaymentProof(activeRequest.id, simulatedUrl);
    }
  };

  const statusSteps = [
    { title: 'Request Received', key: 'Pending' },
    { title: 'Payment Submitted', key: 'Payment Submitted' },
    { title: 'Appointment Approved', key: 'Approved' },
    { title: 'Completed', key: 'Completed' },
  ];

  const getStepIndex = (status: string) => {
    if (status === 'Pending') return 0;
    if (status === 'Payment Submitted') return 1;
    if (status === 'Approved') return 2;
    if (status === 'Completed') return 3;
    return -1; // Rejected
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F1A17] flex flex-col justify-between">
      <DemoNav />
      <Header />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F0EB] border border-[#EFE8DF] text-[#8C6D53] text-xs font-semibold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Booking Status Portal</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-light text-[#1F1A17]">
            Track Your Appointment Status
          </h1>
          <p className="text-xs sm:text-sm text-[#6B5B52] font-light">
            Enter your booking reference code (e.g. <strong className="text-[#1F1A17]">#AURA-8402</strong>) to view real-time approval &amp; payment status.
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="max-w-md mx-auto mb-12">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchRef}
              onChange={(e) => setSearchRef(e.target.value)}
              placeholder="Enter reference (e.g. AURA-8402)..."
              className="w-full bg-[#F5F0EB] border border-[#C5A880] rounded-full pl-12 pr-28 py-3.5 text-xs font-mono text-[#1F1A17] outline-none shadow-lg"
            />
            <Search className="w-4 h-4 text-[#8C6D53] absolute left-4" />
            <button
              type="submit"
              className="absolute right-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-[#FAF8F5] bg-[#1F1A17] hover:bg-[#382E29] transition"
            >
              Search
            </button>
          </div>
        </form>

        {/* Request Result Card */}
        {activeRequest ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#F5F0EB] border border-[#EFE8DF] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EFE8DF] pb-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#8C6D53] font-bold">
                  Booking Reference
                </span>
                <h2 className="font-mono text-2xl font-bold text-[#1F1A17]">
                  #{activeRequest.id}
                </h2>
                <p className="text-xs text-[#6B5B52]">
                  Client: <strong className="text-[#1F1A17]">{activeRequest.clientName}</strong>
                </p>
              </div>

              <div className="text-right">
                <span className="text-[10px] uppercase tracking-widest text-[#6B5B52] block">Current Status</span>
                <div
                  className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                    activeRequest.status === 'Approved'
                      ? 'bg-emerald-500/20 text-emerald-700 border border-emerald-500/40'
                      : activeRequest.status === 'Payment Submitted'
                      ? 'bg-amber-500/20 text-amber-800 border border-amber-500/40'
                      : activeRequest.status === 'Rejected'
                      ? 'bg-rose-500/20 text-rose-700 border border-rose-500/40'
                      : 'bg-[#1F1A17]/10 text-[#1F1A17] border border-[#1F1A17]/30'
                  }`}
                >
                  {activeRequest.status === 'Approved' && <CheckCircle2 className="w-3.5 h-3.5" />}
                  {activeRequest.status === 'Payment Submitted' && <Clock className="w-3.5 h-3.5" />}
                  {activeRequest.status === 'Rejected' && <XCircle className="w-3.5 h-3.5" />}
                  {activeRequest.status}
                </div>
              </div>
            </div>

            {/* Progress Timeline */}
            {activeRequest.status !== 'Rejected' ? (
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-widest text-[#8C6D53] font-bold">
                  Progress Timeline
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {statusSteps.map((step, idx) => {
                    const currentIdx = getStepIndex(activeRequest.status);
                    const isDone = idx <= currentIdx;
                    const isCurrent = idx === currentIdx;

                    return (
                      <div
                        key={step.key}
                        className={`p-4 rounded-2xl border transition ${
                          isDone
                            ? 'bg-[#FAF8F5] border-[#1F1A17] text-[#1F1A17]'
                            : 'bg-[#FAF8F5]/50 border-[#EFE8DF] text-[#6B5B52]/40'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                            isDone ? 'bg-[#1F1A17] text-[#FAF8F5]' : 'bg-[#EFE8DF] text-[#6B5B52]/40'
                          }`}>
                            0{idx + 1}
                          </span>
                          {isCurrent && <span className="w-2 h-2 rounded-full bg-[#8C6D53] animate-ping" />}
                        </div>
                        <p className="font-serif text-xs font-bold">{step.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="bg-rose-50 border border-rose-200 p-4 rounded-2xl text-xs text-rose-700">
                ⚠️ This appointment request was declined. Please contact Elena Vance to reschedule.
              </div>
            )}

            {/* Event Summary Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FAF8F5] p-6 rounded-2xl border border-[#EFE8DF] text-xs">
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-wider text-[#8C6D53] font-bold">Event Details</p>
                <p className="font-serif font-bold text-base text-[#1F1A17]">{activeRequest.eventType}</p>
                <div className="flex items-center gap-2 text-[#6B5B52]">
                  <Calendar className="w-3.5 h-3.5 text-[#8C6D53]" />
                  <span>{activeRequest.eventDate} at {activeRequest.eventTime}</span>
                </div>
                <div className="flex items-center gap-2 text-[#6B5B52]">
                  <MapPin className="w-3.5 h-3.5 text-[#8C6D53]" />
                  <span>{activeRequest.location}</span>
                </div>
              </div>

              <div className="space-y-2 border-t md:border-t-0 md:border-l border-[#EFE8DF] pt-4 md:pt-0 md:pl-6">
                <p className="text-[10px] uppercase tracking-wider text-[#8C6D53] font-bold">Pricing &amp; Receipt</p>
                <p className="font-mono text-lg font-bold text-[#1F1A17]">
                  ${activeRequest.paymentAmount.toFixed(2)} USD
                </p>
                <p className="text-[#6B5B52]">
                  Faces: <strong>{activeRequest.numberOfFaces} Person(s)</strong>
                </p>
                {activeRequest.paymentProofUrl ? (
                  <div className="flex items-center gap-2 text-emerald-700 text-[11px] font-bold pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Deposit Receipt Verified &amp; Under Review
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-amber-700 text-[11px] font-bold pt-1">
                    <Clock className="w-3.5 h-3.5" /> Deposit Receipt Pending
                  </div>
                )}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#EFE8DF]">
              <label className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FAF8F5] border border-[#EFE8DF] text-[#1F1A17] hover:bg-[#1F1A17] hover:text-[#FAF8F5] transition">
                <Upload className="w-4 h-4" />
                <span>Upload / Update Deposit Screenshot</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSimulatedProofUpload}
                  className="hidden"
                />
              </label>

              <a
                href={`mailto:${profile.email}?subject=Booking Inquiry #${activeRequest.id}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#FAF8F5] bg-[#1F1A17] hover:bg-[#382E29] transition"
              >
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <span>Contact Elena&apos;s Studio</span>
              </a>
            </div>
          </motion.div>
        ) : (
          <div className="bg-[#F5F0EB] border border-[#EFE8DF] rounded-3xl p-10 text-center space-y-4">
            <CreditCard className="w-12 h-12 text-[#8C6D53] mx-auto opacity-50" />
            <h3 className="font-serif text-xl font-bold text-[#1F1A17]">No Booking Found</h3>
            <p className="text-xs text-[#6B5B52] max-w-sm mx-auto">
              We couldn&apos;t find a booking matching &quot;{searchRef}&quot;. Try clicking a demo reference code below:
            </p>
            <div className="flex justify-center gap-2 pt-2">
              {['AURA-8402', 'AURA-8403'].map((code) => (
                <button
                  key={code}
                  onClick={() => setSearchRef(code)}
                  className="px-4 py-1.5 rounded-full bg-[#FAF8F5] border border-[#C5A880] text-xs font-mono text-[#1F1A17] hover:bg-[#1F1A17] hover:text-[#FAF8F5] transition font-bold"
                >
                  #{code}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-xs text-[#8C6D53] hover:text-[#1F1A17] uppercase tracking-widest font-semibold">
            <ArrowLeft className="w-4 h-4" /> Return to Main Website
          </Link>
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

export default function StatusPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF8F5] text-[#1F1A17] flex items-center justify-center">Loading Status Portal...</div>}>
      <StatusContent />
    </Suspense>
  );
}
