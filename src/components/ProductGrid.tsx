import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onQuickAdd?: (product: Product) => void;
  columns?: 'auto' | 3 | 4;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onSelectProduct,
  onQuickAdd,
  columns = 'auto'
}) => {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center border border-dashed border-zinc-800 rounded p-8 bg-zinc-900/20">
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">INVENTORY EMPTY</p>
        <p className="text-zinc-400 text-sm">No items found matching the selected parameters.</p>
      </div>
    );
  }

  const gridClass = columns === 3
    ? "grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6"
    : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6";

  return (
    <div className={gridClass}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={onSelectProduct}
          onQuickAdd={onQuickAdd}
        />
      ))}
    </div>
  );
};
