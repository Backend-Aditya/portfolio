# Newspaper-style portfolio redesign

## Goal
Redesign the existing Next.js portfolio (hero, about, experience, skills, education, contact, navbar, footer) into a superminimal broadsheet-newspaper aesthetic — pure black-on-cream ink, classic serif type, hairline rules, no cards/gradients/rounded corners/decorative icons. Section content and copy stay as-is; only presentation changes.

## Non-goals
- No content/copy rewrites (existing text stays, minor structural re-labeling only, e.g. "Experience" section framed as "Where I've Worked").
- No new sections or removed sections.
- No CMS/data-model changes — same hardcoded data arrays in each component.
- No dark mode. Theme toggle and dark mode CSS variables are removed.

## Visual system

- **Color:** pure paper/ink only. Background `#f7f4ec` (cream), foreground `#1a1a1a` (near-black ink). No accent color, no `--primary` red. Single border/rule color derived from ink at low opacity (e.g. `#1a1a1a` at ~20-25% or a fixed hairline gray like `#d8d4c8`).
- **Radius:** 0 everywhere. Remove all `rounded-*` usage tied to cards/buttons/badges.
- **Typography:**
  - Headline serif: Playfair Display (via `next/font/google`), used for name/wordmark, section headlines, job/degree titles.
  - Body serif: PT Serif (via `next/font/google`), used for paragraph text, bullets, descriptions.
  - Small-caps/eyebrow/nav/meta text: existing sans (Instrument Sans) kept only for uppercase tracked labels (kicker, nav items, datelines, tech-stack lines) — set with `tracking-widest uppercase text-xs sm:text-sm`.
  - Geist Mono removed if unused elsewhere (check before deleting).
- **Rules/dividers:** replace all `border` usages between sections/cards with 1px hairline `border-t`/`border-b` rules. No box-shadow, no hover elevation.
- **Icons:** remove decorative icon-in-circle badges (Briefcase, GraduationCap, Code2, Layout, Shield, Award, Languages, MapPin-as-badge, Calendar). Keep small inline icons only for direct contact affordances: Mail, Phone, Github, Linkedin in the contact section and footer.
- **Buttons:** replace filled pill buttons with bordered rectangular "classified-ad box" buttons (1px solid border, no radius, no fill) or plain underlined text links for lower-emphasis CTAs.

## Component-by-component changes

### `app/globals.css`
- Replace `:root` color tokens with paper/ink palette; delete `.dark` block entirely.
- Update `--font-sans` mapping if font variables change; add `--font-serif-display` and `--font-serif-body` theme tokens.
- Set `--radius: 0`.

### `app/layout.tsx`
- Add `Playfair_Display` and `PT_Serif` from `next/font/google`, wire their CSS variables into `className` alongside Instrument Sans.
- Remove `ThemeProvider`'s dark-mode concerns if it only exists for theme toggle (keep component only if still needed for system, otherwise simplify — confirm no other dark-mode consumers before removing).

### `components/navbar.tsx`
- Add a slim top dateline strip (date + location, small-caps, tiny type) above the main nav row.
- Wordmark "Aditya." → full serif nameplate "ADITYA PAREEK" (or stylized masthead treatment), no colored dot.
- Nav items: small-caps, separated by "·" characters instead of gap-only spacing; remove hover pill background, use underline-on-hover instead.
- Remove `ThemeToggle` usage from desktop and mobile nav.
- Keep scroll-to-section behavior (GSAP ScrollSmoother) unchanged — presentation-only change.

### `components/hero-section.tsx`
- Remove gradient blob backgrounds entirely.
- Remove rounded pill location badge; fold location into a dateline meta line under the headline (small-caps).
- Kicker line above headline: small-caps "PROFILE".
- Headline: large serif, no gradient text-clip effect — solid ink color.
- Dek/subhead paragraphs: PT Serif body copy.
- CTAs: "Get in Touch" as bordered rectangular button; "View Resume" as underlined text link with small inline FileText icon or plain text — no filled/pill buttons.
- Scroll indicator: keep, restyle as plain small-caps text + arrow, no bounce-in-circle styling changes needed beyond color.

### `components/about-section.tsx`
- Reframe as continuation of the front-page story: small-caps eyebrow stays, headline in serif.
- Body paragraphs in PT Serif, left-aligned (not centered) within a constrained column width (`max-w-2xl` or similar) to read like a print column. Optional drop-cap on first paragraph's first letter (CSS `::first-letter`).
- Remove centered-text treatment in favor of column-style left alignment.

### `components/experience-section.tsx`
- Section eyebrow: small-caps "WHERE I'VE WORKED" (or similar), headline in serif.
- Each entry: remove card/border-radius/hover-shadow wrapper. Use `border-t` hairline rule between entries instead of individual boxed cards.
- Remove icon-in-circle (Briefcase) badge.
- Title line: serif, "Title — Company" (em dash instead of `@` + icon), external link indicator as plain superscript/text arrow instead of icon, or keep ExternalLink icon small inline (acceptable exception since it's a functional link affordance, not decorative).
- Period/location: recombine into one small-caps dateline row (e.g. `NOV 2023 — PRESENT · SARDARSHAHAR`) instead of separate pill badge + muted text line.
- Description bullets: replace colored dot markers with em-dash (`—`) prefix, body text in PT Serif.
- Technologies: replace pill tags with a single small-caps comma-separated line prefixed by a label (e.g. `STACK: Laravel, PHP, MySQL, REST APIs, JavaScript, Security`).

### `components/skills-section.tsx`
- Section framed as a classifieds-style grid: categories separated by vertical hairline rules (`divide-x` on desktop grid, `divide-y` stacked on mobile) instead of individual bordered/rounded cards.
- Remove icon-in-circle per category.
- Category title: small-caps bold serif or sans (consistent with other section eyebrows).
- Skills list: plain comma-separated PT Serif text instead of pill badges.
- Languages block: same treatment, a labeled line rather than pill chips.

### `components/education-section.tsx`
- Same entry pattern as experience: no card, hairline rule above/below, serif institution name as headline, degree + dateline (dates · location) as small-caps meta line, description as PT Serif body text.
- Remove GraduationCap/Calendar/MapPin icon badges (plain text only, consistent with "drop decorative icons" decision).

### `components/contact-section.tsx`
- Reframe as a directory listing: each contact item (Email, Phone, Location) as a labeled row separated by hairline rules, small-caps label + serif/body value. Keep inline Mail/Phone icons (functional contact affordances).
- Social links: keep inline Github/Linkedin icons per the icon decision, styled as underlined text rows instead of bordered card links.
- "Send a Message" button: bordered rectangular classified-box button, no fill, no radius.
- Remove card/grid-with-rounded-corners wrapper; use a two-column layout divided by a vertical hairline rule on desktop, stacked with horizontal rules on mobile.

### `components/footer.tsx`
- Remove `bg-card` and rounded/bordered social icon buttons.
- Slim colophon layout: wordmark + tagline left, social icons (plain, no border box) right, top hairline rule, bottom copyright line — all on the same paper background as the rest of the page (no distinct card background).

### `components/theme-toggle.tsx` / `components/theme-provider.tsx`
- Confirm no other pages/components depend on dark mode; remove `ThemeToggle` usage from navbar. Decide at implementation time whether to delete the files or leave unused (default: delete if nothing else imports them, to avoid dead code).

## Data flow
No changes — all sections keep their existing hardcoded content arrays (`experiences`, `skillCategories`, `languages`, `contactInfo`, `socialLinks`). Only JSX structure and className styling change.

## Testing / verification
- No automated tests exist for this presentational-only project; verification is visual.
- Run `pnpm dev` (or `npm run dev`), view in browser at each breakpoint (mobile/tablet/desktop), confirm:
  - No dark mode toggle remains and no `.dark` class styling leaks through.
  - All sections render with paper/ink palette, serif headlines, hairline rules, no rounded corners/shadows/gradients.
  - Scroll-to-section nav (GSAP ScrollSmoother) still functions.
  - Contact/resume/social links still functional (correct `href`s unchanged).
- Use the `verify` skill / manual browser check (via `run` skill or claude-in-chrome) after implementation to confirm the live app matches the design before calling this done.

## Risks / open questions
- `ThemeProvider`/`next-themes` may be used elsewhere (e.g. `sonner`/`toast` components) for color-scheme awareness even without a toggle — check before deleting `theme-provider.tsx` outright; safer to keep the provider but drop the visible toggle button and the `.dark` CSS block content.
- Playfair Display at very large sizes must stay legible on mobile — verify headline sizing doesn't overflow narrow viewports.
