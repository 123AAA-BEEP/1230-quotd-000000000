# Design decision process

**Owner instruction, 2026-11-05:** every design decision goes through Mobbin first, then the design skills below, in order. Nothing visual ships without leaving this trail.

"Design decision" means any change to layout, type, colour, spacing, components, imagery, interaction or motion on any site in this repo (`src/`, `sites/*`). Copy-only and data-only changes are exempt.

## Precedence (unchanged)

The tools inform decisions. They don't make them. When a tool suggests something that conflicts with these documents, the documents win, in this order:

1. `spec/ADDENDUM-2026-08-01.md` and `spec/money-page-spec.md`
2. `spec/build-spec.md` §8 (the §8.1 banned list and the §8.2 look)
3. `spec/design-audit-2026-08-01.md` ("match the discipline, invert the signals")
4. Tool output (Mobbin references, skill recommendations)

If a tool's suggestion conflicts with the spec and you think the spec is wrong, raise it with the owner. Don't adopt it quietly.

## The pipeline

### 1. Mobbin: find references (required, always first)

Use the Mobbin MCP tools (`search_screens`, `search_flows`, `search_sections`, platform `web` unless the work is app-specific). Search for the *pattern*, not a look: "quote request form", "comparison table with sources", "cost breakdown section", "local service provider profile".

- Pull at least 3 references per decision and say what each one teaches: a spacing rhythm, a table treatment, form field order.
- Prefer editorial and reference-site registers (service journalism, data products, field guides) over SaaS landing pages. That's what §8 asks for.
- **Take patterns, never layouts.** No copying a screen, brand or visual identity. That's the same rule the Jiffy audit followed.
- Cite every reference by its `mobbin_url` in the PR description. Save the set to a Mobbin collection named `Quotd: <decision>` so the owner can review it.

### 2. taste-skill: filter for taste

Run the Mobbin shortlist and the proposed direction through taste-skill. Its job here is to catch generic, AI-default choices before they're built. It works alongside the §8.1 banned list and never replaces it.

### 3. ui-ux-pro-max (Basic, open-source): check the system

Use it to check the proposal for type scale, spacing, contrast, component states and accessibility.

- **Don't adopt its palette or font picks wholesale.** Our tokens are already set (serif display + humanist sans body, paper-warm neutrals, one earth accent, 4–6px radius). Anything it suggests from the §8.1 list (Inter/Poppins for everything, gradients, glassmorphism, symmetric icon-card rows) is rejected on sight.
- The Premium tier (uupm.cc) isn't needed. Brand identity is already set.

### 4. design-motion-principles: check motion

§8.2 sets motion at **near none**: instant loads, no scroll-triggered fades, no parallax. Use this skill for two things only:

- auditing a change for motion that should be removed, and
- tuning the small amount of state feedback we do allow (focus rings, form validation, button press, disclosure open/close), keeping it short, respecting `prefers-reduced-motion`, and never decorative.

Any proposal to add entrance or scroll animation needs owner sign-off.

### 5. design-md Chrome extension: capture reference systems (owner-side)

This is a browser extension, so it runs on the owner's machine, not in cloud sessions. Use it to capture a `DESIGN.md` from a reference site the owner wants studied. Commit captures to `research/design-md/<site>.md` with the capture date so later sessions can read them. You don't need the typeui.sh skills its pop-up promotes.

### 6. awesome-claude-design: cross-check against DESIGN.md exemplars

Use this list of free DESIGN.md files to compare how our token and system doc is structured, not to borrow anyone's tokens. Copy into `research/design-md/` only the files actually used, with source URL and retrieval date (the same `sources`/`retrieved_at` discipline as `/data`).

## What a design PR must contain

A **Design trail** section in the PR description:

```
## Design trail
- Mobbin: <3+ mobbin_url links, one line each on what was taken>; collection: <link>
- taste-skill: <verdict, what changed because of it>
- ui-ux-pro-max: <findings applied / rejected and why>
- design-motion-principles: <motion added/removed, reduced-motion handled>
- DESIGN.md references (if used): <file in research/design-md/>
- Spec check: §8.1 banned list clear; §8.2 / addendum conflicts: <none | listed>
```

If a step was skipped because the tool was unavailable in that environment, say so in the trail. Don't leave it out.

## Tool availability

| Tool | Cost | Where it runs |
|---|---|---|
| Mobbin | MCP connector | Available in cloud sessions |
| taste-skill | Free | Claude skill: must be installed in the session |
| ui-ux-pro-max (Basic) | Free (Premium tier exists, not needed) | Claude skill: must be installed in the session |
| design-motion-principles | Free | Claude skill: must be installed in the session |
| design-md Chrome extension | Free | Owner's browser only |
| awesome-claude-design | Free | Reference list (GitHub) |
