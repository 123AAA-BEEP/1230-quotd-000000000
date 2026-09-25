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
// Anti-spam: honeypot field, minimum time-to-complete, format checks. No OTP,
// no CAPTCHA. Consent text and version are stored with every lead.

import type { APIRoute } from 'astro';
import business from '../../../data/business.json';

export const prerender = false;

const MIN_COMPLETE_MS = 4000;
const MAX_FIELD = 2000;

type Fields = Record<string, string>;

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const clean = (v: unknown) => (typeof v === 'string' ? v.trim().slice(0, MAX_FIELD) : '');

const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const validPhone = (v: string) => v.replace(/\D/g, '').length >= 10;
const validPostal = (v: string) => /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/.test(v);

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return json(400, { ok: false, error: 'Expected JSON' });
  }

  const f: Fields = Object.fromEntries(
    Object.entries(body?.fields ?? {}).map(([k, v]) => [k, clean(v)])
  );

  // Honeypot: real users never see or fill this field.
  if (f.website) return json(200, { ok: true, delivered: 'dropped' });

  const ttc = Number(body?.time_to_complete_ms ?? 0);
  if (!Number.isFinite(ttc) || ttc < MIN_COMPLETE_MS) {
    return json(200, { ok: true, delivered: 'dropped' });
  }

  const errors: string[] = [];
  if (f.name.length < 2) errors.push('name');
  if (!validPhone(f.phone)) errors.push('phone');
  if (!validEmail(f.email)) errors.push('email');
  if (!f.application) errors.push('application');
  if (!f.city) errors.push('city');
  if (f.postal_code && !validPostal(f.postal_code)) errors.push('postal_code');
  if (errors.length) return json(422, { ok: false, error: `Check: ${errors.join(', ')}` });

  let utm: Record<string, string> = {};
  try {
    utm = f.utm ? JSON.parse(f.utm) : {};
  } catch {
    utm = {};
  }
  let estimate: unknown = null;
  try {
    estimate = f.estimate ? JSON.parse(f.estimate) : null;
  } catch {
    estimate = null;
  }

  const lead = {
    received_at: new Date().toISOString(),
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
      version: clean(body?.consent_version),
      text: clean(body?.consent_text),
      granted_at: new Date().toISOString(),
    },
    source: {
      page: f.page || null,
      utm,
      form_version: clean(body?.form_version),
      time_to_complete_ms: ttc,
      ip: clientAddress ?? request.headers.get('x-forwarded-for') ?? null,
      ip_country: request.headers.get('x-vercel-ip-country') ?? null,
      user_agent: request.headers.get('user-agent') ?? null,
    },
  };

  const env = (import.meta as any).env ?? {};
  const webhook = env.LEAD_WEBHOOK_URL || process.env.LEAD_WEBHOOK_URL;
  const resendKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY;
  const inbox = env.LEAD_INBOX || process.env.LEAD_INBOX;
  const fromAddress = env.LEAD_FROM || process.env.LEAD_FROM || `leads@${lead.site}`;

  const delivered: string[] = [];
  const failures: string[] = [];

  if (webhook) {
    try {
      const r = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
      if (r.ok) delivered.push('webhook');
      else failures.push(`webhook ${r.status}`);
    } catch (e) {
      failures.push('webhook error');
    }
  }

  if (resendKey && inbox) {
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
      });
      if (r.ok) delivered.push('email');
      else failures.push(`email ${r.status}`);
    } catch (e) {
      failures.push('email error');
    }
  }

  if (!webhook && !(resendKey && inbox)) {
    console.log('[lead] no delivery configured; lead logged only', JSON.stringify(lead));
  } else if (delivered.length === 0) {
    console.error('[lead] delivery failed', failures, JSON.stringify(lead));
    return json(502, { ok: false, error: 'Delivery failed' });
  }

  return json(200, { ok: true, delivered: delivered.length ? delivered.join('+') : 'none' });
};
