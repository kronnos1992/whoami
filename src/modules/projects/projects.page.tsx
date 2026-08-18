import { useMemo, useState } from "react";
import styled from "styled-components";
import type { Project } from "@/data/profile.data";
import { ProjectCard } from "@/ui/components";
import { useLocalizedData } from "@/data/localized.data";
import { useI18n } from "@/core/i18n";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  margin-bottom: 0.5rem;
`;

const Sub = styled.p`
  color: var(--color-textSecondary);
  max-width: 640px;
`;

const Filters = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Filter = styled.button<{ $active: boolean }>`
  font-family: var(--font-mono);
  font-size: 0.82rem;
  padding: 0.5rem 1.1rem;
  border-radius: 9999px;
  border: 1px solid var(--color-border);
  background: ${({ $active }) =>
    $active ? "var(--gradient-accent)" : "var(--color-surface)"};
  color: ${({ $active }) => ($active ? "#fff" : "var(--color-textSecondary)")};
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--color-primary);
    color: ${({ $active }) => ($active ? "#fff" : "var(--color-primary)")};
  }
`;

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

const Empty = styled.div`
  text-align: center;
  color: var(--color-textMuted);
  padding: 3rem 0;
`;

const GroupTitle = styled.h2`
  font-size: 1.15rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--color-border);
  }
`;

const ResultCount = styled.p`
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--color-textMuted);
`;

type FilterValue = "all" | "backend" | "web" | "devops" | "data" | "featured";

function matchesFilter(project: Project, filter: FilterValue): boolean {
  switch (filter) {
    case "all":
      return true;
    case "featured":
      return Boolean(project.featured);
    case "backend":
      return (
        project.category === "Backend" ||
        project.tags.includes("API") ||
        project.tags.includes("Node.js")
      );
    case "web":
      return (
        project.category === "Web" ||
        project.category === "E-commerce" ||
        project.category === "Conteúdo & Mídia" ||
        project.category === "Negócios" ||
        project.tags.includes("React") ||
        project.tags.includes("Blazor")
      );
    case "data":
      return (
        project.tags.includes("PostgreSQL") ||
        project.tags.includes("SQL Server") ||
        project.category === "Saúde"
      );
    case "devops":
      return (
        project.category === "DevOps" ||
        project.tags.includes("Docker") ||
        project.tags.includes("Kubernetes") ||
        project.tags.includes("CI/CD")
      );
    default:
      return true;
  }
}

export default function ProjectsPage() {
  const { t, tr } = useI18n();
  const { projects } = useLocalizedData();
  const [filter, setFilter] = useState<FilterValue>("all");

  const FILTERS: { value: FilterValue; label: string }[] = [
    { value: "all", label: t("ui.common.filters.all") },
    { value: "featured", label: t("ui.common.filters.featured") },
    { value: "backend", label: t("ui.common.filters.backend") },
    { value: "web", label: t("ui.common.filters.web") },
    { value: "data", label: t("ui.common.filters.data") },
    { value: "devops", label: t("ui.common.filters.devops") },
  ];

  const filtered = useMemo(
    () => projects.filter((project) => matchesFilter(project, filter)),
    [projects, filter],
  );

  const realProjects = useMemo(
    () => filtered.filter((project) => project.origin === "zseguros"),
    [filtered],
  );
  const otherProjects = useMemo(
    () => filtered.filter((project) => project.origin !== "zseguros"),
    [filtered],
  );

  return (
    <Wrapper>
      <header>
        <Title>
          {t("pages.projects.titleA")}{" "}
          <span className="gradient-text">{t("pages.projects.titleB")}</span>
        </Title>
        <Sub>{t("pages.projects.sub")}</Sub>
      </header>

      <Filters role="group" aria-label={t("ui.common.filterProjects")}>
        {FILTERS.map((f) => (
          <Filter
            key={f.value}
            type="button"
            $active={filter === f.value}
            onClick={() => setFilter(f.value)}
            aria-pressed={filter === f.value}
          >
            {f.label}
          </Filter>
        ))}
      </Filters>

      <ResultCount>
        {tr("ui.common.resultCount", {
          count: String(filtered.length),
          plural: filtered.length === 1 ? "" : "s",
        })}
      </ResultCount>

      {filtered.length === 0 ? (
        <Empty>{t("ui.common.empty")}</Empty>
      ) : (
        <>
          {realProjects.length > 0 && (
            <section aria-label={t("ui.common.prodSection")}>
              <GroupTitle>{t("ui.common.inProduction")}</GroupTitle>
              <Grid style={{ marginTop: "1rem" }}>
                {realProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </Grid>
            </section>
          )}
          {otherProjects.length > 0 && (
            <section aria-label={t("ui.common.otherSection")}>
              <GroupTitle>{t("ui.common.otherProjects")}</GroupTitle>
              <Grid style={{ marginTop: "1rem" }}>
                {otherProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </Grid>
            </section>
          )}
        </>
      )}
    </Wrapper>
  );
}
