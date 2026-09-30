import React, { useState } from 'react';
import { ProductSize } from '../types';

interface SizeSelectorProps {
  sizes: ProductSize[];
  selectedSize: ProductSize;
  onSelectSize: (size: ProductSize) => void;
}

export const SizeSelector: React.FC<SizeSelectorProps> = ({
  sizes,
  selectedSize,
  onSelectSize
}) => {
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs font-mono">
        <span className="text-zinc-400 tracking-wider uppercase flex items-center gap-1.5">
          <span>SELECT SIZE</span>
          <span className="text-zinc-600">//</span>
          <span className="text-white font-semibold">{selectedSize}</span>
        </span>
        <button
          type="button"
          onClick={() => setShowGuide(true)}
          className="text-zinc-400 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-white transition-colors"
        >
          SIZE GUIDE
        </button>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {sizes.map((size) => {
          const isSelected = selectedSize === size;
          return (
            <button
              key={size}
              type="button"
              onClick={() => onSelectSize(size)}
              className={`h-11 flex flex-col items-center justify-center font-mono text-xs md:text-sm font-medium tracking-wider transition-all duration-150 border ${
                isSelected
                  ? 'bg-zinc-100 text-zinc-950 font-bold border-white shadow-[0_0_12px_rgba(255,255,255,0.2)] scale-[1.02]'
                  : 'bg-zinc-900/80 text-zinc-300 border-zinc-800 hover:border-zinc-600 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <span>{size}</span>
            </button>
          );
        })}
      </div>

      {/* Sizing modal helper */}
      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-zinc-900 border border-zinc-700 p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
              <h4 className="font-display font-bold text-base uppercase text-white">VOID//DROP SIZING SPECIFICATION</h4>
              <button
                onClick={() => setShowGuide(false)}
                className="text-zinc-400 hover:text-white font-mono text-sm p-1"
              >
                ✕
              </button>
            </div>
            
            <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
              All VOID pieces are intentionally engineered with an architectural dropped-shoulder and relaxed boxy drape. 
              Take your standard size for the intended streetwear runway silhouette, or size down one step for a traditional tailored fit.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-xs font-mono text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800 text-zinc-400">
                    <th className="py-2 pr-4">SIZE</th>
                    <th className="py-2 px-4">CHEST (IN)</th>
                    <th className="py-2 px-4">LENGTH (IN)</th>
                    <th className="py-2 pl-4">RECOMMENDED FIT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                  <tr>
                    <td className="py-2 pr-4 font-bold text-white">S</td>
                    <td className="py-2 px-4">42 - 44</td>
                    <td className="py-2 px-4">27.5</td>
                    <td className="py-2 pl-4 text-zinc-400">Up to 5'8" (173cm)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-bold text-white">M</td>
                    <td className="py-2 px-4">45 - 47</td>
                    <td className="py-2 px-4">28.5</td>
                    <td className="py-2 pl-4 text-zinc-400">5'8" - 5'11" (173-180cm)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-bold text-white">L</td>
                    <td className="py-2 px-4">48 - 50</td>
                    <td className="py-2 px-4">29.5</td>
                    <td className="py-2 pl-4 text-zinc-400">5'11" - 6'1" (180-185cm)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-bold text-white">XL</td>
                    <td className="py-2 px-4">51 - 53</td>
                    <td className="py-2 px-4">30.5</td>
                    <td className="py-2 pl-4 text-zinc-400">6'1" - 6'4" (185-193cm)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-bold text-white">XXL</td>
                    <td className="py-2 px-4">54 - 56</td>
                    <td className="py-2 px-4">31.5</td>
                    <td className="py-2 pl-4 text-zinc-400">6'3"+ Extended Boxy</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setShowGuide(false)}
                className="px-4 py-2 bg-zinc-100 text-zinc-950 font-mono text-xs font-semibold uppercase hover:bg-white transition-colors"
              >
                RETURN TO LOADOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
