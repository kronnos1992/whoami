import styled, { keyframes } from "styled-components";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading, Reveal, ButtonLink } from "@/ui/components";
import { useLocalizedData } from "@/data/localized.data";
import { useI18n } from "@/core/i18n";

const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const Marquee = styled.div`
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent,
    #000 12%,
    #000 88%,
    transparent
  );
  margin-bottom: 3rem;
`;

const Track = styled.div`
  display: flex;
  gap: 1rem;
  width: max-content;
  animation: ${marquee} 32s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const Chip = styled.span`
  font-family: var(--font-mono);
  font-size: 0.9rem;
  padding: 0.6rem 1.1rem;
  border-radius: 9999px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-textSecondary);
  white-space: nowrap;

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
`;

const GroupGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Group = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 18px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: var(--color-primary);
    transform: translateY(-3px);
  }

  h3 {
    font-size: 1.05rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    color: var(--color-text);
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

export function SkillsSection() {
  const { t } = useI18n();
  const { skillGroups } = useLocalizedData();
  const chips = skillGroups.flatMap((group) => group.skills.map((s) => s.name));

  return (
    <Section id="skills">
      <SectionHeading
        kicker={t("pages.home.skillsKicker")}
        title={t("pages.home.skillsTitle")}
        subtitle={t("pages.home.skillsSub")}
      />

      <Reveal>
        <Marquee aria-hidden="true">
          <Track>
            {[...chips, ...chips].map((chip, i) => (
              <Chip key={`${chip}-${i}`}>{chip}</Chip>
            ))}
          </Track>
        </Marquee>
      </Reveal>

      <GroupGrid>
        {skillGroups.map((group, index) => (
          <Reveal key={group.id} delay={index * 0.08}>
            <Group>
              <h3>
                <span className="gradient-text">#</span>
                {group.label}
              </h3>
              <ul>
                {group.skills.slice(0, 5).map((skill) => (
                  <li key={skill.name}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.78rem",
                        color: "var(--color-textMuted)",
                      }}
                    >
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </Group>
          </Reveal>
        ))}
      </GroupGrid>

      <div style={{ marginTop: "2rem" }}>
        <ButtonLink to="/skills" variant="ghost">
          {t("ui.common.allSkills")}{" "}
          <ArrowRight size={16} aria-hidden="true" />
        </ButtonLink>
      </div>
    </Section>
  );
}
