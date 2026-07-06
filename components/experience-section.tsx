import { ExternalLink } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    period: "Nov 2023 — Present",
    title: "Laravel Developer",
    company: "Axis Web Art Private Limited",
    location: "Sardarshahar",
    companyUrl: "https://axiswebart.com",
    description: [
      "Developed scalable Laravel web applications to enhance data management and optimize workflow efficiency.",
      "Integrated RESTful APIs for seamless communication across various systems and services.",
      "Improved UI/UX by implementing responsive front-end integrations and robust security measures.",
      "Delivered comprehensive solutions across multiple domains, including music streaming and eCommerce.",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "REST APIs",
      "JavaScript",
      "Security",
    ],
  },
  {
    period: "May 2023 — Nov 2023",
    title: "Web Developer",
    company: "TechZento Solutions",
    location: "Sardarshahar",
    companyUrl: "#",
    description: [
      "Developed dynamic web applications using Laravel, focusing on efficient CRUD operations.",
      "Optimized SQL queries to enhance application performance and improve data handling.",
      "Integrated responsive front-end interfaces to elevate user experience.",
      "Implemented security protocols to safeguard data and maintain system integrity.",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "SQL Optimization", "Frontend"],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-t border-border py-16 md:py-24 scroll-mt-16"
      aria-label="Work experience"
    >
      <div className="mb-12">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Experience
        </span>
        <h2 className="text-balance font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight sm:text-4xl">
          Where I{"'"}ve worked
        </h2>
      </div>
      <div className="mx-auto max-w-4xl divide-y divide-border">
        {experiences.map((experience, index) => (
          <div key={index} className="py-8 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold">
                <Link
                  href={experience.companyUrl}
                  className="inline-flex flex-wrap items-center gap-1.5 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{experience.title}</span>
                  <span className="text-muted-foreground">&mdash;</span>
                  <span>{experience.company}</span>
                  {experience.companyUrl !== "#" && (
                    <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                  )}
                </Link>
              </h3>
              <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {experience.period} &middot; {experience.location}
              </span>
            </div>
            <ul className="mt-4 space-y-2 font-[family-name:var(--font-pt-serif)] text-foreground/90">
              {experience.description.map((item, i) => (
                <li key={i} className="flex gap-2 leading-relaxed">
                  <span aria-hidden>&mdash;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
              Stack: {experience.technologies.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
