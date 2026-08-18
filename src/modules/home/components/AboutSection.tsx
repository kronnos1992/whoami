import styled from "styled-components";
import { MapPin, Briefcase, GraduationCap, BadgeCheck } from "lucide-react";
import { Section, SectionHeading, Reveal } from "@/ui/components";
import { useLocalizedData } from "@/data/localized.data";
import { useI18n } from "@/core/i18n";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    color: var(--color-textSecondary);
    line-height: 1.75;
  }
`;

const Facts = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

const Fact = styled.li`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 1rem 1.25rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  color: var(--color-textSecondary);
  font-size: 0.95rem;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateX(6px);
    border-color: var(--color-primary);
  }

  svg {
    color: var(--color-primary);
    flex-shrink: 0;
  }
`;

export function AboutSection() {
  const { t } = useI18n();
  const { profile } = useLocalizedData();

  return (
    <Section id="sobre">
      <SectionHeading
        kicker={t("pages.home.aboutKicker")}
        title={t("pages.home.aboutTitle")}
      />

      <Grid>
        <Reveal>
          <Text>
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </Text>
        </Reveal>

        <Reveal delay={0.1}>
          <Facts>
            <Fact>
              <MapPin size={18} aria-hidden="true" />
              <span>
                <strong style={{ color: "var(--color-text)" }}>{profile.location}</strong>{" "}
                {t("pages.home.factLocation")}
              </span>
            </Fact>
            <Fact>
              <Briefcase size={18} aria-hidden="true" />
              <span>
                <strong style={{ color: "var(--color-text)" }}>{profile.yearsExperience}</strong>{" "}
                {t("pages.home.factExperience")}
              </span>
            </Fact>
            <Fact>
              <GraduationCap size={18} aria-hidden="true" />
              <span>
                <strong style={{ color: "var(--color-text)" }}>{t("pages.home.factLearningStrong")}</strong>{" "}
                {t("pages.home.factLearning")}
              </span>
            </Fact>
            <Fact>
              <BadgeCheck size={18} aria-hidden="true" />
              <span>
                <strong style={{ color: "var(--color-text)" }}>{t("pages.home.factPracticeStrong")}</strong>{" "}
                {t("pages.home.factPractice")}
              </span>
            </Fact>
          </Facts>
        </Reveal>
      </Grid>
    </Section>
  );
}
