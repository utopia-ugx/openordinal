# Open Ordinal - Content Brief
*Paste this entire document at the start of every new entry session in Claude Code.*

---

## What You Are

You are building one archive entry for **Open Ordinal**, a quiet research archive of structured economic and social data analysis focused on Africa.

Your job is to research, structure, write, and produce a complete publish-ready entry from the brief below. You may use AI tools for search, cleaning, drafting, and chart assembly, but interpretation must remain human-reviewed.

Do not begin drafting before confirming the ANGLE. Do not finalize without explicit LIMITATIONS.

---

## Collaboration Protocol (Non-Negotiable)

- Question-first: If the user asks a question or challenges wording, answer directly first. Do not edit files until the user explicitly asks for a change.
- Change control: Only edit files after explicit approval language such as `change`, `update`, `apply`, `rewrite`, or `go ahead`.
- Data-first debate: Every substantive claim must be tied to cited evidence, or clearly labeled as inference with limits.
- Counter-check: Before locking wording, state what the data supports, what it does not support, and the strongest credible alternative interpretation.
- EN/FR sync: When a content change is approved, mirror meaningful edits in English and French before finalizing.

---

## The Brief

```
TOPIC:
[What is the subject of this entry?]

ANGLE (optional - leave blank and Claude Code will propose one):
[What specific question or framing should this entry take?]

FORMAT (optional - choose one):
[Snapshot | Trend | Comparison | Driver | Myth check]

SOURCES (optional - leave blank and Claude Code will search):
[Any specific datasets, reports, URLs, or institutions to draw from]

SCOPE:
[Countries / region / time period - always required]

NOTES (optional):
[Tone guidance, what to avoid, specific data points to highlight, anything else]
```

---

## Workflow

Follow these steps in order.

**Step 1 - Confirm the angle**
If ANGLE is blank, propose two or three angle options. Wait for approval.
If ANGLE is provided, restate it in one sentence.

**Step 2 - Choose a format**
Pick one format (or propose one) before writing:
- Snapshot
- Trend
- Comparison
- Driver
- Myth check

The format changes structure and heading choices. It does not change evidence standards.

**Step 3 - Find data**
If SOURCES are provided, start there and supplement as needed.
If SOURCES are blank, prioritize:
1. World Bank World Development Indicators
2. African Development Bank Open Data
3. UN datasets and agencies
4. IMF datasets
5. National statistical offices
6. Academic and NGO datasets

Always prefer primary sources over aggregators. Always record latest available update year.

**Step 4 - Assess data before writing**
Share:
- 3 to 5 bullet points on what the data actually shows
- Key data quality concerns
- Any major interpretive risk

Wait for green light before drafting full prose.

**Step 5 - Build the entry**
Use a structure that fits the selected format.
Do not force one universal heading sequence.
Keep all non-negotiable standards (below).
Prioritize readability for non-specialist readers:
- short sections with clear subheadings
- one chart per section where possible
- plain-language takeaway after each major evidence block

**Step 6 - Save files**
Save:
- `/src/content/entries/[slug].mdx` - English entry
- `/src/content/entries-fr/[slug].mdx` - French entry
- `/src/content/data/[slug].csv` - canonical raw dataset (required)
- `/src/content/data/[slug].json` - optional machine-readable companion
- `/src/content/data/[slug]-chart.svg` - chart asset

Use the filename as slug in both language folders.
Default workflow is EN and FR in the same update.
If an EN-first review is explicitly requested, complete EN first, then mirror FR before final publish.

---

## Non-Negotiable Standards

Every entry must include all items below, regardless of format.

### 1) Frontmatter (schema-compatible only)
```yaml
---
title: ""
title_fr: ""
category: ""         # Economics | Demographics | Technology | Governance | Health | Education
date: ""             # YYYY-MM-DD
scope: ""
scope_fr: ""
dataset: ""
source_org: ""
entry_number: ""
translated: false
correction_of: ""
description: ""      # <=160 chars
key_stat: ""         # optional OG highlight
draft: true
---
```

Do not add unsupported frontmatter keys unless the schema is updated.

### 1.1) Category taxonomy

- `Economics`: Money, resources, and markets across African economies. Use for GDP, inflation, trade, debt, remittances, currency, investment, cost of living, and labour markets. Do not use for health spending or education budgets when the piece is mainly about sector outcomes.
- `Demographics`: Population structure and change. Use for births, fertility, mortality, migration, urbanisation, age structure, and household composition. Do not use for economic consequences of demographic change when the main claim is about markets or incomes.
- `Technology`: Digital and technical infrastructure and adoption. Use for internet access, mobile money, digital gaps, STEM participation, and tech sector growth. Do not use for technology regulation or state control of tech systems.
- `Governance`: How states and institutions function. Use for corruption, elections, rule of law, regulatory quality, public service delivery, and press freedom. Do not use for economic policy outcomes when the main claim is macroeconomic or market-facing.
- `Health`: Physical wellbeing and health system conditions. Use for disease burden, life expectancy, maternal and child mortality, nutrition, healthcare access, and system capacity. Do not use for health spending when the entry is mainly about fiscal burden or macro allocation.
- `Education`: Learning and human capital development. Use for enrollment, attainment, literacy, learning outcomes, teacher capacity, and school-to-work pipelines. Do not use for STEM careers when the entry is mainly about technology participation or the tech sector.

Classification rule:

- Classify by the primary claim of the entry, not just the dataset being used.

### 1.2) Slug and title versioning policy

- Use a yearless topic slug for the living page, e.g. `africas-most-expensive-cities`.
- Put snapshot timing in scope/subtitle/body, not as a permanent part of the main topic slug.
- If you publish explicit snapshot editions, use dated suffixes, e.g. `africas-most-expensive-cities-2025-mid`.
- Never silently repurpose an old dated slug with new data.
- If a slug strategy changes after publication, preserve old URLs with redirects.
- Prefer yearless main titles for living pages; keep the snapshot date in metadata and evidence sections.

### 2) Opening paragraph
One paragraph, no heading label.
It can frame tension or stakes, but every factual claim must be supported later.

### 3) Evidence body
At least one substantial evidence section with inline citations.
You can label sections differently by format.
Keep paragraphs short (about 2 to 4 sentences) and scannable.

### 4) Charts
At least one SVG chart that matches chart standards below.
Multiple charts are encouraged when each one answers a different question.
Do not cluster all charts together if they map to different sections.
After each chart, include a short plain-language takeaway.

### 5) Limitations block
3 to 5 clear limitations, including:
- one about data quality or coverage
- one about metric limits
- one about scope choice

### 6) Sources block
Must include:
- Primary
- Context
- Method (one line on AI/tool usage)

### 7) EN/FR parity
Meaningful content updates must exist in English and French.
EN-first drafting is allowed for review, but French must be updated before final publish.

---

## Optional Modules

Use when useful, skip when not needed:
- Lead summary
- Context
- Key figures
- Interpretation
- So what this means
- See also
- Method note in body (if unusually important)

Headings are optional and flexible. Clarity matters more than template uniformity.

---

## Format Playbooks

These are recommended patterns, not rigid rules.

### Snapshot
Best for current rankings or current-state mapping.
Suggested flow:
Opening -> (optional lead summary) -> key figures -> chart -> interpretation -> limitations -> sources

### Trend
Best for multi-year directional change.
Suggested flow:
Opening -> context on baseline -> trend evidence -> chart(s) -> interpretation of turning points -> limitations -> sources

### Comparison
Best for country, city, or group contrasts.
Suggested flow:
Opening -> comparison frame -> side-by-side evidence -> chart/table -> interpretation of divergence -> limitations -> sources

### Driver
Best for testing one plausible explanatory mechanism.
Suggested flow:
Opening -> mechanism definition -> evidence for and against -> chart -> cautious interpretation -> limitations -> sources

### Myth check
Best for validating or falsifying a common claim.
Suggested flow:
Claim statement -> evidence test -> result -> what remains uncertain -> limitations -> sources

---

## Writing Standards

**Tone:** calm, precise, encyclopedic where possible.

**Inline citations:** use Wikipedia-style numbered references in superscript, linking to a numbered References list.
Example inline marker: `<sup><a href="#ref-1">[1]</a></sup>`
Example reference item: `<li id="ref-1">Source details...</li>`

**Citation discipline:**
- avoid over-citation and citation stacking
- use one superscript for one sentence/claim where possible
- if consecutive sentences in the same paragraph rely on the same source, use one citation at the end of the relevant sentence block rather than repeating the same superscript
- when a sentence depends on different datasets, either split into two sentences or cite the strongest single source
- ensure all consulted primary sources are listed in References even if not cited repeatedly in-line

**Use careful language:**
- "The data suggests..."
- "The trend indicates..."
- "One reading is..."
- "An alternative reading is..."

**Avoid:**
- sensational adjectives
- unsupported causal claims
- continent-wide generalizations that ignore variation
- em dashes in prose (prefer commas, colons, or full stops)

**Bias and uncertainty:**
Where interpretations differ, present credible alternatives.
Honesty about uncertainty is required.

---

## Chart Standards

- Format: SVG
- Style: monochrome by default; use color only when encoding meaning
- Font: Geist Mono for axes and labels
- Gridlines: minimal, subtle dashed guides only
- Label directly where possible; avoid unnecessary legends
- Include title, subtitle (source + year + scope), and chart note
- Do not clip or hide negative values
- Place charts near the section they support, not all in one block

---

## Readability Defaults

- Write for an ordinary reader first, analyst second.
- Use descriptive subheadings; avoid numbered section titles unless the brief specifically asks for numbering.
- Keep the narrative path clear: question -> evidence -> takeaway -> limits.
- Use plain language for interpretation; keep jargon minimal and defined once.
- Keep non-core sections (Limitations, See also, Sources) collapsible in the entry layout.

---

## Quality Checklist Before Finalizing

- One clear question answered
- Claims traceable to cited sources
- Limitations are explicit and specific
- Structure fits chosen format
- Headings and section pacing support full read-through
- Citations are not over-stacked and references are complete
- Slug/title policy followed (yearless living page, dated editions when needed, redirects preserved)
- Files saved in both EN and FR entry folders
- Required data and chart files saved

---

## Corrections Policy

Entries are dated snapshots.
If an error is found:
- do not silently rewrite original entry
- publish a correction entry linked to original
- use `correction_of` in frontmatter

---

## Note on AI Use

AI tools may assist with search, cleaning, charting, and drafting structure.
All interpretation must be human-reviewed before publication.
AI language is a draft input, not a final conclusion.

---

## Publication Voice

Open Ordinal writes like a careful researcher speaking to a smart friend: direct, calm, and clear. It avoids drama, avoids false certainty, and names uncertainty without hiding the signal. It says what the data shows, states what it cannot show, and lets the reader verify the claim path.

---

## Persona: Ama

Every entry is written for Ama.

- She is educated, curious, and invested in African outcomes.
- She is not a specialist in every dataset, but she is numerate and checks sources.
- She reads quickly and decides early whether a piece is trustworthy.
- She notices overstatement, missing caveats, and weak sourcing.
- She values clear takeaways, explicit limits, and evidence she can reuse.

Write so Ama can:
- understand the claim in one pass,
- trace each key fact to a source,
- see where uncertainty starts,
- and leave with a useful, defensible interpretation.

---

*Open Ordinal · openordinal.org · structured analysis of African data*
