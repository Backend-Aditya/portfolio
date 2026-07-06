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

        <div className="mt-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
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

        <div className="mt-6">
          <ContributionGraph username="Backend-Aditya" />
        </div>
      </header>

      <div className="space-y-12">
      {/* Intro */}
      <section>
        <SectionHeading>Summary</SectionHeading>
        <p className="leading-relaxed">
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
        <p className="leading-relaxed">
          I currently work as a Full-Stack Software Engineer at{" "}
          <span className="font-semibold">Axis Web Art Pvt. Ltd.</span>, a
          well-established company headquartered in Jaipur, working out of
          their Sardarshahar office. Recent work has included architecting
          a Shopify-to-logistics delivery
          integration using Shopify's Carrier Service API, webhooks, and
          fulfillment mutations, which reduced manual fulfillment effort by
          38%. I also built an AI-powered bloodwork analysis tool in
          Laravel using a Server-Sent Events pipeline, proxying Google
          Gemini's API through a Cloudflare Worker to deliver lab-report
          insights and cut review time by 52%. On the storefront side, I've
          engineered high-performance Shopify Dawn theme features —
          including a scroll-triggered gallery, infinite scroll with
          position restoration, and a live cart progress bar — that lifted
          mobile conversion by 16%. I also designed a normalized relational
          schema of 63 tables across 9 domains for an NDIS SaaS platform,
          supporting billing, compliance, and participant management.
        </p>
        <p className="mt-4 leading-relaxed">
          Before that, I worked as a Junior Laravel Developer at{" "}
          <span className="font-semibold">TechZento Solutions</span>,
          another Jaipur-headquartered company, also from their
          Sardarshahar office, where I developed CRUD-driven web
          applications,
          optimized complex SQL queries and Eloquent relationships to
          reduce page-load times by 28%, and implemented authentication,
          role-based authorization, and input validation to harden
          applications against common web vulnerabilities.
        </p>
      </section>

      {/* Side projects */}
      <section>
        <SectionHeading>Projects</SectionHeading>
        <p className="leading-relaxed">
          <span className="font-semibold">Peekr</span> is a peer-to-peer
          video and text chat application built with WebRTC and a
          Socket.io signaling server. It includes a pooled batch-matching
          algorithm designed to pair waiting users efficiently and minimize
          connection latency.
        </p>
        <p className="mt-4 leading-relaxed">
          The <span className="font-semibold">Shopify Variant Image
          Automator</span> is an embedded Shopify app built with React
          Router 7, Polaris, and App Bridge that automates product
          variant-to-image grouping, replacing what was previously a
          manual merchandising workflow. It uses Prisma for session
          storage and integrates Shopify's Admin GraphQL API to read and
          update product data.
        </p>
      </section>

      {/* Stack */}
      <section>
        <SectionHeading>Technical Skills</SectionHeading>
        <p className="leading-relaxed">
          My day-to-day stack centers on TypeScript, JavaScript, and PHP,
          with React and Next.js on the front end and Laravel and
          Node.js/Express on the back end, connected via GraphQL and REST
          APIs. I have extensive experience within the Shopify ecosystem,
          including embedded apps, Functions, and the Admin, Storefront,
          and Carrier Service APIs. On the data side, I work primarily with
          MySQL and PostgreSQL, and MongoDB where a document model fits
          better than relational tables. I've also integrated Anthropic
          Claude, Google Gemini, and OpenAI's APIs into production
          workflows, often via Cloudflare Workers for low-latency,
          edge-based delivery.
        </p>
      </section>

      {/* School */}
      <section>
        <SectionHeading>Education</SectionHeading>
        <p className="leading-relaxed">
          I'm currently completing a Bachelor of Computer Applications
          (BCA) at Manipal University Jaipur, maintaining an aggregate of
          84% while working full-time as a software engineer. My capstone
          project applied system analysis and software engineering
          principles to a full-stack web application, complementing
          coursework in data structures and algorithms, operating systems,
          DBMS, computer networks, cloud computing, and object-oriented
          programming.
        </p>
      </section>

      {/* Extras */}
      <section>
        <SectionHeading>Achievements &amp; Certifications</SectionHeading>
        <p className="leading-relaxed">
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
