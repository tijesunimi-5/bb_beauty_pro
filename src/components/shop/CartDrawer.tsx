'use client';

import React from 'react';
import Image from 'next/image';
import { useMua } from '../../context/MuaContext';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CartDrawer: React.FC = () => {
  const { isCartOpen, closeCart, cart, updateCartQuantity, removeFromCart, cartSubtotal, openCheckout } = useMua();

  if (!isCartOpen) return null;

  const freeShippingThreshold = 50;
  const progressPercent = Math.min((cartSubtotal / freeShippingThreshold) * 100, 100);
  const remainingForFreeShipping = freeShippingThreshold - cartSubtotal;

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
            className="w-screen max-w-md bg-[#FAF8F5] text-[#1F1A17] shadow-2xl flex flex-col justify-between border-l border-[#EFE8DF]"
          >
            {/* Header */}
            <div className="px-6 py-5 bg-[#F5F0EB] border-b border-[#EFE8DF] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#8C6D53]" />
                <h3 className="font-serif font-bold text-lg text-[#1F1A17]">Your Shopping Bag</h3>
                <span className="font-mono text-xs text-[#8C6D53] bg-[#FAF8F5] px-2 py-0.5 rounded-full border border-[#EFE8DF] font-bold">
                  ({cart.reduce((sum, item) => sum + item.quantity, 0)})
                </span>
              </div>

              <button
                onClick={closeCart}
                className="p-2 text-[#1F1A17]/60 hover:text-[#1F1A17] hover:bg-[#FAF8F5] rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Indicator */}
            <div className="bg-[#FAF6F0] px-6 py-3 border-b border-[#EFE8DF]">
              <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
                <span className="text-[#6B5B52] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                  {remainingForFreeShipping > 0
                    ? `Add $${remainingForFreeShipping.toFixed(2)} for Free US Shipping`
                    : 'You unlocked Free US Shipping!'}
                </span>
              </div>
              <div className="w-full bg-[#EFE8DF] h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#C5A880] h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length > 0 ? (
                cart.map((item, idx) => (
                  <div
                    key={`${item.product.id}-${item.selectedShade.name}`}
                    className="flex gap-4 pb-6 border-b border-[#EFE8DF] last:border-b-0"
                  >
                    {/* Image */}
                    <div className="relative w-20 h-24 rounded-2xl overflow-hidden bg-[#F5F0EB] shrink-0 border border-[#EFE8DF]">
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
                          <h4 className="font-serif font-bold text-sm text-[#1F1A17]">
                            {item.product.name}
                          </h4>
                          <span className="font-mono font-bold text-sm text-[#1F1A17]">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>

                        {/* Shade Indicator */}
                        <div className="flex items-center gap-1.5 mt-1">
                          <span
                            className="w-3 h-3 rounded-full border border-black/10 inline-block shadow-sm"
                            style={{ backgroundColor: item.selectedShade.colorHex }}
                          />
                          <span className="text-xs text-[#8C6D53] font-medium">
                            Shade: {item.selectedShade.name}
                          </span>
                        </div>
                      </div>

                      {/* Quantity Controls & Remove */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-[#EFE8DF] rounded-xl bg-[#F5F0EB]">
                          <button
                            onClick={() =>
                              updateCartQuantity(item.product.id, item.selectedShade.name, item.quantity - 1)
                            }
                            className="p-1.5 text-[#1F1A17]/70 hover:text-[#1F1A17]"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 font-mono text-xs font-bold text-[#1F1A17]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateCartQuantity(item.product.id, item.selectedShade.name, item.quantity + 1)
                            }
                            className="p-1.5 text-[#1F1A17]/70 hover:text-[#1F1A17]"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedShade.name)}
                          className="text-[#1F1A17]/40 hover:text-rose-600 transition p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-16 text-center space-y-4">
                  <ShoppingBag className="w-12 h-12 text-[#C5A880] mx-auto opacity-50" />
                  <p className="font-serif text-lg font-bold text-[#1F1A17]">Your Bag is Empty</p>
                  <p className="text-xs text-[#6B5B52]">Explore our Luxe Lip Collection to complete your beauty routine.</p>
                </div>
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {cart.length > 0 && (
              <div className="p-6 bg-[#F5F0EB] border-t border-[#EFE8DF] space-y-4">
                <div className="space-y-2 text-xs text-[#6B5B52]">
                  <div className="flex items-center justify-between">
                    <span>Subtotal</span>
                    <span className="font-mono font-bold text-[#1F1A17] text-sm">${cartSubtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Estimated US Shipping</span>
                    <span className="font-semibold text-[#8C6D53]">
                      {remainingForFreeShipping <= 0 ? 'FREE' : '$5.99'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[#EFE8DF]">
                    <span className="font-serif font-bold text-sm text-[#1F1A17]">Total</span>
                    <span className="font-mono font-bold text-base text-[#1F1A17]">
                      ${(cartSubtotal + (remainingForFreeShipping <= 0 ? 0 : 5.99)).toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={openCheckout}
                  className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#FAF8F5] bg-[#1F1A17] hover:bg-[#382E29] shadow-xl transition flex items-center justify-center gap-2 group"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-2 text-[10px] text-[#6B5B52]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Secure 256-bit Encrypted Checkout</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
