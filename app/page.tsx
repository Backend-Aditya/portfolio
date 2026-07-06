import Link from "next/link";

const experiences = [
  {
    title: "Full-Stack Software Engineer",
    company: "Axis Web Art Pvt. Ltd.",
    location: "Sardarshahar, Rajasthan",
    period: "Nov 2023 — Present",
    bullets: [
      "Architected a Shopify-to-logistics delivery integration (Node.js/Express) using Shopify's Carrier Service API, webhooks, and fulfillment mutations to automate shipping rates and cut fulfillment effort by 38%.",
      "Built an AI-powered bloodwork tool in Laravel with a Server-Sent Events pipeline, proxying Google Gemini's API via a Cloudflare Worker to deliver lab-report insights and cut review time by 52%.",
      "Engineered high-performance Shopify Dawn theme features in vanilla JavaScript — scroll-triggered gallery, infinite scroll with position restoration, and a live cart progress bar via fetch interception — lifting mobile conversion by 16%.",
      "Designed a normalized relational schema of 63 tables across 9 domains for an NDIS SaaS platform, backing billing, compliance, and participant management.",
    ],
  },
  {
    title: "Junior Laravel Developer",
    company: "TechZento Solutions",
    location: "Remote",
    period: "May 2023 — Nov 2023",
    bullets: [
      "Developed dynamic CRUD-driven web applications in Laravel, translating client requirements into clean, maintainable features.",
      "Optimized complex SQL queries and Eloquent relationships, reducing key page-load times by 28%.",
      "Implemented authentication, role-based authorization, and input validation, hardening applications against common web vulnerabilities.",
    ],
  },
];

const projects = [
  {
    title: "Peekr — Random P2P Video & Text Chat",
    stack: "WebRTC, Socket.io, Express, Node.js",
    bullets: [
      "Built an Omegle-style app for peer-to-peer video and text chat using WebRTC and a Socket.io signaling server.",
      "Designed a pooled batch-matching algorithm to pair waiting users efficiently and minimize connection latency.",
    ],
  },
  {
    title: "Shopify Variant Image Automator — Embedded App",
    stack: "React Router 7, React, TypeScript, Shopify Polaris, Prisma",
    bullets: [
      "Built an embedded Shopify app with React Router 7, Polaris, and App Bridge that automates product variant-to-image grouping, replacing a manual merchandising workflow.",
      "Backed app data with Prisma session storage and integrated Shopify's Admin GraphQL API to read and update product data.",
    ],
  },
];

const skills = [
  { label: "Languages", value: "TypeScript, JavaScript (ES6+), PHP, SQL, HTML5, CSS3" },
  { label: "Frontend", value: "React, Next.js, React Router 7, jQuery, Tailwind CSS, Liquid" },
  {
    label: "Backend & APIs",
    value: "Laravel, Node.js, Express.js, GraphQL, REST APIs, Prisma, Server-Sent Events, Webhooks",
  },
  {
    label: "Shopify & CMS",
    value:
      "Embedded Apps (React Router 7, Polaris, App Bridge), Functions, Admin / Storefront / Carrier Service API, WordPress, WooCommerce",
  },
  { label: "AI & Cloud", value: "Anthropic Claude, Google Gemini, OpenAI APIs, Cloudflare Workers" },
  { label: "Databases & Tools", value: "MySQL, PostgreSQL, MariaDB, MongoDB, Git/GitHub, Vite, WebRTC, Socket.io" },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:px-12 sm:py-24 lg:px-24">
      {/* Header */}
      <header className="mb-16">
        <h1 className="text-3xl font-semibold tracking-tight">Aditya Pareek</h1>
        <p className="mt-1 text-sm">Full-Stack Software Engineer</p>

        <div className="mt-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-sm">
          <span className="text-muted-foreground">Email</span>
          <Link href="mailto:aditya58384@gmail.com" className="underline underline-offset-4">
            aditya58384@gmail.com
          </Link>

          <span className="text-muted-foreground">Phone</span>
          <Link href="tel:+917426940033" className="underline underline-offset-4">
            +91 7426940033
          </Link>

          <span className="text-muted-foreground">LinkedIn</span>
          <Link
            href="https://linkedin.com/in/adityapareek05"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            linkedin.com/in/adityapareek05
          </Link>

          <span className="text-muted-foreground">GitHub</span>
          <Link
            href="https://github.com/Backend-Aditya"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            github.com/Backend-Aditya
          </Link>

          <span className="text-muted-foreground">Resume</span>
          <Link
            href="/aditya pareek.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Download PDF
          </Link>
        </div>
      </header>

      {/* Summary */}
      <section className="py-8">
        <SectionHeading>Summary</SectionHeading>
        <p className="leading-relaxed">
          Full-stack software engineer with 3+ years designing and shipping
          production web applications across e-commerce, SaaS, and AI-driven
          products. I architect resilient backends and clean APIs (Laravel,
          Node.js, GraphQL, REST), model data layers that scale, and build
          fast, polished front-ends in React and TypeScript. Equally at home
          owning a feature from database schema to pixel, wiring up
          third-party logistics and webhooks, or integrating LLM APIs into
          real product workflows — with a consistent focus on maintainable
          code that ships on time and holds up in production.
        </p>
      </section>

      {/* Experience */}
      <section className="py-8">
        <SectionHeading>Experience</SectionHeading>
        <div className="space-y-10">
          {experiences.map((exp) => (
            <div key={exp.company}>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="font-semibold">
                  {exp.title} — {exp.company}
                </h3>
                <span className="shrink-0 text-sm">{exp.period}</span>
              </div>
              <p className="text-sm">{exp.location}</p>
              <ul className="mt-3 space-y-2">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 leading-relaxed">
                    <span aria-hidden>—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-8">
        <SectionHeading>Projects</SectionHeading>
        <div className="space-y-10">
          {projects.map((project) => (
            <div key={project.title}>
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-sm italic">{project.stack}</p>
              <ul className="mt-3 space-y-2">
                {project.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 leading-relaxed">
                    <span aria-hidden>—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-8">
        <SectionHeading>Technical Skills</SectionHeading>
        <div className="space-y-2">
          {skills.map((s) => (
            <p key={s.label} className="leading-relaxed">
              <span className="font-semibold">{s.label}:</span> {s.value}
            </p>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="py-8">
        <SectionHeading>Education</SectionHeading>
        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
          <h3 className="font-semibold">
            Manipal University Jaipur — Bachelor of Computer Applications (BCA)
          </h3>
          <span className="shrink-0 text-sm">Aug 2023 — Aug 2026</span>
        </div>
        <p className="text-sm">Jaipur, Rajasthan</p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-2 leading-relaxed">
            <span aria-hidden>—</span>
            <span>
              Relevant coursework: Data Structures &amp; Algorithms, Operating
              Systems, DBMS, Computer Networks, Cloud Computing, Software
              Engineering, and OOP (C, C++, Java, Python).
            </span>
          </li>
          <li className="flex gap-2 leading-relaxed">
            <span aria-hidden>—</span>
            <span>
              Maintaining an aggregate of 84% while pursuing the degree
              alongside full-time software engineering work.
            </span>
          </li>
          <li className="flex gap-2 leading-relaxed">
            <span aria-hidden>—</span>
            <span>
              Completed a capstone project applying system analysis and
              software-engineering principles to a full-stack web
              application.
            </span>
          </li>
        </ul>
      </section>

      {/* Achievements & Certifications */}
      <section className="py-8">
        <SectionHeading>Achievements &amp; Certifications</SectionHeading>
        <p className="leading-relaxed">
          <span className="font-semibold">Award:</span> Innovative Programmer
          Award (2024)
        </p>
        <p className="mt-2 leading-relaxed">
          <span className="font-semibold">Certifications:</span> Master
          Full-Stack Web Development with Laravel &amp; PHP; Advanced Laravel
        </p>
      </section>

      <footer className="pt-8 text-sm">
        &copy; {new Date().getFullYear()} Aditya Pareek
      </footer>
    </main>
  );
}
