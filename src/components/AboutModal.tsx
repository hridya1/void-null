import React from 'react';
import { BRAND_INFO } from '../data/products';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreDrop: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onExploreDrop
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="w-full max-w-2xl bg-zinc-950 border border-zinc-700 shadow-2xl p-6 sm:p-8 rounded-sm relative max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
          <div className="flex items-center gap-1.5 font-display text-lg font-extrabold uppercase tracking-tight text-white">
            <span>VOID</span>
            <span className="text-zinc-500 font-mono text-xs">//</span>
            <span>DROP</span>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white font-mono text-sm px-2 py-1 border border-zinc-800 bg-zinc-900"
          >
            ✕
          </button>
        </div>

        <div className="space-y-6 text-sm text-zinc-300 leading-relaxed font-sans">
          <div>
            <span className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase block mb-1">
              MANIFESTO
            </span>
            <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wide mb-3">
              {BRAND_INFO.tagline}
            </h3>
            <p className="text-zinc-400">
              {BRAND_INFO.manifesto}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-850">
            <div className="bg-zinc-900/60 p-4 border border-zinc-800">
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">
                01. TEXTILE WEIGHT
              </span>
              <p className="font-bold text-white text-xs uppercase mb-1">480-500 GSM FLEECE</p>
              <p className="text-[11px] text-zinc-400 leading-normal">
                Substantial loopback terry cotton engineered to resist shrinkage and drape with authority.
              </p>
            </div>

            <div className="bg-zinc-900/60 p-4 border border-zinc-800">
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">
                02. ARCHITECTURE
              </span>
              <p className="font-bold text-white text-xs uppercase mb-1">KINETIC ARTICULATION</p>
              <p className="text-[11px] text-zinc-400 leading-normal">
                Ergonomic knee darts, drop-shoulder seams, and cord-lock transitions for modular fit.
              </p>
            </div>

            <div className="bg-zinc-900/60 p-4 border border-zinc-800">
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">
                03. ZERO SLOP
              </span>
              <p className="font-bold text-white text-xs uppercase mb-1">EDITIONS OF 150</p>
              <p className="text-[11px] text-zinc-400 leading-normal">
                Strict batch drops, bar-tack reinforced stress points, zero seasonal disposability.
              </p>
            </div>
          </div>

          <div className="p-4 bg-zinc-900/40 border border-zinc-850 font-mono text-xs text-zinc-400">
            <span className="text-zinc-200 block font-semibold mb-1">STUDIO CONTACT & ATELIER</span>
            <span>Support: ops@void-drop.internal // Dispatches from Studio Warehouse #09</span>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-zinc-800 flex justify-between items-center">
          <span className="font-mono text-xs text-zinc-500">VOID//DROP ALLIANCE © 2026</span>
          <button
            onClick={() => {
              onClose();
              onExploreDrop();
            }}
            className="px-5 py-2.5 bg-zinc-100 text-zinc-950 font-display text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
          >
            ENTER DROP 01
          </button>
        </div>
      </div>
    </div>
  );
};
