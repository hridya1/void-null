import React, { useState } from 'react';
import { ViewMode } from '../types';

interface NavbarProps {
  currentView: ViewMode;
  cartCount: number;
  onNavigate: (view: ViewMode) => void;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenAbout: () => void;
  onDropSelect?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  cartCount,
  onNavigate,
  onOpenCart,
  onOpenSearch,
  onOpenAbout,
  onDropSelect
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: ViewMode) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  const handleDrop01Click = () => {
    if (onDropSelect) {
      onDropSelect();
    } else {
      onNavigate('home');
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element with VOID // DROP styling) */}
        <div className="flex items-center">
          <button
            onClick={() => handleNavClick('home')}
            className="group text-left focus-visible:outline-none"
            aria-label="VOID//DROP Home"
          >
            <div className="font-display font-extrabold text-lg sm:text-xl tracking-tighter uppercase text-white flex items-center gap-1 group-hover:text-zinc-200 transition-colors">
              <span>VOID</span>
              <span className="text-zinc-500 font-mono text-sm tracking-widest">//</span>
              <span>DROP</span>
            </div>
          </button>
        </div>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest uppercase">
          <button
            onClick={() => handleNavClick('shop')}
            className={`transition-colors hover:text-white py-1 relative ${
              currentView === 'shop'
                ? 'text-white font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-white'
                : 'text-zinc-400'
            }`}
          >
            SHOP
          </button>

          <button
            onClick={handleDrop01Click}
            className="text-zinc-400 hover:text-white transition-colors py-1 flex items-center gap-1"
          >
            <span>DROP 01</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 animate-pulse" />
          </button>

          <button
            onClick={onOpenAbout}
            className="text-zinc-400 hover:text-white transition-colors py-1"
          >
            ABOUT
          </button>
        </nav>

        {/* Zone 3: Primary Actions (Search + Cart + Mobile Hamburger) */}
        <div className="flex items-center gap-3 sm:gap-4 font-mono text-xs">
          {/* SEARCH */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-colors uppercase tracking-wider"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="hidden sm:inline">SEARCH</span>
          </button>

          {/* CART (0) */}
          <button
            onClick={onOpenCart}
            aria-label={`Open shopping cart containing ${cartCount} items`}
            className={`px-3.5 py-2 font-mono uppercase tracking-wider transition-all duration-150 border flex items-center gap-2 ${
              cartCount > 0
                ? 'bg-zinc-100 text-zinc-950 font-bold border-white shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:bg-white'
                : 'bg-zinc-900/80 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white'
            }`}
          >
            <span>CART</span>
            <span className="tabular-nums">({cartCount})</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-zinc-400 hover:text-white border border-zinc-800 bg-zinc-900"
          >
            {mobileMenuOpen ? (
              <span className="font-mono text-sm block w-5 h-5 text-center leading-5">✕</span>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950 px-4 pt-3 pb-6 space-y-3 font-mono text-sm">
          <button
            onClick={() => handleNavClick('shop')}
            className="w-full text-left py-2.5 text-zinc-300 hover:text-white border-b border-zinc-900 flex justify-between items-center"
          >
            <span>SHOP ALL INVENTORY</span>
            <span className="text-zinc-600">→</span>
          </button>
          <button
            onClick={handleDrop01Click}
            className="w-full text-left py-2.5 text-zinc-300 hover:text-white border-b border-zinc-900 flex justify-between items-center"
          >
            <span className="flex items-center gap-2">
              <span>DROP 01</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-zinc-600">→</span>
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAbout();
            }}
            className="w-full text-left py-2.5 text-zinc-300 hover:text-white border-b border-zinc-900 flex justify-between items-center"
          >
            <span>ABOUT VOID//DROP</span>
            <span className="text-zinc-600">→</span>
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSearch();
            }}
            className="w-full text-left py-2.5 text-zinc-400 hover:text-white flex justify-between items-center"
          >
            <span>SEARCH ARCHIVE</span>
            <span className="text-zinc-600">⌕</span>
          </button>
        </div>
      )}
    </header>
  );
};
