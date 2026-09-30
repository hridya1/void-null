import React, { useState } from 'react';
import { Product, ProductSize } from '../types';
import { SizeSelector } from './SizeSelector';
import { QuantitySelector } from './QuantitySelector';
import { ProductCard } from './ProductCard';
import { ProductImage } from './ProductImage';
import { resolveProductImages } from '../utils/imageSystem';

interface ProductPageProps {
  product: Product;
  allProducts: Product[];
  onAddToCart: (product: Product, size: ProductSize, quantity: number) => void;
  onSelectProduct: (product: Product) => void;
  onBackToShop: () => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({
  product,
  allProducts,
  onAddToCart,
  onSelectProduct,
  onBackToShop
}) => {
  const [selectedSize, setSelectedSize] = useState<ProductSize>('L');
  const [quantity, setQuantity] = useState(1);
  const [activeImageKey, setActiveImageKey] = useState<'primary' | 'secondary' | 'lifestyle' | 'detail'>('primary');
  const [isEquipping, setIsEquipping] = useState(false);
  const [justEquipped, setJustEquipped] = useState(false);
  const [activeTab, setActiveTab] = useState<'specs' | 'care'>('specs');

  const images = resolveProductImages(product);

  // Related products: 3 items in the collection
  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const handleAdd = () => {
    setIsEquipping(true);
    setTimeout(() => {
      onAddToCart(product, selectedSize, quantity);
      setIsEquipping(false);
      setJustEquipped(true);
      setTimeout(() => setJustEquipped(false), 2400);
    }, 350);
  };

  const imageViews = [
    { key: 'primary' as const, label: '01 // PRIMARY PRODUCT', src: images.primary },
    { key: 'secondary' as const, label: '02 // SECONDARY DETAIL', src: images.secondary },
    { key: 'lifestyle' as const, label: '03 // MODEL LIFESTYLE', src: images.lifestyle },
    ...(images.detail ? [{ key: 'detail' as const, label: '04 // MACRO WEAVE', src: images.detail }] : [])
  ];

  const currentImageSrc = images[activeImageKey] || images.primary;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      {/* Top breadcrumb & inventory status */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-855">
        <button
          onClick={onBackToShop}
          className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors uppercase tracking-wider"
        >
          <span aria-hidden="true">←</span>
          <span>RETURN TO LOADOUT INVENTORY</span>
        </button>

        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="text-zinc-500 uppercase">DROP 01</span>
          <span className="text-zinc-700">/</span>
          <span className="text-zinc-300 font-semibold">{product.itemCode}</span>
          <span className="text-zinc-700">/</span>
          <span className="text-emerald-400 font-semibold">{product.stockStatus}</span>
        </div>
      </div>

      {/* Main PDP Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Product Photography & Multi-Angle Thumbnails */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main Large Display View */}
          <div className="relative border border-zinc-800 bg-zinc-950 overflow-hidden group">
            <div className="absolute top-3.5 left-3.5 z-20 pointer-events-none flex items-center gap-2">
              <span className="font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 bg-black/90 border border-zinc-700 text-zinc-200">
                {product.itemCode}
              </span>
              <span className="font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 bg-black/90 border border-zinc-800 text-zinc-400">
                {activeImageKey.toUpperCase()}
              </span>
            </div>

            <div className="absolute top-3.5 right-3.5 z-20 pointer-events-none">
              <span className="font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 bg-black/90 border border-zinc-800 text-zinc-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {product.edition}
              </span>
            </div>

            <ProductImage
              src={currentImageSrc}
              alt={`${product.name} - ${activeImageKey}`}
              category={product.category}
              aspectRatio="portrait"
              className="w-full h-auto min-h-[440px] md:min-h-[580px]"
            />
          </div>

          {/* Thumbnail Image View Switcher */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
            {imageViews.map((view) => {
              const isSelected = activeImageKey === view.key;
              return (
                <button
                  key={view.key}
                  type="button"
                  onClick={() => setActiveImageKey(view.key)}
                  className={`relative border text-left p-1 rounded-none transition-all duration-150 ${
                    isSelected
                      ? 'border-white bg-zinc-900 shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                      : 'border-zinc-800 bg-zinc-950 hover:border-zinc-700 opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="aspect-[3/4] overflow-hidden mb-1.5 bg-zinc-900">
                    <img
                      src={view.src}
                      alt={view.label}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <span className="block font-mono text-[9px] truncate text-zinc-300 px-0.5 uppercase">
                    {view.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Product Purchase Module & Specs */}
        <div className="lg:col-span-5 flex flex-col space-y-6 lg:sticky lg:top-24">
          {/* Header Info */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1.5">
              <span className="tracking-widest uppercase text-zinc-400">
                CATEGORY: {product.category}
              </span>
              <span className="tracking-wider uppercase text-zinc-300">
                {product.itemCode}
              </span>
            </div>

            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white mb-2">
              {product.name}
            </h1>

            {/* COLOUR */}
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 mb-3">
              <span className="text-zinc-500 uppercase">COLOUR:</span>
              <span className="text-zinc-200 font-semibold uppercase">{product.colorway}</span>
            </div>

            <div className="flex items-baseline gap-4 mt-2">
              <span className="font-mono text-2xl font-bold text-white tabular-nums">
                {product.priceFormatted}
              </span>
              <span className="font-mono text-xs text-zinc-500 tracking-wider">
                INCLUSIVE OF ALL TAXES
              </span>
            </div>
          </div>

          {/* Short Description */}
          <p className="text-zinc-300 text-sm leading-relaxed border-t border-b border-zinc-850 py-4 font-sans">
            {product.description}
          </p>

          {/* Size Selector */}
          <SizeSelector
            sizes={product.availableSizes}
            selectedSize={selectedSize}
            onSelectSize={setSelectedSize}
          />

          {/* Quantity Selector */}
          <QuantitySelector
            quantity={quantity}
            onChange={setQuantity}
          />

          {/* Action Button: EQUIP TO LOADOUT */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleAdd}
              disabled={isEquipping}
              className={`w-full py-4 px-6 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-200 border flex items-center justify-center gap-3 relative ${
                justEquipped
                  ? 'bg-emerald-500 text-black border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                  : 'bg-white text-black border-white hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-[0.99]'
              }`}
            >
              {isEquipping ? (
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-black animate-ping" />
                  EQUIPPING LOADOUT...
                </span>
              ) : justEquipped ? (
                <span className="flex items-center gap-2">
                  <span aria-hidden="true">✓</span>
                  LOADED TO INVENTORY
                </span>
              ) : (
                <>
                  <span>EQUIP TO LOADOUT</span>
                  <span className="text-zinc-600 font-normal">
                    [{selectedSize} · QTY {quantity}]
                  </span>
                  <span aria-hidden="true">→</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 mt-2 px-1">
              <span>EDITION 01/150</span>
              <span>48-HR DOMESTIC DISPATCH</span>
              <span>LOADOUT READY</span>
            </div>
          </div>

          {/* PRODUCT DETAILS (fabric, fit, weight, care) */}
          <div className="pt-6 border-t border-zinc-850">
            <div className="flex border-b border-zinc-800 mb-4">
              <button
                type="button"
                onClick={() => setActiveTab('specs')}
                className={`pb-2 text-xs font-mono tracking-wider uppercase border-b-2 mr-6 transition-colors ${
                  activeTab === 'specs'
                    ? 'border-white text-white font-semibold'
                    : 'border-transparent text-zinc-500 hover:text-zinc-300'
                }`}
              >
                PRODUCT DETAILS
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('care')}
                className={`pb-2 text-xs font-mono tracking-wider uppercase border-b-2 transition-colors ${
                  activeTab === 'care'
                    ? 'border-white text-white font-semibold'
                    : 'border-transparent text-zinc-500 hover:text-zinc-300'
                }`}
              >
                CARE INSTRUCTIONS
              </button>
            </div>

            {activeTab === 'specs' ? (
              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-500 uppercase">FABRIC</span>
                  <span className="text-zinc-200 text-right max-w-[65%]">{product.details.fabric}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-500 uppercase">FIT</span>
                  <span className="text-zinc-200 text-right max-w-[65%]">{product.details.fit}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-500 uppercase">WEIGHT</span>
                  <span className="text-zinc-200 text-right">{product.details.weight}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-zinc-500 uppercase">HARDWARE</span>
                  <span className="text-zinc-200 text-right">Bar-Tack Reinforced Stitching</span>
                </div>
              </div>
            ) : (
              <div className="text-xs text-zinc-300 leading-relaxed font-mono bg-zinc-950 p-4 border border-zinc-850">
                <p className="mb-2 text-zinc-400 uppercase tracking-wider text-[10px]">GARMENT PRESERVATION PROTOCOL:</p>
                <p>{product.details.care}</p>
                <p className="mt-2 text-zinc-500">Treat heavyweight fleece and twill with care to preserve fabric density and structured drape.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* YOU MAY ALSO LIKE Section */}
      <div className="mt-16 pt-10 border-t border-zinc-850">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <span className="font-mono text-xs text-zinc-500 tracking-widest uppercase block mb-1">
              COMPATIBLE LOADOUT PIECES
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
              YOU MAY ALSO LIKE
            </h2>
          </div>
          <button
            onClick={onBackToShop}
            className="text-xs font-mono text-zinc-400 hover:text-white transition-colors uppercase tracking-wider underline underline-offset-4"
          >
            EXPLORE COMPLETE DROP 01
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {relatedProducts.map((rel) => (
            <ProductCard
              key={rel.id}
              product={rel}
              onSelect={onSelectProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
