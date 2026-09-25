// Lead intake. The one server route on the site.
//
// Validates, stamps metadata, then delivers to whatever is configured:
//   LEAD_WEBHOOK_URL   POST the JSON lead record (CRM, Zapier, Make, a future
//                      getquotd.com intake, anything that accepts JSON)
//   RESEND_API_KEY +   email the lead to the inbox via Resend
//   LEAD_INBOX
// With nothing configured (local preview) the lead is logged and the request
// still succeeds, flagged delivered: "none".
//
// Anti-spam: honeypot field, minimum time-to-complete, format checks, a
// same-origin check on the fetch metadata headers. No OTP, no CAPTCHA. Add a
// rate-limit rule on POST /api/lead/ at the edge (Vercel Firewall) at launch.
//
// Consent: the client sends only the consent version; the text stored with
// the lead is the server's copy for that version, so the record is what the
// visitor saw and cannot be forged.

import type { APIRoute } from 'astro';
import business from '../../../data/business.json';

export const prerender = false;

const MIN_COMPLETE_MS = 4000;
const MAX_FIELD = 2000;
const DELIVERY_TIMEOUT_MS = 8000;

const KEYS = ['name', 'phone', 'email', 'application', 'city', 'postal_code', 'role', 'timeline', 'notes', 'website', 'estimate', 'page', 'utm'] as const;
type Key = (typeof KEYS)[number];
type Fields = Record<Key, string>;

const APPLICATIONS = new Set(['deck', 'addition', 'underpinning', 'other']);
const ROLES = new Set(['homeowner', 'builder', 'engineer', 'other']);
const TIMELINES = new Set(['asap', '1-3mo', '3mo+', 'planning']);
const CITIES = new Set([...business.service_area.map((c) => c.slug), 'other']);

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const clean = (v: unknown) => (typeof v === 'string' ? v.trim().slice(0, MAX_FIELD) : '');
const obj = (v: unknown): Record<string, unknown> | null => (v && typeof v === 'object' && !Array.isArray(v) ? (v as Record<string, unknown>) : null);

const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const validPhone = (v: string) => v.replace(/\D/g, '').length >= 10;
const validPostal = (v: string) => /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/.test(v);

const env = (name: string) => ((import.meta as any).env?.[name] as string | undefined) || process.env[name];

export const POST: APIRoute = async ({ request, clientAddress }) => {
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return json(415, { ok: false, error: 'JSON only' });
  }
  const site = request.headers.get('sec-fetch-site');
  if (site && site !== 'same-origin' && site !== 'none') {
    return json(403, { ok: false, error: 'Cross-site request refused' });
  }

  let body: any;
  try {
    body = await request.json();
  } catch {
    return json(400, { ok: false, error: 'Expected JSON' });
  }

  const raw = obj(body?.fields);
  if (!raw) return json(400, { ok: false, error: 'Expected fields' });
  const f = Object.fromEntries(KEYS.map((k) => [k, clean(raw[k])])) as Fields;
  const ua = request.headers.get('user-agent') ?? null;

  // Honeypot: real users never see or fill this field.
  if (f.website) {
    console.warn('[lead] dropped', { reason: 'honeypot', page: f.page, ua });
    return json(200, { ok: true, delivered: 'dropped' });
  }

  const ttc = Number(body?.time_to_complete_ms ?? 0);
  if (!Number.isFinite(ttc) || ttc < MIN_COMPLETE_MS) {
    console.warn('[lead] dropped', { reason: 'time_to_complete', ttc, page: f.page, ua });
    return json(200, { ok: true, delivered: 'dropped' });
  }

  const consentVersion = clean(body?.consent_version);
  if (consentVersion !== business.consent_version) {
    return json(422, { ok: false, error: 'This page is out of date. Reload it and try again' });
  }

  const errors: string[] = [];
  if (f.name.length < 2) errors.push('name');
  if (!validPhone(f.phone)) errors.push('phone');
  if (!validEmail(f.email)) errors.push('email');
  if (!APPLICATIONS.has(f.application)) errors.push('application');
  if (!CITIES.has(f.city)) errors.push('city');
  if (f.postal_code && !validPostal(f.postal_code)) errors.push('postal code');
  if (f.role && !ROLES.has(f.role)) errors.push('role');
  if (f.timeline && !TIMELINES.has(f.timeline)) errors.push('timeline');
  if (errors.length) return json(422, { ok: false, error: `Check: ${errors.join(', ')}` });

  let utm: Record<string, string> = {};
  try {
    const parsed = obj(f.utm ? JSON.parse(f.utm) : null) ?? {};
    utm = Object.fromEntries(
      Object.entries(parsed)
        .filter(([k, v]) => /^(utm_\w{1,32}|gclid)$/.test(k) && typeof v === 'string')
        .map(([k, v]) => [k, (v as string).slice(0, 200)])
    );
  } catch {
    utm = {};
  }

  let estimate: Record<string, unknown> | null = null;
  try {
    const parsed = obj(f.estimate ? JSON.parse(f.estimate) : null);
    if (parsed) {
      const num = (v: unknown) => (typeof v === 'number' && Number.isFinite(v) ? v : null);
      estimate = {
        application: APPLICATIONS.has(String(parsed.application)) ? String(parsed.application) : null,
        count: num(parsed.count),
        deck_length_ft: num(parsed.deck_length_ft),
        deck_width_ft: num(parsed.deck_width_ft),
        attached: typeof parsed.attached === 'boolean' ? parsed.attached : null,
        estimate_low: num(parsed.estimate_low),
        estimate_high: num(parsed.estimate_high),
        summary: clean(parsed.summary).slice(0, 300) || null,
      };
    }
  } catch {
    estimate = null;
  }

  const now = new Date().toISOString();
  const lead = {
    received_at: now,
    site: 'gtahelicalpiles.ca',
    business: business.trading_name,
    title: `${f.application} — ${f.city}`,
    contact: { name: f.name, phone: f.phone, email: f.email, role: f.role || null },
    project: {
      application: f.application,
      city: f.city,
      postal_code: f.postal_code ? f.postal_code.toUpperCase() : null,
      timeline: f.timeline || null,
      notes: f.notes || null,
      estimate,
    },
    consent: {
      version: consentVersion,
      text: business.consent_text,
      granted_at: now,
    },
    source: {
      page: f.page || null,
      utm,
      form_version: clean(body?.form_version),
      time_to_complete_ms: ttc,
      ip: clientAddress ?? request.headers.get('x-forwarded-for') ?? null,
      ip_country: request.headers.get('x-vercel-ip-country') ?? null,
      user_agent: ua,
    },
  };

  const webhook = env('LEAD_WEBHOOK_URL');
  const resendKey = env('RESEND_API_KEY');
  const inbox = env('LEAD_INBOX');
  const fromAddress = env('LEAD_FROM') || `leads@${lead.site}`;

  const delivered: string[] = [];
  const failures: string[] = [];
  const errText = async (r: Response) => (await r.text().catch(() => '')).slice(0, 300);

  const sendWebhook = async () => {
    if (!webhook) return;
    try {
      const r = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
        signal: AbortSignal.timeout(DELIVERY_TIMEOUT_MS),
      });
      if (r.ok) delivered.push('webhook');
      else failures.push(`webhook ${r.status} ${await errText(r)}`);
    } catch (e) {
      failures.push(`webhook error ${String(e).slice(0, 120)}`);
    }
  };

  const sendEmail = async () => {
    if (!(resendKey && inbox)) return;
    const text = [
      `New quote request: ${lead.title}`,
      '',
      `Name: ${f.name}`,
      `Phone: ${f.phone}`,
      `Email: ${f.email}`,
      `Role: ${f.role || '-'}`,
      '',
      `Application: ${f.application}`,
      `City: ${f.city}${f.postal_code ? ` (${f.postal_code.toUpperCase()})` : ''}`,
      `Timeline: ${f.timeline || '-'}`,
      `Notes: ${f.notes || '-'}`,
      estimate ? `Estimator: ${JSON.stringify(estimate)}` : '',
      '',
      `Page: ${f.page || '-'}`,
      `Consent: ${lead.consent.version} at ${lead.consent.granted_at}`,
      `Time to complete: ${Math.round(ttc / 1000)}s`,
    ].join('\n');
    try {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: `${business.trading_name} <${fromAddress}>`,
          to: [inbox],
          reply_to: f.email,
          subject: `Quote request: ${lead.title}`,
          text,
        }),
        signal: AbortSignal.timeout(DELIVERY_TIMEOUT_MS),
      });
      if (r.ok) delivered.push('email');
      else failures.push(`email ${r.status} ${await errText(r)}`);
    } catch (e) {
      failures.push(`email error ${String(e).slice(0, 120)}`);
    }
  };

  const configured = Boolean(webhook) || Boolean(resendKey && inbox);
  await Promise.allSettled([sendWebhook(), sendEmail()]);

  if (!configured) {
    console.log('[lead] no delivery configured; lead logged only', JSON.stringify(lead));
    return json(200, { ok: true, delivered: 'none' });
  }
  if (delivered.length === 0) {
    console.error('[lead] delivery failed', failures, JSON.stringify(lead));
    return json(502, { ok: false, error: 'Delivery failed' });
  }
  if (failures.length) {
    console.error('[lead] partial delivery failure', failures, lead.received_at);
  }
  return json(200, { ok: true, delivered: delivered.join('+'), failed: failures });
};
