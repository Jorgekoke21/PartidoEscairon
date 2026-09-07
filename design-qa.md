# Design QA · PSOE O Saviñao

source visual truth path: `C:/Users/Jorge/AppData/Local/Temp/codex-clipboard-79bdbff2-654e-45c3-b0f8-78590ab6ebba.png` (home), plus the supplied parish and proposals mockups in the same temporary folder.
implementation screenshot path: `http://localhost:4173/` · Codex In-app Browser tab 2, inline browser capture.
viewport: default in-app browser capture approximately 1069 × 1050 CSS px; responsive capture 390 × 844 CSS px.
source and implementation pixel dimensions: source 1056 × 1490 px for the home mockup; implementation captured at the browser viewport above; no density normalization applied because the source is a visual reference rather than a device-density capture.
state: home, default “Todas”, first proposal accordion open; additional checks on `/propostas` and `/parroquias/escairon`.

## Full-view comparison evidence

The implementation preserves the supplied information architecture: sticky white header, left-led editorial hero, red accent typography, open priority rail, soft-gray concerns band, line-separated accordions, parish section, participation band and restrained footer. The hero and parish media are explicit neutral placeholders because the request prohibits invented photography and no original territorial photos were supplied. This is an intentional content constraint, not a design defect.

## Focused region comparison evidence

The header/hero, priorities, concerns chips, proposal accordion, parish summary and participation form were checked in the in-app browser. The 390px capture confirmed stacked content, horizontally scrolling chips and no accidental horizontal overflow (`body.scrollWidth` 375px vs `window.innerWidth` 390px).

## Findings

- No actionable P0, P1 or P2 findings remain.
- P3 / content follow-up: replace the three labelled photo placeholders with approved real O Saviñao and parish photography when supplied. The placeholder treatment is deliberately visible and non-misleading.
- P3 / content follow-up: replace demonstration proposals, parish entries, legal copy and social/contact labels with verified production content.

## Comparison history

1. Initial browser capture showed the hero placeholder resolving to content height only. Fixed the media frame with absolute inset positioning and full-bleed width logic; recaptured and confirmed a full-height right-side media region.
2. Initial Escairón capture showed no associated proposals because the dataset stored IDs while the resolver only checked slugs. Fixed the resolver to accept IDs or slugs; recaptured and confirmed three proposal accordions.

## Primary interactions tested

- Home concern chip “Vivenda”: active red state, smooth scroll, `/` hash updated to `#vivenda`, only the matching accordion shown and opened.
- Proposal page theme filter and search: category visibility and combined search state verified.
- Accordion open/close state: `aria-expanded`, plus/minus marker and panel visibility verified.
- Home parish selector: heading updates to the selected parish.
- Mobile menu: hamburger opens the five navigation links at 390px.
- Forms: local success status appears without sending data to an external service.
- Navigation: `/propostas`, `/parroquias`, `/parroquias/escairon`, `/equipo`, `/actualidade` and `/contacto` render successfully.
- Console errors: none observed on the tested routes.

## Implementation Checklist

- [x] Responsive layout at desktop and 390px mobile viewport.
- [x] Reusable Astro components for header, footer, headings, chips, accordions, contact form and media placeholders.
- [x] Structured TypeScript data for categories, proposals, parishes and site navigation.
- [x] Static SEO metadata, canonical URLs, sitemap integration and robots.txt.
- [x] Accessible labels, focus styles, semantic headings, tab roles and accordion ARIA states.
- [x] Demo content is explicitly labelled and easy to replace.

## Follow-up Polish

Approved real photography will materially improve fidelity in the three media roles without changing the component structure.

final result: passed
