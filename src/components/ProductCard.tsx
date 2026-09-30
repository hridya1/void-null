import React, { useState } from 'react';
import { Product } from '../types';
import { ProductImage } from './ProductImage';
import { resolveProductImages } from '../utils/imageSystem';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onQuickAdd?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onQuickAdd
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [equippedNotice, setEquippedNotice] = useState(false);
  const images = resolveProductImages(product);

  const stockBadgeClass = 
    product.stockStatus === 'LOW STOCK' ? 'text-amber-400 border-amber-900/60' :
    product.stockStatus === 'EDITION 01/150' ? 'text-zinc-300 border-zinc-700' :
    'text-zinc-400 border-zinc-800';

  const handleEquipClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onQuickAdd) {
      onQuickAdd(product);
      setEquippedNotice(true);
      setTimeout(() => setEquippedNotice(false), 1800);
    } else {
      onSelect(product);
    }
  };

  return (
    <div
      onClick={() => onSelect(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(product);
        }
      }}
      className="group relative flex flex-col bg-zinc-950 border border-zinc-850 rounded-none overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:border-zinc-500/80 hover:shadow-[0_0_25px_rgba(255,255,255,0.06)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
    >
      {/* Top subtle HUD telemetry markings */}
      <div className="absolute top-2.5 left-2.5 z-20 pointer-events-none flex items-center gap-1.5">
        <span className="font-mono text-[9px] tracking-wider text-zinc-300 uppercase px-1.5 py-0.5 bg-black/85 backdrop-blur-md border border-zinc-800">
          DROP 01
        </span>
        <span className="font-mono text-[9px] tracking-wider text-zinc-500 uppercase px-1.5 py-0.5 bg-black/85 backdrop-blur-md border border-zinc-800/80 hidden sm:inline">
          {product.itemCode}
        </span>
      </div>

      <div className="absolute top-2.5 right-2.5 z-20 pointer-events-none">
        <span className={`font-mono text-[9px] tracking-widest uppercase px-1.5 py-0.5 bg-black/85 backdrop-blur-md border flex items-center gap-1.5 ${stockBadgeClass}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
          {product.stockStatus}
        </span>
      </div>

      {/* Product Image Container (Occupies ~65–70% of card) */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#0d0d10]">
        <ProductImage
          src={images.primary}
          hoverSrc={images.secondary}
          alt={product.name}
          category={product.category}
          aspectRatio="portrait"
          isHovered={isHovered}
        />

        {/* Hover Action Bar: VIEW ITEM → & EQUIP */}
        <div className="absolute inset-x-0 bottom-0 p-2.5 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out bg-gradient-to-t from-black via-black/90 to-transparent">
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(product);
              }}
              className="w-full py-2 px-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-[11px] font-mono tracking-wider uppercase text-center transition-colors border border-zinc-700 flex items-center justify-center gap-1"
            >
              <span>VIEW ITEM</span>
              <span aria-hidden="true" className="text-zinc-500">→</span>
            </button>

            <button
              type="button"
              onClick={handleEquipClick}
              className={`w-full py-2 px-2 text-[11px] font-mono tracking-wider uppercase text-center transition-all duration-150 border flex items-center justify-center gap-1 ${
                equippedNotice
                  ? 'bg-emerald-500 text-black border-emerald-400 font-bold'
                  : 'bg-white hover:bg-zinc-200 text-black border-white font-semibold'
              }`}
            >
              {equippedNotice ? (
                <span>EQUIPPED ✓</span>
              ) : (
                <>
                  <span>EQUIP</span>
                  <span className="text-[10px] text-zinc-600 font-normal">[L]</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Card Info Section (Below Image) */}
      <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1 bg-zinc-950 border-t border-zinc-850">
        <div>
          {/* CATEGORY & ITEM CODE */}
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mb-1">
            <span className="tracking-widest uppercase text-zinc-400">{product.category}</span>
            <span className="text-[10px] tracking-wider text-zinc-500">{product.itemCode}</span>
          </div>

          {/* PRODUCT NAME */}
          <h3 className="font-display text-sm sm:text-base font-bold text-zinc-100 uppercase tracking-tight group-hover:text-white transition-colors truncate">
            {product.name}
          </h3>

          {/* COLOUR */}
          <div className="mt-1 text-[11px] font-mono text-zinc-400 tracking-wider uppercase truncate">
            {product.colorway}
          </div>
        </div>

        {/* PRICE & LOADOUT READY */}
        <div className="mt-3 pt-2.5 border-t border-zinc-850/80 flex items-baseline justify-between">
          <span className="font-mono text-sm sm:text-base font-semibold text-white tabular-nums">
            {product.priceFormatted}
          </span>
          <span className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase group-hover:text-zinc-300 transition-colors">
            LOADOUT READY
          </span>
        </div>
      </div>
    </div>
  );
};
