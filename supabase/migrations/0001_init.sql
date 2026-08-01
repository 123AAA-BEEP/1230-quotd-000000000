-- Quotd initial schema (P1). Per spec §3.1/§6.2 + ADDENDUM-2026-08-01 (A1 internal
-- provider layer, A3 email-notified lead capture, no SMS OTP at launch).
-- DO NOT apply to production without owner approval (P1 constraint).

create table niches (
  id text primary key, -- slug: 'limewash'
  name text not null,
  cluster text,
  track smallint not null default 1 check (track in (1, 2)),
  status text not null default 'bench' check (status in ('launch', 'probe', 'bench', 'killed')),
  consumer_terms text[] not null default '{}',
  job_value_low_usd integer,
  job_value_high_usd integer,
  seasonal jsonb,
  form_questions jsonb not null default '[]',
  sub_uses jsonb not null default '[]',
  rubric_scores jsonb,
  created_at timestamptz not null default now()
);

create table cities (
  slug text primary key, -- 'toronto-on'
  name text not null,
  region text not null, -- province/state code
  country text not null check (country in ('CA', 'US')),
  lat double precision,
  lon double precision,
  population integer,
  metro text,
  created_at timestamptz not null default now()
);

create table pages (
  id uuid primary key default gen_random_uuid(),
  niche_id text not null references niches (id),
  city_slug text references cities (slug), -- null for hubs/guides
  kind text not null default 'money' check (kind in ('money', 'hub', 'probe', 'guide', 'cost')),
  path text not null unique, -- '/limewash/toronto-on'
  status text not null default 'draft' check (status in ('draft', 'published', 'killed')),
  gate_results jsonb, -- last publish-gate run
  published_at timestamptz,
  last_verified_at date,
  created_at timestamptz not null default now()
);

-- Internal-only (A1): never rendered on consumer pages; sales asset + gate-2 check.
create table providers (
  id uuid primary key default gen_random_uuid(),
  niche_id text not null references niches (id),
  city_slug text references cities (slug),
  name text not null,
  website text,
  phone text,
  email text,
  source text not null check (source in ('places', 'permits', 'licenses', 'manual', 'serp')),
  evidence jsonb, -- URLs proving they do this specific work
  sellable boolean not null default false,
  claimed boolean not null default false,
  notes text,
  created_at timestamptz not null default now()
);

create table leads (
  id uuid primary key default gen_random_uuid(),
  page_id uuid references pages (id),
  niche_id text not null references niches (id),
  city_slug text references cities (slug),
  name text not null,
  email text not null,
  phone text not null,
  address text,
  project jsonb not null default '{}', -- step-1 answers keyed by form_questions
  form_version text not null,
  consent_text_version text not null, -- §7: exact consent text version shown
  consent_at timestamptz not null,
  utm jsonb,
  verified_channel text not null default 'none' check (verified_channel in ('none', 'email', 'sms')),
  honeypot_tripped boolean not null default false,
  time_to_complete_ms integer,
  ip inet,
  status text not null default 'new' check (status in ('new', 'qualified', 'sold', 'dead', 'credited')),
  sold_to uuid[] not null default '{}', -- max 3 enforced in intake fn (§6.3)
  created_at timestamptz not null default now()
);

-- Loop 1: quote outcomes = the proprietary cost dataset (unlocks class-3 claims).
create table quotes (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references leads (id),
  provider_id uuid references providers (id),
  amount_cents bigint,
  currency text check (currency in ('CAD', 'USD')),
  status text not null default 'unknown' check (status in ('quoted', 'won', 'lost', 'unknown')),
  details jsonb, -- scope notes, sqft, surface
  followup_at date, -- +14d email per spec §6.1
  created_at timestamptz not null default now()
);

create table data_modules (
  id uuid primary key default gen_random_uuid(),
  module text not null, -- 'climate_curing' | 'housing_age' | 'home_value' | 'wages' | 'frost_dates' | 'providers' | ...
  niche_id text references niches (id), -- null = city-generic module
  city_slug text references cities (slug),
  payload jsonb not null,
  sources jsonb not null, -- [{name,url}] — required, never empty (CLAUDE.md data discipline)
  retrieved_at date not null,
  created_at timestamptz not null default now(),
  unique nulls not distinct (module, niche_id, city_slug)
);

create index leads_niche_city_idx on leads (niche_id, city_slug, created_at desc);
create index providers_niche_city_idx on providers (niche_id, city_slug) where sellable;
create index quotes_lead_idx on quotes (lead_id);
create index data_modules_lookup_idx on data_modules (module, city_slug);

-- RLS: enabled everywhere, zero policies = service-role only (anon/authenticated
-- see nothing). The static site reads committed JSON at build time, not the DB.
alter table niches enable row level security;
alter table cities enable row level security;
alter table pages enable row level security;
alter table providers enable row level security;
alter table leads enable row level security;
alter table quotes enable row level security;
alter table data_modules enable row level security;
