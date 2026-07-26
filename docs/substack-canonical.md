# Essays canonical policy

**Owner:** Fran. This is a task in Substack, not a code change.

## Rule

Every essay lives at `https://www.thecruda.com/essays/[slug]` as its canonical
URL. Substack becomes distribution — the same essay is re-published there,
but with a `<link rel="canonical">` pointing back to thecruda.com.

That way the audience stays where it already is, and the domain equity comes
home to CRUDA instead of building for Substack.

## What Fran does in Substack

For each published essay:

1. Open the Substack post editor.
2. Post → **Settings** → **Canonical URL** (or the equivalent field
   labelled "Original URL" in the Substack UI).
3. Paste `https://www.thecruda.com/essays/<slug>` for the matching essay.
4. Save.

## Applies going forward

Do this for every new essay. For old Substack essays that get migrated to
thecruda.com, also update the historical Substack post's canonical to the
new thecruda.com URL.

## Not our job

- Substack account, Substack domain, Substack subscribers.
- Any redirect on the Substack side. Canonical only.

## Related

- Model essay: `src/content/essays/founder-worth-70-million.ts`
- Layout: `src/components/EssayLayout.tsx`
