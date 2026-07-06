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
