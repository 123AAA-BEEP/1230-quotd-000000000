// One-shot Vercel setup for this site. Creates (or finds) the project with the
// right root directory, sets the environment variables, then deploys the
// current build output as a production deployment using the Vercel CLI's
// prebuilt mode, so no Git integration is required for the first deploy.
//
//   VERCEL_TOKEN=... node scripts/vercel-setup.mjs
//
// Optional env: VERCEL_TEAM_ID (deploy into a team), PROJECT_NAME
// (default gtaicf), LEAD_INBOX, RESEND_API_KEY, LEAD_WEBHOOK_URL,
// LEAD_FROM, PUBLIC_PLAUSIBLE_DOMAIN (each is stored on the project when set).
//
// After the first deploy, connect the Git repository in the Vercel dashboard
// (Project → Settings → Git) with Root Directory `sites/gtaicf` so
// pushes deploy automatically, and add the domain under Settings → Domains.

import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const token = process.env.VERCEL_TOKEN;
if (!token) {
  console.error('Set VERCEL_TOKEN (create one at vercel.com/account/tokens).');
  process.exit(2);
}
const team = process.env.VERCEL_TEAM_ID;
const name = process.env.PROJECT_NAME || 'gtaicf';
const q = team ? `?teamId=${encodeURIComponent(team)}` : '';
const api = async (path, init = {}) => {
  const r = await fetch(`https://api.vercel.com${path}${path.includes('?') ? (team ? `&teamId=${team}` : '') : q}`, {
    ...init,
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', ...(init.headers || {}) },
  });
  const body = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(`${init.method || 'GET'} ${path} -> ${r.status} ${JSON.stringify(body).slice(0, 300)}`);
  return body;
};

// 1. Project
let project;
try {
  project = await api(`/v9/projects/${name}`);
  console.log('project exists:', project.id);
} catch {
  project = await api('/v11/projects', {
    method: 'POST',
    body: JSON.stringify({ name, framework: 'astro', rootDirectory: 'sites/gtaicf' }),
  });
  console.log('project created:', project.id);
}

// 2. Environment variables (only the ones provided)
const envs = ['LEAD_INBOX', 'RESEND_API_KEY', 'LEAD_WEBHOOK_URL', 'LEAD_FROM', 'PUBLIC_PLAUSIBLE_DOMAIN']
  .filter((k) => process.env[k])
  .map((k) => ({ key: k, value: process.env[k], type: k.startsWith('PUBLIC_') ? 'plain' : 'encrypted', target: ['production', 'preview'] }));
if (envs.length) {
  await api(`/v10/projects/${project.id}/env?upsert=true`, { method: 'POST', body: JSON.stringify(envs) });
  console.log('env vars set:', envs.map((e) => e.key).join(', '));
} else {
  console.log('no env vars provided; the lead endpoint will log only until LEAD_INBOX + RESEND_API_KEY or LEAD_WEBHOOK_URL are set');
}

// 3. Deploy the prebuilt output
if (!existsSync(`${ROOT}/.vercel/output`)) {
  console.log('building...');
  execSync('npm run build', { cwd: ROOT, stdio: 'inherit' });
}
const scope = team ? `--scope ${team}` : '';
execSync(`npx --yes vercel@latest link --yes --project ${name} --token ${token} ${scope}`, { cwd: ROOT, stdio: 'inherit' });
execSync(`npx --yes vercel@latest deploy --prebuilt --prod --yes --token ${token} ${scope}`, { cwd: ROOT, stdio: 'inherit' });
console.log('\nDone. Next: Project → Settings → Git (connect the repo, root directory sites/gtaicf) and Settings → Domains (gtaicf.ca, www redirect).');
