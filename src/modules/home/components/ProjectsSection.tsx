import styled from "styled-components";
import { ArrowRight } from "lucide-react";
import {
  Section,
  SectionHeading,
  ProjectCard,
  ButtonLink,
} from "@/ui/components";
import { useLocalizedData } from "@/data/localized.data";
import { useI18n } from "@/core/i18n";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export function ProjectsSection() {
  const { t } = useI18n();
  const { featuredProjects } = useLocalizedData();

  return (
    <Section id="projetos">
      <ProjectsWrap>
        <SectionHeading
          kicker={t("pages.home.projectsKicker")}
          title={t("pages.home.projectsTitle")}
          subtitle={t("pages.home.projectsSub")}
        />

        <Grid>
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </Grid>

        <div>
          <ButtonLink to="/projects" variant="ghost">
            {t("ui.common.allProjects")}{" "}
            <ArrowRight size={16} aria-hidden="true" />
          </ButtonLink>
        </div>
      </ProjectsWrap>
    </Section>
  );
}
