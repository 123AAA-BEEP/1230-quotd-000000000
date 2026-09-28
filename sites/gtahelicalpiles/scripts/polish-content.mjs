// Rewrites research-log phrasing in data/content and data/guides into
// public-page wording. Idempotent; run after each batch of city files lands.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const RULES = [
  [/failed from our research environment/gi, 'could not be reached when this page was written'],
  [/would not load from our research environment on any attempt/gi, 'could not be reached when this page was written'],
  [/from our research environment/gi, 'when this page was written'],
  [/when this page was researched/gi, 'when this page was written'],
  [/could not be reached from this environment/gi, 'could not be reached when this page was written'],
  [/(Depth to (?:bedrock|rock|shale)) was not retrieved/g, '$1 is not mapped by the survey'],
  [/(depth to (?:bedrock|rock|shale)) was not retrieved/g, '$1 is not mapped by the survey'],
  [/How (deep|far down) (the shale|it) lies was not retrieved/g, 'How $1 $2 lies is not mapped by the survey'],
  [/; no drift-thickness dataset was queried,/g, ','],
  [/, and no drift-thickness dataset was queried/g, ''],
  [/no drift-thickness dataset was queried/g, 'the survey has no drift-thickness layer for these points'],
  [/from general references we did not point-check/g, 'from general references rather than point queries'],
  [/The Ontario Building Code sentence behind that number was not retrieved for this page, so we do not quote its clause here\./g, 'We do not quote the Building Code clause behind that number; the municipal drawing is the source we cite.'],
  [/was not retrieved for this page/g, 'is not cited on this page'],
  [/were not retrieved/g, 'are not cited here'],
  [/was not retrieved/g, 'is not cited here'],
];

let changed = 0;
for (const dir of ['data/content', 'data/guides']) {
  for (const f of readdirSync(join(ROOT, dir))) {
    if (!f.endsWith('.json')) continue;
    const p = join(ROOT, dir, f);
    const before = readFileSync(p, 'utf8');
    let after = before;
    for (const [re, rep] of RULES) after = after.replace(re, rep);
    if (after !== before) {
      JSON.parse(after);
      writeFileSync(p, after);
      changed++;
      console.log('polished', f);
    }
  }
}
console.log(`${changed} files changed`);
