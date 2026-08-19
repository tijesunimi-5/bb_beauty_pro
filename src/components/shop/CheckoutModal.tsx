'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useMua } from '../../context/MuaContext';
import { X, CheckCircle2, ShieldCheck, CreditCard, Lock, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, closeCheckout, cart, cartSubtotal, showToast } = useMua();
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [orderId] = useState<string>(`AURA-ORD-${Math.floor(10000 + Math.random() * 90000)}`);

  if (!isCheckoutOpen) return null;

  const estimatedTax = cartSubtotal * 0.08875; // NYC sales tax rate 8.875%
  const shippingCost = cartSubtotal >= 50 ? 0 : 5.99;
  const finalTotal = cartSubtotal + estimatedTax + shippingCost;

  const handleSimulatedOrderComplete = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCompleted(true);
    showToast(`Order #${orderId} placed successfully!`, 'success');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1F1A17]/80 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative max-w-2xl w-full bg-[#FAF8F5] text-[#1F1A17] rounded-3xl overflow-hidden shadow-2xl my-auto border border-[#EFE8DF]"
        >
          {/* Header Bar */}
          <div className="bg-[#F5F0EB] px-6 py-4 border-b border-[#EFE8DF] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C5A880]" />
              <h3 className="font-serif font-bold text-base text-[#1F1A17]">Aura Beauty Express Checkout</h3>
            </div>
            <button onClick={closeCheckout} className="p-2 text-[#1F1A17]/60 hover:text-[#1F1A17] rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            {!isCompleted ? (
              <form onSubmit={handleSimulatedOrderComplete} className="space-y-6">
                {/* Express Checkout Options */}
                <div className="space-y-2 text-center">
                  <p className="text-xs uppercase tracking-widest text-[#8C6D53] font-semibold">Express Checkout</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setIsCompleted(true)}
                      className="py-3 rounded-2xl bg-black text-white font-bold text-xs hover:opacity-90 transition shadow"
                    >
                       Pay (Apple Pay)
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsCompleted(true)}
                      className="py-3 rounded-2xl bg-[#5A31F4] text-white font-bold text-xs hover:opacity-90 transition shadow"
                    >
                      Shop Pay
                    </button>
                  </div>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="border-t border-[#EFE8DF] w-full" />
                  <span className="bg-[#FAF8F5] px-3 text-[10px] uppercase text-[#6B5B52] font-semibold absolute">Or Credit Card</span>
                </div>

                {/* Shipping Address Inputs */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F1A17]">US Shipping Address</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      defaultValue="Elena"
                      placeholder="First Name"
                      className="bg-[#F5F0EB] border border-[#EFE8DF] rounded-xl px-4 py-2.5 text-xs text-[#1F1A17] outline-none focus:border-[#C5A880]"
                    />
                    <input
                      type="text"
                      required
                      defaultValue="Vance"
                      placeholder="Last Name"
                      className="bg-[#F5F0EB] border border-[#EFE8DF] rounded-xl px-4 py-2.5 text-xs text-[#1F1A17] outline-none focus:border-[#C5A880]"
                    />
                  </div>
                  <input
                    type="text"
                    required
                    defaultValue="482 Broome Street, Apt 4A"
                    placeholder="Address Line"
                    className="w-full bg-[#F5F0EB] border border-[#EFE8DF] rounded-xl px-4 py-2.5 text-xs text-[#1F1A17] outline-none focus:border-[#C5A880]"
                  />
                  <div className="grid grid-cols-3 gap-3">
                    <input
                      type="text"
                      required
                      defaultValue="New York"
                      placeholder="City"
                      className="bg-[#F5F0EB] border border-[#EFE8DF] rounded-xl px-4 py-2.5 text-xs text-[#1F1A17] outline-none"
                    />
                    <input
                      type="text"
                      required
                      defaultValue="NY"
                      placeholder="State"
                      className="bg-[#F5F0EB] border border-[#EFE8DF] rounded-xl px-4 py-2.5 text-xs text-[#1F1A17] outline-none"
                    />
                    <input
                      type="text"
                      required
                      defaultValue="10013"
                      placeholder="ZIP Code"
                      className="bg-[#F5F0EB] border border-[#EFE8DF] rounded-xl px-4 py-2.5 text-xs text-[#1F1A17] outline-none font-mono"
                    />
                  </div>
                </div>

                {/* Order Summary Itemized */}
                <div className="bg-[#F5F0EB] p-4 rounded-2xl border border-[#EFE8DF] space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F1A17]">Order Items ({cart.length})</h4>
                  {cart.map((item) => (
                    <div key={`${item.product.id}-${item.selectedShade.name}`} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#1F1A17]">{item.quantity}x</span>
                        <span>{item.product.name} ({item.selectedShade.name})</span>
                      </div>
                      <span className="font-mono font-bold">${(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}

                  <div className="pt-2 border-t border-[#EFE8DF] space-y-1 text-xs text-[#6B5B52]">
                    <div className="flex justify-between"><span>Subtotal:</span><span className="font-mono">${cartSubtotal.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Est. NY Tax (8.875%):</span><span className="font-mono">${estimatedTax.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>US Shipping:</span><span className="font-semibold">{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span></div>
                    <div className="flex justify-between text-sm font-bold text-[#1F1A17] pt-1 border-t border-[#EFE8DF]">
                      <span>Order Total:</span>
                      <span className="font-mono text-[#8C6D53]">${finalTotal.toFixed(2)} USD</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#FAF8F5] bg-[#1F1A17] hover:bg-[#382E29] shadow-xl transition flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4 text-[#C5A880]" />
                  <span>Complete Order — ${finalTotal.toFixed(2)}</span>
                </button>
              </form>
            ) : (
              /* Success confirmation state */
              <div className="py-8 text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-600 mx-auto animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-[#1F1A17]">Thank You For Your Order!</h3>
                  <p className="text-xs text-[#6B5B52]">Order Reference: <strong className="text-[#8C6D53] font-mono">#{orderId}</strong></p>
                  <p className="text-xs text-[#6B5B52] max-w-sm mx-auto">
                    A confirmation email with US tracking updates has been dispatched to your email address.
                  </p>
                </div>

                <button
                  onClick={closeCheckout}
                  className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#FAF8F5] bg-[#1F1A17] hover:bg-[#382E29] transition shadow-lg"
                >
                  Return to Aura Beauty Shop
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
