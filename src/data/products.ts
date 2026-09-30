import { Product, Category } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'void-heavy-hoodie',
    itemCode: 'ITEM 001',
    name: 'VOID HEAVY HOODIE',
    category: 'hoodies',
    price: 2499,
    priceFormatted: '₹2,499',
    edition: 'EDITION 01/150',
    stockStatus: 'IN STOCK',
    isFeaturedDrop: true,
    colorway: 'MATTE OBSIDIAN BLACK',
    shortSpec: '480 GSM Loopback French Terry',
    description: 'The flagship VOID heavy pullover hoodie. Engineered with 480 GSM dense French Terry cotton, radical dropped shoulders, seamless double-layer storm hood, and rigid ribbed cuffs that hold structural drape in motion.',
    details: {
      fabric: '480 GSM 100% Combed Heavy French Terry Cotton (Pre-shrunk)',
      fit: 'Oversized boxy architectural silhouette with dropped shoulder seams',
      weight: '1.20 kg garment density',
      care: 'Machine wash cold inside-out. Hang dry in shade. Do not iron directly on seams.'
    },
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: '/item-001-void-heavy-hoodie.png',
    images: {
      primary: '/item-001-void-heavy-hoodie.png',
      secondary: '/item-001-void-heavy-hoodie.png',
      lifestyle: '/item-001-void-heavy-hoodie.png',
      detail: '/item-001-void-heavy-hoodie.png',
      main: '/item-001-void-heavy-hoodie.png',
      hover: '/item-001-void-heavy-hoodie.png'
    }
  },
  {
    id: 'system-oversized-tee',
    itemCode: 'ITEM 002',
    name: 'SYSTEM OVERSIZED TEE',
    category: 't-shirts',
    price: 1499,
    priceFormatted: '₹1,499',
    edition: 'EDITION 01/150',
    stockStatus: 'LOW STOCK',
    isFeaturedDrop: true,
    colorway: 'WASHED CARBON BLACK',
    shortSpec: '280 GSM Compact Jersey',
    description: 'Engineered heavyweight boxy streetwear tee. Crafted from 280 GSM high-gauge combed cotton with a reinforced 32mm collar band designed to maintain rigidity across intensive daily wear cycles.',
    details: {
      fabric: '280 GSM 100% Ring-Spun Compact Cotton (Enzyme Washed)',
      fit: 'Extended wide chest cut, relaxed elbow-length drop sleeves',
      weight: '380g high-density jersey',
      care: 'Cold wash. Dry flat. Iron low on reverse.'
    },
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: '/item-002-system-oversized-tee.png',
    images: {
      primary: '/item-002-system-oversized-tee.png',
      secondary: '/item-002-system-oversized-tee.png',
      lifestyle: '/item-002-system-oversized-tee.png',
      detail: '/item-002-system-oversized-tee.png',
      main: '/item-002-system-oversized-tee.png',
      hover: '/item-002-system-oversized-tee.png'
    }
  },
  {
    id: 'utility-cargo-01',
    itemCode: 'ITEM 003',
    name: 'UTILITY CARGO 01',
    category: 'cargos',
    price: 2799,
    priceFormatted: '₹2,799',
    edition: 'EDITION 01/150',
    stockStatus: 'IN STOCK',
    isFeaturedDrop: true,
    colorway: 'GRAPHITE CHARCOAL',
    shortSpec: '340 GSM Heavy Cotton Twill',
    description: 'Relaxed tactical cargo trouser engineered with 8 articulated pockets, dual nylon strap webbing adjusters, double-reinforced knee paneling, and adjustable ankle cinch toggles for versatile silhouette control.',
    details: {
      fabric: '340 GSM 100% High-Density Cotton Twill with DWR water-resistant coating',
      fit: 'Relaxed wide straight leg with custom modular cuff taper',
      weight: '820g tactical garment construction',
      care: 'Machine wash delicate at 30°C. Do not tumble dry. Cinch cords loose before washing.'
    },
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: '/item-003-utility-cargo-01.png',
    images: {
      primary: '/item-003-utility-cargo-01.png',
      secondary: '/item-003-utility-cargo-01.png',
      lifestyle: '/item-003-utility-cargo-01.png',
      detail: '/item-003-utility-cargo-01.png',
      main: '/item-003-utility-cargo-01.png',
      hover: '/item-003-utility-cargo-01.png'
    }
  },
  {
    id: 'night-shift-hoodie',
    itemCode: 'ITEM 004',
    name: 'NIGHT SHIFT HOODIE',
    category: 'hoodies',
    price: 2599,
    priceFormatted: '₹2,599',
    edition: 'EDITION 01/150',
    stockStatus: 'EDITION 01/150',
    isFeaturedDrop: true,
    colorway: 'DEEP OBSIDIAN',
    shortSpec: '500 GSM Brushed Back Fleece',
    description: 'Ultra-heavy architectural hoodie featuring high-density silicone typographic branding on the spine, ergonomic kangaroo utility pocket with concealed audio eyelet, and an oversized double-layered hood.',
    details: {
      fabric: '500 GSM 85% Organic Cotton, 15% Recycled Poly Core for zero drape sag',
      fit: 'Drop shoulder boxy silhouette with relaxed torso volume',
      weight: '1.28 kg fleece armor',
      care: 'Hand wash cold or gentle machine wash inside-out. Dry flat on mesh rack.'
    },
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: '/item-004-night-shift-hoodie.png',
    images: {
      primary: '/item-004-night-shift-hoodie.png',
      secondary: '/item-004-night-shift-hoodie.png',
      lifestyle: '/item-004-night-shift-hoodie.png',
      detail: '/item-004-night-shift-hoodie.png',
      main: '/item-004-night-shift-hoodie.png',
      hover: '/item-004-night-shift-hoodie.png'
    }
  },
  {
    id: 'core-oversized-tee',
    itemCode: 'ITEM 005',
    name: 'CORE OVERSIZED TEE',
    category: 't-shirts',
    price: 1399,
    priceFormatted: '₹1,399',
    edition: 'EDITION 01/150',
    stockStatus: 'IN STOCK',
    isFeaturedDrop: true,
    colorway: 'PHANTOM SMOKE GREY',
    shortSpec: '260 GSM Single Jersey',
    description: 'Foundational minimalist essential. Drop shoulder pattern block with blind-stitched hem and tonal VOID embroidered code on left wrist hemline.',
    details: {
      fabric: '260 GSM combed cotton jersey, silicon softened finish',
      fit: 'Clean drop-shoulder drape with elbow break sleeves',
      weight: '340g daily driver',
      care: 'Machine wash cold with like darks. Hang dry.'
    },
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: '/item-005-core-oversized-tee.png',
    images: {
      primary: '/item-005-core-oversized-tee.png',
      secondary: '/item-005-core-oversized-tee.png',
      lifestyle: '/item-005-core-oversized-tee.png',
      detail: '/item-005-core-oversized-tee.png',
      main: '/item-005-core-oversized-tee.png',
      hover: '/item-005-core-oversized-tee.png'
    }
  },
  {
    id: 'tactical-cargo',
    itemCode: 'ITEM 006',
    name: 'TACTICAL CARGO',
    category: 'cargos',
    price: 2899,
    priceFormatted: '₹2,899',
    edition: 'EDITION 01/150',
    stockStatus: 'LOW STOCK',
    isFeaturedDrop: true,
    colorway: 'PITCH MATTE BLACK',
    shortSpec: 'Ripstop Cordura Blend',
    description: 'Hardened combat cargo equipped with matte black YKK dual-direction zips, reinforced seat and crotch gusset, and internal key retention D-ring.',
    details: {
      fabric: '70% Cotton Ripstop, 30% Cordura Nylon reinforcement',
      fit: 'Loose straight leg with structured knee articulation darts',
      weight: '890g technical field pant',
      care: 'Cold wash. Close all zippers before wash. Hang dry.'
    },
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: '/item-006-tactical-cargo.png',
    images: {
      primary: '/item-006-tactical-cargo.png',
      secondary: '/item-006-tactical-cargo.png',
      lifestyle: '/item-006-tactical-cargo.png',
      detail: '/item-006-tactical-cargo.png',
      main: '/item-006-tactical-cargo.png',
      hover: '/item-006-tactical-cargo.png'
    }
  },
  {
    id: 'monolith-zip-hoodie',
    itemCode: 'ITEM 007',
    name: 'MONOLITH ZIP HOODIE',
    category: 'hoodies',
    price: 2699,
    priceFormatted: '₹2,699',
    edition: 'EDITION 01/150',
    stockStatus: 'IN STOCK',
    isFeaturedDrop: false,
    colorway: 'ASH GRAPHITE',
    shortSpec: '460 GSM Heavy French Terry',
    description: 'Full-zip outerwear layer with custom matte gunmetal dual zipper pulls, split kangaroo hand pockets, and ergonomic elbow articulation darts.',
    details: {
      fabric: '460 GSM heavy French terry, custom reactive dye wash',
      fit: 'Boxy streetwear cut designed for mid-layer or stand-alone outerwear',
      weight: '1.15 kg garment weight',
      care: 'Zip closed prior to washing. Cold machine wash inside-out.'
    },
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: '/item-007-monolith-zip-hoodie.png',
    images: {
      primary: '/item-007-monolith-zip-hoodie.png',
      secondary: '/item-007-monolith-zip-hoodie.png',
      lifestyle: '/item-007-monolith-zip-hoodie.png',
      detail: '/item-007-monolith-zip-hoodie.png',
      main: '/item-007-monolith-zip-hoodie.png',
      hover: '/item-007-monolith-zip-hoodie.png'
    }
  },
  {
    id: 'signal-graphic-tee',
    itemCode: 'ITEM 008',
    name: 'SIGNAL GRAPHIC TEE',
    category: 't-shirts',
    price: 1599,
    priceFormatted: '₹1,599',
    edition: 'EDITION 01/150',
    stockStatus: 'EDITION 01/150',
    isFeaturedDrop: false,
    colorway: 'OFF-BLACK CYBER GREY',
    shortSpec: '280 GSM Compact Jersey',
    description: 'Features high-density discharge screenprint typography with cybernetic coordinate graphics across front chest and lower lumbar zone.',
    details: {
      fabric: '280 GSM 100% compact combed ring-spun cotton',
      fit: 'Modern oversized box cut with wide shoulder drape',
      weight: '390g heavy tee',
      care: 'Turn inside-out. Machine wash cold. Do not iron directly on print.'
    },
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: '/item-008-signal-graphic-tee.png',
    images: {
      primary: '/item-008-signal-graphic-tee.png',
      secondary: '/item-008-signal-graphic-tee.png',
      lifestyle: '/item-008-signal-graphic-tee.png',
      detail: '/item-008-signal-graphic-tee.png',
      main: '/item-008-signal-graphic-tee.png',
      hover: '/item-008-signal-graphic-tee.png'
    }
  },
  {
    id: 'parachute-relaxed-cargo',
    itemCode: 'ITEM 009',
    name: 'PARACHUTE RELAXED CARGO',
    category: 'cargos',
    price: 2999,
    priceFormatted: '₹2,999',
    edition: 'EDITION 01/150',
    stockStatus: 'IN STOCK',
    isFeaturedDrop: false,
    colorway: 'SHADOW DARK OLIVE',
    shortSpec: 'Ultra-Lightweight Tech Poplin',
    description: 'Voluminous parachute pant silhouette with elasticated bungee waist, knee expansion pleats, and deep angled bellow cargo chambers.',
    details: {
      fabric: 'High-density tech poplin with subtle grid weave (water-repellent)',
      fit: 'Voluminous parachute drape with adjustable ankle bungee cinches',
      weight: '560g technical lightweight build',
      care: 'Gentle cycle 30°C. Do not bleach. Air dry only.'
    },
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: '/item-009-parachute-relaxed-cargo.png',
    images: {
      primary: '/item-009-parachute-relaxed-cargo.png',
      secondary: '/item-009-parachute-relaxed-cargo.png',
      lifestyle: '/item-009-parachute-relaxed-cargo.png',
      detail: '/item-009-parachute-relaxed-cargo.png',
      main: '/item-009-parachute-relaxed-cargo.png',
      hover: '/item-009-parachute-relaxed-cargo.png'
    }
  }
];

export const FEATURED_HERO_PRODUCT = PRODUCTS[0];

export interface CategoryOption {
  id: Category;
  label: string;
}

export const CATEGORIES: CategoryOption[] = [
  { id: 'all', label: 'ALL GEAR' },
  { id: 'hoodies', label: 'HOODIES' },
  { id: 't-shirts', label: 'T-SHIRTS' },
  { id: 'cargos', label: 'CARGOS' }
];

export const BRAND_INFO = {
  name: 'VOID//DROP',
  dropNumber: 'DROP 01',
  tagline: 'TACTICAL SILHOUETTES FOR METROPOLITAN TRANSIT',
  manifesto: 'VOID//DROP merges heavyweight industrial textiles with kinetic, gaming-inspired modular loadout ergonomics. Every piece in Drop 01 is engineered in limited batches of 150 serialized units.',
  foundedYear: '2025',
  fabricStandard: '480-500 GSM Heavyweight French Terry Cotton'
};
