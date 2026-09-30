import React, { useState } from 'react';
import { Product } from '../types';
import { ProductImage } from './ProductImage';
import { resolveProductImages } from '../utils/imageSystem';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = query.trim() === ''
    ? products.slice(0, 4)
    : products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.colorway.toLowerCase().includes(query.toLowerCase()) ||
        p.shortSpec.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/85 backdrop-blur-md">
      <div className="w-full max-w-2xl bg-zinc-950 border border-zinc-700 shadow-2xl rounded-sm overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-zinc-800 bg-zinc-900/60">
          <svg className="w-4 h-4 text-zinc-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search DROP 01 items (hoodie, cargo, tee, gsm)..."
            autoFocus
            className="w-full bg-transparent font-mono text-sm text-white placeholder-zinc-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="text-xs font-mono text-zinc-400 hover:text-white px-2 py-1 ml-2 border border-zinc-800"
          >
            ESC
          </button>
        </div>

        {/* Results / Suggestions */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 tracking-wider uppercase mb-2">
            <span>{query.trim() === '' ? 'FEATURED LOADOUT SELECTIONS' : `MATCHING RESULTS (${filtered.length})`}</span>
            <span>PRESS ITEM TO EQUIP</span>
          </div>

          {filtered.length === 0 ? (
            <div className="py-12 text-center text-zinc-500 font-mono text-xs">
              NO MATCHING ITEMS IN THE VOID ARCHIVE.
            </div>
          ) : (
            <div className="divide-y divide-zinc-900">
              {filtered.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  role="button"
                  tabIndex={0}
                  className="flex items-center gap-3.5 py-2.5 px-2 hover:bg-zinc-900/80 cursor-pointer transition-colors group"
                >
                  <div className="w-12 h-14 bg-zinc-900 flex-shrink-0 border border-zinc-800 overflow-hidden">
                    <ProductImage
                      src={resolveProductImages(product).primary}
                      alt={product.name}
                      category={product.category}
                      aspectRatio="portrait"
                      className="w-full h-full"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between">
                      <h5 className="font-display text-xs sm:text-sm font-bold uppercase text-zinc-200 group-hover:text-white truncate">
                        {product.name}
                      </h5>
                      <span className="font-mono text-xs text-zinc-300 tabular-nums ml-2">
                        {product.priceFormatted}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500 mt-0.5">
                      <span className="uppercase">{product.category}</span>
                      <span>·</span>
                      <span>{product.colorway}</span>
                      <span>·</span>
                      <span className="text-zinc-400">{product.shortSpec}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-zinc-900/40 border-t border-zinc-800 text-[10px] font-mono text-zinc-500 flex justify-between">
          <span>CATEGORY FILTERS: HOODIES // T-SHIRTS // CARGOS</span>
          <span>VOID//DROP ARCHIVE</span>
        </div>
      </div>
    </div>
  );
};
