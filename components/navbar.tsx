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
