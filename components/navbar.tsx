"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import ScrollSmoother from "gsap/ScrollSmoother";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

import { ThemeToggle } from "@/components/theme-toggle";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

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
      className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold">
          Aditya<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 -mr-2 rounded-md hover:bg-secondary/50 transition-colors"
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
          "lg:hidden border-t border-border transition-all duration-300 ease-in-out overflow-hidden",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}

          <div className="pt-4 border-t border-border">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
