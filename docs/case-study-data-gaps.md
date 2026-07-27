# Case study data gaps

After migrating the four remaining case studies (Girish, Juan Pablo, Mike, Nitin) to `CaseStudyLayout`, these fields are empty and need Fran to fill.

## What was extracted from the old pages (verified)

- **Titles**: rebuilt as results (per AEO mould), grounded in stats or claims that were on the original pages.
- **Client name / role / company / location**: copied verbatim from the old page's `clientName / clientTitle / clientLocation` props.
- **Answer capsule + sections**: rebuilt from the original `clientDescription / challengeDescription / storyContent / translationDescription` blocks — no invention, only re-ordering into the AEO mould.
- **Testimonial**: verbatim from `testimonialQuote / testimonialAuthor / testimonialTitle`.
- **Stats**: only where the original page carried a hard number in copy (Mike's $230M / 1,000 / $100M; Girish's 25 years / 14 cities / 7,000+). Where the original used soft badges (JP's "NARRATIVE / POSITIONING / EXPERTISE"), no stat row was written — those are labels, not data.
- **Photos**: reused `public/clients/{slug}.jpeg|webp` where present. Nitin has no client photo (identity protected on the original page).

## What is missing per case study

### All four
- **`publishedAt` / `updatedAt`** — dates were not on the old pages. Left as empty strings; the layout hides the byline date block when `publishedAt` is empty, and the JSON-LD Article skips `datePublished` / `dateModified`. Fran to supply engagement start (publish) + last review (update) dates.
- **`faqs`** — the AEO mould calls for buyer-question FAQs. None were on the old pages. Left as empty arrays. Fran to write 3–5 real buyer questions per case, or leave empty and lose the `FAQPage` schema on those pages.
- **`heroImage` / `heroAlt`** — no landscape hero image ships with the migration. Karen has `karen-mannheim-hero.jpg` (2.2M landscape) in `public/clients/`; the other four don't. Layout skips the `<figure>` render + skips the `image` field in the JSON-LD Article when `heroImage` is empty.

### Girish Sehgal
- **`stats[].source`** — the 25 years / 14 cities / 7,000+ numbers were on the old page as copy, not attributed. Fran to add sources (LinkedIn Analytics + range, CV, etc.) or leave un-sourced.

### Juan Pablo Romero
- **`stats`** — the old page carried label-only badges ("NARRATIVE / POSITIONING / EXPERTISE"), no hard numbers. If JURA Plank or Connecting the Dots has quantitative results (revenue, projects, specs won), Fran to add them.

### Mike Kaeding
- **`stats[].source`** — the three numbers ($230M / 1,000 units / $100M project) were on the old page as copy. Fran to add sources or dates so they read as attributable claims, not marketing.

### Nitin Passi
- **`client.location`** — omitted on the original page (confidential).
- **`client.photo`** — no client photo. Left blank; the byline still renders CRUDA's Fran avatar.
- **`testimonial`** — no testimonial block on the original page (only the pull quote inside the sections). Kept the pull quote inline instead of inventing a separately-attributed testimonial.

## What was NOT invented

- No dates were guessed (`2024-01-01` etc.).
- No FAQ questions were written by Claude.
- No stats were made up. Where the old page had a soft badge, no stat row was created.
- No hero image path was pointed at a random asset that might not exist.

## Where to fill

Each case study lives at `src/content/clients/<slug>.ts`. Edit the fields directly. The registry at `src/content/clients/index.ts` doesn't need touching. Re-run `npm run build` to verify.
