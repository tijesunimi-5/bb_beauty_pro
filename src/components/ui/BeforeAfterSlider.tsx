'use client';

import React, { useState, useRef, MouseEvent, TouchEvent } from 'react';
import Image from 'next/image';
import { Sliders } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Bare Face (Before)',
  afterLabel = 'Glam (After)',
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      className="relative aspect-[4/5] sm:aspect-[4/3] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-[#D4AF37]/30 shadow-2xl bg-[#1C1B1A]"
    >
      {/* After Image (Full background) */}
      <Image
        src={afterImage}
        alt="After Glam"
        fill
        className="object-cover object-center"
      />
      <div className="absolute top-4 right-4 bg-[#121110]/80 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/30">
        {afterLabel}
      </div>

      {/* Before Image (Clipped overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <div className="relative w-full h-full min-w-[300px] sm:min-w-[600px]">
          <Image
            src={beforeImage}
            alt="Before Makeup"
            fill
            className="object-cover object-center max-w-none"
          />
        </div>
        <div className="absolute top-4 left-4 bg-[#121110]/80 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest text-[#FAF8F5]/80 border border-[#FAF8F5]/20">
          {beforeLabel}
        </div>
      </div>

      {/* Divider Bar & Grab Handle */}
      <div
        onMouseDown={handleMouseDown}
        onTouchStart={() => setIsDragging(true)}
        className="absolute top-0 bottom-0 w-1 bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.8)] cursor-ew-resize"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#121110] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-xl">
          <Sliders className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
