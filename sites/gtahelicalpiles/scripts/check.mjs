// Publish-gate checks. Run after `npm run build`.
//   node scripts/check.mjs
// Exits non-zero on a failure. Warnings print but do not fail.
//
// Gates:
//   1. Banned copy (the AI-slop list) anywhere in rendered HTML.
//   2. Every JSON-LD block parses; FAQPage blocks have questions.
//   3. One h1 per page; title and meta description present and sane.
//   4. Credential words (certified, guaranteed, licensed, insured) only render
//      when business.json carries the backing field.
//   5. City pages: <35% shingle overlap between any two (doorway-page gate).
//   6. Internal links: at least 3 out of every content page.
//   7. No raw font-size declarations in src (tokens only).

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const OUT_CANDIDATES = ['.vercel/output/static', 'dist/client', 'dist'];
const OUT = OUT_CANDIDATES.map((p) => join(ROOT, p)).find((p) => existsSync(p));
if (!OUT) {
  console.error('No build output found. Run `npm run build` first.');
  process.exit(2);
}

const business = JSON.parse(readFileSync(join(ROOT, 'data/business.json'), 'utf8'));

const BANNED = [
  /\belevate\b/i, /\bseamless(ly)?\b/i, /\beffortless(ly)?\b/i, /\bunlock\b/i, /look no further/i, /hidden gem/i,
  /\bnestled\b/i, /\bvibrant\b/i, /transform your (space|home)/i, /trusted by \d/i, /\brocket\b/i,
  /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u, /✨/,
];

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
  });

const files = walk(OUT);
const failures = [];
const warnings = [];

const text = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&#39;/g, "'").replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();

const mainText = (html) => {
  const m = html.match(/<main[\s\S]*?<\/main>/i);
  return text(m ? m[0] : html);
};

const shingles = (s, n = 8) => {
  const w = s.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').split(/\s+/).filter(Boolean);
  const set = new Set();
  for (let i = 0; i + n <= w.length; i++) set.add(w.slice(i, i + n).join(' '));
  return set;
};

const pages = [];
for (const f of files) {
  const rel = '/' + relative(OUT, f).replace(/index\.html$/, '');
  const html = readFileSync(f, 'utf8');
  const body = mainText(html);
  pages.push({ rel, html, body });

  // 1. banned copy (whole page)
  const visible = text(html);
  for (const re of BANNED) {
    const m = visible.match(re);
    if (m) failures.push(`${rel}: banned copy "${m[0]}"`);
  }

  // 2. JSON-LD
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const b of blocks) {
    try {
      const j = JSON.parse(b[1]);
      const type = Array.isArray(j['@type']) ? j['@type'].join(',') : j['@type'];
      if (type === 'FAQPage' && !(Array.isArray(j.mainEntity) && j.mainEntity.length)) failures.push(`${rel}: FAQPage schema has no questions`);
    } catch (e) {
      failures.push(`${rel}: JSON-LD does not parse (${e.message})`);
    }
  }

  // 3. h1 / title / description
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) failures.push(`${rel}: ${h1s} h1 elements`);
  const title = (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '';
  if (!title) failures.push(`${rel}: missing <title>`);
  else if (title.length > 65) warnings.push(`${rel}: title is ${title.length} chars`);
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  if (!desc) failures.push(`${rel}: missing meta description`);
  else if (desc.length < 50 || desc.length > 165) warnings.push(`${rel}: description is ${desc.length} chars`);

  // 4. credential words need backing
  const cred = [
    [/\bcertified\b/i, business.manufacturer_certified, 'manufacturer_certified'],
    [/\bguarantee[ds]?\b/i, business.warranty_text, 'warranty_text'],
    [/\blicen[cs]ed\b/i, business.licence ?? null, 'licence'],
    [/\binsured\b/i, business.insurance, 'insurance'],
  ];
  for (const [re, backing, field] of cred) {
    if (re.test(body) && !backing) failures.push(`${rel}: uses "${body.match(re)[0]}" but business.${field} is empty`);
  }

  // 6. internal links out (content pages only). Body and footer index count;
  //    the header does not.
  if (!/^\/(thanks|privacy|terms|404)/.test(rel)) {
    const noHeader = html.replace(/<header[\s\S]*?<\/header>/i, '');
    const links = new Set([...noHeader.matchAll(/href="(\/[^"#?][^"]*)"/g)].map((x) => x[1].replace(/\/$/, '')).filter((l) => !/^\/(privacy|terms|thanks)$/.test(l) && l !== rel.replace(/\/$/, '')));
    if (links.size < 3) failures.push(`${rel}: only ${links.size} internal links out (${[...links].join(', ')})`);
  }
}

// 5. city-page overlap
const cityPages = pages.filter((p) => p.rel.startsWith('/locations/'));
for (let i = 0; i < cityPages.length; i++) {
  for (let j = i + 1; j < cityPages.length; j++) {
    const a = shingles(cityPages[i].body);
    const b = shingles(cityPages[j].body);
    let inter = 0;
    for (const s of a) if (b.has(s)) inter++;
    const overlap = inter / Math.min(a.size, b.size);
    if (overlap > 0.35) failures.push(`${cityPages[i].rel} vs ${cityPages[j].rel}: ${(overlap * 100).toFixed(0)}% prose overlap`);
    else console.log(`overlap ${cityPages[i].rel} vs ${cityPages[j].rel}: ${(overlap * 100).toFixed(0)}%`);
  }
}

// 7. raw font-size in src
const srcFiles = (function walkSrc(d) {
  return readdirSync(d).flatMap((f) => {
    const p = join(d, f);
    return statSync(p).isDirectory() ? walkSrc(p) : /\.(astro|css)$/.test(p) ? [p] : [];
  });
})(join(ROOT, 'src'));
for (const f of srcFiles) {
  if (f.endsWith('global.css')) continue;
  const src = readFileSync(f, 'utf8');
  for (const m of src.matchAll(/font-size:\s*([^;]+);/g)) {
    if (!/var\(|clamp\(/.test(m[1])) failures.push(`${relative(ROOT, f)}: raw font-size "${m[1]}"`);
  }
}

if (String(business.status || '').startsWith('PLACEHOLDER')) {
  warnings.push('business.json is a PLACEHOLDER: every page renders noindex and the preview strip. Supply identity + credentials before launch.');
}

for (const w of warnings) console.log('warn:', w);
for (const f of failures) console.log('FAIL:', f);
console.log(`${pages.length} pages checked, ${failures.length} failures, ${warnings.length} warnings`);
process.exit(failures.length ? 1 : 0);
