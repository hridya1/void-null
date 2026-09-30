export type Category = 'all' | 'hoodies' | 't-shirts' | 'cargos' | 'jackets' | 'sweatshirts';

export type ViewMode = 'home' | 'shop' | 'product' | 'cart';

export type ProductSize = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface ProductDetails {
  fabric: string;
  fit: string;
  weight: string;
  care: string;
}

export interface ProductImages {
  primary: string;
  secondary: string;
  lifestyle: string;
  detail?: string;
  // Backwards compatibility aliases
  main?: string;
  hover?: string;
}

export interface Product {
  id: string;
  itemCode: string; // e.g. "ITEM 001"
  name: string;
  category: 'hoodies' | 't-shirts' | 'cargos' | 'jackets' | 'sweatshirts';
  price: number;
  priceFormatted: string;
  edition: string; // e.g. "EDITION 01/150"
  stockStatus: 'IN STOCK' | 'LOW STOCK' | 'EDITION 01/150';
  isFeaturedDrop?: boolean;
  description: string;
  shortSpec: string;
  colorway: string;
  image?: string; // Direct dedicated image file path
  images: ProductImages;
  details: ProductDetails;
  availableSizes: ProductSize[];
}

export interface CartItem {
  product: Product;
  size: ProductSize;
  quantity: number;
}

export interface FilterState {
  category: Category;
  searchQuery: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'name';
}
