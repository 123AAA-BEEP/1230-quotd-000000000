/**
 * Candidate hero imagery from free, commercially-usable sources.
 *
 * Sources, in the order we actually want them:
 *   1. Wikimedia Commons  - real architectural/technical photography, CC or PD,
 *      attribution required. Genuinely has limewashed buildings, slate roofs,
 *      historic windows, masonry details.
 *   2. Library of Congress (HABS/HAER) - public domain, exceptional
 *      architectural survey photography of US buildings.
 *
 * Deliberately NOT wired: Unsplash and Pexels. They are free and licensed for
 * commercial use, but they have essentially nothing for these niches. A search
 * for "limewash brick" returns generic house exteriors, and a generic house
 * photo is exactly the stock-photo tell that spec 8.1 bans.
 *
 * This writes CANDIDATES for human review. Nothing here selects an image for a
 * page: a person picks, and the pick is recorded in data/content/<page>.json
 * with its licence and attribution.
 *
 * Usage:  node --use-env-proxy pipelines/images.mjs limewash "limewash" "lime wash facade"
 *
 * The --use-env-proxy flag is REQUIRED in this environment: Node's built-in
 * fetch ignores HTTPS_PROXY by default, so without it every request is refused
 * with a 403 while curl to the same URL succeeds.
 */

import { writeFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';

const UA = 'Quotd/0.1 (https://getquotd.com; hello@getquotd.com)';
const COMMONS = 'https://commons.wikimedia.org/w/api.php';

// Licences we will actually publish. Anything else is reported but flagged.
const OK_LICENCES = /^(cc0|cc-by(-sa)?-[0-9.]+|public domain|pd-)/i;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getJson(url, attempt = 0) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  // Commons rate-limits bursts; back off rather than hammering it.
  if (res.status === 429 && attempt < 4) {
    const wait = 2000 * 2 ** attempt;
    console.log(`    rate limited, waiting ${wait / 1000}s`);
    await sleep(wait);
    return getJson(url, attempt + 1);
  }
  if (!res.ok) throw new Error(`Commons ${res.status}`);
  return res.json();
}

async function commonsSearch(term, limit = 12) {
  const url = new URL(COMMONS);
  url.search = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: `filetype:bitmap ${term}`,
    gsrnamespace: '6',
    gsrlimit: String(limit),
    prop: 'imageinfo',
    iiprop: 'url|extmetadata|size',
    iiurlwidth: '1600',
    format: 'json',
    origin: '*',
  }).toString();

  const json = await getJson(url);
  const pages = json?.query?.pages ?? {};

  return Object.values(pages).map((p) => {
    const info = p.imageinfo?.[0] ?? {};
    const meta = info.extmetadata ?? {};
    const strip = (v) => (v?.value ?? '').replace(/<[^>]*>/g, '').trim();
    const licence = strip(meta.LicenseShortName) || strip(meta.License);
    return {
      title: p.title,
      page: `https://commons.wikimedia.org/wiki/${encodeURIComponent(p.title)}`,
      file: info.url,
      preview: info.thumburl,
      width: info.width,
      height: info.height,
      licence,
      usable: OK_LICENCES.test(licence),
      author: strip(meta.Artist),
      credit: strip(meta.Credit),
      description: strip(meta.ImageDescription).slice(0, 400),
      source: 'wikimedia-commons',
      query: term,
    };
  });
}

const [niche, ...terms] = process.argv.slice(2);
if (!niche || terms.length === 0) {
  console.error('usage: node pipelines/images.mjs <niche-id> "<search term>" ["<term 2>" ...]');
  process.exit(1);
}

const seen = new Set();
const candidates = [];
for (const term of terms) {
  try {
    for (const c of await commonsSearch(term)) {
      if (seen.has(c.file)) continue;
      seen.add(c.file);
      candidates.push(c);
    }
    console.log(`  ${term}: ok`);
  } catch (err) {
    console.error(`  ${term}: ${err.message}`);
  }
  await sleep(1500);
}

// Landscape and large enough to be a hero, usable licence first.
candidates.sort((a, b) => Number(b.usable) - Number(a.usable) || b.width - a.width);
const shortlist = candidates.filter((c) => c.usable && c.width >= 1400 && c.width > c.height);

const out = `data/images/${niche}.candidates.json`;
await mkdir(dirname(out), { recursive: true });
await writeFile(
  out,
  JSON.stringify(
    {
      niche,
      retrieved_at: new Date().toISOString().slice(0, 10),
      terms,
      note: 'CANDIDATES ONLY. A human picks the hero and copies licence + author into the page content file. Attribution is mandatory for every CC-BY image.',
      shortlist_count: shortlist.length,
      total_count: candidates.length,
      shortlist,
      all: candidates,
    },
    null,
    2,
  ) + '\n',
);

console.log(`\n${candidates.length} candidates, ${shortlist.length} shortlisted -> ${out}`);
