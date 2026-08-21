'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useMua } from '../../context/MuaContext';
import { ServiceItem } from '../../types';
import {
  X,
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Users,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Upload,
  CreditCard,
  Copy,
  CheckCircle2,
  Lock,
  Zap,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const BookingModal: React.FC = () => {
  const {
    isBookingOpen,
    closeBookingModal,
    selectedServiceForBooking,
    services,
    profile,
    bookingQuestions,
    blockedDates,
    timeSlots,
    activeDemoPackage,
    setActiveDemoPackage,
    createBookingRequest,
    uploadPaymentProof,
  } = useMua();

  const isSignature = activeDemoPackage === 'SIGNATURE';

  // Multi-Step State
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  
  // Basic Form State (For Essential)
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(selectedServiceForBooking || services[0]);
  const [eventDate, setEventDate] = useState<string>('2026-09-14');
  const [eventTime, setEventTime] = useState<string>('10:00 AM');
  const [location, setLocation] = useState<string>('SoHo Studio (New York)');
  const [numberOfFaces, setNumberOfFaces] = useState<number>(1);

  // Signature Intake State
  const [stylePreference, setStylePreference] = useState<string>('Luminous Dewy Skin with Soft Winged Eye');
  const [customAnswers, setCustomAnswers] = useState<Record<string, string>>({});
  const [inspirationImage] = useState<string>(
    'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600&auto=format&fit=crop'
  );

  // Contact State
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  // Confirmation State
  const [createdRef, setCreatedRef] = useState<string | null>(null);
  const [paymentProof, setPaymentProof] = useState<string | null>(null);
  const [isCopiedZelle, setIsCopiedZelle] = useState<boolean>(false);

  if (!isBookingOpen) return null;

  const activeService = selectedService || services[0];
  const totalAmount = activeService.price * (numberOfFaces > 1 ? 1 + (numberOfFaces - 1) * 0.6 : 1);

  const handleAnswerChange = (questionId: string, val: string) => {
    setCustomAnswers((prev) => ({ ...prev, [questionId]: val }));
  };

  const copyZelle = () => {
    navigator.clipboard.writeText(profile.paymentInfo.zelleEmail);
    setIsCopiedZelle(true);
    setTimeout(() => setIsCopiedZelle(false), 3000);
  };

  const handleSubmitBooking = () => {
    if (!clientName || !clientPhone || !clientEmail) {
      alert('Please fill out your name, phone number, and email address.');
      return;
    }

    const ref = createBookingRequest({
      clientName,
      clientPhone,
      clientEmail,
      eventType: activeService.title,
      eventDate,
      eventTime: isSignature ? eventTime : '10:00 AM',
      location,
      numberOfFaces,
      stylePreference: isSignature ? stylePreference : 'Standard Glam',
      customAnswers: isSignature ? customAnswers : {},
      notes,
      inspirationImage: isSignature ? inspirationImage : undefined,
      paymentAmount: totalAmount,
    });

    setCreatedRef(ref);
    setStep(4);
  };

  const handleSimulatedProofUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const simulatedUrl = 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop';
      setPaymentProof(simulatedUrl);
      if (createdRef) {
        uploadPaymentProof(createdRef, simulatedUrl);
      }
      setStep(5);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1F1A17]/80 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative max-w-3xl w-full bg-[#FAF8F5] text-[#1F1A17] rounded-3xl overflow-hidden shadow-2xl my-auto border border-[#EFE8DF]"
        >
          {/* Top Package Banner Notice */}
          <div className={`px-6 py-2.5 text-xs font-semibold flex items-center justify-between border-b ${
            isSignature
              ? 'bg-[#1F1A17] text-[#FAF8F5] border-[#C5A880]/30'
              : 'bg-[#F5F0EB] text-[#6B5B52] border-[#EFE8DF]'
          }`}>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-mono font-bold ${
                isSignature ? 'bg-[#C5A880] text-[#1F1A17]' : 'bg-[#EFE8DF] text-[#1F1A17]'
              }`}>
                {isSignature ? 'Pro ₦500k Active' : 'Basic ₦350k Active'}
              </span>
              <span className="hidden sm:inline">
                {isSignature
                  ? '⚡ Unlocked: 5-Step Calendar, Time Slots & Custom Intake Questionnaire'
                  : 'Basic Inquiry Request Form Mode'}
              </span>
            </div>

            <button
              onClick={() => setActiveDemoPackage(isSignature ? 'ESSENTIAL' : 'SIGNATURE')}
              className={`text-[11px] underline font-bold uppercase tracking-wider ${
                isSignature ? 'text-[#C5A880] hover:text-white' : 'text-[#8C6D53] hover:text-[#1F1A17]'
              }`}
            >
              Switch to {isSignature ? 'Basic (₦350k)' : 'Pro (₦500k)'}
            </button>
          </div>

          {/* Modal Header Bar */}
          <div className="bg-[#F5F0EB] px-6 py-4 border-b border-[#EFE8DF] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#1F1A17] text-[#FAF8F5] flex items-center justify-center font-bold text-xs">
                0{step <= 4 ? step : 5}
              </span>
              <div>
                <h3 className="font-serif font-bold text-base text-[#1F1A17]">
                  {isSignature ? (
                    <>
                      {step === 1 && 'Step 1: Choose Service & Date'}
                      {step === 2 && 'Step 2: Style & Intake Questionnaire'}
                      {step === 3 && 'Step 3: Contact & Event Notes'}
                      {step === 4 && 'Step 4: Confirm Booking Request'}
                      {step === 5 && 'Appointment Request Submitted!'}
                    </>
                  ) : (
                    <>
                      {step === 1 && 'Basic Booking Request Form'}
                      {step === 4 && 'Request Reference Generated'}
                      {step === 5 && 'Inquiry Received'}
                    </>
                  )}
                </h3>
                <p className="text-[11px] text-[#8C6D53]">
                  {profile.name} • US Beauty Appointment Engine
                </p>
              </div>
            </div>

            <button onClick={closeBookingModal} className="p-2 rounded-full hover:bg-[#EFE8DF] transition">
              <X className="w-5 h-5 text-[#1F1A17]" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            
            {/* ESSENTIAL MODE: SIMPLE INQUIRY FORM */}
            {!isSignature && step === 1 && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmitBooking();
                }}
                className="space-y-4"
              >
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs flex items-center gap-2">
                  <Lock className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>
                    <strong>Basic ₦350k Mode:</strong> Basic booking inquiry form. Multi-step calendar, time slots, &amp; custom intake questions are unlocked in the <strong>Pro ₦500k package</strong>!
                  </span>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8C6D53] font-bold mb-1.5">
                    Select Makeup Service
                  </label>
                  <select
                    value={activeService.id}
                    onChange={(e) => {
                      const found = services.find((s) => s.id === e.target.value);
                      if (found) setSelectedService(found);
                    }}
                    className="w-full bg-[#F5F0EB] border border-[#EFE8DF] rounded-xl px-4 py-3 text-xs text-[#1F1A17] font-semibold outline-none"
                  >
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title} — ${s.price.toFixed(2)} USD ({s.duration})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8C6D53] font-bold mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Audrey Vance"
                      className="w-full bg-[#F5F0EB] border border-[#EFE8DF] rounded-xl px-4 py-3 text-xs text-[#1F1A17] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8C6D53] font-bold mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="audrey@example.com"
                      className="w-full bg-[#F5F0EB] border border-[#EFE8DF] rounded-xl px-4 py-3 text-xs text-[#1F1A17] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8C6D53] font-bold mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="+1 (917) 555-0198"
                      className="w-full bg-[#F5F0EB] border border-[#EFE8DF] rounded-xl px-4 py-3 text-xs text-[#1F1A17] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8C6D53] font-bold mb-1.5">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full bg-[#F5F0EB] border border-[#EFE8DF] rounded-xl px-4 py-3 text-xs text-[#1F1A17] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8C6D53] font-bold mb-1.5">
                    Event Notes / Location Message
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell us about your event, location, and makeup preferences..."
                    className="w-full bg-[#F5F0EB] border border-[#EFE8DF] rounded-xl px-4 py-3 text-xs text-[#1F1A17] outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#FAF8F5] bg-[#1F1A17] hover:bg-[#382E29] transition shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Submit Basic Request (${activeService.price.toFixed(2)})</span>
                    <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                  </button>
                </div>
              </form>
            )}

            {/* SIGNATURE MODE: STEP 1 SERVICE & CALENDAR */}
            {isSignature && step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8C6D53] font-bold mb-2">
                    Select Makeup Artistry Service
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((srv) => (
                      <div
                        key={srv.id}
                        onClick={() => setSelectedService(srv)}
                        className={`p-4 rounded-2xl border cursor-pointer transition flex items-center justify-between ${
                          activeService.id === srv.id
                            ? 'bg-[#1F1A17] text-[#FAF8F5] border-[#1F1A17] shadow-md'
                            : 'bg-[#F5F0EB] text-[#1F1A17] border-[#EFE8DF] hover:border-[#C5A880]'
                        }`}
                      >
                        <div>
                          <p className="font-serif font-bold text-sm">{srv.title}</p>
                          <p className={`text-[11px] ${activeService.id === srv.id ? 'text-[#C5A880]' : 'text-[#6B5B52]'}`}>
                            {srv.duration}
                          </p>
                        </div>
                        <span className={`font-mono text-sm font-bold ${activeService.id === srv.id ? 'text-[#C5A880]' : 'text-[#1F1A17]'}`}>
                          ${srv.price.toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Event Date & Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#1F1A17] font-semibold mb-2 flex items-center gap-1.5">
                      <CalendarIcon className="w-3.5 h-3.5 text-[#8C6D53]" />
                      Select Appointment Date
                    </label>
                    <input
                      type="date"
                      value={eventDate}
                      min="2026-08-20"
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full bg-[#F5F0EB] border border-[#EFE8DF] rounded-xl px-4 py-3 text-xs text-[#1F1A17] focus:border-[#C5A880] outline-none"
                    />
                    {blockedDates.includes(eventDate) && (
                      <p className="text-[11px] text-rose-600 font-semibold mt-1">
                        ⚠️ Fully booked on {eventDate}. Please select another date.
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#1F1A17] font-semibold mb-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#8C6D53]" />
                      Available Time Slots
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setEventTime(slot)}
                          className={`py-2.5 rounded-xl text-xs font-semibold transition border ${
                            eventTime === slot
                              ? 'bg-[#1F1A17] text-[#FAF8F5] border-[#1F1A17]'
                              : 'bg-[#F5F0EB] text-[#6B5B52] border-[#EFE8DF] hover:border-[#8C6D53]'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Location & People */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#1F1A17] font-semibold mb-2 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#8C6D53]" />
                      Location / Address
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. SoHo Studio NY or The Plaza Hotel"
                      className="w-full bg-[#F5F0EB] border border-[#EFE8DF] rounded-xl px-4 py-3 text-xs text-[#1F1A17] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#1F1A17] font-semibold mb-2 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#8C6D53]" />
                      Number of Faces
                    </label>
                    <select
                      value={numberOfFaces}
                      onChange={(e) => setNumberOfFaces(Number(e.target.value))}
                      className="w-full bg-[#F5F0EB] border border-[#EFE8DF] rounded-xl px-4 py-3 text-xs text-[#1F1A17] outline-none"
                    >
                      <option value={1}>1 Person (Just Me)</option>
                      <option value={2}>2 People</option>
                      <option value={3}>3 People</option>
                      <option value={4}>4 People (Bridal Party)</option>
                      <option value={6}>6+ People</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* SIGNATURE MODE: STEP 2 INTAKE QUESTIONNAIRE */}
            {isSignature && step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8C6D53] font-semibold mb-2">
                    Preferred Makeup Style &amp; Finish
                  </label>
                  <input
                    type="text"
                    value={stylePreference}
                    onChange={(e) => setStylePreference(e.target.value)}
                    className="w-full bg-[#F5F0EB] border border-[#EFE8DF] rounded-xl px-4 py-3 text-xs text-[#1F1A17] outline-none"
                  />
                </div>

                {/* Artist Questionnaire */}
                <div className="space-y-4 pt-4 border-t border-[#EFE8DF]">
                  <h4 className="text-xs uppercase tracking-widest text-[#8C6D53] font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Client Consultation Questions
                  </h4>

                  {bookingQuestions.filter((q) => q.enabled).map((q) => (
                    <div key={q.id} className="space-y-1.5">
                      <label className="block text-xs text-[#1F1A17] font-semibold">
                        {q.question} {q.required && <span className="text-rose-600">*</span>}
                      </label>

                      {q.type === 'text' && (
                        <input
                          type="text"
                          value={customAnswers[q.id] || ''}
                          onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                          className="w-full bg-[#F5F0EB] border border-[#EFE8DF] rounded-xl px-4 py-2.5 text-xs text-[#1F1A17] outline-none"
                        />
                      )}

                      {q.type === 'textarea' && (
                        <textarea
                          rows={2}
                          value={customAnswers[q.id] || ''}
                          onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                          className="w-full bg-[#F5F0EB] border border-[#EFE8DF] rounded-xl px-4 py-2.5 text-xs text-[#1F1A17] outline-none"
                        />
                      )}

                      {q.type === 'select' && q.options && (
                        <select
                          value={customAnswers[q.id] || ''}
                          onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                          className="w-full bg-[#F5F0EB] border border-[#EFE8DF] rounded-xl px-4 py-2.5 text-xs text-[#1F1A17] outline-none"
                        >
                          <option value="">Select option...</option>
                          {q.options.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      )}

                      {q.type === 'radio' && q.options && (
                        <div className="flex flex-wrap gap-3 pt-1">
                          {q.options.map((opt) => (
                            <label key={opt} className="flex items-center gap-2 text-xs cursor-pointer">
                              <input
                                type="radio"
                                name={q.id}
                                value={opt}
                                checked={customAnswers[q.id] === opt}
                                onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                                className="accent-[#1F1A17]"
                              />
                              <span>{opt}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Inspiration Image Attachment */}
                <div className="pt-4 border-t border-[#EFE8DF]">
                  <label className="block text-xs uppercase tracking-wider text-[#1F1A17] font-semibold mb-2">
                    Reference / Inspiration Photo
                  </label>
                  <div className="flex items-center gap-4 bg-[#F5F0EB] p-3 rounded-2xl border border-[#EFE8DF]">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#C5A880]">
                      <Image src={inspirationImage} alt="Inspiration" fill className="object-cover" />
                    </div>
                    <div className="flex-1 text-xs">
                      <p className="font-bold text-[#1F1A17]">Reference Image Attached</p>
                      <p className="text-[11px] text-[#6B5B52]">Reference Image attached for BB Beauty Pro to review.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SIGNATURE MODE: STEP 3 CONTACT INFO */}
            {isSignature && step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8C6D53] font-bold mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Audrey Vance"
                    className="w-full bg-[#F5F0EB] border border-[#EFE8DF] rounded-xl px-4 py-3 text-xs text-[#1F1A17] outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8C6D53] font-bold mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="+1 (917) 555-0198"
                      className="w-full bg-[#F5F0EB] border border-[#EFE8DF] rounded-xl px-4 py-3 text-xs text-[#1F1A17] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8C6D53] font-bold mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="audrey@example.com"
                      className="w-full bg-[#F5F0EB] border border-[#EFE8DF] rounded-xl px-4 py-3 text-xs text-[#1F1A17] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1F1A17] font-semibold mb-1.5">
                    Special Event Notes
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Photography commences at 12:30 PM sharply."
                    className="w-full bg-[#F5F0EB] border border-[#EFE8DF] rounded-xl px-4 py-3 text-xs text-[#1F1A17] outline-none"
                  />
                </div>

                <div className="bg-[#F5F0EB] p-4 rounded-2xl border border-[#EFE8DF] flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#8C6D53] font-bold">Total Estimated Investment</p>
                    <p className="font-serif font-bold text-base text-[#1F1A17]">{activeService.title}</p>
                  </div>
                  <p className="font-mono text-xl font-bold text-[#1F1A17]">
                    ${totalAmount.toFixed(2)} USD
                  </p>
                </div>
              </div>
            )}

            {/* STEP 4: REVIEW & DEPOSIT (BOTH MODES) */}
            {step === 4 && createdRef && (
              <div className="space-y-6">
                <div className="bg-[#1F1A17] text-[#FAF8F5] p-5 rounded-2xl border border-[#C5A880] text-center space-y-2">
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] font-semibold uppercase tracking-widest">
                    <Sparkles className="w-4 h-4" /> Booking Reference Generated
                  </div>
                  <div className="font-mono text-3xl font-bold tracking-wider">
                    #{createdRef}
                  </div>
                  <p className="text-xs text-[#FAF8F5]/70">
                    Save this reference code to check your booking approval status online.
                  </p>
                </div>

                {/* Deposit Payment Details */}
                <div className="bg-[#F5F0EB] p-5 rounded-2xl border border-[#EFE8DF] space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F1A17] flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#8C6D53]" />
                    US Payment &amp; Deposit Instructions
                  </h4>

                  <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFE8DF] space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[#6B5B52]">Zelle Email:</span>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#1F1A17]">{profile.paymentInfo.zelleEmail}</span>
                        <button onClick={copyZelle} className="text-[#8C6D53]">
                          {isCopiedZelle ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#6B5B52]">Venmo Handle:</span>
                      <span className="font-semibold text-[#1F1A17]">{profile.paymentInfo.venmoHandle}</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-[#EFE8DF] pt-2">
                      <span className="text-[#6B5B52]">Total Booking Amount:</span>
                      <span className="font-mono text-sm font-bold text-[#1F1A17]">${totalAmount.toFixed(2)} USD</span>
                    </div>
                  </div>

                  {/* Upload Receipt */}
                  <div>
                    <label className="block text-xs text-[#1F1A17] font-semibold mb-2">
                      Upload Deposit Confirmation Receipt (Screenshot)
                    </label>
                    <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-[#C5A880] rounded-2xl cursor-pointer bg-[#FAF8F5] hover:bg-white transition text-center group">
                      <Upload className="w-8 h-8 text-[#8C6D53] group-hover:scale-110 transition-transform mb-2" />
                      <span className="text-xs font-bold text-[#1F1A17]">Click to Upload Receipt Screenshot</span>
                      <span className="text-[10px] text-[#6B5B52] mt-1">PNG or JPG up to 5MB</span>
                      <input type="file" accept="image/*" onChange={handleSimulatedProofUpload} className="hidden" />
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: SUCCESS */}
            {step === 5 && (
              <div className="py-8 text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-600 mx-auto animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="font-serif text-2xl font-bold text-[#1F1A17]">
                    Deposit Receipt Uploaded!
                  </h3>
                  <p className="text-xs text-[#6B5B52]">
                    Your booking request <strong className="text-[#1F1A17] font-mono">#{createdRef}</strong> has been submitted to BB Beauty Pro.
                  </p>
                </div>

                {paymentProof && (
                  <div className="max-w-xs mx-auto p-3 rounded-2xl bg-[#F5F0EB] border border-[#EFE8DF]">
                    <p className="text-[11px] text-[#8C6D53] mb-2 font-semibold">Simulated Receipt Uploaded:</p>
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                      <Image src={paymentProof} alt="Receipt" fill className="object-cover" />
                    </div>
                  </div>
                )}

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`/status?ref=${createdRef}`}
                    onClick={closeBookingModal}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#FAF8F5] bg-[#1F1A17] hover:bg-[#382E29] transition shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Track Booking Status Online</span>
                  </a>

                  <button
                    onClick={closeBookingModal}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#6B5B52] hover:text-[#1F1A17] transition"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Footer Controls (Signature Mode) */}
          {isSignature && step <= 3 && (
            <div className="bg-[#F5F0EB] px-6 py-4 border-t border-[#EFE8DF] flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => (s - 1) as any)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#1F1A17] bg-[#FAF8F5] border border-[#EFE8DF] flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              <button
                type="button"
                onClick={() => {
                  if (step === 3) handleSubmitBooking();
                  else setStep((s) => (s + 1) as any);
                }}
                className="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#FAF8F5] bg-[#1F1A17] hover:bg-[#382E29] transition flex items-center gap-2 shadow-lg"
              >
                <span>{step === 3 ? 'Review Request & Submit' : 'Continue to Next Step'}</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880]" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
