'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useMua } from '../../context/MuaContext';
import { ProductItem, ShadeOption } from '../../types';
import { ShoppingBag, Star, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: ProductItem;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useMua();
  const [selectedShade, setSelectedShade] = useState<ShadeOption>(product.shades[0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#EFE8DF] hover:border-[#C5A880] transition-all duration-500 shadow-lg flex flex-col justify-between"
    >
      {/* Visual Image Banner */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F5F0EB]">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />

        {/* Bestseller Badge */}
        {product.isBestseller && (
          <div className="absolute top-4 left-4 bg-[#1F1A17] text-[#FAF8F5] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
            Bestseller
          </div>
        )}

        {/* Price Tag */}
        <div className="absolute top-4 right-4 bg-[#FAF8F5]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-[#1F1A17] shadow-md border border-[#EFE8DF]">
          ${product.price.toFixed(2)}
        </div>
      </div>

      {/* Product Information */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-1 text-[#C5A880] text-xs">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#C5A880]" />
              ))}
            </div>
            <span className="text-[#6B5B52] font-medium ml-1">({product.reviewsCount})</span>
          </div>

          <h3 className="font-serif text-lg font-bold text-[#1F1A17] group-hover:text-[#8C6D53] transition">
            {product.name}
          </h3>

          <p className="text-xs text-[#6B5B52] font-light leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* Interactive Shade Selector Pills */}
          <div className="pt-2">
            <span className="text-[10px] uppercase tracking-wider text-[#8C6D53] font-semibold block mb-2">
              Select Shade: <strong className="text-[#1F1A17]">{selectedShade.name}</strong>
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {product.shades.map((shade) => (
                <button
                  key={shade.name}
                  type="button"
                  onClick={() => setSelectedShade(shade)}
                  className={`w-6 h-6 rounded-full border-2 transition-all relative ${
                    selectedShade.name === shade.name
                      ? 'border-[#1F1A17] scale-110 shadow-md'
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
        <div className="pt-4 border-t border-[#EFE8DF]">
          <button
            onClick={() => addToCart(product, selectedShade)}
            className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#FAF8F5] bg-[#1F1A17] hover:bg-[#382E29] transition shadow-md flex items-center justify-center gap-2 group/btn"
          >
            <ShoppingBag className="w-4 h-4 text-[#C5A880]" />
            <span>Add To Bag — ${product.price.toFixed(2)}</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
