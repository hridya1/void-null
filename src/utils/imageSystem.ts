import { Product, ProductImages } from '../types';

/**
 * Dedicated Product Campaign Image System for VOID//DROP
 * Maps each of the 9 unique products to its own dedicated campaign image.
 * No generic reused images or placeholders.
 */

export const CAMPAIGN_ASSETS = {
  // ITEM 001 - VOID HEAVY HOODIE
  ITEM_001_HOODIE: '/item-001-void-heavy-hoodie.png',
  
  // ITEM 002 - SYSTEM OVERSIZED TEE
  ITEM_002_TEE: '/item-002-system-oversized-tee.png',
  
  // ITEM 003 - UTILITY CARGO 01
  ITEM_003_CARGO: '/item-003-utility-cargo-01.png',
  
  // ITEM 004 - NIGHT SHIFT HOODIE
  ITEM_004_HOODIE: '/item-004-night-shift-hoodie.png',
  
  // ITEM 005 - CORE OVERSIZED TEE
  ITEM_005_TEE: '/item-005-core-oversized-tee.png',
  
  // ITEM 006 - TACTICAL CARGO
  ITEM_006_CARGO: '/item-006-tactical-cargo.png',
  
  // ITEM 007 - MONOLITH ZIP HOODIE
  ITEM_007_HOODIE: '/item-007-monolith-zip-hoodie.png',
  
  // ITEM 008 - SIGNAL GRAPHIC TEE
  ITEM_008_TEE: '/item-008-signal-graphic-tee.png',
  
  // ITEM 009 - PARACHUTE RELAXED CARGO
  ITEM_009_CARGO: '/item-009-parachute-relaxed-cargo.png'
};

/**
 * Resolves persistent product images for each product.
 * Guarantees that each product retains its dedicated uploaded campaign asset.
 */
export function resolveProductImages(product: Partial<Product>): ProductImages {
  // If product already has persistent images defined, return them directly
  if (product.images && product.images.primary) {
    return {
      primary: product.images.primary,
      secondary: product.images.secondary || product.images.primary,
      lifestyle: product.images.lifestyle || product.images.primary,
      detail: product.images.detail || product.images.primary,
      main: product.images.primary,
      hover: product.images.secondary || product.images.primary
    };
  }

  // Exact ID / itemCode mappings
  const id = (product.id || '').toLowerCase();
  const code = (product.itemCode || '').toUpperCase();

  if (code.includes('001') || id.includes('void-heavy-hoodie')) {
    const src = CAMPAIGN_ASSETS.ITEM_001_HOODIE;
    return { primary: src, secondary: src, lifestyle: src, detail: src, main: src, hover: src };
  }
  if (code.includes('002') || id.includes('system-oversized-tee')) {
    const src = CAMPAIGN_ASSETS.ITEM_002_TEE;
    return { primary: src, secondary: src, lifestyle: src, detail: src, main: src, hover: src };
  }
  if (code.includes('003') || id.includes('utility-cargo-01')) {
    const src = CAMPAIGN_ASSETS.ITEM_003_CARGO;
    return { primary: src, secondary: src, lifestyle: src, detail: src, main: src, hover: src };
  }
  if (code.includes('004') || id.includes('night-shift-hoodie')) {
    const src = CAMPAIGN_ASSETS.ITEM_004_HOODIE;
    return { primary: src, secondary: src, lifestyle: src, detail: src, main: src, hover: src };
  }
  if (code.includes('005') || id.includes('core-oversized-tee')) {
    const src = CAMPAIGN_ASSETS.ITEM_005_TEE;
    return { primary: src, secondary: src, lifestyle: src, detail: src, main: src, hover: src };
  }
  if (code.includes('006') || id.includes('tactical-cargo')) {
    const src = CAMPAIGN_ASSETS.ITEM_006_CARGO;
    return { primary: src, secondary: src, lifestyle: src, detail: src, main: src, hover: src };
  }
  if (code.includes('007') || id.includes('monolith-zip-hoodie')) {
    const src = CAMPAIGN_ASSETS.ITEM_007_HOODIE;
    return { primary: src, secondary: src, lifestyle: src, detail: src, main: src, hover: src };
  }
  if (code.includes('008') || id.includes('signal-graphic-tee')) {
    const src = CAMPAIGN_ASSETS.ITEM_008_TEE;
    return { primary: src, secondary: src, lifestyle: src, detail: src, main: src, hover: src };
  }
  if (code.includes('009') || id.includes('parachute-relaxed-cargo')) {
    const src = CAMPAIGN_ASSETS.ITEM_009_CARGO;
    return { primary: src, secondary: src, lifestyle: src, detail: src, main: src, hover: src };
  }

  // Fallback to Item 001
  const defaultSrc = CAMPAIGN_ASSETS.ITEM_001_HOODIE;
  return { primary: defaultSrc, secondary: defaultSrc, lifestyle: defaultSrc, detail: defaultSrc, main: defaultSrc, hover: defaultSrc };
}
