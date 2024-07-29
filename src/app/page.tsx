import { HeroSection } from "@/components/pages/home/hero-section";
import { KnownTechs } from "@/components/known-techs";
import { HighlightedProjects } from "@/components/pages/home/highlighted-projects";

export default function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
    </>
  );
}
