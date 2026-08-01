# Design Audit — Quotd vs Jiffy, 2026-08-01

Commissioned by the owner: "bring it to a more competitive field compared with Jiffy... not steal the layout, more a focus on refinement, fonts, polish, better use of white space."

Jiffy's design tokens below are **measured, not guessed**: their production stylesheet (`main.25cf83073a7b64e32b14.css`, 2.17 MB) was fetched and parsed on 2026-08-01. Their site is a JS-rendered SPA and Chromium has no outbound egress in this environment, so the render was not captured; the CSS is the stronger evidence anyway.

---

## 1. What Jiffy actually uses

| | Jiffy (measured) | Reading |
|---|---|---|
| Display / UI type | Nunito Sans (69 rules), Poppins (40), Roboto (60) | Friendly geometric/humanist sans. **No serif anywhere.** |
| Body size | `.875rem` (355 rules), `1rem` (256) | 14px dominant. Compact, app-density. |
| Heading sizes | 1.25 / 1.5 / 2rem | Modest. Headings do not carry the page. |
| Radius | **8px (195 rules)**, 4px (64), 16px (46), 24px (32), 50% (64) | Heavily rounded. Pills and circles throughout. |
| Primary colour | `#3391ff` (177), `#006ae6` (92) | Bright marketplace blue. |
| Accents | `#ffa726`, `#ebb34b` (amber), `#ff6060` (red) | Warm status colours, app-like. |
| Neutrals | `#2b2b2b`, `#4a4a4a`, `#a8a8a8`, `#cecece`, `#e9e9e9` | Cool greys. |

Their own meta description states the proposition: *"connects homeowners with service providers in real time, based on proximity and availability."* The site carries iOS and Android deeplinks and an App Store ID. **Jiffy is an on-demand booking app.** Bright blue, 8px rounding, 14px text and geometric sans are the correct design language for that: fast, easy, safe, cheap.

## 2. The strategic finding

**We should not converge on Jiffy's look, and matching it would actively hurt us.**

Quotd sells the opposite proposition. A homeowner spending five figures on limewash over century brick is not optimising for speed or convenience; they are trying not to get it wrong. Adopting on-demand visual language (bright blue, pill buttons, dense 14px UI) signals commodity and undercuts the premium-slice positioning the portfolio rests on (Addendum A11, Track 2).

What Jiffy genuinely beats us on is **execution discipline**, not style: one radius dominates their entire system, their type scale is tight, their spacing is consistent. That is what to take.

**Position adopted: match Jiffy's discipline, invert their signals.**

| Signal | Jiffy | Quotd |
|---|---|---|
| Type | All sans | Serif display + sans UI |
| Density | 14px, compact | 17px, generous |
| Radius | 8px, pills | 4-6px, restrained |
| Colour | Bright blue | Near-black, one earth accent |
| Space | Efficient | Generous — whitespace *is* the premium signal |

## 3. What was wrong with ours (before this pass)

1. **No typeface.** We used the system stack, which renders SF Pro on Mac, Segoe on Windows, Roboto on Android. Inconsistent across platforms and reads as unstyled. This was the single largest gap: Jiffy pays for real type, we did not.
2. **Radius drift.** 6 / 10 / 16px in use, with 16px on hero and cards reading bubbly rather than composed.
3. **Insufficient whitespace.** Section rhythm topped out at 3rem. Premium reads as air; ours was efficient.
4. **Cool grey neutrals** on a brand about lime, clay and masonry.
5. **Data band as a filled card** — decorated rather than composed.

## 4. Changes made

**Typography.** Self-hosted variable fonts, no external requests (116 KB total, `font-display: swap`):
- **Fraunces** for display — high-contrast old-style serif with optical sizing, drawn for exactly this warm/crafted register. `SOFT 0, WONK 0` keeps it composed rather than playful; `opsz 144` on the H1.
- **Inter** for UI and body — the reference-grade neutral sans at small sizes.

This pairing is the clearest possible separation from Jiffy while being unambiguously modern.

**Scale.** Body up to 17px (Jiffy 14px) because our pages are reading material, not a booking flow. Line-height 1.7. Measure capped at 38rem.

**Radius.** Reduced to 4 / 6 / 10px. Controls 4px, surfaces 6px. Pills removed from hero badges.

**Colour.** Neutrals rewarmed (`#faf9f7`, `#e6e2dc`, `#17150f`); accent held at iron oxide `#8a3d1c`, used only for the eyebrow, focus rings and button hover. Primary buttons stay near-black, which reads more expensive than any brand colour.

**Space.** Grid extended (`--s12: 7rem`, `--s16: 10rem`). Section rhythm 7rem, rail gap 7rem, page gutter 3rem, main padding 10rem bottom, header 72px.

**Data band.** Filled card replaced with hairline rules top and bottom, transparent ground, values set in Fraunces at 1.75rem. It now reads as an editorial data strip rather than a widget.

## 5. Still open

- **Photography is doing none of the work.** One image, unconfirmed provenance. No design system compensates; this is the biggest remaining gap and it is owner-blocked.
- **Mobile is unaudited** at this revision.
- **Spec §8 still says "editorial reference-site look"** and bans things this direction uses. It must be rewritten to describe the product-with-serif-display direction, or it will keep pulling future work back to what was rejected.
- **OG image template** unbuilt, so shared links look bare.
- Fraunces is a strong opinion. If it reads too editorial, the swap is one token.
