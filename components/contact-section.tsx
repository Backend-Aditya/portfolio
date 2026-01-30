import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
      <div className="mb-12 flex flex-col items-center text-center">
        <span className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Contact
        </span>
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {"Let's work together"}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          {
            "I'm always open to discussing new projects, creative ideas, or opportunities to build scalable web applications."
          }
        </p>
      </div>
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Contact Info Card */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-6 font-semibold text-foreground">
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links Card */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-6 font-semibold text-foreground">
              Connect with me
            </h3>
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-border p-3 transition-all hover:border-primary/50 hover:bg-secondary/50"
                >
                  <div className="rounded-lg bg-primary/10 p-2">
                    <social.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{social.label}</p>
                    <p className="text-sm text-muted-foreground">
                      {social.username}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Button asChild className="w-full">
                <Link href="mailto:aditya58384@gmail.com">
                  <Send className="mr-2 h-4 w-4" />
                  Send a Message
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
