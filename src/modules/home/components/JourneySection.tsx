import styled from "styled-components";
import { Section, SectionHeading, Reveal, ButtonLink } from "@/ui/components";
import { ArrowRight } from "lucide-react";
import { useLocalizedData } from "@/data/localized.data";
import { useI18n } from "@/core/i18n";

const Timeline = styled.ol`
  list-style: none;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 720px;

  &::before {
    content: "";
    position: absolute;
    left: 11px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: linear-gradient(
      to bottom,
      var(--color-primary),
      var(--color-secondary)
    );
    opacity: 0.5;
  }
`;

const Item = styled.li`
  position: relative;
  padding-left: 2.5rem;

  &::before {
    content: "";
    position: absolute;
    left: 4px;
    top: 8px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--color-bg);
    border: 3px solid var(--color-primary);
    box-shadow: 0 0 0 4px var(--color-glow);
  }
`;

const Card = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 1.25rem 1.5rem;

  .role {
    font-family: var(--font-heading);
    font-weight: 700;
    color: var(--color-text);
    font-size: 1.05rem;
  }

  .company {
    font-family: var(--font-mono);
    font-size: 0.82rem;
    color: var(--color-primary);
    margin: 0.25rem 0 0.75rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  li {
    font-size: 0.9rem;
    color: var(--color-textSecondary);
    padding-left: 1.1rem;
    position: relative;
  }

  li::before {
    content: "▹";
    position: absolute;
    left: 0;
    color: var(--color-primary);
  }
`;

const ItemMeta = styled.span`
  position: absolute;
  right: 0;
  top: 10px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-textMuted);
  background: var(--color-bgAlt);
  border: 1px solid var(--color-border);
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
`;

export function JourneySection() {
  const { t } = useI18n();
  const { experiences } = useLocalizedData();

  return (
    <Section id="carreira">
      <SectionHeading
        kicker={t("pages.home.journeyKicker")}
        title={t("pages.home.journeyTitle")}
        subtitle={t("pages.home.journeySub")}
      />

      <Timeline>
        {experiences.map((exp, index) => (
          <Reveal key={exp.id} delay={index * 0.08}>
            <Item>
              <ItemMeta>{exp.period}</ItemMeta>
              <Card>
                <div className="role">{exp.role}</div>
                <div className="company">{exp.company}</div>
                <ul>
                  {exp.highlights.slice(0, 2).map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </Card>
            </Item>
          </Reveal>
        ))}
      </Timeline>

      <div style={{ marginTop: "2rem" }}>
        <ButtonLink to="/about" variant="ghost">
          {t("ui.common.readFullStory")}{" "}
          <ArrowRight size={16} aria-hidden="true" />
        </ButtonLink>
      </div>
    </Section>
  );
}
