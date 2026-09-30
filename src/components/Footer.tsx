import React, { useState } from 'react';
import { ViewMode, Category } from '../types';

interface FooterProps {
  onNavigate: (view: ViewMode) => void;
  onFilterCategory: (category: Category) => void;
  onOpenAbout: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onFilterCategory,
  onOpenAbout
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-850 pt-16 pb-12 mt-20 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-zinc-850">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="font-display font-extrabold text-xl tracking-tighter uppercase text-white flex items-center gap-1.5">
              <span>VOID</span>
              <span className="text-zinc-500 font-mono text-sm tracking-widest">//</span>
              <span>DROP</span>
            </div>
            
            <p className="font-mono text-xs tracking-wider text-zinc-300 uppercase">
              BUILT FOR THE NEXT LEVEL.
            </p>
            
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Streetwear engineered for everyday movement. Modular loadouts, heavyweight cotton fleece, and relaxed functional silhouettes designed for modern urban mobility.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>DROP 01 ACTIVE</span>
              <span>·</span>
              <span>LIMITED ALLOCATIONS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-zinc-200 uppercase tracking-widest block font-semibold mb-2">
              LOADOUT DIRECTORY
            </span>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    onFilterCategory('all');
                    onNavigate('shop');
                  }}
                  className="hover:text-white transition-colors"
                >
                  ALL INVENTORY
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onFilterCategory('hoodies');
                    onNavigate('shop');
                  }}
                  className="hover:text-white transition-colors"
                >
                  OVERSIZED HOODIES
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onFilterCategory('t-shirts');
                    onNavigate('shop');
                  }}
                  className="hover:text-white transition-colors"
                >
                  BOXY T-SHIRTS
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onFilterCategory('cargos');
                    onNavigate('shop');
                  }}
                  className="hover:text-white transition-colors"
                >
                  TACTICAL CARGOS
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-white transition-colors"
                >
                  ABOUT VOID//DROP
                </button>
              </li>
            </ul>
          </div>

          {/* Drop Notification Signup */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-xs text-zinc-200 uppercase tracking-widest block font-semibold">
              DROP 02 ACCESS
            </span>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Receive early allocation coordinates and priority access 30 minutes before public deployment.
            </p>

            {subscribed ? (
              <div className="p-3 bg-zinc-900 border border-emerald-500/50 text-emerald-400 font-mono text-xs flex items-center gap-2">
                <span aria-hidden="true">✓</span>
                <span>COORDINATES LOGGED // ACCESS GRANTED</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER OPERATOR EMAIL"
                    className="flex-1 bg-zinc-900 border border-zinc-800 px-3 py-2 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-zinc-100 text-zinc-950 font-display text-xs font-bold uppercase hover:bg-white transition-colors border border-white"
                  >
                    JOIN
                  </button>
                </div>
                <span className="text-[10px] font-mono text-zinc-500 block">
                  Strict zero-spam protocol. Unsubscribe anytime.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <p>© 2026 VOID//DROP. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4">
            <span>TERMS // SPEC</span>
            <span>·</span>
            <span>PRIVACY PROTOCOL</span>
            <span>·</span>
            <span>DISPATCH NETWORK</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
