# CRUDA — web system review / 14 November 2026

Reference: approved CRUDA-Design-System-Proposal.html and the subsequent structured project facts revision.

## Implementation
- Archivo variable font hosted locally, including true heavy display weights. Legacy Instrument Serif variable resolves to Archivo.
- Shared carbon, cream, orange, rules, readable metadata and focus treatments in app/brand-system.css.
- Home hero keeps existing wording and subscription, with the intentional hand-drawn circle around “few”.
- Selected work keeps current images, destinations and order. Name/company, industry/location and scope are separated. Scope is always visible.
- ProjectFacts component shares metadata layout between home and existing case pages. Scope labels summarize actual deliverables, not editorial titles.
- José's approved article retains its text and reading structure. Its facts row and typography adopt the new system.
- Existing other case narratives and page composers are retained; their opening metadata adopts the shared system. Full editorial reconstruction to José's narrative format is still separate from this visual pass.
- Existing service prices, forms, routing and articles retained. Presentation and Instagram work waits for approval of this web version.

## Missing information
Ryan Altman location and scope, Marty Lowe scope and BAUHOME scope are omitted where the source does not specify them. No invented engagements or locations.

## Review
Draft branch only; no production merge. This request's review stage takes precedence over the older automatic merge policy in docs/autonomy.md.

## Validation
- Production build and TypeScript check.
- Essay parity passed. The full prepush stops at an existing essay-check failure: emigrar-te-devuelve-el-lapiz uses a 2000×1333 hero (1.5 ratio), while its validator requires 16:9. Neither that source nor image is modified by this branch. Production build is run independently.
- Browser: home, José, Karen, services, about, thinking and contact at 390, 768 and 1440 px; HTTP 200, no document horizontal overflow, no page errors.
- Visual inspection of desktop/mobile hero, José opening and full client grid.
