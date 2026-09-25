import type { APIRoute } from 'astro';
import { getLiveCities, getLiveGuides } from '../lib/data.js';

const SITE = 'https://gtahelicalpiles.ca';

export const GET: APIRoute = () => {
  const paths = ['/', ...getLiveCities().map((c) => `/locations/${c.slug}/`), ...getLiveGuides().map((g) => `/guides/${g.slug}/`), '/privacy/', '/terms/'];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
    .map((p) => `  <url><loc>${SITE}${p}</loc></url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
