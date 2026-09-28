// Full-page screenshots of the built site at phone and desktop widths.
//   node scripts/screenshot.mjs [outDir]
// Serves the build output on a local loopback port, shoots every page in the
// sitemap plus /thanks/, writes PNGs.

import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync, mkdirSync } from 'node:fs';
import { join, extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const OUT = ['.vercel/output/static', 'dist/client', 'dist'].map((p) => join(ROOT, p)).find((p) => existsSync(p));
if (!OUT) throw new Error('No build output. Run `npm run build` first.');
const outDir = process.argv[2] || join(ROOT, 'shots');
mkdirSync(outDir, { recursive: true });

const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.png': 'image/png', '.jpg': 'image/jpeg', '.txt': 'text/plain', '.xml': 'application/xml', '.json': 'application/json' };

const server = createServer((req, res) => {
  const p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let file = resolve(OUT, '.' + p);
  if (!(file === OUT || file.startsWith(OUT + sep))) { res.writeHead(404); res.end('not found'); return; }
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
  if (!existsSync(file)) file = join(OUT, '404.html');
  if (!existsSync(file)) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, { 'Content-Type': MIME[extname(file)] || 'application/octet-stream' });
  res.end(readFileSync(file));
});

await new Promise((r) => server.listen(0, '127.0.0.1', r));
const port = server.address().port;
const base = `http://127.0.0.1:${port}`;

// Every built page except legal pages and the 404.
import { readdirSync } from 'node:fs';
const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : p.endsWith('index.html') ? [p] : []; });
const PAGES = walk(OUT).map((f) => '/' + f.slice(OUT.length + 1).replace(/index\.html$/, '')).filter((p) => !/^\/(privacy|terms)\//.test(p)).sort();
const VIEWPORTS = [
  { name: 'phone', width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  { name: 'desktop', width: 1440, height: 900, deviceScaleFactor: 1 },
];

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
try {
  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: vp.deviceScaleFactor, isMobile: !!vp.isMobile, hasTouch: !!vp.hasTouch });
    const page = await ctx.newPage();
    for (const path of PAGES) {
      await page.goto(base + path, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      const name = (path === '/' ? 'home' : path.replace(/^\/|\/$/g, '').replace(/\//g, '-')) + `-${vp.name}.png`;
      await page.screenshot({ path: join(outDir, name), fullPage: true });
      console.log('wrote', name);
    }
    await ctx.close();
  }
} finally {
  await browser.close();
  server.close();
}
