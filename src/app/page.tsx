import { HeroSection } from "@/app/components/pages/home/hero-section";
import { HighlightedProjects } from "@/app/components/pages/home/highlighted-projects";
import { WorkExperience } from "@/app/components/pages/home/work-experience";
import { KnownTechs } from "./components/pages/home/known-techs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  );
}
