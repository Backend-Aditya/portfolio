const skillCategories = [
  {
    title: "Backend",
    skills: ["Laravel", "PHP", "REST APIs", "MySQL", "Database Optimization"],
  },
  {
    title: "Frontend",
    skills: ["JavaScript", "Responsive Design", "HTML/CSS", "UI/UX Integration"],
  },
  {
    title: "Core Competencies",
    skills: [
      "CRUD Operations",
      "Security Protocols",
      "Data Management",
      "API Integration",
    ],
  },
  {
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
      <div className="mb-12">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Skills
        </span>
        <h2 className="text-balance font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight sm:text-4xl">
          Technologies I work with
        </h2>
      </div>
      <div className="mx-auto max-w-5xl">
        <div className="grid divide-y divide-border border-t border-b border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {skillCategories.map((category) => (
            <div key={category.title} className="px-0 py-6 sm:px-8 sm:first:pl-0 sm:last:pr-0">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest">
                {category.title}
              </h3>
              <p className="font-[family-name:var(--font-pt-serif)] leading-relaxed text-foreground/90">
                {category.skills.join(", ")}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest">
            Languages
          </h3>
          <p className="font-[family-name:var(--font-pt-serif)] leading-relaxed text-foreground/90">
            {languages.map((l) => `${l.name} (${l.level})`).join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
}
