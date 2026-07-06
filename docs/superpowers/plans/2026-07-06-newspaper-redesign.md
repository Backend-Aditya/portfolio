# Newspaper-Style Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the existing Next.js portfolio into a superminimal broadsheet-newspaper look — black ink on cream paper, serif headlines, hairline rules, no cards/gradients/rounded corners/decorative icons — without changing any section's content or data.

**Architecture:** Pure presentational refactor. Each section component keeps its existing data arrays and behavior (GSAP ScrollSmoother scroll-to, links, hrefs) and only changes JSX structure/className. Two new Google fonts (Playfair Display, PT Serif) are added alongside the existing Instrument Sans. Dark mode (`next-themes`, `ThemeProvider`, `ThemeToggle`) is deleted — confirmed unused elsewhere (the only other `next-themes` consumer, `components/ui/sonner.tsx`'s `Toaster`, is never rendered in `app/`).

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind CSS 4 (`@theme inline` tokens in `globals.css`), `next/font/google`, GSAP ScrollSmoother (unchanged), lucide-react icons (trimmed usage).

## Global Constraints

- Background `#f7f4ec` (cream paper), foreground `#1a1a1a` (ink). No accent/red color anywhere.
- Border/rule color `#d8d4c8`, used only as 1px hairline `border-t`/`border-b`/`border-l` rules — never as a boxed card outline with shadow.
- `--radius: 0rem`. No `rounded-*` classes on cards, buttons, or badges.
- Headline serif: Playfair Display. Body serif: PT Serif. Small-caps/eyebrow/nav/meta/dateline text: existing Instrument Sans, always `uppercase tracking-widest`.
- No icon-in-circle decorative badges (Briefcase, GraduationCap, Code2, Layout, Shield, Award, Languages, Calendar, MapPin-as-badge). Exception: Mail, Phone, Github, Linkedin, ExternalLink stay as small inline icons next to functional links only.
- No filled pill buttons. CTAs are either a bordered rectangular box (1px solid `#1a1a1a`, no radius, transparent fill, hover-inverts to filled) or a plain underlined text link.
- No dark mode. Delete `.dark` CSS block, `theme-provider.tsx`, `theme-toggle.tsx`, and all imports/usages of them.
- Content/copy/data arrays are unchanged — only markup and classNames change.

---

### Task 1: Palette, radius, and font tokens in `globals.css`

**Files:**
- Modify: `app/globals.css` (full file replacement)

**Interfaces:**
- Produces: Tailwind color tokens `--color-background`, `--color-foreground`, `--color-card`, `--color-border`, `--color-primary`, `--color-secondary`, `--color-muted`, `--color-accent` (all repointed to ink/paper palette, no red). Produces new font tokens `--font-serif-display` and `--font-serif-body` for use in later tasks via `font-[family-name:var(--font-serif-display)]` or a Tailwind utility class (see Task 2 for how the class names resolve).

- [ ] **Step 1: Replace `app/globals.css` with the paper/ink palette and remove dark mode**

```css
@import 'tailwindcss';
@import 'tw-animate-css';

:root {
  /* Newspaper palette - ink on paper */
  --background: #f7f4ec;
  --foreground: #1a1a1a;
  --card: #f7f4ec;
  --card-foreground: #1a1a1a;
  --popover: #f7f4ec;
  --popover-foreground: #1a1a1a;
  --primary: #1a1a1a;
  --primary-foreground: #f7f4ec;
  --secondary: #efe9da;
  --secondary-foreground: #1a1a1a;
  --muted: #efe9da;
  --muted-foreground: #5c584c;
  --accent: #1a1a1a;
  --accent-foreground: #f7f4ec;
  --destructive: oklch(57.7% .245 27.325);
  --destructive-foreground: #fff;
  --border: #d8d4c8;
  --input: #d8d4c8;
  --ring: #1a1a1a;
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0rem;
  --sidebar: #f7f4ec;
  --sidebar-foreground: #1a1a1a;
  --sidebar-primary: #1a1a1a;
  --sidebar-primary-foreground: #f7f4ec;
  --sidebar-accent: #efe9da;
  --sidebar-accent-foreground: #1a1a1a;
  --sidebar-border: #d8d4c8;
  --sidebar-ring: #1a1a1a;
}

@theme inline {
  --font-sans: 'Instrument Sans', ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --font-mono: 'Geist Mono', monospace;
  --font-serif-display: 'Playfair Display', ui-serif, Georgia, serif;
  --font-serif-body: 'PT Serif', ui-serif, Georgia, serif;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

- [ ] **Step 2: Verify no leftover `.dark` reference**

Run: `grep -rn "\.dark" app/globals.css`
Expected: no output (empty match).

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "style: replace color palette with newspaper ink/paper tokens, drop dark mode"
```

---

### Task 2: Wire Playfair Display + PT Serif fonts, remove ThemeProvider

**Files:**
- Modify: `app/layout.tsx` (full file replacement)
- Delete: `components/theme-provider.tsx`
- Delete: `components/theme-toggle.tsx`

**Interfaces:**
- Consumes: `--font-serif-display` / `--font-serif-body` tokens from Task 1.
- Produces: CSS variables `--font-playfair` and `--font-pt-serif` applied on `<body>` className, usable in later tasks as Tailwind arbitrary classes `font-[family-name:var(--font-playfair)]` and `font-[family-name:var(--font-pt-serif)]`.

- [ ] **Step 1: Confirm `ThemeProvider`/`ThemeToggle` have no other consumers besides navbar**

Run: `grep -rln "ThemeProvider\|ThemeToggle" --include=*.tsx --include=*.ts .`
Expected: only `app/layout.tsx`, `components/theme-provider.tsx`, `components/theme-toggle.tsx`, `components/navbar.tsx` (navbar is updated in Task 3 to drop the import).

- [ ] **Step 2: Replace `app/layout.tsx`**

```tsx
import React from "react";
import type { Metadata } from "next";
import { Instrument_Sans, Geist_Mono, Playfair_Display, PT_Serif } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-serif",
});

export const metadata: Metadata = {
  title: "Aditya Pareek | Laravel Developer",
  description:
    "Personal portfolio of Aditya Pareek - Laravel Developer at Axis Web Art building scalable web applications with PHP and Laravel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${ptSerif.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Delete the theme files**

```bash
git rm components/theme-provider.tsx components/theme-toggle.tsx
```

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add Playfair Display and PT Serif fonts, remove dark-mode provider/toggle"
```

---

### Task 3: Redesign `navbar.tsx` as a masthead

**Files:**
- Modify: `components/navbar.tsx` (full file replacement)

**Interfaces:**
- Consumes: `useIsMobile` (`hooks/use-mobile.ts`, unchanged), `ScrollSmoother` from `gsap/ScrollSmoother` (unchanged).
- Produces: no new exports; `Navbar` component signature unchanged (no props), still renders nav items `About/Experience/Skills/Education/Contact` scrolling to the same section ids.

- [ ] **Step 1: Replace `components/navbar.tsx`**

```tsx
"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import ScrollSmoother from "gsap/ScrollSmoother";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

const dateline = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function Navbar() {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    if (isMobile) {
      setMobileMenuOpen(false);

      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(el, true);
    }
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 z-50 w-full border-b border-border bg-background"
    >
      {/* Dateline strip */}
      <div className="hidden border-b border-border px-6 py-1.5 text-center text-[11px] uppercase tracking-widest text-muted-foreground lg:block lg:px-8">
        {dateline} &middot; Sardarshahar, Rajasthan, India
      </div>

      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Nameplate */}
        <Link
          href="/"
          className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight"
        >
          Aditya Pareek
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item, i) => (
            <span key={item.id} className="flex items-center">
              {i > 0 && (
                <span className="mx-2 text-muted-foreground" aria-hidden>
                  &middot;
                </span>
              )}
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-xs font-semibold uppercase tracking-widest text-foreground/80 underline-offset-4 hover:text-foreground hover:underline"
              >
                {item.label}
              </button>
            </span>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="p-2 -mr-2 lg:hidden"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "border-t border-border transition-all duration-300 ease-in-out overflow-hidden lg:hidden",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="space-y-1 px-6 py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full py-2 text-left text-sm font-semibold uppercase tracking-widest text-foreground/80 hover:text-foreground"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/navbar.tsx
git commit -m "style: redesign navbar as newspaper masthead with dateline strip"
```

---

### Task 4: Redesign `hero-section.tsx` as the front-page lead story

**Files:**
- Modify: `components/hero-section.tsx` (full file replacement)

**Interfaces:**
- Consumes: `useIsMobile`, `ScrollSmoother` (unchanged), `Button` component only for the bordered CTA variant handled via className overrides (existing `components/ui/button.tsx` untouched).
- Produces: `HeroSection` component, unchanged signature, still scrolls to `#about` and `#contact`.

- [ ] **Step 1: Replace `components/hero-section.tsx`**

```tsx
"use client";

import { ArrowDown, FileText } from "lucide-react";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useIsMobile } from "@/hooks/use-mobile";

export function HeroSection() {
  const isMobile = useIsMobile();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const targetY = el.getBoundingClientRect().top + window.pageYOffset;

    if (isMobile) {
      window.scrollTo({
        top: targetY - 64,
        behavior: "smooth",
      });
      return;
    }

    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(targetY, true);
    } else {
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="flex min-h-dvh flex-col items-center justify-center px-6 pt-24 pb-24 text-center lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Profile
        </p>

        <h1 className="text-balance font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Aditya Pareek
        </h1>

        <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
          Sardarshahar, Rajasthan, India &middot; Laravel Developer
        </p>

        <p className="mt-8 font-[family-name:var(--font-pt-serif)] text-lg sm:text-xl">
          A <span className="font-bold">Laravel Developer</span> building{" "}
          <span className="font-bold">
            scalable, high-performance web applications
          </span>
          .
        </p>

        <p className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-pt-serif)] text-base text-muted-foreground sm:text-lg">
          Building scalable web applications across music streaming, eCommerce,
          business listings, and learning management systems.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="border border-foreground px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
          >
            Get in Touch
          </button>

          <a
            href="/portfolio/aditya pareek.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest underline underline-offset-4 hover:text-muted-foreground"
          >
            <FileText className="h-4 w-4" />
            View Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground"
        aria-label="Scroll to about section"
      >
        <span>Scroll</span>
        <ArrowDown className="h-4 w-4" />
      </button>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/hero-section.tsx
git commit -m "style: redesign hero as newspaper front-page lead story"
```

---

### Task 5: Redesign `about-section.tsx` as the story's opening column

**Files:**
- Modify: `components/about-section.tsx` (full file replacement)

**Interfaces:**
- Produces: `AboutSection` component, unchanged signature, unchanged copy.

- [ ] **Step 1: Replace `components/about-section.tsx`**

```tsx
export function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-border py-16 md:py-24 scroll-mt-16"
      aria-label="About me"
    >
      <div className="mb-8">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          About
        </span>
        <h2 className="text-balance font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight sm:text-4xl">
          A passionate developer
        </h2>
      </div>
      <div className="mx-auto max-w-2xl space-y-6 font-[family-name:var(--font-pt-serif)] text-foreground/90 first-letter:float-left first-letter:mr-2 first-letter:font-[family-name:var(--font-playfair)] first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.85]">
        <p className="text-lg leading-relaxed">
          As a <span className="font-bold">Laravel Developer</span> at{" "}
          <span className="font-bold">Axis Web Art Private Limited</span>, I
          contribute to the development of scalable web applications across
          diverse domains such as <span className="font-bold">music streaming</span>,{" "}
          <span className="font-bold">eCommerce</span>,{" "}
          <span className="font-bold">business listings</span>, and{" "}
          <span className="font-bold">learning management systems</span>.
        </p>
        <p className="leading-relaxed">
          My work involves building <span className="font-bold">RESTful APIs</span>,
          implementing <span className="font-bold">robust security measures</span>, and
          enhancing UI/UX through responsive front-end integrations. I focus on
          optimizing workflow efficiency and delivering comprehensive solutions
          that meet client needs.
        </p>
        <p className="leading-relaxed">
          Currently pursuing a{" "}
          <span className="font-bold">
            {"Bachelor's degree in Computer Applications"}
          </span>{" "}
          at Manipal University Jaipur, I leverage my proficiency in{" "}
          <span className="font-bold">Laravel</span>,{" "}
          <span className="font-bold">PHP</span>, and{" "}
          <span className="font-bold">JavaScript</span> to deliver streamlined
          solutions.
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/about-section.tsx
git commit -m "style: redesign about section as print column with drop cap"
```

---

### Task 6: Redesign `experience-section.tsx` as article entries

**Files:**
- Modify: `components/experience-section.tsx` (full file replacement)

**Interfaces:**
- Consumes: same `experiences` data array (unchanged fields: `period`, `title`, `company`, `location`, `companyUrl`, `description`, `technologies`).
- Produces: `ExperienceSection` component, unchanged signature.

- [ ] **Step 1: Replace `components/experience-section.tsx`**

```tsx
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    period: "Nov 2023 — Present",
    title: "Laravel Developer",
    company: "Axis Web Art Private Limited",
    location: "Sardarshahar",
    companyUrl: "https://axiswebart.com",
    description: [
      "Developed scalable Laravel web applications to enhance data management and optimize workflow efficiency.",
      "Integrated RESTful APIs for seamless communication across various systems and services.",
      "Improved UI/UX by implementing responsive front-end integrations and robust security measures.",
      "Delivered comprehensive solutions across multiple domains, including music streaming and eCommerce.",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "REST APIs",
      "JavaScript",
      "Security",
    ],
  },
  {
    period: "May 2023 — Nov 2023",
    title: "Web Developer",
    company: "TechZento Solutions",
    location: "Sardarshahar",
    companyUrl: "#",
    description: [
      "Developed dynamic web applications using Laravel, focusing on efficient CRUD operations.",
      "Optimized SQL queries to enhance application performance and improve data handling.",
      "Integrated responsive front-end interfaces to elevate user experience.",
      "Implemented security protocols to safeguard data and maintain system integrity.",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "SQL Optimization", "Frontend"],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-t border-border py-16 md:py-24 scroll-mt-16"
      aria-label="Work experience"
    >
      <div className="mb-12">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Experience
        </span>
        <h2 className="text-balance font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight sm:text-4xl">
          Where I{"'"}ve worked
        </h2>
      </div>
      <div className="mx-auto max-w-4xl divide-y divide-border">
        {experiences.map((experience, index) => (
          <div key={index} className="py-8 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold">
                <Link
                  href={experience.companyUrl}
                  className="inline-flex flex-wrap items-center gap-1.5 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{experience.title}</span>
                  <span className="text-muted-foreground">&mdash;</span>
                  <span>{experience.company}</span>
                  {experience.companyUrl !== "#" && (
                    <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                  )}
                </Link>
              </h3>
              <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {experience.period} &middot; {experience.location}
              </span>
            </div>
            <ul className="mt-4 space-y-2 font-[family-name:var(--font-pt-serif)] text-foreground/90">
              {experience.description.map((item, i) => (
                <li key={i} className="flex gap-2 leading-relaxed">
                  <span aria-hidden>&mdash;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
              Stack: {experience.technologies.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/experience-section.tsx
git commit -m "style: redesign experience section as newspaper article entries"
```

---

### Task 7: Redesign `skills-section.tsx` as a classifieds block

**Files:**
- Modify: `components/skills-section.tsx` (full file replacement)

**Interfaces:**
- Consumes: same `skillCategories` and `languages` data arrays (unchanged fields; `icon` field is dropped from render but array shape can stay or be trimmed — trimmed below since it's now unused).
- Produces: `SkillsSection` component, unchanged signature.

- [ ] **Step 1: Replace `components/skills-section.tsx`**

```tsx
const skillCategories = [
  {
    title: "Backend",
    skills: ["Laravel", "PHP", "REST APIs", "MySQL", "Database Optimization"],
  },
  {
    title: "Frontend",
    skills: ["JavaScript", "Responsive Design", "HTML/CSS", "UI/UX Integration"],
  },
  {
    title: "Core Competencies",
    skills: [
      "CRUD Operations",
      "Security Protocols",
      "Data Management",
      "API Integration",
    ],
  },
  {
    title: "Certifications",
    skills: [
      "Full-Stack Web Development with Laravel & PHP",
      "Advanced Laravel",
      "Postman API Fundamentals",
    ],
  },
];

const languages = [
  { name: "Hindi", level: "Native or Bilingual" },
  { name: "English", level: "Professional Working" },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-t border-border py-16 md:py-24 scroll-mt-16"
      aria-label="Skills"
    >
      <div className="mb-12">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Skills
        </span>
        <h2 className="text-balance font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight sm:text-4xl">
          Technologies I work with
        </h2>
      </div>
      <div className="mx-auto max-w-5xl">
        <div className="grid divide-y divide-border border-t border-b border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {skillCategories.map((category) => (
            <div key={category.title} className="px-0 py-6 sm:px-8 sm:first:pl-0 sm:last:pr-0">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest">
                {category.title}
              </h3>
              <p className="font-[family-name:var(--font-pt-serif)] leading-relaxed text-foreground/90">
                {category.skills.join(", ")}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest">
            Languages
          </h3>
          <p className="font-[family-name:var(--font-pt-serif)] leading-relaxed text-foreground/90">
            {languages.map((l) => `${l.name} (${l.level})`).join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/skills-section.tsx
git commit -m "style: redesign skills section as classifieds-style rule-divided grid"
```

---

### Task 8: Redesign `education-section.tsx` as a notice entry

**Files:**
- Modify: `components/education-section.tsx` (full file replacement)

**Interfaces:**
- Produces: `EducationSection` component, unchanged signature, unchanged copy.

- [ ] **Step 1: Replace `components/education-section.tsx`**

```tsx
export function EducationSection() {
  return (
    <section
      id="education"
      className="border-t border-border py-16 md:py-24 scroll-mt-16"
      aria-label="Education"
    >
      <div className="mb-12">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Education
        </span>
        <h2 className="text-balance font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight sm:text-4xl">
          Academic background
        </h2>
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold">
            Manipal University Jaipur
          </h3>
          <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            August 2023 — August 2026 &middot; Jaipur, Rajasthan
          </span>
        </div>
        <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
          {"Bachelor's degree, Computer Applications"}
        </p>
        <p className="mt-4 font-[family-name:var(--font-pt-serif)] leading-relaxed text-foreground/90">
          Currently pursuing a BCA degree while gaining hands-on experience as a
          Laravel Developer, combining academic knowledge with practical
          industry skills in web development and software engineering.
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/education-section.tsx
git commit -m "style: redesign education section as newspaper notice entry"
```

---

### Task 9: Redesign `contact-section.tsx` as a directory listing

**Files:**
- Modify: `components/contact-section.tsx` (full file replacement)

**Interfaces:**
- Consumes: same `contactInfo` and `socialLinks` data arrays (unchanged hrefs/values).
- Produces: `ContactSection` component, unchanged signature.

- [ ] **Step 1: Replace `components/contact-section.tsx`**

```tsx
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "aditya58384@gmail.com",
    href: "mailto:aditya58384@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 742694033",
    href: "tel:+91742694033",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sardarshahar, Rajasthan, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Backend-Aditya",
    username: "@Backend-Aditya",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/adityapareek05",
    username: "in/adityapareek05",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-border py-16 md:py-24 scroll-mt-16"
      aria-label="Contact"
    >
      <div className="mb-12">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Contact
        </span>
        <h2 className="text-balance font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight sm:text-4xl">
          {"Let's work together"}
        </h2>
        <p className="mt-4 max-w-2xl font-[family-name:var(--font-pt-serif)] text-foreground/90">
          {
            "I'm always open to discussing new projects, creative ideas, or opportunities to build scalable web applications."
          }
        </p>
      </div>
      <div className="mx-auto grid max-w-4xl divide-y divide-border border-t border-b border-border md:grid-cols-2 md:divide-x md:divide-y-0">
        {/* Directory */}
        <div className="py-6 md:pr-8 md:py-0">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest">
            Contact Information
          </h3>
          <div className="space-y-3">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <item.icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                <div>
                  <span className="mr-2 text-xs uppercase tracking-widest text-muted-foreground">
                    {item.label}:
                  </span>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="font-[family-name:var(--font-pt-serif)] underline-offset-4 hover:underline"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <span className="font-[family-name:var(--font-pt-serif)]">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social + CTA */}
        <div className="py-6 md:pl-8 md:py-0">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest">
            Connect with me
          </h3>
          <div className="space-y-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <social.icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="font-[family-name:var(--font-pt-serif)] underline-offset-4 hover:underline">
                  {social.label} &middot; {social.username}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="mailto:aditya58384@gmail.com"
              className="inline-flex items-center gap-2 border border-foreground px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
            >
              <Send className="h-4 w-4" />
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/contact-section.tsx
git commit -m "style: redesign contact section as newspaper directory listing"
```

---

### Task 10: Redesign `footer.tsx` as a slim colophon

**Files:**
- Modify: `components/footer.tsx` (full file replacement)

**Interfaces:**
- Produces: `Footer` component, unchanged signature.

- [ ] **Step 1: Replace `components/footer.tsx`**

```tsx
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Backend-Aditya", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/adityapareek05",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:aditya58384@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <Link
              href="/"
              className="font-[family-name:var(--font-playfair)] text-lg font-bold"
            >
              Aditya Pareek
            </Link>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Laravel Developer crafting scalable web applications
            </p>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-6 border-t border-border pt-6 text-center text-xs uppercase tracking-widest text-muted-foreground">
          &copy; {new Date().getFullYear()} Aditya Pareek. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/footer.tsx
git commit -m "style: redesign footer as slim newspaper colophon"
```

---

### Task 11: Final verification pass

**Files:** none (verification only)

**Interfaces:** none.

- [ ] **Step 1: Start the dev server**

Run: `npm run dev`
Expected: server starts on `http://localhost:3000` with no build errors (no missing `next-themes` imports, no missing font references).

- [ ] **Step 2: Confirm no dangling references to deleted theme files**

Run: `grep -rln "theme-provider\|theme-toggle\|next-themes" app components --include=*.tsx --include=*.ts`
Expected: only `components/ui/sonner.tsx` (unused, out of scope — leave as-is since it is never rendered).

- [ ] **Step 3: Visually verify in browser**

Open `http://localhost:3000`, check at mobile (375px), tablet (768px), and desktop (1280px) widths:
- Masthead shows dateline strip (desktop), serif nameplate, small-caps nav with `·` separators, no theme toggle button anywhere.
- Hero, About, Experience, Skills, Education, Contact all render on cream background with black ink text, serif headlines, hairline rules between sections — no rounded corners, no card shadows, no colored badges/pills.
- Clicking nav items and the hero "Get in Touch"/"Scroll" controls still smooth-scrolls to the right section.
- "View Resume" link opens the PDF; email/phone/social links in Contact and Footer have correct `href`s and open correctly.
- No console errors related to missing fonts or removed theme provider.

- [ ] **Step 4: Commit any final small fixes found during visual verification, otherwise no commit needed**

If nothing to fix, this task ends without a commit (Task 10's commit is the last one).

---

## Self-Review Notes

- **Spec coverage:** every section in the spec (globals.css, layout.tsx, navbar, hero, about, experience, skills, education, contact, footer, theme-provider/theme-toggle removal) maps to Task 1–10. Task 11 covers the spec's "Testing / verification" section.
- **Placeholders:** none — every step has complete, pasteable code.
- **Type/name consistency:** `font-[family-name:var(--font-playfair)]` and `font-[family-name:var(--font-pt-serif)]` variable names match the `variable:` keys set in Task 2's `layout.tsx` (`--font-playfair`, `--font-pt-serif`) and are used identically across Tasks 4–10. Section ids (`about`, `experience`, `skills`, `education`, `contact`) are unchanged from the original so `navbar.tsx`'s `scrollToSection` and `hero-section.tsx`'s `scrollToSection` keep working against Task 3/5–9's markup without modification.
