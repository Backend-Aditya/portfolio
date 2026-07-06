export function EducationSection() {
  return (
    <section
      id="education"
      className="border-t border-border py-16 md:py-24 scroll-mt-16"
      aria-label="Education"
    >
      <div className="mb-12">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Education
        </span>
        <h2 className="text-balance font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight sm:text-4xl">
          Academic background
        </h2>
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold">
            Manipal University Jaipur
          </h3>
          <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            August 2023 — August 2026 &middot; Jaipur, Rajasthan
          </span>
        </div>
        <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
          {"Bachelor's degree, Computer Applications"}
        </p>
        <p className="mt-4 font-[family-name:var(--font-pt-serif)] leading-relaxed text-foreground/90">
          Currently pursuing a BCA degree while gaining hands-on experience as a
          Laravel Developer, combining academic knowledge with practical
          industry skills in web development and software engineering.
        </p>
      </div>
    </section>
  );
}
