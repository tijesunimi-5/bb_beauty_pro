'use client';

import React, { useState } from 'react';
import { useMua } from '../../context/MuaContext';
import { X, CheckCircle2, ShieldCheck, CreditCard, Lock, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, closeCheckout, cart, cartSubtotal, profile, showToast } = useMua();
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [orderId] = useState<string>(`BBPRO-ORD-${Math.floor(10000 + Math.random() * 90000)}`);
  const [copiedZelle, setCopiedZelle] = useState(false);

  // Form State
  const [customerName, setCustomerName] = useState('Audrey Vance');
  const [customerPhone, setCustomerPhone] = useState('+1 (917) 502-8812');
  const [customerEmail, setCustomerEmail] = useState('audrey@example.com');
  const [address, setAddress] = useState('482 Broome Street, Apt 4A');
  const [cityStateZip, setCityStateZip] = useState('New York, NY 10013');

  if (!isCheckoutOpen) return null;

  const estimatedTax = cartSubtotal * 0.08875;
  const shippingCost = cartSubtotal >= 50 ? 0 : 5.99;
  const finalTotal = cartSubtotal + estimatedTax + shippingCost;

  const copyZelle = () => {
    navigator.clipboard.writeText(profile.paymentInfo.zelleEmail);
    setCopiedZelle(true);
    setTimeout(() => setCopiedZelle(false), 3000);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !address) {
      alert('Please fill out your delivery name, phone, and shipping address.');
      return;
    }
    setIsCompleted(true);
    showToast(`Order #${orderId} submitted to BB Beauty Pro!`, 'success');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1F1A17]/80 backdrop-blur-xl overflow-y-auto text-[#221217]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative max-w-2xl w-full bg-[#FFF9F9] rounded-3xl overflow-hidden shadow-2xl my-auto border border-[#FF6B8B]/30"
        >
          {/* Header Bar */}
          <div className="bg-[#FFF0F3] px-6 py-4 border-b border-[#FF6B8B]/20 flex items-center justify-between">
            <div>
              <h3 className="font-serif font-bold text-base text-[#7E0027]">BB BEAUTY PRO Express Checkout</h3>
              <p className="text-[11px] text-[#E83E8C] font-semibold">Pro ₦500k Full Online Processing</p>
            </div>
            <button onClick={closeCheckout} className="p-2 text-[#221217]/60 hover:text-[#221217] rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            {!isCompleted ? (
              <form onSubmit={handleOrderSubmit} className="space-y-6">
                
                {/* Account Details Box */}
                <div className="bg-white p-5 rounded-2xl border-2 border-[#FF6B8B]/30 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#7E0027] flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4 text-[#E83E8C]" />
                    Payment Accounts &amp; Options
                  </h4>

                  <div className="bg-[#FFF0F3] p-3.5 rounded-xl border border-[#FF6B8B]/20 text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[#523B44] font-medium">Zelle Email:</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#7E0027]">{profile.paymentInfo.zelleEmail}</span>
                        <button type="button" onClick={copyZelle} className="text-[#E83E8C]">
                          {copiedZelle ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#523B44] font-medium">Venmo Handle:</span>
                      <span className="font-bold text-[#7E0027]">{profile.paymentInfo.venmoHandle}</span>
                    </div>
                  </div>
                </div>

                {/* Delivery Location Form */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#221217]">Customer Delivery Location</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-[#E83E8C] mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full bg-white border border-[#FF6B8B]/30 rounded-xl px-4 py-2.5 text-xs text-[#221217] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold text-[#E83E8C] mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full bg-white border border-[#FF6B8B]/30 rounded-xl px-4 py-2.5 text-xs text-[#221217] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-[#E83E8C] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full bg-white border border-[#FF6B8B]/30 rounded-xl px-4 py-2.5 text-xs text-[#221217] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-[10px] uppercase font-bold text-[#E83E8C] mb-1">Street Delivery Address *</label>
                      <input
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full bg-white border border-[#FF6B8B]/30 rounded-xl px-4 py-2.5 text-xs text-[#221217] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-[#E83E8C] mb-1">City, State &amp; Zip *</label>
                      <input
                        type="text"
                        required
                        value={cityStateZip}
                        onChange={(e) => setCityStateZip(e.target.value)}
                        className="w-full bg-white border border-[#FF6B8B]/30 rounded-xl px-4 py-2.5 text-xs text-[#221217] outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Order Summary Itemized */}
                <div className="bg-[#FFF0F3] p-4 rounded-2xl border border-[#FF6B8B]/20 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#7E0027]">Order Items ({cart.length})</h4>
                  {cart.map((item) => (
                    <div key={`${item.product.id}-${item.selectedShade.name}`} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#221217]">{item.quantity}x</span>
                        <span>{item.product.name} ({item.selectedShade.name})</span>
                      </div>
                      <span className="font-mono font-bold">${(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}

                  <div className="pt-2 border-t border-[#FF6B8B]/20 space-y-1 text-xs text-[#523B44]">
                    <div className="flex justify-between"><span>Subtotal:</span><span className="font-mono">${cartSubtotal.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Est. Tax (8.875%):</span><span className="font-mono">${estimatedTax.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Shipping:</span><span className="font-semibold">{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span></div>
                    <div className="flex justify-between text-sm font-bold text-[#221217] pt-1 border-t border-[#FF6B8B]/20">
                      <span>Order Total:</span>
                      <span className="font-mono text-[#7E0027] font-extrabold">${finalTotal.toFixed(2)} USD</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full text-xs font-extrabold uppercase tracking-[0.2em] text-white bg-gradient-to-r from-[#FF6B8B] via-[#E83E8C] to-[#D4AF37] hover:shadow-xl transition flex items-center justify-center gap-2 shadow-lg"
                >
                  <Lock className="w-4 h-4 text-white" />
                  <span>I Have Paid / Complete Order (${finalTotal.toFixed(2)})</span>
                </button>
              </form>
            ) : (
              /* Success confirmation state */
              <div className="py-8 text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-600 mx-auto animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="font-serif text-2xl font-bold text-[#221217]">Order Submitted to BB Beauty Pro!</h3>
                  <p className="text-xs text-[#523B44]">Order Reference: <strong className="text-[#7E0027] font-mono">#{orderId}</strong></p>
                  <p className="text-xs text-[#523B44] leading-relaxed">
                    Thank you, <strong className="text-[#221217]">{customerName}</strong>! Your lip gloss order details and delivery location have been received.
                  </p>
                </div>

                <button
                  onClick={closeCheckout}
                  className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#7E0027] hover:bg-[#59001B] transition shadow-lg"
                >
                  Return to BB Beauty Pro Shop
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
