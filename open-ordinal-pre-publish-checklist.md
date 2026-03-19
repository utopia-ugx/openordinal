# Open Ordinal — Pre-Publish Checklist
Run this before every entry goes live. Every box must be checked.

---

## Content
- [ ] The angle matches what was approved in the brief.
- [ ] Every factual claim in evidence sections has an inline citation.
- [ ] If a Key Figures block is used, every figure traces directly to the primary dataset.
- [ ] Limitations are honest and specific (minimum three, none superficial).
- [ ] No generalising language (for example, no "Africa is..." claims that ignore variation).
- [ ] No dramatic language (for example, no "shocking", "revealed", "proves").
- [ ] The opening paragraph earns Ama's attention in the first two sentences.

## Citations
- [ ] Citation style matches project standard (numbered superscript references).
- [ ] Citation stacking is avoided where possible.
- [ ] If consecutive sentences rely on the same source, one citation is used at the end of the relevant claim block.
- [ ] References include all primary sources used, even when not repeatedly cited inline.

## Chart
- [ ] Negative values go below baseline; nothing is clipped.
- [ ] Chart includes title, subtitle, and chart note.
- [ ] Raw data file is saved in `/src/content/data/`.

## Language
- [ ] French translation reads naturally (not word-for-word).
- [ ] If EN-first review is being used, fallback notice behavior is correct.
- [ ] For final publish, EN/FR parity is complete (unless explicitly approved otherwise).

## Technical
- [ ] Frontmatter is schema-complete per current content brief.
- [ ] Slug policy is respected (yearless living slug or explicit dated edition, no silent repurpose).
- [ ] SEO metadata is populated (`description` <= 160 chars where required).
- [ ] LinkedIn image card is generated (if required by the current project brief workflow).

## Final check
- [ ] You are comfortable putting your name behind this entry.

---

## After Publishing
- [ ] Git push to `main` triggers Cloudflare Pages deploy.
- [ ] Confirm entry is live at openordinal.org.
- [ ] Post to LinkedIn (if distribution is scheduled for this entry).
- [ ] Confirm newsletter delivery flow in Listmonk if distribution is expected.

---

*Open Ordinal · openordinal.org*
