'use client';

import React, { useState } from 'react';
import { useMua } from '../../context/MuaContext';
import { Save, User, CreditCard, MapPin, Phone, Instagram, Mail, Sparkles } from 'lucide-react';

export const BioEditor: React.FC = () => {
  const { profile, updateProfile } = useMua();

  const [formData, setFormData] = useState({
    name: profile.name,
    title: profile.title,
    tagline: profile.tagline,
    bio: profile.bio,
    philosophy: profile.philosophy,
    whatsappPhone: profile.whatsappPhone,
    instagram: profile.instagram,
    email: profile.email,
    studioAddress: profile.studioAddress,
    bankName: profile.bankDetails.bankName,
    accountName: profile.bankDetails.accountName,
    accountNumber: profile.bankDetails.accountNumber,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      name: formData.name,
      title: formData.title,
      tagline: formData.tagline,
      bio: formData.bio,
      philosophy: formData.philosophy,
      whatsappPhone: formData.whatsappPhone,
      instagram: formData.instagram,
      email: formData.email,
      studioAddress: formData.studioAddress,
      bankDetails: {
        bankName: formData.bankName,
        accountName: formData.accountName,
        accountNumber: formData.accountNumber,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 text-[#FAF8F5]">
      {/* Header */}
      <div className="bg-[#1C1B1A] p-6 rounded-3xl border border-[#FAF8F5]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#FAF8F5]">
            Business Information & Bio Editor
          </h2>
          <p className="text-xs text-[#FAF8F5]/60">
            Edit your brand identity, contact phone, Instagram handle, and bank transfer account information.
          </p>
        </div>

        <button
          type="submit"
          className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#D4AF37] to-[#C5A880] hover:shadow-xl transition flex items-center gap-2"
        >
          <Save className="w-4 h-4" /> Save Profile Updates
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Brand & Artist Profile (Left) */}
        <div className="bg-[#1C1B1A] p-6 rounded-3xl border border-[#FAF8F5]/10 space-y-4">
          <h3 className="font-serif text-lg font-bold text-[#FAF8F5] flex items-center gap-2 border-b border-[#FAF8F5]/10 pb-3">
            <User className="w-4 h-4 text-[#D4AF37]" />
            Brand Copy & Identity
          </h3>

          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[#C5A880] mb-1">
              Studio / Artist Brand Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded-xl px-4 py-2.5 text-xs text-[#FAF8F5] focus:border-[#D4AF37] outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[#C5A880] mb-1">
              Professional Subtitle / Tag
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded-xl px-4 py-2.5 text-xs text-[#FAF8F5] focus:border-[#D4AF37] outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[#C5A880] mb-1">
              Hero Tagline Quote
            </label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded-xl px-4 py-2.5 text-xs text-[#FAF8F5] focus:border-[#D4AF37] outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[#C5A880] mb-1">
              Artist Story & Bio
            </label>
            <textarea
              rows={4}
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded-xl px-4 py-2.5 text-xs text-[#FAF8F5] focus:border-[#D4AF37] outline-none"
            />
          </div>
        </div>

        {/* Bank & Contact Info (Right) */}
        <div className="space-y-8">
          
          {/* Bank Account Details */}
          <div className="bg-[#1C1B1A] p-6 rounded-3xl border border-[#D4AF37]/30 space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#FAF8F5] flex items-center gap-2 border-b border-[#FAF8F5]/10 pb-3">
              <CreditCard className="w-4 h-4 text-[#D4AF37]" />
              Bank Payment Instructions
            </h3>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#C5A880] mb-1">
                Bank Name
              </label>
              <input
                type="text"
                value={formData.bankName}
                onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded-xl px-4 py-2.5 text-xs text-[#FAF8F5] focus:border-[#D4AF37] outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#C5A880] mb-1">
                Account Name
              </label>
              <input
                type="text"
                value={formData.accountName}
                onChange={(e) => setFormData({ ...formData, accountName: e.target.value })}
                className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded-xl px-4 py-2.5 text-xs text-[#FAF8F5] focus:border-[#D4AF37] outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#C5A880] mb-1">
                Account Number
              </label>
              <input
                type="text"
                value={formData.accountNumber}
                onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded-xl px-4 py-2.5 text-xs text-[#FAF8F5] focus:border-[#D4AF37] outline-none font-mono"
              />
            </div>
          </div>

          {/* Social & Contact */}
          <div className="bg-[#1C1B1A] p-6 rounded-3xl border border-[#FAF8F5]/10 space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#FAF8F5] flex items-center gap-2 border-b border-[#FAF8F5]/10 pb-3">
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              Contact & Social Channels
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#C5A880] mb-1">
                  WhatsApp Phone
                </label>
                <input
                  type="text"
                  value={formData.whatsappPhone}
                  onChange={(e) => setFormData({ ...formData, whatsappPhone: e.target.value })}
                  className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded-xl px-4 py-2.5 text-xs text-[#FAF8F5] focus:border-[#D4AF37] outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#C5A880] mb-1">
                  Instagram Handle
                </label>
                <input
                  type="text"
                  value={formData.instagram}
                  onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                  className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded-xl px-4 py-2.5 text-xs text-[#FAF8F5] focus:border-[#D4AF37] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#C5A880] mb-1">
                Studio Physical Address
              </label>
              <input
                type="text"
                value={formData.studioAddress}
                onChange={(e) => setFormData({ ...formData, studioAddress: e.target.value })}
                className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded-xl px-4 py-2.5 text-xs text-[#FAF8F5] focus:border-[#D4AF37] outline-none"
              />
            </div>
          </div>

        </div>

      </div>
    </form>
  );
};
