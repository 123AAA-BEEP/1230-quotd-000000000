# Launch checklist: gtahelicalpiles.ca and gtaicf.ca

Both sites are complete in preview and pushed on branch `claude/beautiful-newton-ofc7mi`. Every page renders `noindex` with a preview strip, and the sitemap is empty, until `data/business.json` in each site stops being a placeholder. The steps below take each site from preview to indexed. Do them in order; steps 1 to 4 are yours, 5 to 9 are mechanical and can be done by you or by an AI session once the accounts exist.

Previews: helical https://claude.ai/artifact/Q6qVzg6icnKgvPUuzWaF2x · ICF https://claude.ai/artifact/VUJh2qj5wUW1u8YUjRdUrq

## 1. Identity (both sites, same company)

Fill `sites/<site>/data/business.json`, or send the values and have them entered:

- `legal_name`, `trading_name`, `phone_display`, `phone_e164`, `email`, `address` (service-area business: locality and region only), `hours_display`, `hours_schema`, `founded_year`, `gbp_url` (once the Business Profile exists).
- Credentials, each only if true and dated: `engineer`, `warranty_text`, `insurance`, `wsib`, `licence`. Helical: `pile_system`, `ccmc_report`, `manufacturer_certified`, `equipment`. ICF: `icf_systems`, `icf_ccmc_reports`. Empty means the gated word never renders.
- `consent_text`: approve the draft or supply yours, then bump `consent_version` (it is stored with every lead).
- Last: change `status` from `PLACEHOLDER...` to `LIVE <date>`. That removes `noindex` and the strip and fills the sitemap.

## 2. Prices

Decided 2026-09-28: both sites keep the illustrative benchmark bands in `sites/<site>/data/prices.json` as they are, labelled illustrative everywhere with the firm price after a site review. Nothing to do before launch; bump `last_reviewed` when the bands are next checked.

## 3. Owner review

Work through `sites/<site>/data/owner-review.md`. Each line is a practice statement or interpretation the writers could not source. Reply yes, reword, or strike per item; the edits are quick.

## 4. Domains and accounts

- Buy `gtaicf.ca` (and confirm `gtahelicalpiles.ca`). Keep DNS at the registrar for now.
- Vercel account (Hobby is fine to start; Pro if you want team access). Create a token at vercel.com/account/tokens.
- Resend account for lead email. Add and verify each sending domain (Resend gives you DNS records to add at the registrar). Create an API key.
- Plausible account, add `gtahelicalpiles.ca` and `gtaicf.ca` as sites.
- Optional: a webhook URL (Zapier, Make, a CRM, a future getquotd.com intake) if you want leads pushed somewhere besides email.

## 5. Merge to main

Production should build from `main`. Open a pull request from `claude/beautiful-newton-ofc7mi` to `main` and merge it (or ask a session to open it). Until then a Vercel project can point at the feature branch as its production branch, but do not launch that way.

## 6. Create the two Vercel projects

Option A, dashboard: Add New → Project → import the repository. Root Directory `sites/gtahelicalpiles`; framework Astro is detected. Add the environment variables below. Deploy. Repeat with Root Directory `sites/gtaicf`.

Option B, script, from a machine or session with the token:

```
cd sites/gtahelicalpiles
VERCEL_TOKEN=... RESEND_API_KEY=... LEAD_INBOX=you@example.com LEAD_FROM=leads@gtahelicalpiles.ca PUBLIC_PLAUSIBLE_DOMAIN=gtahelicalpiles.ca node scripts/vercel-setup.mjs
cd ../gtaicf
VERCEL_TOKEN=... RESEND_API_KEY=... LEAD_INBOX=you@example.com LEAD_FROM=leads@gtaicf.ca PUBLIC_PLAUSIBLE_DOMAIN=gtaicf.ca node scripts/vercel-setup.mjs
```

For a Claude session to run it, add `VERCEL_TOKEN` as an environment variable in the cloud environment's settings (never paste it into chat) and allow `api.vercel.com` and `vercel.com` under Network access.

Environment variables per project:

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | from Resend |
| `LEAD_INBOX` | the address that receives leads |
| `LEAD_FROM` | `leads@<domain>` (domain verified in Resend) |
| `LEAD_WEBHOOK_URL` | optional |
| `PUBLIC_PLAUSIBLE_DOMAIN` | `<domain>` |

Then Settings → Git: connect the repository so pushes to `main` deploy.

## 7. Domains

In each Vercel project, Settings → Domains: add the apex (`gtaicf.ca`) and `www.gtaicf.ca` redirecting to the apex. Vercel shows the A record for the apex and the CNAME for www; add them at the registrar. Wait for the certificate.

## 8. Verify on the real domain

1. Open the homepage: no preview strip, and `view-source` shows no `noindex`.
2. `/sitemap.xml` lists every page; `/robots.txt` points at it.
3. Submit a test lead from a phone. Confirm the email arrives with the consent version and the estimator summary.
4. Walk the calculator on a guide page and hand off to the form.
5. Check one city page's sources open.

## 9. Search Console, Bing, Business Profile

- Google Search Console: add each domain as a Domain property (DNS TXT record), submit `/sitemap.xml`. Bing Webmaster Tools: import from Search Console.
- Google Business Profile: one profile for the company (one phone, one address area). Primary category for the trade you want the map pack for most, both sites named in the services list and posts, twenty municipalities as the service area, photos weekly.
- Plausible goals: `form_submit`, `call_click`, `estimator_result`, `estimator_handoff`.

## 10. Release the cities in batches

Both sites ship with all twenty city pages live. For a new domain, release in three batches so indexation can be read cleanly: keep Halton and Peel live at launch, set `live: false` in `business.json` for Toronto, Hamilton, Guelph and Niagara, then flip each batch when Search Console's Pages report shows at least half the previous batch indexed. Non-live cities still appear in the "Where we work" list without a link.

## 11. First month

- Ask every customer for a review that names the town and the job.
- Manufacturer installer locators (pile system, ICF systems) and HomeStars, Houzz, BBB, Bing Places, Apple Business Connect, with identical name, address and phone.
- Read Search Console weekly: impressions without clicks means rewrite the title; "cost" queries mean deepen the pricing sections; a city that never indexes gets cut.
