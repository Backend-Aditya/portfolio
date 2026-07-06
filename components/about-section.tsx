export function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-border py-16 md:py-24 scroll-mt-16"
      aria-label="About me"
    >
      <div className="mb-8">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          About
        </span>
        <h2 className="text-balance font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight sm:text-4xl">
          A passionate developer
        </h2>
      </div>
      <div className="mx-auto max-w-2xl space-y-6 font-[family-name:var(--font-pt-serif)] text-foreground/90 first-letter:float-left first-letter:mr-2 first-letter:font-[family-name:var(--font-playfair)] first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.85]">
        <p className="text-lg leading-relaxed">
          As a <span className="font-bold">Laravel Developer</span> at{" "}
          <span className="font-bold">Axis Web Art Private Limited</span>, I
          contribute to the development of scalable web applications across
          diverse domains such as <span className="font-bold">music streaming</span>,{" "}
          <span className="font-bold">eCommerce</span>,{" "}
          <span className="font-bold">business listings</span>, and{" "}
          <span className="font-bold">learning management systems</span>.
        </p>
        <p className="leading-relaxed">
          My work involves building <span className="font-bold">RESTful APIs</span>,
          implementing <span className="font-bold">robust security measures</span>, and
          enhancing UI/UX through responsive front-end integrations. I focus on
          optimizing workflow efficiency and delivering comprehensive solutions
          that meet client needs.
        </p>
        <p className="leading-relaxed">
          Currently pursuing a{" "}
          <span className="font-bold">
            {"Bachelor's degree in Computer Applications"}
          </span>{" "}
          at Manipal University Jaipur, I leverage my proficiency in{" "}
          <span className="font-bold">Laravel</span>,{" "}
          <span className="font-bold">PHP</span>, and{" "}
          <span className="font-bold">JavaScript</span> to deliver streamlined
          solutions.
        </p>
      </div>
    </section>
  );
}
