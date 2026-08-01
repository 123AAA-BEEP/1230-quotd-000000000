import { chromium } from 'playwright';
const OUT = '/tmp/claude-0/-home-user-1230-quotd-000000000/20b5d6cf-1e28-50f0-9baa-b4be5c86a8fb/scratchpad';
const PROXY = process.env.HTTPS_PROXY || process.env.https_proxy;
const b = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium',
  ...(PROXY ? { proxy: { server: PROXY } } : {}),
});
const p = await b.newPage({ viewport: { width: 1440, height: 1600 } });
await p.goto('https://jiffyondemand.com/', { waitUntil: 'networkidle', timeout: 60000 });
await p.waitForTimeout(2500);
await p.screenshot({ path: OUT + '/jiffy-top.png' });

// Pull the actual design tokens off the page.
const tokens = await p.evaluate(() => {
  const seen = { fonts: {}, sizes: {}, colors: {}, weights: {}, radii: {} };
  const bump = (o, k) => { if (k) o[k] = (o[k] || 0) + 1; };
  for (const el of document.querySelectorAll('body *')) {
    if (!el.textContent?.trim() && !['IMG','BUTTON','A'].includes(el.tagName)) continue;
    const c = getComputedStyle(el);
    bump(seen.fonts, c.fontFamily.split(',')[0].replace(/["']/g, ''));
    bump(seen.sizes, c.fontSize);
    bump(seen.weights, c.fontWeight);
    bump(seen.colors, c.color);
    if (c.borderRadius !== '0px') bump(seen.radii, c.borderRadius);
  }
  const top = (o, n = 8) => Object.entries(o).sort((a, b) => b[1] - a[1]).slice(0, n);
  const h1 = document.querySelector('h1');
  return {
    fonts: top(seen.fonts), sizes: top(seen.sizes, 10), weights: top(seen.weights),
    colors: top(seen.colors), radii: top(seen.radii),
    h1: h1 && { text: h1.textContent.trim().slice(0, 80), size: getComputedStyle(h1).fontSize,
                weight: getComputedStyle(h1).fontWeight, family: getComputedStyle(h1).fontFamily.split(',')[0],
                lh: getComputedStyle(h1).lineHeight, ls: getComputedStyle(h1).letterSpacing },
    bg: getComputedStyle(document.body).backgroundColor,
  };
});
console.log(JSON.stringify(tokens, null, 1));
await b.close();
