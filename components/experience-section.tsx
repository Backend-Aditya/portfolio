import { ExternalLink, Briefcase } from "lucide-react";
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
      <div className="mb-12 flex flex-col items-center text-center">
        <span className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Experience
        </span>
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Where I{"'"}ve worked
        </h2>
      </div>
      <div className="mx-auto max-w-4xl">
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      <Link
                        href={experience.companyUrl}
                        className="inline-flex items-center gap-1 transition-colors hover:text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {experience.title}
                        <span className="text-muted-foreground">@</span>
                        {experience.company}
                        {experience.companyUrl !== "#" && (
                          <ExternalLink className="h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100" />
                        )}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {experience.location}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  {experience.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {experience.description.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
