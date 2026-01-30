import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";

export default function Home() {
  return (
    <>
      {/* Sticky Navbar */}
      <Navbar />
      {/* Smooth Scroll */}
      <SmoothScroll>
        {/* Page Content */}
        <main>
          <HeroSection />

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <EducationSection />
            <ContactSection />
          </div>
        </main>

        <Footer />
      </SmoothScroll>
    </>
  );
}
