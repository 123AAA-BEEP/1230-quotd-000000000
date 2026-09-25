import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Static-first. Every page is prerendered; the only server route is the lead
// intake endpoint (src/pages/api/lead.ts), which opts out with prerender=false.
export default defineConfig({
  site: 'https://gtaicf.ca',
  trailingSlash: 'always',
  output: 'static',
  adapter: vercel(),
  build: { format: 'directory' },
});
