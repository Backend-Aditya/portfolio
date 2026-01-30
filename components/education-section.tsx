import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function EducationSection() {
  return (
    <section
      id="education"
      className="border-t border-border py-16 md:py-24 scroll-mt-16"
      aria-label="Education"
    >
      <div className="mb-12 flex flex-col items-center text-center">
        <span className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Education
        </span>
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Academic background
        </h2>
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-primary/10 p-3">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground">
                Manipal University Jaipur
              </h3>
              <p className="mt-1 font-medium text-primary">
                {"Bachelor's degree, Computer Applications"}
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>August 2023 - August 2026</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  <span>Jaipur, Rajasthan</span>
                </div>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Currently pursuing a BCA degree while gaining hands-on experience
                as a Laravel Developer, combining academic knowledge with
                practical industry skills in web development and software engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
