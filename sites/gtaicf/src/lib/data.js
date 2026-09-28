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

// Service pages (commercial-intent landing pages).
export const SERVICES = [
  { slug: 'foundations-and-basements', title: 'ICF foundations and basements', nav: 'Foundations' },
  { slug: 'full-height-walls', title: 'Full-height ICF walls and additions', nav: 'Full-height walls' },
];

// Guides registry. The comparison guide is a hand-built page (it carries the
// price table and the estimator); the rest render from data/guides/*.json.
export const GUIDES = [
  {
    slug: 'icf-vs-poured-concrete-ontario',
    title: 'ICF vs poured concrete foundations in Ontario',
    nav: 'ICF vs poured',
    description: 'What an ICF wall costs per square foot against a poured and insulated wall, what moves the price, and a calculator that turns a perimeter and height into a range.',
    live: true,
  },
  {
    slug: 'ontario-building-code-icf-requirements',
    title: 'What the Ontario Building Code asks of an ICF wall',
    nav: 'Building Code',
    description: 'Part 9 flat ICF wall provisions, when Part 4 engineering takes over, and what the permit package and inspections look like.',
    live: false,
  },
  {
    slug: 'r-value-thermal-savings-icf-basements',
    title: 'R-value, SB-12 and what an ICF basement actually saves',
    nav: 'R-value and SB-12',
    description: 'Nominal versus effective R-value, the SB-12 prescriptive requirements, thermal mass, sound and moisture, without the marketing numbers.',
    live: false,
  },
  {
    slug: 'winter-concrete-pouring-icf-ontario',
    title: 'Pouring ICF walls in an Ontario winter',
    nav: 'Winter pours',
    description: 'What CSA A23.1 asks for in cold weather, what the EPS form does for the cure, and what still has to be heated, covered or waited for.',
    live: false,
  },
];

const guideFiles = import.meta.glob('../../data/guides/*.json', { eager: true });

export function getGuideData(slug) {
  for (const mod of Object.values(guideFiles)) {
    const data = mod.default ?? mod;
    if (data.slug === slug) return data;
  }
  return null;
}

export function getGuideSlugs() {
  return Object.values(guideFiles).map((m) => (m.default ?? m).slug).filter(Boolean);
}

export function getLiveGuides() {
  const jsonSlugs = new Set(getGuideSlugs());
  return GUIDES.filter((g) => g.live || jsonSlugs.has(g.slug));
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

export function formatCadPerSqft(n) {
  return `${new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 2, minimumFractionDigits: 0 }).format(n)}`;
}

// JSON for inline <script> bodies: a "</script>" inside a string must not end
// the tag.
export function safeJson(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
