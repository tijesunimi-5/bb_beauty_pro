'use client';

import React from 'react';
import { useMua } from '../../context/MuaContext';
import { MapPin, Navigation, Clock, Plane, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const LocationSection: React.FC = () => {
  const { profile } = useMua();

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#121110] text-[#FAF8F5] relative overflow-hidden border-t border-[#FAF8F5]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Location Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1B1A] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Studio & Destination</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#FAF8F5]">
              Visit The Studio or Book On-Location
            </h2>

            <p className="text-sm text-[#FAF8F5]/70 font-light leading-relaxed">
              Located in Victoria Island, our private glam suite is designed for intimate bridal trials, luxury consultations, and celebratory makeup sessions.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#FAF8F5]/10 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#FAF8F5] block">Studio Address:</span>
                  <span className="text-[#FAF8F5]/70">{profile.studioAddress}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#FAF8F5] block">Studio Hours:</span>
                  <span className="text-[#FAF8F5]/70">Tuesday – Sunday: 08:00 AM – 06:00 PM (By Appointment Only)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Plane className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#FAF8F5] block">Destination Travel:</span>
                  <span className="text-[#FAF8F5]/70">Hotel suites, private venues, and destination weddings worldwide.</span>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-2">
                <a
                  href={`tel:${profile.whatsappPhone}`}
                  className="flex items-center gap-2 text-[#C5A880] hover:text-[#D4AF37] transition font-medium"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{profile.whatsappPhone}</span>
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-[#C5A880] hover:text-[#D4AF37] transition font-medium"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{profile.email}</span>
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#121110] bg-[#D4AF37] hover:bg-[#E8D7D0] transition shadow-lg"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions to Studio</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Realistic Luxury Map Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#1C1B1A] aspect-[16/10] group">
              {/* Map Canvas Visual Simulation */}
              <div className="absolute inset-0 bg-[#1A1918] flex items-center justify-center p-6 bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:16px_16px] opacity-90">
                
                {/* Simulated Roads & Map Elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/3 left-0 right-0 h-1 bg-[#D4AF37]/40 transform -rotate-6" />
                  <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-[#D4AF37]/40 transform rotate-12" />
                  <div className="absolute bottom-1/4 left-0 right-0 h-2 bg-[#FAF8F5]/30 transform rotate-3" />
                </div>

                {/* Pin Card Marker */}
                <div className="relative z-10 bg-[#121110]/95 backdrop-blur-md p-6 rounded-2xl border border-[#D4AF37] shadow-2xl max-w-sm text-center transform group-hover:scale-105 transition-transform duration-500">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mx-auto mb-3 animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#FAF8F5]">
                    Aura Glamour Studio
                  </h3>
                  <p className="text-xs text-[#C5A880] mt-1 font-medium">
                    Victoria Island, Lagos
                  </p>
                  <p className="text-[11px] text-[#FAF8F5]/60 mt-2">
                    Private suite for bridal consultations & makeup transformations.
                  </p>
                </div>

              </div>

              {/* Top Map Banner Badge */}
              <div className="absolute top-4 left-4 bg-[#121110]/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#FAF8F5]/10 text-[11px] text-[#FAF8F5] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Studio Location Verified</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
