import { HeroSection } from "@/components/pages/home/hero-section";
import { KnownTechs } from "@/components/known-techs";
import { HighlightedProjects } from "@/components/pages/home/highlighted-projects";
import { WorkExperience } from "@/components/pages/home/work-experience";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperience />
      <ContactForm />
      <Footer />
    </>
  );
}
