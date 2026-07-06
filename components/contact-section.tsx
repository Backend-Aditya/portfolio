import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "aditya58384@gmail.com",
    href: "mailto:aditya58384@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 742694033",
    href: "tel:+91742694033",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sardarshahar, Rajasthan, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Backend-Aditya",
    username: "@Backend-Aditya",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/adityapareek05",
    username: "in/adityapareek05",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-border py-16 md:py-24 scroll-mt-16"
      aria-label="Contact"
    >
      <div className="mb-12">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Contact
        </span>
        <h2 className="text-balance font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight sm:text-4xl">
          {"Let's work together"}
        </h2>
        <p className="mt-4 max-w-2xl font-[family-name:var(--font-pt-serif)] text-foreground/90">
          {
            "I'm always open to discussing new projects, creative ideas, or opportunities to build scalable web applications."
          }
        </p>
      </div>
      <div className="mx-auto grid max-w-4xl divide-y divide-border border-t border-b border-border md:grid-cols-2 md:divide-x md:divide-y-0">
        {/* Directory */}
        <div className="py-6 md:pr-8 md:py-0">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest">
            Contact Information
          </h3>
          <div className="space-y-3">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <item.icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                <div>
                  <span className="mr-2 text-xs uppercase tracking-widest text-muted-foreground">
                    {item.label}:
                  </span>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="font-[family-name:var(--font-pt-serif)] underline-offset-4 hover:underline"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <span className="font-[family-name:var(--font-pt-serif)]">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social + CTA */}
        <div className="py-6 md:pl-8 md:py-0">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest">
            Connect with me
          </h3>
          <div className="space-y-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <social.icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="font-[family-name:var(--font-pt-serif)] underline-offset-4 hover:underline">
                  {social.label} &middot; {social.username}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="mailto:aditya58384@gmail.com"
              className="inline-flex items-center gap-2 border border-foreground px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
            >
              <Send className="h-4 w-4" />
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
