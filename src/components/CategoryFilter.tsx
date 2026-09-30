import React from 'react';
import { Category } from '../types';
import { CATEGORIES } from '../data/products';

interface CategoryFilterProps {
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
  counts?: Partial<Record<Category, number>>;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onSelectCategory,
  counts
}) => {
  return (
    <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none py-1 border-b border-zinc-800/80 mb-8">
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.id;
        const count = counts ? counts[cat.id] : undefined;

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-4 py-2 text-xs md:text-sm font-mono tracking-wider transition-all duration-150 uppercase whitespace-nowrap flex items-center gap-2 border ${
              isActive
                ? 'bg-zinc-100 text-zinc-950 font-semibold border-white shadow-[0_0_15px_rgba(255,255,255,0.15)]'
                : 'bg-zinc-900/60 text-zinc-400 border-zinc-800/80 hover:text-zinc-100 hover:border-zinc-700 hover:bg-zinc-850'
            }`}
          >
            <span>{cat.label}</span>
            {count !== undefined && (
              <span className={`text-[10px] tabular-nums px-1.5 py-0.2 rounded-sm ${isActive ? 'bg-zinc-950/20 text-zinc-900' : 'bg-zinc-800 text-zinc-400'}`}>
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
