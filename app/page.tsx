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
        <SectionHeading>Hi</SectionHeading>
        <p className="leading-relaxed">
          I build the parts of the internet that quietly have to work: the
          checkout that doesn't drop your order, the webhook that fires at
          2am without anyone noticing, the dashboard that a compliance team
          stares at all day. Three-plus years in, across e-commerce, SaaS,
          and the current wave of AI-flavored everything. I like backends
          that don't lie to you and front-ends that don't make people wait.
          Give me a database schema and a rough idea and I'll turn it into
          something that ships and keeps shipping.
        </p>
      </section>

      {/* Day job */}
      <section>
        <SectionHeading>What I get paid for</SectionHeading>
        <p className="leading-relaxed">
          These days I'm at <span className="font-semibold">Axis Web Art</span>,
          a sizeable studio out of Sardarshahar that ends up building whatever
          the client's roadmap throws at it. Recently that meant teaching a
          Shopify store to talk directly to a logistics provider — carrier
          rates, fulfillment webhooks, the works — which trimmed a third of
          the manual shipping effort off someone's plate. I also built an
          AI tool that reads bloodwork and streams back plain-English
          insights in real time, piping Gemini through a Cloudflare Worker
          so it doesn't choke on load. On the theme side I've been the
          person quietly shaving milliseconds off a Shopify storefront —
          scroll-triggered galleries, infinite scroll that remembers where
          you were, a cart bar that updates itself — the kind of work
          nobody notices unless you stop doing it. And underneath an NDIS
          SaaS product there's a 63-table schema I designed from scratch,
          which is either the most or least glamorous sentence in this
          entire page.
        </p>
        <p className="mt-4 leading-relaxed">
          Before that I cut my teeth at{" "}
          <span className="font-semibold">TechZento Solutions</span>,
          remote, turning client requirements into Laravel apps that didn't
          fall over. Mostly CRUD, mostly SQL that needed optimizing more
          than it needed reinventing, and a healthy amount of "let's make
          sure this can't be hacked in five minutes."
        </p>
      </section>

      {/* Side projects */}
      <section>
        <SectionHeading>Things I built because I wanted to</SectionHeading>
        <p className="leading-relaxed">
          <span className="font-semibold">Peekr</span> is an Omegle-style
          video chat app I built mostly out of curiosity about WebRTC. The
          fun part wasn't the video — it was writing a batching algorithm
          that pairs strangers off a waiting pool without making anyone sit
          around wondering if the app is broken.
        </p>
        <p className="mt-4 leading-relaxed">
          The <span className="font-semibold">Shopify Variant Image
          Automator</span> exists because I watched someone manually match
          product images to variants for the hundredth time and decided
          that was a computer's job now. It's an embedded app — React
          Router 7, Polaris, App Bridge, Prisma for session storage —
          talking to Shopify's Admin GraphQL API to do in seconds what used
          to eat an afternoon.
        </p>
      </section>

      {/* Stack */}
      <section>
        <SectionHeading>What's actually in the toolbox</SectionHeading>
        <p className="leading-relaxed">
          Day to day it's TypeScript and PHP doing most of the talking —
          React and Next.js up front, Laravel and Node/Express underneath,
          GraphQL and REST for anything that needs to move data around.
          I've spent enough time inside Shopify's ecosystem (embedded apps,
          Functions, the Admin and Storefront and Carrier Service APIs) that
          it barely feels like a "specialty" anymore, just a language I
          happen to speak. On the data side: MySQL and Postgres mostly,
          MongoDB when documents make more sense than rows. And lately
          Claude, Gemini, and OpenAI's APIs have become as normal a
          dependency as anything else in package.json — wired through
          Cloudflare Workers when I need them fast and close to the edge.
        </p>
      </section>

      {/* School */}
      <section>
        <SectionHeading>The degree, technically in progress</SectionHeading>
        <p className="leading-relaxed">
          I'm finishing a BCA at Manipal University Jaipur alongside all of
          the above, which mostly means I already know the algorithms
          course firsthand from debugging production code and secondhand
          from the syllabus. Sitting around an 84% average, and the
          capstone project did the thing capstones are supposed to do:
          force an actual system-design process onto a full-stack app
          instead of just wingin' it.
        </p>
      </section>

      {/* Extras */}
      <section>
        <SectionHeading>Extra credit</SectionHeading>
        <p className="leading-relaxed">
          Picked up an Innovative Programmer Award in 2024, and hold
          certifications in full-stack Laravel &amp; PHP development plus
          advanced Laravel — paper that backs up what the code already
          says.
        </p>
      </section>

      <footer className="text-sm">
        &copy; {new Date().getFullYear()} Aditya Pareek
      </footer>
      </div>
    </main>
  );
}
