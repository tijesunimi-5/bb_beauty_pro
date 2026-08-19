'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useMua } from '../../context/MuaContext';
import { ShoppingBag, Calendar, Menu, X, Sparkles, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const { profile, openBookingModal, openCart, cartCount, activeDemoPackage, showToast } = useMua();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isSignature = activeDemoPackage === 'SIGNATURE';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
      showToast('🔒 Shopping Bag & Express Checkout UI is an exclusive Signature $500 feature. Switch to Signature in top bar to test!', 'info');
    }
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Story', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Lip Collection', href: '#shop' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-lg border-b border-[#EFE8DF] shadow-md py-3.5'
          : 'bg-[#FAF8F5]/70 backdrop-blur-md border-b border-[#EFE8DF] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-lg md:text-xl font-bold tracking-[0.25em] text-[#1F1A17] uppercase group-hover:text-[#8C6D53] transition duration-300">
            {profile.name}
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#8C6D53] font-light">
            Luxury Beauty &amp; Lip Studio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-medium uppercase tracking-[0.15em] text-[#6B5B52]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#1F1A17] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1F1A17] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions (Shopping Bag + Book CTA) */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={handleCartClick}
            className={`relative px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition flex items-center gap-2 ${
              isSignature
                ? 'text-[#1F1A17] bg-[#F5F0EB] hover:bg-[#EFE8DF] border border-[#EFE8DF]'
                : 'text-[#6B5B52] bg-[#F5F0EB]/60 border border-[#EFE8DF]'
            }`}
          >
            {isSignature ? (
              <ShoppingBag className="w-4 h-4 text-[#8C6D53]" />
            ) : (
              <Lock className="w-3.5 h-3.5 text-[#8C6D53]" />
            )}
            <span>Bag</span>
            <span className={`w-5 h-5 rounded-full font-mono font-bold text-[10px] flex items-center justify-center ${
              isSignature ? 'bg-[#1F1A17] text-[#FAF8F5]' : 'bg-[#8C6D53] text-white'
            }`}>
              {isSignature ? cartCount : '$500'}
            </span>
          </button>

          <button
            onClick={() => openBookingModal()}
            className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#FAF8F5] bg-[#1F1A17] hover:bg-[#382E29] shadow-lg transition duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Book Experience</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={handleCartClick}
            className="p-2 text-[#1F1A17] hover:text-[#8C6D53] transition relative"
            aria-label="Shopping Bag"
          >
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && isSignature && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#1F1A17] text-[#FAF8F5] font-mono text-[9px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1F1A17] hover:text-[#8C6D53] transition"
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
            className="lg:hidden bg-[#FAF8F5] border-b border-[#EFE8DF] px-6 py-6"
          >
            <div className="flex flex-col gap-4 text-xs uppercase tracking-widest text-[#1F1A17] font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#8C6D53] transition border-b border-[#EFE8DF] pb-3 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                </a>
              ))}

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openBookingModal();
                  }}
                  className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#FAF8F5] bg-[#1F1A17] shadow-lg flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#C5A880]" />
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
