'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useMua } from '../../context/MuaContext';
import { ShoppingBag, Calendar, Menu, X, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const { profile, openBookingModal, openCart, cartCount, activeDemoPackage, showToast } = useMua();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isSignature = activeDemoPackage === 'SIGNATURE';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCartClick = () => {
    if (isSignature) {
      openCart();
    } else {
      showToast('🔒 Shopping Bag & Express Checkout UI is an exclusive Signature feature. Switch to Signature view to test!', 'info');
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Lip Collection', href: '#shop' },
    { name: 'Studio', href: '#location' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg border-b border-[#FF6B8B]/30 shadow-md py-3.5'
          : 'bg-[#FFF9F9]/90 backdrop-blur-md border-b border-[#FF6B8B]/20 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-xl md:text-2xl font-extrabold tracking-[0.25em] text-[#7E0027] group-hover:text-[#E83E8C] transition duration-300">
            {profile.name}
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#E83E8C] font-bold">
            Luxury Beauty &amp; Lip Studio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.15em] text-[#523B44]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#E83E8C] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E83E8C] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions (Shopping Bag + Book CTA) */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={handleCartClick}
            className={`relative px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition flex items-center gap-2 border ${
              isSignature
                ? 'text-[#7E0027] bg-[#FFF0F3] hover:bg-[#FFE4E8] border-[#FF6B8B]/40 shadow-sm'
                : 'text-[#523B44] bg-[#FFF0F3]/60 border-[#FF6B8B]/20'
            }`}
          >
            {isSignature ? (
              <ShoppingBag className="w-4 h-4 text-[#E83E8C]" />
            ) : (
              <Lock className="w-3.5 h-3.5 text-[#E83E8C]" />
            )}
            <span>Bag</span>
            {isSignature && (
              <span className="w-5 h-5 rounded-full font-mono font-bold text-[10px] flex items-center justify-center bg-gradient-to-r from-[#FF6B8B] to-[#E83E8C] text-white">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => openBookingModal()}
            className="px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF6B8B] via-[#E83E8C] to-[#D4AF37] hover:opacity-95 transition duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 shadow-md"
          >
            <Calendar className="w-3.5 h-3.5 text-white" />
            <span>Book Experience</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={handleCartClick}
            className="p-2 text-[#7E0027] hover:text-[#E83E8C] transition relative"
            aria-label="Shopping Bag"
          >
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && isSignature && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#E83E8C] text-white font-mono text-[9px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#7E0027] hover:text-[#E83E8C] transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-[#FF6B8B]/30 px-6 py-6"
          >
            <div className="flex flex-col gap-4 text-xs uppercase tracking-widest text-[#221217] font-bold">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#E83E8C] transition border-b border-[#FF6B8B]/20 pb-3 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                </a>
              ))}

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openBookingModal();
                  }}
                  className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF6B8B] via-[#E83E8C] to-[#D4AF37] shadow-lg flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Book Your Experience</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
