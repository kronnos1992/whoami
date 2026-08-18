import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ClientsSection } from "./components/ClientsSection";
import { JourneySection } from "./components/JourneySection";
import { ContactCta } from "./components/ContactCta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ClientsSection />
      <JourneySection />
      <ContactCta />
    </>
  );
}
