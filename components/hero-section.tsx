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
