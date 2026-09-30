import React, { useState } from 'react';
import { CartItem } from '../types';
import { ProductImage } from './ProductImage';
import { resolveProductImages } from '../utils/imageSystem';

interface CartProps {
  items: CartItem[];
  isOpen?: boolean;
  isDrawer?: boolean;
  onClose?: () => void;
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onContinueShopping: () => void;
}

export const Cart: React.FC<CartProps> = ({
  items,
  isOpen = true,
  isDrawer = false,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onContinueShopping
}) => {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const formattedSubtotal = `₹${subtotal.toLocaleString('en-IN')}`;
  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const CartContent = (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
        <div>
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block">
            INVENTORY LOADOUT
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
            YOUR CART ({totalItemCount})
          </h2>
        </div>
        {isDrawer && onClose && (
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="p-2 text-zinc-400 hover:text-white font-mono text-sm border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60"
          >
            ✕
          </button>
        )}
      </div>

      {/* Empty State */}
      {items.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center py-16 text-center px-4">
          <div className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-600 mb-4 bg-zinc-900/40">
            <span className="font-mono text-xl">∅</span>
          </div>
          <p className="font-mono text-xs tracking-widest text-zinc-400 uppercase mb-2">
            INVENTORY EMPTY
          </p>
          <p className="text-zinc-500 text-sm max-w-sm mb-6">
            Your loadout contains 0 items. Explore DROP 01 to equip heavy cotton hoodies, cargos, or boxy tees.
          </p>
          <button
            onClick={() => {
              if (onClose) onClose();
              onContinueShopping();
            }}
            className="px-6 py-3 bg-zinc-100 text-zinc-950 font-display text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
          >
            EXPLORE DROP 01
          </button>
        </div>
      ) : (
        <>
          {/* Item List */}
          <div className="flex-1 overflow-y-auto divide-y divide-zinc-800/80 py-4 pr-1">
            {items.map((item, index) => {
              const itemTotal = `₹${(item.product.price * item.quantity).toLocaleString('en-IN')}`;
              return (
                <div key={`${item.product.id}-${item.size}-${index}`} className="py-4 flex gap-4 items-center">
                  {/* Thumbnail */}
                  <div className="w-20 h-24 flex-shrink-0 bg-zinc-950 border border-zinc-800 overflow-hidden rounded-sm">
                    <ProductImage
                      src={resolveProductImages(item.product).primary}
                      alt={item.product.name}
                      category={item.product.category}
                      aspectRatio="portrait"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between h-24 py-0.5">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wide text-zinc-100 truncate">
                          {item.product.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(index)}
                          aria-label={`Remove ${item.product.name} from cart`}
                          className="text-zinc-500 hover:text-rose-400 text-xs font-mono transition-colors ml-2"
                        >
                          REMOVE
                        </button>
                      </div>

                      <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 mt-1">
                        <span>SIZE: <strong className="text-white font-semibold">{item.size}</strong></span>
                        <span className="text-zinc-700">|</span>
                        <span>{item.product.priceFormatted}</span>
                      </div>
                    </div>

                    {/* Quantity Stepper & Line Price */}
                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-zinc-850">
                      <div className="flex items-center border border-zinc-800 bg-zinc-950">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="w-7 h-7 flex items-center justify-center font-mono text-xs text-zinc-400 hover:text-white disabled:opacity-30"
                        >
                          −
                        </button>
                        <span className="w-8 text-center font-mono text-xs text-zinc-200 tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          disabled={item.quantity >= 10}
                          className="w-7 h-7 flex items-center justify-center font-mono text-xs text-zinc-400 hover:text-white disabled:opacity-30"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-mono text-xs sm:text-sm font-semibold text-white tabular-nums">
                        {itemTotal}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Subtotal & Checkout */}
          <div className="pt-4 border-t border-zinc-800 space-y-4">
            <div className="space-y-1.5 font-mono text-xs">
              <div className="flex justify-between text-zinc-400">
                <span>SUBTOTAL</span>
                <span className="text-white font-semibold tabular-nums text-sm">{formattedSubtotal}</span>
              </div>
              <div className="flex justify-between text-zinc-500">
                <span>SHIPPING</span>
                <span>CALCULATED AT CHECKOUT (FREE)</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setCheckoutModalOpen(true)}
              className="w-full py-4 px-6 bg-zinc-100 text-zinc-950 font-display text-sm font-bold tracking-widest uppercase hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-[0.99] transition-all duration-150 border border-white"
            >
              PROCEED TO CHECKOUT
            </button>

            <button
              type="button"
              onClick={() => {
                if (onClose) onClose();
                onContinueShopping();
              }}
              className="w-full py-2.5 text-center font-mono text-xs text-zinc-400 hover:text-white uppercase tracking-wider transition-colors"
            >
              CONTINUE BROWSING
            </button>
          </div>
        </>
      )}

      {/* Checkout Prototype Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="w-full max-w-md bg-zinc-900 border border-zinc-700 p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-4">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                LOADOUT CHECKOUT
              </span>
              <button
                onClick={() => setCheckoutModalOpen(false)}
                className="text-zinc-400 hover:text-white font-mono text-sm"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-4 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-zinc-300">
                <span className="font-mono text-lg font-bold">✓</span>
              </div>
              
              <h3 className="font-display text-lg font-bold uppercase text-white tracking-wide">
                VOID//DROP ORDER SIMULATION
              </h3>

              <div className="p-3 bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-400 text-left space-y-1">
                <div className="flex justify-between">
                  <span>ITEMS:</span>
                  <span className="text-zinc-200">{totalItemCount}</span>
                </div>
                <div className="flex justify-between">
                  <span>TOTAL ESTIMATE:</span>
                  <span className="text-zinc-100 font-semibold">{formattedSubtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>DISPATCH:</span>
                  <span className="text-zinc-300">EXPRESS COMPLIMENTARY</span>
                </div>
              </div>

              <p className="text-xs text-zinc-300 font-mono bg-zinc-800/40 p-3 border border-zinc-800">
                "Checkout prototype — payment integration coming soon."
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800 flex justify-end">
              <button
                type="button"
                onClick={() => setCheckoutModalOpen(false)}
                className="w-full py-2.5 bg-zinc-100 text-zinc-950 font-mono text-xs font-semibold uppercase hover:bg-white transition-colors"
              >
                CLOSE CONFIRMATION
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // If slide-over drawer
  if (isDrawer) {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <div
          onClick={onClose}
          className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        />

        {/* Drawer Panel */}
        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <div className="w-screen max-w-md bg-zinc-950 border-l border-zinc-800/80 p-6 shadow-2xl relative flex flex-col">
            {CartContent}
          </div>
        </div>
      </div>
    );
  }

  // If rendered as dedicated page view
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="bg-zinc-950/70 border border-zinc-800/80 p-6 sm:p-8 rounded-sm shadow-xl">
        {CartContent}
      </div>
    </div>
  );
};
