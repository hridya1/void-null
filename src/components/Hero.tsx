import React from 'react';
import { FEATURED_HERO_PRODUCT } from '../data/products';

interface HeroProps {
  onExploreDrop: () => void;
  onBuildLoadout: () => void;
  onViewProduct?: (productId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreDrop,
  onBuildLoadout,
  onViewProduct
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-zinc-850 bg-gradient-to-b from-zinc-950 via-[#0d0d10] to-zinc-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-white/[0.03] blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-zinc-700/[0.05] blur-[100px] pointer-events-none" />

      {/* Grid line texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Small UI Labels: DROP 01 & System Status */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-widest text-zinc-400">
              <span className="px-2 py-0.5 bg-zinc-900 border border-zinc-750 text-white font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                DROP 01
              </span>
              <span className="text-zinc-600">//</span>
              <span className="text-zinc-400 uppercase">LOADOUT SYSTEM</span>
              <span className="text-zinc-600">//</span>
              <span className="text-zinc-500 uppercase">LIMITED TO 150 EDITIONS</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[1.02] text-balance">
              BUILT FOR THE NEXT LEVEL.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed max-w-xl text-balance">
              Streetwear engineered for everyday movement. 480 GSM loopback cotton fleece, boxy drop-shoulder proportions, and modular tactical cargo loadouts.
            </p>

            {/* Gaming-Inspired Button Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Primary Button: EXPLORE DROP */}
              <button
                onClick={onExploreDrop}
                className="py-4 px-8 bg-white hover:bg-zinc-200 text-black font-mono text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-150 border border-white shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                <span>EXPLORE DROP</span>
                <span aria-hidden="true">→</span>
              </button>

              {/* Secondary Button: BUILD YOUR LOADOUT */}
              <button
                onClick={onBuildLoadout}
                className="py-4 px-8 bg-zinc-900 hover:bg-zinc-850 text-zinc-200 hover:text-white font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-150 border border-zinc-700 hover:border-zinc-500 flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                <span>BUILD YOUR LOADOUT</span>
                <span className="text-zinc-500 font-normal">[SHOP]</span>
              </button>
            </div>

            {/* Minimal Technical Loadout Spec Ticker */}
            <div className="pt-6 border-t border-zinc-850/80 grid grid-cols-3 gap-4 font-mono">
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-0.5">
                  HEAVY COTTON
                </span>
                <span className="text-xs sm:text-sm font-medium text-zinc-200 tabular-nums">
                  480–500 GSM
                </span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-0.5">
                  ALLOCATION
                </span>
                <span className="text-xs sm:text-sm font-medium text-zinc-200">
                  EDITION 01/150
                </span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-0.5">
                  STATUS
                </span>
                <span className="text-xs sm:text-sm font-medium text-emerald-400">
                  LOADOUT READY
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual - Primary Campaign Model wearing VOID HEAVY HOODIE */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-zinc-800 bg-zinc-950 rounded-none overflow-hidden shadow-2xl group">
              
              {/* Tactical Top Tag Overlay */}
              <div className="absolute top-3 left-3 z-20 pointer-events-none">
                <span className="font-mono text-[9px] tracking-widest text-zinc-200 uppercase px-2 py-1 bg-black/90 border border-zinc-700">
                  FEATURED LOADOUT // ITEM 001
                </span>
              </div>

              <div className="absolute top-3 right-3 z-20 pointer-events-none">
                <span className="font-mono text-[9px] tracking-widest text-emerald-400 uppercase px-2 py-1 bg-black/90 border border-zinc-800 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  IN STOCK
                </span>
              </div>

              {/* Garment Photography: Dedicated uploaded campaign image for VOID Heavy Hoodie */}
              <div className="aspect-[3/4] w-full overflow-hidden bg-zinc-950">
                <img
                  src={FEATURED_HERO_PRODUCT.images.primary}
                  alt="Primary Gen-Z streetwear model wearing VOID Heavy Hoodie"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Bottom Equipment HUD Card */}
              <div className="p-4 bg-zinc-950/95 border-t border-zinc-850 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block">
                    EQUIPPED GARMENT:
                  </span>
                  <h4 className="font-display text-sm font-bold uppercase text-white tracking-wide">
                    VOID HEAVY HOODIE
                  </h4>
                  <span className="font-mono text-xs text-zinc-400">₹2,499 · 480 GSM FLEECE</span>
                </div>

                {onViewProduct && (
                  <button
                    onClick={() => onViewProduct('void-heavy-hoodie')}
                    className="px-3 py-1.5 bg-zinc-900 hover:bg-zinc-850 text-white font-mono text-[11px] uppercase tracking-wider border border-zinc-700 transition-colors hover:border-zinc-500 flex items-center gap-1.5"
                  >
                    <span>INSPECT</span>
                    <span aria-hidden="true">→</span>
                  </button>
                )}
              </div>
            </div>

            {/* Corner Decorative HUD accents */}
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-zinc-500 pointer-events-none" />
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-zinc-500 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
