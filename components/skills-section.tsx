import { Code2, Layout, Shield, Award, Languages } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Backend",
    skills: ["Laravel", "PHP", "REST APIs", "MySQL", "Database Optimization"],
  },
  {
    icon: Layout,
    title: "Frontend",
    skills: ["JavaScript", "Responsive Design", "HTML/CSS", "UI/UX Integration"],
  },
  {
    icon: Shield,
    title: "Core Competencies",
    skills: [
      "CRUD Operations",
      "Security Protocols",
      "Data Management",
      "API Integration",
    ],
  },
  {
    icon: Award,
    title: "Certifications",
    skills: [
      "Full-Stack Web Development with Laravel & PHP",
      "Advanced Laravel",
      "Postman API Fundamentals",
    ],
  },
];

const languages = [
  { name: "Hindi", level: "Native or Bilingual" },
  { name: "English", level: "Professional Working" },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-t border-border py-16 md:py-24 scroll-mt-16"
      aria-label="Skills"
    >
      <div className="mb-12 flex flex-col items-center text-center">
        <span className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Skills
        </span>
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Technologies I work with
        </h2>
      </div>
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2">
              <Languages className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Languages</h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2"
              >
                <span className="font-medium text-foreground">{lang.name}</span>
                <span className="text-xs text-muted-foreground">
                  ({lang.level})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
