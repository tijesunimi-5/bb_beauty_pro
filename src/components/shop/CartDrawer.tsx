'use client';

import React from 'react';
import Image from 'next/image';
import { useMua } from '../../context/MuaContext';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, ShieldCheck, MessageSquare, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CartDrawer: React.FC = () => {
  const { isCartOpen, closeCart, cart, updateCartQuantity, removeFromCart, cartSubtotal, openCheckout, activeDemoPackage, profile } = useMua();

  if (!isCartOpen) return null;

  const isSignature = activeDemoPackage === 'SIGNATURE';
  const freeShippingThreshold = 50;
  const progressPercent = Math.min((cartSubtotal / freeShippingThreshold) * 100, 100);
  const remainingForFreeShipping = freeShippingThreshold - cartSubtotal;

  const getWhatsAppCheckoutUrl = () => {
    const itemsSummary = cart.map(i => `${i.quantity}x ${i.product.name} (${i.selectedShade.name})`).join(', ');
    const totalWithShipping = (cartSubtotal + (remainingForFreeShipping <= 0 ? 0 : 5.99)).toFixed(2);
    const message = encodeURIComponent(
      `Hi BB Beauty Pro! I want to buy:\n${itemsSummary}\nTotal: $${totalWithShipping} USD.\nPlease confirm availability and payment details!`
    );
    const cleanPhone = profile.whatsappPhone.replace(/[^0-9+]/g, '');
    return `https://wa.me/${cleanPhone}?text=${message}`;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeCart}
          className="absolute inset-0 bg-[#1F1A17]/60 backdrop-blur-md transition-opacity"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-screen max-w-md bg-[#FFF9F9] text-[#221217] shadow-2xl flex flex-col justify-between border-l border-[#FF6B8B]/30"
          >
            {/* Header */}
            <div className="px-6 py-5 bg-[#FFF0F3] border-b border-[#FF6B8B]/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#E83E8C]" />
                <h3 className="font-serif font-bold text-lg text-[#221217]">Your Shopping Bag</h3>
                <span className="font-mono text-xs text-[#7E0027] bg-white px-2 py-0.5 rounded-full border border-[#FF6B8B]/30 font-extrabold">
                  ({cart.reduce((sum, item) => sum + item.quantity, 0)})
                </span>
              </div>

              <button
                onClick={closeCart}
                className="p-2 text-[#221217]/60 hover:text-[#221217] hover:bg-white rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Indicator */}
            <div className="bg-white px-6 py-3 border-b border-[#FF6B8B]/20">
              <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
                <span className="text-[#523B44] flex items-center gap-1 font-bold">
                  {remainingForFreeShipping > 0
                    ? `Add $${remainingForFreeShipping.toFixed(2)} for Free US Shipping`
                    : 'You unlocked Free US Shipping!'}
                </span>
              </div>
              <div className="w-full bg-[#FFF0F3] h-2 rounded-full overflow-hidden border border-[#FF6B8B]/20">
                <div
                  className="bg-gradient-to-r from-[#FF6B8B] to-[#E83E8C] h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedShade.name}`}
                    className="flex gap-4 pb-6 border-b border-[#FF6B8B]/20 last:border-b-0"
                  >
                    {/* Image */}
                    <div className="relative w-20 h-24 rounded-2xl overflow-hidden bg-[#FFF0F3] shrink-0 border border-[#FF6B8B]/30">
                      <Image
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        fill
                        className="object-cover object-center"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <h4 className="font-serif font-bold text-sm text-[#221217]">
                            {item.product.name}
                          </h4>
                          <span className="font-mono font-extrabold text-sm text-[#7E0027]">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>

                        {/* Shade Indicator */}
                        <div className="flex items-center gap-1.5 mt-1">
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-black/10 inline-block shadow-sm"
                            style={{ backgroundColor: item.selectedShade.colorHex }}
                          />
                          <span className="text-xs text-[#E83E8C] font-bold">
                            Shade: {item.selectedShade.name}
                          </span>
                        </div>
                      </div>

                      {/* Quantity Controls & Remove */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-[#FF6B8B]/30 rounded-xl bg-[#FFF0F3]">
                          <button
                            onClick={() =>
                              updateCartQuantity(item.product.id, item.selectedShade.name, item.quantity - 1)
                            }
                            className="p-1.5 text-[#221217]/70 hover:text-[#221217]"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 font-mono text-xs font-bold text-[#221217]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateCartQuantity(item.product.id, item.selectedShade.name, item.quantity + 1)
                            }
                            className="p-1.5 text-[#221217]/70 hover:text-[#221217]"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedShade.name)}
                          className="text-[#221217]/40 hover:text-rose-600 transition p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-16 text-center space-y-4">
                  <ShoppingBag className="w-12 h-12 text-[#FF6B8B] mx-auto opacity-50" />
                  <p className="font-serif text-lg font-bold text-[#221217]">Your Bag is Empty</p>
                  <p className="text-xs text-[#523B44]">Explore our Luxe Lip Collection to complete your beauty routine.</p>
                </div>
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {cart.length > 0 && (
              <div className="p-6 bg-[#FFF0F3] border-t border-[#FF6B8B]/20 space-y-4">
                <div className="space-y-2 text-xs text-[#523B44]">
                  <div className="flex items-center justify-between font-medium">
                    <span>Subtotal</span>
                    <span className="font-mono font-bold text-[#221217] text-sm">${cartSubtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between font-medium">
                    <span>Estimated Shipping</span>
                    <span className="font-bold text-[#E83E8C]">
                      {remainingForFreeShipping <= 0 ? 'FREE' : '$5.99'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[#FF6B8B]/20">
                    <span className="font-serif font-bold text-sm text-[#221217]">Total Investment</span>
                    <span className="font-mono font-extrabold text-base text-[#7E0027]">
                      ${(cartSubtotal + (remainingForFreeShipping <= 0 ? 0 : 5.99)).toFixed(2)}
                    </span>
                  </div>
                </div>

                {isSignature ? (
                  <button
                    onClick={openCheckout}
                    className="w-full py-4 rounded-full text-xs font-extrabold uppercase tracking-[0.2em] text-white bg-gradient-to-r from-[#FF6B8B] via-[#E83E8C] to-[#D4AF37] hover:shadow-xl transition flex items-center justify-center gap-2 shadow-lg"
                  >
                    <CreditCard className="w-4 h-4 text-white" />
                    <span>Pay Online (Zelle, Venmo, Card)</span>
                  </button>
                ) : (
                  <a
                    href={getWhatsAppCheckoutUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-4 rounded-full text-xs font-extrabold uppercase tracking-[0.2em] text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl transition flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-white" />
                    <span>Checkout via WhatsApp Order</span>
                  </a>
                )}

                <div className="flex items-center justify-center gap-2 text-[10px] text-[#523B44] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E83E8C]" />
                  <span>
                    {isSignature
                      ? 'Signature $500: Full Online Checkout & Instant Receipt'
                      : 'Essential $300: Quick WhatsApp Order Link'}
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
