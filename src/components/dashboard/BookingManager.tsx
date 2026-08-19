'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useMua } from '../../context/MuaContext';
import { BookingRequest, BookingStatus } from '../../types';
import {
  Search,
  CheckCircle2,
  XCircle,
  Clock,
  Eye,
  MessageCircle,
  Calendar,
  MapPin,
  Users,
  CreditCard,
  X,
  FileText,
} from 'lucide-react';

export const BookingManager: React.FC = () => {
  const { bookingRequests, updateRequestStatus, profile } = useMua();
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [activeModalRequest, setActiveModalRequest] = useState<BookingRequest | null>(null);

  const filtered = filterStatus === 'All'
    ? bookingRequests
    : bookingRequests.filter((r) => r.status === filterStatus);

  return (
    <div className="space-y-6 text-[#FAF8F5]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1C1B1A] p-6 rounded-3xl border border-[#FAF8F5]/10">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#FAF8F5]">
            Booking Request Management
          </h2>
          <p className="text-xs text-[#FAF8F5]/60">
            Inspect client booking details, verify payment receipts, and manage appointment approvals.
          </p>
        </div>

        {/* Status Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-[#121110] p-1 rounded-2xl border border-[#FAF8F5]/10 text-xs">
          {['All', 'Pending', 'Payment Submitted', 'Approved', 'Rejected'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-3 py-1.5 rounded-xl font-semibold transition ${
                filterStatus === status
                  ? 'bg-[#D4AF37] text-[#121110]'
                  : 'text-[#FAF8F5]/60 hover:text-white'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Requests List */}
      <div className="space-y-4">
        {filtered.map((req) => (
          <div
            key={req.id}
            className="bg-[#1C1B1A] p-6 rounded-3xl border border-[#FAF8F5]/10 hover:border-[#D4AF37]/40 transition space-y-4"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#FAF8F5]/10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-[#D4AF37] bg-[#121110] px-3 py-1 rounded-xl border border-[#D4AF37]/30">
                  #{req.id}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#FAF8F5]">{req.clientName}</h3>
                  <p className="text-xs text-[#C5A880]">{req.clientEmail} • {req.clientPhone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-lg font-bold text-[#FAF8F5]">
                  ₦{req.paymentAmount.toLocaleString()}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                    req.status === 'Approved'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : req.status === 'Payment Submitted'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : req.status === 'Rejected'
                      ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                      : 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40'
                  }`}
                >
                  {req.status}
                </span>
              </div>
            </div>

            {/* Event Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#FAF8F5]/80">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#C5A880] font-semibold block">Service & Style</span>
                <p className="font-semibold text-[#FAF8F5]">{req.eventType}</p>
                <p className="text-[11px] text-[#FAF8F5]/60">{req.stylePreference}</p>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#C5A880] font-semibold block">Date & Time</span>
                <p className="font-semibold text-[#FAF8F5] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" /> {req.eventDate} at {req.eventTime}
                </p>
                <p className="text-[11px] text-[#FAF8F5]/60 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> {req.location}
                </p>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#C5A880] font-semibold block">Payment Receipt</span>
                {req.paymentProofUrl ? (
                  <button
                    onClick={() => setActiveModalRequest(req)}
                    className="text-xs text-emerald-400 hover:underline flex items-center gap-1 font-semibold pt-1"
                  >
                    <CreditCard className="w-3.5 h-3.5" /> View Receipt Image
                  </button>
                ) : (
                  <span className="text-amber-400 text-xs font-semibold block pt-1">No Receipt Uploaded Yet</span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#FAF8F5]/5">
              <button
                onClick={() => setActiveModalRequest(req)}
                className="text-xs text-[#FAF8F5]/70 hover:text-white flex items-center gap-1 font-semibold"
              >
                <Eye className="w-4 h-4 text-[#D4AF37]" /> Inspect Full Request Answers
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/${req.clientPhone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${req.clientName}, I am contacting you regarding your booking #${req.id} for ${req.eventType}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white transition text-xs font-bold flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Client
                </a>

                {req.status !== 'Approved' && (
                  <button
                    onClick={() => updateRequestStatus(req.id, 'Approved')}
                    className="px-4 py-2 rounded-xl bg-emerald-500 text-[#121110] hover:bg-emerald-400 transition text-xs font-bold flex items-center gap-1.5 shadow-lg"
                  >
                    <CheckCircle2 className="w-4 h-4" /> Approve Booking
                  </button>
                )}

                {req.status !== 'Rejected' && (
                  <button
                    onClick={() => updateRequestStatus(req.id, 'Rejected')}
                    className="px-4 py-2 rounded-xl bg-rose-500/20 text-rose-400 hover:bg-rose-500 hover:text-white transition text-xs font-bold flex items-center gap-1.5"
                  >
                    <XCircle className="w-4 h-4" /> Reject
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inspect Modal */}
      {activeModalRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121110]/95 backdrop-blur-xl">
          <div className="bg-[#1C1B1A] border border-[#D4AF37]/40 rounded-3xl p-6 max-w-2xl w-full max-h-[85vh] overflow-y-auto space-y-6 text-[#FAF8F5]">
            <div className="flex items-center justify-between border-b border-[#FAF8F5]/10 pb-4">
              <div>
                <h3 className="font-serif text-xl font-bold">Booking Request #{activeModalRequest.id}</h3>
                <p className="text-xs text-[#C5A880]">Client: {activeModalRequest.clientName}</p>
              </div>
              <button onClick={() => setActiveModalRequest(null)} className="p-2 hover:bg-[#FAF8F5]/10 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Custom Answers */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                Client Questionnaire Answers
              </h4>
              <div className="bg-[#121110] p-4 rounded-2xl border border-[#FAF8F5]/10 space-y-2 text-xs">
                {Object.entries(activeModalRequest.customAnswers).map(([k, v]) => (
                  <div key={k} className="border-b border-[#FAF8F5]/5 pb-2">
                    <span className="text-[#FAF8F5]/60 block">Question ID {k}:</span>
                    <span className="font-semibold text-[#FAF8F5]">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Proof Receipt Image */}
            {activeModalRequest.paymentProofUrl && (
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Uploaded Payment Proof Receipt
                </h4>
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#D4AF37]/30">
                  <Image src={activeModalRequest.paymentProofUrl} alt="Receipt" fill className="object-cover" />
                </div>
              </div>
            )}

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveModalRequest(null)}
                className="px-6 py-2.5 rounded-full bg-[#D4AF37] text-[#121110] font-bold text-xs"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
