"use client";

import { ArrowDown, MapPin, FileText } from "lucide-react";
import ScrollSmoother from "gsap/ScrollSmoother";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export function HeroSection() {
  const isMobile = useIsMobile();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const targetY = el.getBoundingClientRect().top + window.pageYOffset;

    if (isMobile) {
      window.scrollTo({
        top: targetY,
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
      className="relative flex min-h-dvh flex-col items-center justify-center px-6 pt-16 pb-24 text-center lg:px-8"
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          data-speed="0.6"
          className="absolute -top-48 right-[-10%] h-112 w-md rounded-full bg-primary/10 blur-3xl"
        />
        <div
          data-speed="0.9"
          className="absolute top-1/3 left-[-15%] h-96 w-[24rem] rounded-full bg-primary/10 blur-3xl"
        />
        <div
          data-speed="1.2"
          className="absolute -bottom-48 right-1/4 h-80 w-[20rem] rounded-full bg-primary/10 blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs sm:px-4 sm:text-sm text-muted-foreground">
          <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
          <span>Sardarshahar, Rajasthan, India</span>
        </div>

        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Hi, I’m{" "}
          <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Aditya Pareek
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-muted-foreground">
          A{" "}
          <span className="font-semibold text-foreground">
            Laravel Developer
          </span>{" "}
          building{" "}
          <span className="text-foreground font-semibold">
            scalable, high-performance web applications
          </span>
          .
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground">
          Building scalable web applications across music streaming, eCommerce,
          business listings, and learning management systems.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
          <Button size="lg" onClick={() => scrollToSection("contact")}>
            Get in Touch
          </Button>

          <a
            href="/portfolio/aditya pareek.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent inline-flex items-center gap-2 w-full"
            >
              <FileText className="h-5 w-5" />
              View Resume
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground animate-bounce"
        aria-label="Scroll to about section"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4" />
      </button>
    </section>
  );
}
