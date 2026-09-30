/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ViewMode, Category, Product, ProductSize, CartItem } from './types';
import { PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductGrid } from './components/ProductGrid';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductPage } from './components/ProductPage';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { AboutModal } from './components/AboutModal';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('void_cart_items_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.warn('Failed to parse cart from storage:', e);
    }
    return [];
  });
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [sortOption, setSortOption] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  // Sync cart with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('void_cart_items_v2', JSON.stringify(cartItems));
    } catch (e) {
      console.warn('Failed to save cart to storage:', e);
    }
  }, [cartItems]);

  // Calculate total cart items
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedProduct]);

  // Handle adding product to cart
  const handleAddToCart = (product: Product, size: ProductSize, quantity: number) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevItems, { product, size, quantity }];
      }
    });

    // Briefly open drawer to show feedback
    setIsCartDrawerOpen(true);
  };

  // Update item quantity in cart
  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], quantity: newQty };
      return updated;
    });
  };

  // Remove item from cart
  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  // Clear all items from cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Navigation handlers
  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product');
  };

  const handleNavigate = (view: ViewMode) => {
    setCurrentView(view);
    if (view === 'cart') {
      setIsCartDrawerOpen(false);
    }
  };

  const handleFilterCategory = (category: Category) => {
    setSelectedCategory(category);
    setCurrentView('shop');
  };

  // Featured Drop 01 items (first 6 items)
  const drop01Products = PRODUCTS.filter((p) => p.isFeaturedDrop);

  // Shop filtered products
  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  }).sort((a, b) => {
    if (sortOption === 'price-asc') return a.price - b.price;
    if (sortOption === 'price-desc') return b.price - a.price;
    return 0;
  });

  // Category counts
  const categoryCounts = {
    all: PRODUCTS.length,
    hoodies: PRODUCTS.filter((p) => p.category === 'hoodies').length,
    't-shirts': PRODUCTS.filter((p) => p.category === 't-shirts').length,
    cargos: PRODUCTS.filter((p) => p.category === 'cargos').length
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col selection:bg-zinc-700 selection:text-white">
      {/* Top Banner Notice */}
      <aside aria-label="Announcement" className="bg-zinc-900 border-b border-zinc-800 text-[11px] font-mono tracking-wider py-1.5 px-4 text-center text-zinc-400 flex items-center justify-center gap-3">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>DROP 01 LIVE</span>
        </span>
        <span className="text-zinc-600">|</span>
        <span className="hidden sm:inline">COMPLIMENTARY DOMESTIC DISPATCH ON ALL LOADOUTS</span>
        <span className="sm:hidden">COMPLIMENTARY DISPATCH</span>
      </aside>

      {/* Main Navbar */}
      <Navbar
        currentView={currentView}
        cartCount={totalCartCount}
        onNavigate={handleNavigate}
        onOpenCart={() => setIsCartDrawerOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        onDropSelect={() => {
          if (currentView === 'home') {
            const dropEl = document.getElementById('drop-01-section');
            if (dropEl) dropEl.scrollIntoView({ behavior: 'smooth' });
          } else {
            setCurrentView('home');
            setTimeout(() => {
              const dropEl = document.getElementById('drop-01-section');
              if (dropEl) dropEl.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* VIEW: HOME */}
        {currentView === 'home' && (
          <div>
            {/* Hero Section */}
            <Hero
              onExploreDrop={() => {
                const dropEl = document.getElementById('drop-01-section');
                if (dropEl) dropEl.scrollIntoView({ behavior: 'smooth' });
              }}
              onBuildLoadout={() => {
                setSelectedCategory('all');
                setCurrentView('shop');
              }}
              onViewProduct={(id) => {
                const p = PRODUCTS.find((x) => x.id === id);
                if (p) handleSelectProduct(p);
              }}
            />

            {/* DROP 01 Section */}
            <section id="drop-01-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-zinc-800/80 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1.5">
                    <span>INAUGURAL RELEASE</span>
                    <span>·</span>
                    <span className="text-emerald-400">IN STOCK</span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
                    DROP 01
                  </h2>
                </div>

                <div className="flex items-center gap-4">
                  <p className="text-xs sm:text-sm text-zinc-400 font-mono max-w-md">
                    Oversized hoodies, heavy boxy t-shirts, and relaxed tactical cargos engineered for everyday movement.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setCurrentView('shop');
                    }}
                    className="hidden lg:flex items-center gap-2 px-4 py-2 border border-zinc-700 bg-zinc-900 font-mono text-xs text-zinc-300 hover:text-white hover:border-zinc-500 whitespace-nowrap transition-colors"
                  >
                    <span>VIEW COMPLETE INVENTORY</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>

              {/* DROP 01 Product Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                {drop01Products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelect={handleSelectProduct}
                    onQuickAdd={(p) => handleAddToCart(p, 'L', 1)}
                  />
                ))}
              </div>

              {/* View all drop button for mobile/tablet */}
              <div className="mt-12 text-center">
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setCurrentView('shop');
                  }}
                  className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-zinc-200 hover:text-white font-display text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  VIEW ALL {PRODUCTS.length} LOADOUT ITEMS IN SHOP
                </button>
              </div>

              {/* Architectural Loadout Highlight Banner */}
              <div className="mt-20 p-8 sm:p-12 border border-zinc-800 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden">
                <div className="max-w-2xl relative z-10">
                  <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-2">
                    LOADOUT COMBINATIONS // 01
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight mb-4">
                    ENGINEERED PROPORTIONS
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-sans">
                    Pair our 480 GSM Void Heavy Hoodie with the articulated Tactical Cargos for the signature silhouette. 
                    Heavy dropped shoulders balanced by tapered adjustable cord hems.
                  </p>
                  <div className="flex flex-wrap gap-4 font-mono text-xs">
                    <button
                      onClick={() => handleFilterCategory('hoodies')}
                      className="px-4 py-2 border border-zinc-700 bg-zinc-900/80 text-zinc-200 hover:text-white hover:border-zinc-500 transition-colors uppercase"
                    >
                      EXPLORE HOODIES
                    </button>
                    <button
                      onClick={() => handleFilterCategory('cargos')}
                      className="px-4 py-2 border border-zinc-700 bg-zinc-900/80 text-zinc-200 hover:text-white hover:border-zinc-500 transition-colors uppercase"
                    >
                      EXPLORE CARGOS
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* VIEW: SHOP */}
        {currentView === 'shop' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
            {/* Shop Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1.5">
                <span>VOID ARCHIVE</span>
                <span>/</span>
                <span className="text-zinc-300">LOADOUT INVENTORY</span>
              </div>
              <h1 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-3">
                COLLECTION CATALOG
              </h1>
              <p className="text-zinc-400 text-sm max-w-xl">
                Browse our complete system of heavyweight fleece, boxy cotton jerseys, and modular technical cargos.
              </p>
            </div>

            {/* Category Filter and Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-2 mb-8">
              <CategoryFilter
                activeCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                counts={categoryCounts}
              />

              {/* Sort selector */}
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 pb-2 self-end sm:self-auto">
                <span className="uppercase text-zinc-500">SORT:</span>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as any)}
                  className="bg-zinc-900 border border-zinc-800 text-zinc-200 py-1.5 px-3 focus:outline-none focus:border-zinc-600 font-mono text-xs uppercase"
                >
                  <option value="featured">FEATURED LOADOUT</option>
                  <option value="price-asc">PRICE: LOW TO HIGH</option>
                  <option value="price-desc">PRICE: HIGH TO LOW</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <ProductGrid
              products={filteredProducts}
              onSelectProduct={handleSelectProduct}
              onQuickAdd={(p) => handleAddToCart(p, 'L', 1)}
            />
          </div>
        )}

        {/* VIEW: PRODUCT DETAIL */}
        {currentView === 'product' && selectedProduct && (
          <ProductPage
            product={selectedProduct}
            allProducts={PRODUCTS}
            onAddToCart={handleAddToCart}
            onSelectProduct={handleSelectProduct}
            onBackToShop={() => setCurrentView('shop')}
          />
        )}

        {/* VIEW: DEDICATED CART */}
        {currentView === 'cart' && (
          <Cart
            items={cartItems}
            isDrawer={false}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
            onContinueShopping={() => setCurrentView('shop')}
          />
        )}
      </main>

      {/* SLIDE-OVER CART DRAWER */}
      <Cart
        items={cartItems}
        isOpen={isCartDrawerOpen}
        isDrawer={true}
        onClose={() => setIsCartDrawerOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onContinueShopping={() => {
          setIsCartDrawerOpen(false);
          setCurrentView('shop');
        }}
      />

      {/* SEARCH MODAL */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={handleSelectProduct}
      />

      {/* ABOUT MODAL */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onExploreDrop={() => {
          setCurrentView('home');
          setTimeout(() => {
            const dropEl = document.getElementById('drop-01-section');
            if (dropEl) dropEl.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
      />

      {/* FOOTER */}
      <Footer
        onNavigate={handleNavigate}
        onFilterCategory={handleFilterCategory}
        onOpenAbout={() => setIsAboutOpen(true)}
      />
    </div>
  );
}
