import Link from "next/link";

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
        <p className="mt-1 text-sm">Backend Software Engineer | Laravel &amp; PHP</p>

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
            href="/Aditya Pareek Backend.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-0 break-words underline underline-offset-4"
          >
            Download PDF
          </Link>
        </div>

      </header>

      <div className="space-y-12">
      {/* Intro */}
      <section>
        <SectionHeading>Summary</SectionHeading>
        <p className="text-left leading-relaxed sm:text-justify">
          Backend software engineer specializing in Laravel and PHP, driven
          by building resilient, scalable architectures. My core strengths
          lie in designing robust relational database schemas, engineering
          clean RESTful APIs, and implementing performance-tuning
          strategies like targeted caching and query optimization. I
          approach development with a strict focus on end-to-end system
          reliability and clean, maintainable code. I thrive when taking
          full ownership of backend infrastructure, consistently
          delivering secure, production-ready solutions that handle
          real-world load seamlessly.
        </p>
      </section>

      {/* Day job */}
      <section>
        <SectionHeading>Experience</SectionHeading>

        <div className="space-y-8">
          <div>
            <h3 className="font-semibold">
              Backend Software Engineer — Axis Web Art Pvt. Ltd.
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">Nov 2023 — Present</p>
            <p className="text-sm text-muted-foreground">Sardarshahar, Rajasthan</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-left leading-relaxed">
              <li>
                Architected the core backend for the company&apos;s flagship
                e-commerce and subscription platform using Laravel.
                Designed a normalized relational database schema and
                developed a Sanctum-secured REST API to serve as the
                single source of truth for web and mobile clients.
              </li>
              <li>
                Engineered the critical billing and logistics pipelines by
                integrating Stripe, Razorpay, and the Shopify Admin
                GraphQL API. Built resilient webhook handlers with strict
                idempotency checks to guarantee data consistency and
                prevent duplicate charges during network timeouts.
              </li>
              <li>
                Maintained high API throughput as system traffic grew by
                decoupling heavy workloads from the HTTP request
                lifecycle. Offloaded complex inventory syncing,
                transactional emails, and bulk push notifications to
                Redis-backed Laravel Queues.
              </li>
              <li>
                Reclaimed engineering hours by building a comprehensive
                internal back-office suite using Filament PHP. Delivered
                robust data tables, role-based access controls, and
                custom workflows, empowering the operations team to
                manage user tiers, process refunds, and pull analytics
                independently.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">
              Junior Laravel Developer — TechZento Solutions
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">May 2023 — Nov 2023</p>
            <p className="text-sm text-muted-foreground">Remote</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-left leading-relaxed">
              <li>
                Developed backend services and CRUD REST APIs in Laravel,
                hardening applications against SQL injection, XSS, and
                CSRF vulnerabilities through strict input validation and
                role-based authorization policies.
              </li>
              <li>
                Reduced key page-load times by 28% by profiling and
                optimizing slow SQL queries, implementing eager loading to
                eliminate N+1 issues, and adding targeted indexes to
                high-traffic database columns.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Side projects */}
      <section>
        <SectionHeading>Projects</SectionHeading>

        <div className="space-y-8">
          <div>
            <h3 className="font-semibold">
              NDIS Provider Platform — Personal Side Project
            </h3>
            <p className="text-sm text-muted-foreground">Laravel · MySQL</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-left leading-relaxed">
              <li>
                Designed a comprehensive backend architecture for
                Australian NDIS disability-services providers to handle
                participant intake, support-worker scheduling, and service
                delivery logging.
              </li>
              <li>
                Modeled complex real-world compliance rules from scratch,
                building relational schemas and Eloquent models to
                accurately track plan budgets, service categories, and
                audit trails required by strict NDIS price guides.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section>
        <SectionHeading>Technical Skills</SectionHeading>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-[auto_1fr] sm:gap-x-6 sm:gap-y-2">
          <span className="text-sm text-muted-foreground">Languages &amp; Frameworks</span>
          <span className="min-w-0 break-words">
            PHP, JavaScript (ES6+), TypeScript, SQL, Laravel, Node.js,
            Express.js
          </span>

          <span className="text-sm text-muted-foreground">APIs &amp; Architecture</span>
          <span className="min-w-0 break-words">
            RESTful APIs, GraphQL, Webhook Integration, Shopify Admin
            GraphQL / Carrier Service APIs
          </span>

          <span className="text-sm text-muted-foreground">Databases &amp; Caching</span>
          <span className="min-w-0 break-words">MySQL, PostgreSQL, MariaDB, SQLite, Redis</span>

          <span className="text-sm text-muted-foreground">Cloud &amp; Integrations</span>
          <span className="min-w-0 break-words">
            AWS S3, Cloudflare Workers, Firebase (Cloud Messaging), Payment
            Gateways (Stripe, Razorpay, PayPal), WordPress, WooCommerce
          </span>

          <span className="text-sm text-muted-foreground">Development &amp; AI Tools</span>
          <span className="min-w-0 break-words">
            Git/GitHub, Composer, Prisma, Postman, VS Code, Google Gemini,
            OpenAI, Anthropic Claude
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
          Aggregate of 84%, successfully completed alongside full-time
          software engineering work. Coursework: DBMS, Data Structures &amp;
          Algorithms, Operating Systems, Computer Networks, Software
          Engineering, Object-Oriented Programming.
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
