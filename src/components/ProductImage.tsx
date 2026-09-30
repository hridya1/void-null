import React, { useState } from 'react';

interface ProductImageProps {
  src: string;
  hoverSrc?: string;
  alt: string;
  className?: string;
  category?: 'hoodies' | 't-shirts' | 'cargos' | 'jackets' | 'sweatshirts' | string;
  aspectRatio?: 'portrait' | 'square' | 'wide';
  isHovered?: boolean;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  hoverSrc,
  alt,
  className = '',
  category = 'hoodies',
  aspectRatio = 'portrait',
  isHovered = false
}) => {
  const [hasError, setHasError] = useState(false);
  const [hoverError, setHoverError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClass = 
    aspectRatio === 'portrait' ? 'aspect-[3/4]' :
    aspectRatio === 'square' ? 'aspect-square' : 'aspect-[16/9]';

  const activeSrc = isHovered && hoverSrc && !hoverError ? hoverSrc : src;

  // Campaign images are already perfectly balanced and centered
  const getFocalPosition = (_cat?: string) => 'object-center';

  const focalClass = getFocalPosition(category);

  return (
    <div className={`relative overflow-hidden bg-[#0d0d10] ${aspectClass} ${className}`}>
      {/* High-Fidelity Studio Garment Schematic & Silhouette Fallback */}
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#141418] via-[#0f0f13] to-[#09090b] border border-zinc-800/80">
          {/* Studio lighting radial gradient */}
          <div className="absolute inset-0 bg-radial from-zinc-700/10 via-transparent to-transparent opacity-60 pointer-events-none" />

          {/* Blueprint grid coordinates */}
          <div 
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          />

          {/* Highly authentic garment silhouette rendering */}
          <div className="relative z-10 w-36 h-36 flex items-center justify-center text-zinc-300">
            {category === 'hoodies' && (
              <svg viewBox="0 0 160 160" fill="none" className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                {/* Heavy Hood */}
                <path d="M50 45 C50 18 110 18 110 45 C100 50 60 50 50 45 Z" fill="#1c1c22" stroke="#3f3f46" strokeWidth="1.5" />
                <path d="M65 32 C72 26 88 26 95 32 C95 44 65 44 65 32 Z" fill="#09090b" stroke="#27272a" strokeWidth="1" />
                {/* Dropped Shoulders and Torso */}
                <path d="M48 45 L20 62 L32 82 L42 74 L44 140 L116 140 L118 74 L128 82 L140 62 L112 45 C98 52 62 52 48 45 Z" fill="#18181d" stroke="#52525b" strokeWidth="1.5" />
                {/* Kangaroo Pocket */}
                <path d="M56 94 L104 94 L98 128 L62 128 Z" fill="#141419" stroke="#3f3f46" strokeWidth="1.5" />
                {/* Heavy Rib Hem */}
                <line x1="44" y1="135" x2="116" y2="135" stroke="#3f3f46" strokeWidth="2" strokeDasharray="3 2" />
                {/* Drawcords */}
                <line x1="72" y1="46" x2="72" y2="68" stroke="#71717a" strokeWidth="2" strokeLinecap="round" />
                <line x1="88" y1="46" x2="88" y2="68" stroke="#71717a" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}

            {category === 't-shirts' && (
              <svg viewBox="0 0 160 160" fill="none" className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                {/* Boxy Oversized Tee Body */}
                <path d="M52 38 L22 56 L34 76 L46 68 L46 140 L114 140 L114 68 L126 76 L138 56 L108 38 C94 48 66 48 52 38 Z" fill="#18181d" stroke="#52525b" strokeWidth="1.5" />
                {/* High 32mm Collar Band */}
                <path d="M56 36 C66 48 94 48 104 36 C94 42 66 42 56 36 Z" fill="#27272a" stroke="#71717a" strokeWidth="1.5" />
                {/* Drop Shoulder Seam Details */}
                <line x1="42" y1="48" x2="32" y2="64" stroke="#3f3f46" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="118" y1="48" x2="128" y2="64" stroke="#3f3f46" strokeWidth="1" strokeDasharray="2 2" />
                {/* Wide Hem */}
                <line x1="46" y1="136" x2="114" y2="136" stroke="#3f3f46" strokeWidth="1.5" />
              </svg>
            )}

            {category === 'cargos' && (
              <svg viewBox="0 0 160 160" fill="none" className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                {/* Relaxed Tactical Cargo Cut */}
                <path d="M50 30 L110 30 L120 142 L92 142 L80 82 L68 142 L40 142 Z" fill="#18181d" stroke="#52525b" strokeWidth="1.5" />
                {/* Dual Cargo Bellow Pockets with Flap */}
                <rect x="34" y="66" width="18" height="28" rx="2" fill="#141419" stroke="#3f3f46" strokeWidth="1.5" />
                <rect x="108" y="66" width="18" height="28" rx="2" fill="#141419" stroke="#3f3f46" strokeWidth="1.5" />
                {/* Flap details */}
                <path d="M34 66 L52 66 L49 72 L37 72 Z" fill="#27272a" />
                <path d="M108 66 L126 66 L123 72 L111 72 Z" fill="#27272a" />
                {/* Knee Darts */}
                <line x1="45" y1="102" x2="63" y2="102" stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="3 1" />
                <line x1="97" y1="102" x2="115" y2="102" stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="3 1" />
                {/* Ankle Bungee Cords */}
                <line x1="40" y1="140" x2="68" y2="140" stroke="#71717a" strokeWidth="2" />
                <line x1="92" y1="140" x2="120" y2="140" stroke="#71717a" strokeWidth="2" />
              </svg>
            )}
          </div>

          <div className="relative z-10 mt-2">
            <span className="font-mono text-[9px] tracking-widest text-zinc-400 uppercase block mb-0.5">
              VOID STUDIO PHOTOGRAPHY
            </span>
            <span className="font-display text-xs font-bold text-white uppercase tracking-wider block">
              {alt}
            </span>
          </div>

          <div className="absolute bottom-2.5 inset-x-3 flex justify-between text-[9px] font-mono text-zinc-500">
            <span>DROP 01 ARCHIVE</span>
            <span>STUDIO LIGHTING</span>
          </div>
        </div>
      ) : (
        <>
          {/* Loading state shimmer */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-[#121216] animate-pulse flex items-center justify-center">
              <span className="text-[10px] font-mono text-zinc-500 tracking-widest">LOADING ASSET...</span>
            </div>
          )}

          <img
            src={activeSrc}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => {
              if (activeSrc === hoverSrc) {
                setHoverError(true);
              } else {
                setHasError(true);
              }
            }}
            className={`w-full h-full object-cover ${focalClass} transition-all duration-500 ease-out ${
              isHovered ? 'scale-105' : 'scale-100'
            } ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </>
      )}

      {/* Subtle bottom vignette to maintain text contrast */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
    </div>
  );
};
