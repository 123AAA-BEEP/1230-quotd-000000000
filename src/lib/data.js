// Build-time data access. All page data comes from committed JSON under /data —
// the static site never reads the database (RLS stays sealed).

import citiesFile from '../../data/cities/nacities100k.json';
import pagesFile from '../../data/pages.json';

const nicheFiles = import.meta.glob('../../data/niches/*.json', { eager: true });
const moduleFiles = import.meta.glob('../../data/modules/**/*.json', { eager: true });

export function getNiche(id) {
  for (const [path, mod] of Object.entries(nicheFiles)) {
    const data = mod.default ?? mod;
    if (data.id === id) return data;
  }
  return null;
}

export function getCity(slug) {
  return citiesFile.cities.find((c) => c.slug === slug) ?? null;
}

export function getPages() {
  return pagesFile.pages;
}

// Modules keyed by their declared `module` field, filtered to this city and
// (where the module is niche-scoped) this niche.
export function getModules(citySlug, nicheId) {
  const out = {};
  for (const [path, mod] of Object.entries(moduleFiles)) {
    const data = mod.default ?? mod;
    if (data.city !== citySlug) continue;
    if (data.niche && data.niche !== nicheId) continue;
    out[data.module] = data;
  }
  return out;
}

// Flatten module sources for the provenance footer, deduped by URL.
export function collectSources(modules) {
  const seen = new Set();
  const sources = [];
  for (const m of Object.values(modules)) {
    for (const s of m.sources ?? []) {
      const url = s.url ?? '';
      if (seen.has(url)) continue;
      seen.add(url);
      sources.push({ name: s.publisher ?? s.name ?? url, url, retrieved_at: s.retrieved_at ?? m.retrieved_at });
    }
  }
  return sources;
}
