import type { APIRoute } from 'astro';
import { getLiveCities, getLiveGuides, getPrices, getCity, isPlaceholderBusiness } from '../lib/data.js';

// Empty while the business is a placeholder: every page is noindex then, and
// a sitemap that lists noindex pages is a contradictory signal.
export const GET: APIRoute = () => {
  const site = (import.meta.env.SITE || 'https://gtaicf.ca').replace(/\/$/, '');
  const prices = getPrices();
  const entries: { path: string; lastmod?: string }[] = isPlaceholderBusiness()
    ? []
    : [
        { path: '/', lastmod: prices.last_reviewed },
        ...getLiveCities().map((c) => ({ path: `/locations/${c.slug}/`, lastmod: getCity(c.slug)?.retrieved_at })),
        ...getLiveGuides().map((g) => ({ path: `/guides/${g.slug}/`, lastmod: prices.last_reviewed })),
        { path: '/privacy/' },
        { path: '/terms/' },
      ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries
    .map((e) => `  <url><loc>${site}${e.path}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ''}</url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
