import styled from "styled-components";
import { Server, Database, LayoutTemplate, TerminalSquare } from "lucide-react";
import { Section, SectionHeading, SkillBar, Reveal } from "@/ui/components";
import { useLocalizedData } from "@/data/localized.data";
import { useI18n } from "@/core/i18n";

const GroupGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const GroupCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: var(--color-primary);
    transform: translateY(-4px);
  }
`;

const GroupHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .icon {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: var(--gradient-accent-soft);
    border: 1px solid var(--color-border);
    display: grid;
    place-items: center;
    color: var(--color-primary);
  }

  h3 {
    font-size: 1.15rem;
    margin: 0;
  }
`;

const iconMap: Record<string, typeof Server> = {
  server: Server,
  database: Database,
  layout: LayoutTemplate,
  terminal: TerminalSquare,
};

export default function SkillsPage() {
  const { t } = useI18n();
  const { skillGroups } = useLocalizedData();

  return (
    <Section>
      <SectionHeading
        as="h1"
        kicker={t("pages.skills.kicker")}
        title={t("pages.skills.title")}
        subtitle={t("pages.skills.subtitle")}
      />

      <GroupGrid>
        {skillGroups.map((group, gi) => {
          const Icon = iconMap[group.icon] ?? Server;
          return (
            <Reveal key={group.id} delay={gi * 0.08}>
              <GroupCard>
                <GroupHeader>
                  <span className="icon">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3>{group.label}</h3>
                </GroupHeader>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {group.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      index={gi * 2 + si}
                    />
                  ))}
                </div>
              </GroupCard>
            </Reveal>
          );
        })}
      </GroupGrid>
    </Section>
  );
}
