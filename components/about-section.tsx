export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 scroll-mt-16"
      aria-label="About me"
    >
      <div className="mb-8 flex flex-col items-center text-center">
        <span className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          About
        </span>
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          A passionate developer
        </h2>
      </div>
      <div className="mx-auto max-w-3xl space-y-6 text-center text-muted-foreground">
        <p className="text-lg leading-relaxed">
          As a{" "}
          <span className="font-medium text-primary">Laravel Developer</span> at{" "}
          <span className="font-medium text-foreground">
            Axis Web Art Private Limited
          </span>
          , I contribute to the development of scalable web applications across
          diverse domains such as{" "}
          <span className="font-medium text-foreground">music streaming</span>,{" "}
          <span className="font-medium text-foreground">eCommerce</span>,{" "}
          <span className="font-medium text-foreground">business listings</span>
          , and{" "}
          <span className="font-medium text-foreground">
            learning management systems
          </span>
          .
        </p>
        <p className="leading-relaxed">
          My work involves building{" "}
          <span className="font-medium text-foreground">RESTful APIs</span>,
          implementing{" "}
          <span className="font-medium text-foreground">
            robust security measures
          </span>
          , and enhancing UI/UX through responsive front-end integrations. I
          focus on optimizing workflow efficiency and delivering comprehensive
          solutions that meet client needs.
        </p>
        <p className="leading-relaxed">
          Currently pursuing a{" "}
          <span className="font-medium text-foreground">
            {"Bachelor's degree in Computer Applications"}
          </span>{" "}
          at Manipal University Jaipur, I leverage my proficiency in{" "}
          <span className="font-medium text-primary">Laravel</span>,{" "}
          <span className="font-medium text-primary">PHP</span>, and{" "}
          <span className="font-medium text-primary">JavaScript</span> to
          deliver streamlined solutions.
        </p>
      </div>
    </section>
  );
}
