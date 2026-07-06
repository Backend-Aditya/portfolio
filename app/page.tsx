import Link from "next/link";
import { ContributionGraph } from "@/components/contribution-graph";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 text-base font-semibold uppercase tracking-widest">
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

        <div className="mt-6 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm sm:gap-x-6">
          <span className="text-muted-foreground">Email</span>
          <Link href="mailto:aditya58384@gmail.com" className="min-w-0 break-words underline underline-offset-4">
            aditya58384@gmail.com
          </Link>

          <span className="text-muted-foreground">Phone</span>
          <Link href="tel:+917426940033" className="min-w-0 break-words underline underline-offset-4">
            +91 7426940033
          </Link>

          <span className="text-muted-foreground">LinkedIn</span>
          <Link
            href="https://linkedin.com/in/adityapareek05"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-0 break-words underline underline-offset-4"
          >
            linkedin.com/in/adityapareek05
          </Link>

          <span className="text-muted-foreground">GitHub</span>
          <Link
            href="https://github.com/Backend-Aditya"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-0 break-words underline underline-offset-4"
          >
            github.com/Backend-Aditya
          </Link>

          <span className="text-muted-foreground">Resume</span>
          <Link
            href="/aditya pareek.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-0 break-words underline underline-offset-4"
          >
            Download PDF
          </Link>
        </div>

        <div className="mt-6">
          <ContributionGraph username="Backend-Aditya" />
        </div>
      </header>

      <div className="space-y-12">
      {/* Intro */}
      <section>
        <SectionHeading>Summary</SectionHeading>
        <p className="text-left leading-relaxed sm:text-justify">
          I'm a full-stack software engineer with three-plus years of
          experience building production web applications across
          e-commerce, SaaS, and AI-driven products. My focus is on
          architecting resilient backends and clean APIs, modeling data
          layers that scale, and building fast, polished front-ends in
          React and TypeScript. I'm equally comfortable owning a feature
          end to end — from database schema to interface — integrating
          third-party logistics and webhooks, or wiring LLM APIs into real
          product workflows, always with an emphasis on maintainable code
          that holds up in production.
        </p>
      </section>

      {/* Day job */}
      <section>
        <SectionHeading>Experience</SectionHeading>

        <div className="space-y-8">
          <div>
            <h3 className="font-semibold">
              Full-Stack Software Engineer — Axis Web Art Pvt. Ltd.
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">Nov 2023 — Present</p>
            <p className="text-sm text-muted-foreground">
              Sardarshahar office · headquartered in Jaipur
            </p>
            <p className="mt-3 text-left leading-relaxed sm:text-justify">
              Recent work has included architecting a Shopify-to-logistics
              delivery integration using Shopify's Carrier Service API,
              webhooks, and fulfillment mutations, which reduced manual
              fulfillment effort by 38%. I also built an AI-powered
              bloodwork analysis tool in Laravel using a Server-Sent Events
              pipeline, proxying Google Gemini's API through a Cloudflare
              Worker to deliver lab-report insights and cut review time by
              52%. On the storefront side, I've engineered high-performance
              Shopify Dawn theme features — including a scroll-triggered
              gallery, infinite scroll with position restoration, and a
              live cart progress bar — that lifted mobile conversion by
              16%. I also designed a normalized relational schema of 63
              tables across 9 domains for an NDIS SaaS platform, supporting
              billing, compliance, and participant management.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Junior Laravel Developer — TechZento Solutions
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">May 2023 — Nov 2023</p>
            <p className="text-sm text-muted-foreground">
              Sardarshahar office · headquartered in Jaipur
            </p>
            <p className="mt-3 text-left leading-relaxed sm:text-justify">
              I developed CRUD-driven web applications, optimized complex
              SQL queries and Eloquent relationships to reduce page-load
              times by 28%, and implemented authentication, role-based
              authorization, and input validation to harden applications
              against common web vulnerabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Side projects */}
      <section>
        <SectionHeading>Projects</SectionHeading>

        <div className="space-y-8">
          <div>
            <h3 className="font-semibold">Peekr</h3>
            <p className="text-sm text-muted-foreground">
              WebRTC · Socket.io · Express · Node.js
            </p>
            <p className="mt-3 text-left leading-relaxed sm:text-justify">
              A peer-to-peer video and text chat application built with
              WebRTC and a Socket.io signaling server. It includes a
              pooled batch-matching algorithm designed to pair waiting
              users efficiently and minimize connection latency.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Shopify Variant Image Automator</h3>
            <p className="text-sm text-muted-foreground">
              React Router 7 · React · TypeScript · Shopify Polaris · Prisma
            </p>
            <p className="mt-3 text-left leading-relaxed sm:text-justify">
              An embedded Shopify app built with React Router 7, Polaris,
              and App Bridge that automates product variant-to-image
              grouping, replacing what was previously a manual
              merchandising workflow. It uses Prisma for session storage
              and integrates Shopify's Admin GraphQL API to read and
              update product data.
            </p>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section>
        <SectionHeading>Technical Skills</SectionHeading>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-[auto_1fr] sm:gap-x-6 sm:gap-y-2">
          <span className="text-sm text-muted-foreground">Languages</span>
          <span className="min-w-0 break-words">TypeScript, JavaScript (ES6+), PHP, SQL, HTML5, CSS3</span>

          <span className="text-sm text-muted-foreground">Frontend</span>
          <span className="min-w-0 break-words">React, Next.js, React Router 7, jQuery, Tailwind CSS, Liquid</span>

          <span className="text-sm text-muted-foreground">Backend &amp; APIs</span>
          <span className="min-w-0 break-words">
            Laravel, Node.js, Express.js, GraphQL, REST APIs, Prisma,
            Server-Sent Events, Webhooks
          </span>

          <span className="text-sm text-muted-foreground">Shopify &amp; CMS</span>
          <span className="min-w-0 break-words">
            Embedded Apps (React Router 7, Polaris, App Bridge), Functions,
            Admin / Storefront / Carrier Service API, WordPress, WooCommerce
          </span>

          <span className="text-sm text-muted-foreground">AI &amp; Cloud</span>
          <span className="min-w-0 break-words">Anthropic Claude, Google Gemini, OpenAI APIs, Cloudflare Workers</span>

          <span className="text-sm text-muted-foreground">Databases &amp; Tools</span>
          <span className="min-w-0 break-words">
            MySQL, PostgreSQL, MariaDB, MongoDB, Git/GitHub, Vite, WebRTC,
            Socket.io
          </span>
        </div>
      </section>

      {/* School */}
      <section>
        <SectionHeading>Education</SectionHeading>

        <h3 className="font-semibold">
          Manipal University Jaipur — Bachelor of Computer Applications (BCA)
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">Aug 2023 — Aug 2026</p>
        <p className="text-sm text-muted-foreground">Jaipur, Rajasthan</p>
        <p className="mt-3 text-left leading-relaxed sm:text-justify">
          Maintaining an aggregate of 84% while working full-time as a
          software engineer. My capstone project applied system analysis
          and software engineering principles to a full-stack web
          application, complementing coursework in data structures and
          algorithms, operating systems, DBMS, computer networks, cloud
          computing, and object-oriented programming.
        </p>
      </section>

      {/* Extras */}
      <section>
        <SectionHeading>Achievements &amp; Certifications</SectionHeading>
        <p className="text-left leading-relaxed sm:text-justify">
          I received the Innovative Programmer Award in 2024 and hold
          certifications in Full-Stack Web Development with Laravel &amp;
          PHP, as well as Advanced Laravel.
        </p>
      </section>

      <footer className="text-sm">
        &copy; {new Date().getFullYear()} Aditya Pareek
      </footer>
      </div>
    </main>
  );
}
