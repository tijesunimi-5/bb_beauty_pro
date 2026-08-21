'use client';

import React from 'react';
import Link from 'next/link';
import { useMua } from '../../context/MuaContext';
import { Instagram, Phone, Mail, MapPin, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { profile } = useMua();

  return (
    <footer className="bg-[#1A0B11] text-[#FAF8F5] border-t border-[#FF6B8B]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FAF8F5]/10">
          
          {/* Brand Story */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-[0.25em] text-white uppercase">
                {profile.name}
              </span>
              <span className="text-xs tracking-[0.3em] uppercase text-[#FF6B8B] block font-bold">
                Luxury Beauty &amp; Lip Studio
              </span>
            </Link>

            <p className="text-xs text-[#FAF8F5]/70 font-medium leading-relaxed max-w-sm">
              {profile.tagline} High-definition makeup artistry for weddings and special events — with clean lip essentials formulated to elevate your everyday glow.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={`https://instagram.com/${profile.instagram.replace('@', '')}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 border border-[#FF6B8B]/30 flex items-center justify-center text-[#FF6B8B] hover:text-white hover:bg-[#FF6B8B] transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`tel:${profile.whatsappPhone}`}
                className="w-9 h-9 rounded-full bg-white/10 border border-[#FF6B8B]/30 flex items-center justify-center text-[#FF6B8B] hover:text-white hover:bg-[#FF6B8B] transition"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="w-9 h-9 rounded-full bg-white/10 border border-[#FF6B8B]/30 flex items-center justify-center text-[#FF6B8B] hover:text-white hover:bg-[#FF6B8B] transition"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
              Explore Brand
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-[#FAF8F5]/80 uppercase tracking-wider">
              <li><a href="#about" className="hover:text-[#FF6B8B] transition">Story &amp; Founder</a></li>
              <li><a href="#services" className="hover:text-[#FF6B8B] transition">Makeup Services</a></li>
              <li><Link href="/shop" className="hover:text-[#FF6B8B] transition">Luxe Lip Shop</Link></li>
              <li><a href="#portfolio" className="hover:text-[#FF6B8B] transition">Editorial Gallery</a></li>
              <li><Link href="/pricing" className="hover:text-[#FF6B8B] transition">Pricing Packages</Link></li>
            </ul>
          </div>

          {/* Client & Artist Portals */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
              Client &amp; Artist Portals
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#FAF8F5]/80">
              <li>
                <Link href="/status?ref=BBPRO-8402" className="hover:text-[#FF6B8B] transition flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF6B8B]" />
                  <span>Check Appointment Status (#BBPRO-8402)</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-[#FF6B8B] transition flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Artist Business Dashboard</span>
                </Link>
              </li>
              <li className="pt-2 text-[11px] text-[#FAF8F5]/60 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#FF6B8B]" />
                <span>{profile.studioAddress}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#FAF8F5]/50 font-medium">
          <p>© {new Date().getFullYear()} BB BEAUTY PRO. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>BB BEAUTY PRO Luxury Experience</span>
            <Heart className="w-3 h-3 text-[#FF6B8B] fill-[#FF6B8B]" />
          </p>
        </div>

      </div>
    </footer>
  );
};
