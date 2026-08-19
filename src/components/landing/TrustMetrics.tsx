'use client';

import React from 'react';
import { useMua } from '../../context/MuaContext';
import { Award, Users, Star, Plane, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const TrustMetrics: React.FC = () => {
  const { profile } = useMua();

  const metrics = [
    {
      icon: Award,
      value: `${profile.yearsExperience}+ Years`,
      label: 'Professional Experience',
      subtext: 'Certified international makeup artist',
    },
    {
      icon: Users,
      value: `${profile.clientCount}+`,
      label: 'Brides & Events Styled',
      subtext: 'Over 140 weddings & galas completed',
    },
    {
      icon: Star,
      value: `${profile.rating} / 5.0`,
      label: '5-Star Client Rating',
      subtext: 'Verified client reviews & testimonials',
    },
    {
      icon: Plane,
      value: 'Destination MUA',
      label: 'Weddings & Celebrations',
      subtext: 'Available worldwide for bridal luxury',
    },
  ];

  return (
    <section className="bg-[#1C1B1A] border-y border-[#D4AF37]/20 py-12 text-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Social Proof Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-2 flex items-center justify-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5" /> Proven Craftsmanship & Trust
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#FAF8F5]">
            Trusted by brides, celebrities & high-profile clients
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#121110]/60 backdrop-blur-md p-6 rounded-2xl border border-[#FAF8F5]/5 hover:border-[#D4AF37]/40 transition-all duration-300 group text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-4 text-[#D4AF37] group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5] mb-1">
                  {item.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-[#C5A880] font-semibold mb-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-[#FAF8F5]/50 font-light">
                  {item.subtext}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
