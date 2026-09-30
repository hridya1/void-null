import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onChange,
  min = 1,
  max = 10
}) => {
  const handleDecrement = () => {
    if (quantity > min) {
      onChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < max) {
      onChange(quantity + 1);
    }
  };

  return (
    <div className="space-y-2">
      <span className="text-xs font-mono text-zinc-400 tracking-wider uppercase block">
        QUANTITY
      </span>
      <div className="flex items-center w-36 h-11 border border-zinc-800 bg-zinc-900/80">
        <button
          type="button"
          onClick={handleDecrement}
          disabled={quantity <= min}
          aria-label="Decrease quantity"
          className="w-10 h-full flex items-center justify-center font-mono text-sm text-zinc-400 hover:text-white disabled:opacity-30 disabled:hover:text-zinc-400 transition-colors"
        >
          −
        </button>
        <span className="flex-1 text-center font-mono text-sm font-semibold text-white tabular-nums select-none">
          {quantity.toString().padStart(2, '0')}
        </span>
        <button
          type="button"
          onClick={handleIncrement}
          disabled={quantity >= max}
          aria-label="Increase quantity"
          className="w-10 h-full flex items-center justify-center font-mono text-sm text-zinc-400 hover:text-white disabled:opacity-30 disabled:hover:text-zinc-400 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
};
