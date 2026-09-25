// Build-time data access. All page content comes from committed JSON under
// /data. The static site never reads a database.

import business from '../../data/business.json';
import prices from '../../data/prices.json';

const cityFiles = import.meta.glob('../../data/cities/*.json', { eager: true });

export function getBusiness() {
  return business;
}

export function getPrices() {
  return prices;
}

export function isPlaceholderBusiness() {
  return typeof business.status === 'string' && business.status.startsWith('PLACEHOLDER');
}

export function getCity(slug) {
  for (const mod of Object.values(cityFiles)) {
    const data = mod.default ?? mod;
    if (data.slug === slug) return data;
  }
  return null;
}

export function getLiveCities() {
  return business.service_area.filter((c) => c.live && getCity(c.slug));
}

// Guides registry. A guide is listed here only once its page exists.
export const GUIDES = [
  {
    slug: 'helical-pile-cost-per-pile-ontario',
    title: 'Helical pile cost per pile in Ontario',
    nav: 'Cost per pile',
    description: 'What a helical pile costs installed in the western GTA, what moves the price, and a calculator that turns a deck size into a pile count and a budget range.',
    live: true,
  },
  {
    slug: 'helical-piles-vs-sonotubes-frost-depth',
    title: 'Helical piles vs concrete sonotubes',
    nav: 'Piles vs sonotubes',
    description: 'Frost depth, adfreeze, cure time and permits: the honest comparison for Ontario decks and additions.',
    live: false,
  },
  {
    slug: 'soil-conditions-queenston-shale-helical-piles',
    title: 'Soil conditions and helical piles: shale, clay and till',
    nav: 'Soil conditions',
    description: 'How Halton till, Peel clay and Queenston shale change pile depth, torque and price.',
    live: false,
  },
  {
    slug: 'underpinning-settling-foundations-screw-piles',
    title: 'Underpinning settling foundations with screw piles',
    nav: 'Underpinning',
    description: 'When a settling footing can be stabilised with helical brackets, and what it costs.',
    live: false,
  },
];

export function getLiveGuides() {
  return GUIDES.filter((g) => g.live);
}

// Flatten module sources for a provenance footer, deduped by URL.
export function collectSources(...groups) {
  const seen = new Set();
  const out = [];
  for (const g of groups) {
    for (const s of g ?? []) {
      const url = s.url ?? '';
      if (!url || seen.has(url)) continue;
      seen.add(url);
      out.push(s);
    }
  }
  return out;
}

export function formatCad(n) {
  return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(n);
}

// JSON for inline <script> bodies: a "</script>" inside a string must not end
// the tag.
export function safeJson(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
