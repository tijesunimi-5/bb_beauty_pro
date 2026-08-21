'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useMua } from '../../context/MuaContext';
import { ProductItem, ShadeOption } from '../../types';
import { ShoppingBag, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: ProductItem;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, activeDemoPackage } = useMua();
  const [selectedShade, setSelectedShade] = useState<ShadeOption>(product.shades[0]);
  const isSignature = activeDemoPackage === 'SIGNATURE';

  const handleProductAction = () => {
    addToCart(product, selectedShade);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-3xl overflow-hidden border-2 border-[#FF6B8B]/30 hover:border-[#E83E8C] transition-all duration-500 shadow-xl hover:shadow-2xl flex flex-col justify-between"
    >
      {/* Visual Image Banner */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#FFF0F3]">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />

        {/* Bestseller Badge */}
        {product.isBestseller && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-[#FF6B8B] to-[#E83E8C] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
            <Heart className="w-3 h-3 fill-white" /> Bestseller
          </div>
        )}

        {/* Price Tag */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-mono font-extrabold text-[#7E0027] shadow-md border border-[#FF6B8B]/30">
          ${product.price.toFixed(2)}
        </div>
      </div>

      {/* Product Information */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-[#E83E8C] text-xs font-bold">
            <span className="bg-[#FFF0F3] px-2 py-0.5 rounded text-[11px] border border-[#FF6B8B]/20">
              {product.rating} / 5.0 Rating
            </span>
            <span className="text-[#523B44] font-medium text-[11px]">({product.reviewsCount} reviews)</span>
          </div>

          <h3 className="font-serif text-lg font-bold text-[#221217] group-hover:text-[#E83E8C] transition">
            {product.name}
          </h3>

          <p className="text-xs text-[#523B44] font-medium leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* Interactive Shade Selector */}
          <div className="pt-2">
            <span className="text-[10px] uppercase tracking-wider text-[#E83E8C] font-bold block mb-2">
              Select Shade: <strong className="text-[#221217]">{selectedShade.name}</strong>
            </span>

            <div className="flex flex-wrap items-center gap-2">
              {product.shades.map((shade) => (
                <button
                  key={shade.name}
                  type="button"
                  onClick={() => setSelectedShade(shade)}
                  className={`w-6 h-6 rounded-full border-2 transition-all relative ${
                    selectedShade.name === shade.name
                      ? 'border-[#7E0027] scale-110 shadow-md ring-2 ring-[#FF6B8B]'
                      : 'border-transparent hover:scale-105'
                  }`}
                  style={{ backgroundColor: shade.colorHex }}
                  title={shade.name}
                >
                  {selectedShade.name === shade.name && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Add to Bag CTA */}
        <div className="pt-4 border-t border-[#FF6B8B]/20">
          <button
            onClick={handleProductAction}
            className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF6B8B] via-[#E83E8C] to-[#D4AF37] hover:opacity-95 transition shadow-md flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4 text-white" />
            <span>Add To Bag — ${product.price.toFixed(2)}</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
