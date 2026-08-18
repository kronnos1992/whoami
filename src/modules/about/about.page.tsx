import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  Target,
  Mail,
  Languages,
  BadgeCheck,
  User,
  BarChart3,
  Route,
  Heart,
  Sparkles,
} from "lucide-react";
import { Section, SectionHeading, Reveal, ButtonLink } from "@/ui/components";
import { useLocalizedData } from "@/data/localized.data";
import { useI18n } from "@/core/i18n";

const PageNav = styled.nav`
  display: flex;
  gap: 0.6rem;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  margin: 0 0 2.5rem;
  scrollbar-width: thin;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const NavChip = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  white-space: nowrap;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-textSecondary);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 9999px;
  padding: 0.5rem 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    color: var(--color-primary);
    border-color: var(--color-primary);
  }

  svg {
    width: 14px;
    height: 14px;
    color: var(--color-primary);
  }
`;

const Intro = styled.div`
  display: grid;
  grid-template-columns: 290px 1fr;
  gap: 2.5rem;
  align-items: start;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Avatar = styled.div`
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: 24px;
  background: var(--color-surface);
  box-shadow: var(--color-shadow);
  overflow: hidden;
  border: 1px solid var(--color-border);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const IntroText = styled.div`
  h2 {
    font-size: clamp(1.9rem, 4vw, 2.8rem);
    margin-bottom: 0.35rem;
  }

  .title {
    font-family: var(--font-mono);
    color: var(--color-primary);
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }

  .bio {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    color: var(--color-textSecondary);
    line-height: 1.75;
  }

  .lead {
    color: var(--color-text);
  }
`;

const Availability = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--color-success);
  background: color-mix(in srgb, var(--color-success) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-success) 35%, transparent);
  padding: 0.35rem 0.8rem;
  border-radius: 9999px;
  margin-bottom: 1.25rem;

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--color-success);
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
      box-shadow: 0 0 0 0 color-mix(in srgb, var(--color-success) 45%, transparent);
    }
    50% {
      opacity: 0.7;
      box-shadow: 0 0 0 6px transparent;
    }
  }
`;

const MetaChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.5rem;
`;

const MetaChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.85rem;
  color: var(--color-textSecondary);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 9999px;
  padding: 0.45rem 0.9rem;

  a {
    color: inherit;
  }

  a:hover {
    color: var(--color-primary);
  }

  svg {
    width: 15px;
    height: 15px;
    color: var(--color-primary);
    flex-shrink: 0;
  }
`;

const IntroActions = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1.75rem;
`;

const Split = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  margin-top: 3.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const SectionBlock = styled.section`
  margin-top: 3.5rem;
`;

const BlockTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.3rem;

  svg {
    color: var(--color-primary);
  }
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(Reveal)`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 18px;
  padding: 1.5rem 1rem;
  text-align: center;
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: var(--color-primary);
    transform: translateY(-4px);
  }

  .value {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 2.2rem;
    line-height: 1;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 0.4rem;
  }

  .label {
    font-size: 0.85rem;
    color: var(--color-textSecondary);
  }
`;

const ExperienceList = styled.ol`
  list-style: none;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &::before {
    content: "";
    position: absolute;
    left: 5px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: linear-gradient(
      180deg,
      var(--color-primary) 0%,
      color-mix(in srgb, var(--color-primary) 15%, transparent) 100%
    );
  }
`;

const ExpItem = styled.li`
  position: relative;
  padding-left: 1.6rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 6px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--color-surface);
    border: 2px solid var(--color-primary);
    box-shadow: 0 0 0 4px var(--color-glow);
  }

  .period {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    color: var(--color-primary);
  }

  h3 {
    font-size: 1.05rem;
    margin: 0.15rem 0 0.1rem;
  }

  .company {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--color-textSecondary);
    margin-bottom: 0.6rem;
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
    line-height: 1.6;
    padding-left: 1.05rem;
    position: relative;
  }

  li::before {
    content: "▹";
    position: absolute;
    left: 0;
    color: var(--color-primary);
  }
`;

const Item = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 1.25rem 1.5rem;
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: var(--color-primary);
    transform: translateX(4px);
  }

  .period {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    color: var(--color-primary);
    margin-bottom: 0.35rem;
  }

  h3 {
    font-size: 1.05rem;
    margin-bottom: 0.15rem;
  }

  .institution {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--color-primary);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: var(--color-textSecondary);
    line-height: 1.6;
  }
`;

const CertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const CertCard = styled(Reveal)`
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 1.1rem 1.25rem;
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: var(--color-primary);
    transform: translateY(-3px);
  }

  .year {
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--color-primary);
    background: var(--gradient-accent-soft);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    padding: 0.25rem 0.5rem;
    margin-top: 2px;
  }

  h3 {
    font-size: 0.95rem;
    margin-bottom: 0.15rem;
  }

  .issuer {
    font-size: 0.82rem;
    color: var(--color-textMuted);
  }
`;

const Values = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Value = styled(Reveal)`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 18px;
  padding: 1.5rem;
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: var(--color-primary);
    transform: translateY(-4px);
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: var(--color-primary);
    }
  }

  p {
    font-size: 0.88rem;
    color: var(--color-textSecondary);
  }
`;

const CtaPanel = styled.div`
  margin-top: 4.5rem;
  background: var(--gradient-accent);
  border-radius: 28px;
  padding: 3rem 2rem;
  text-align: center;
  color: #fff;

  h2 {
    color: #fff;
    font-size: clamp(1.6rem, 3.5vw, 2.2rem);
    margin-bottom: 0.75rem;
  }

  .cta-icon {
    display: inline-flex;
    margin-bottom: 1rem;
  }

  p {
    max-width: 560px;
    margin: 0 auto 1.75rem;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.7;
  }

  .cta-actions {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
`;

const CtaLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.6rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s ease;
`;

const CtaPrimary = styled(CtaLink)`
  background: #fff;
  color: #5b21b6;
  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.35);

  &:hover {
    color: #5b21b6;
    transform: translateY(-2px);
  }
`;

const CtaGhost = styled(CtaLink)`
  border: 1px solid rgba(255, 255, 255, 0.6);
  color: #fff;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-2px);
  }
`;

const valueIcons = [Target, Award, GraduationCap];

const navItems = [
  { id: "sobre-visao", key: "overview", icon: User },
  { id: "sobre-numeros", key: "stats", icon: BarChart3 },
  { id: "sobre-percurso", key: "journey", icon: Route },
  { id: "sobre-formacao", key: "education", icon: GraduationCap },
  { id: "sobre-certificacoes", key: "certifications", icon: BadgeCheck },
  { id: "sobre-valores", key: "valuesLabel", icon: Heart },
  { id: "sobre-contacto", key: "contact", icon: Mail },
] as const;

export default function AboutPage() {
  const { t, m } = useI18n();
  const { profile, stats, experiences, education, certifications } =
    useLocalizedData();

  const certificationsByYear = [...certifications].sort((a, b) =>
    a.year.localeCompare(b.year),
  );
  const values = m.pages.about.values.map((value, index) => ({
    ...value,
    icon: valueIcons[index % valueIcons.length],
  }));

  return (
    <Section>
      <SectionHeading
        as="h1"
        kicker={t("pages.about.kicker")}
        title={t("pages.about.title")}
        subtitle={t("pages.about.subtitle")}
      />

      <PageNav aria-label={t("pages.about.sectionNav")}>
        {navItems.map((item) => (
          <NavChip key={item.id} href={`#${item.id}`}>
            <item.icon aria-hidden="true" />
            {t(`pages.about.${item.key}`)}
          </NavChip>
        ))}
      </PageNav>

      <Reveal>
        <Intro id="sobre-visao">
          <Avatar>
            <img
              src="/images/profile.jpg"
              alt={t("pages.about.avatarAlt")}
              width={520}
              height={520}
            />
          </Avatar>
          <IntroText>
            <h2>{profile.name}</h2>
            <div className="title">{profile.title}</div>
            <Availability>
              <span className="dot" aria-hidden="true" />
              {profile.availability}
            </Availability>
            <div className="bio">
              <p className="lead">{profile.summary}</p>
              {profile.about.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <MetaChips>
              <MetaChip>
                <MapPin aria-hidden="true" /> {profile.location}
              </MetaChip>
              <MetaChip>
                <Briefcase aria-hidden="true" /> {t("pages.about.years")}
              </MetaChip>
              <MetaChip>
                <Mail aria-hidden="true" />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </MetaChip>
              <MetaChip>
                <Languages aria-hidden="true" />{" "}
                {profile.languages.join(" · ")}
              </MetaChip>
            </MetaChips>
            <IntroActions>
              <ButtonLink to="/contact">{t("ui.common.talkToMe")}</ButtonLink>
              <ButtonLink to="/skills" variant="ghost">
                {t("ui.common.seeSkills")}
              </ButtonLink>
            </IntroActions>
          </IntroText>
        </Intro>
      </Reveal>

      <SectionBlock id="sobre-numeros">
        <BlockTitle>
          <BarChart3 size={22} aria-hidden="true" /> {t("pages.about.stats")}
        </BlockTitle>
        <StatGrid>
          {stats.map((stat, index) => (
            <StatCard key={stat.label} delay={index * 0.08}>
              <div className="value">{stat.value}</div>
              <div className="label">{stat.label}</div>
            </StatCard>
          ))}
        </StatGrid>
      </SectionBlock>

      <Split>
        <Block id="sobre-percurso">
          <BlockTitle>
            <Briefcase size={22} aria-hidden="true" />{" "}
            {t("pages.about.experience")}
          </BlockTitle>
          <ExperienceList aria-label={t("pages.about.experience")}>
            {experiences.map((exp) => (
              <ExpItem key={exp.id}>
                <span className="period">{exp.period}</span>
                <h3>{exp.role}</h3>
                <div className="company">{exp.company}</div>
                <ul>
                  {exp.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </ExpItem>
            ))}
          </ExperienceList>
        </Block>

        <Block id="sobre-formacao">
          <BlockTitle>
            <GraduationCap size={22} aria-hidden="true" />{" "}
            {t("pages.about.education")}
          </BlockTitle>
          {education.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <Item>
                <span className="period">{item.period}</span>
                <h3>{item.title}</h3>
                <div className="institution">{item.institution}</div>
                <p>{item.detail}</p>
              </Item>
            </Reveal>
          ))}
        </Block>
      </Split>

      <SectionBlock id="sobre-certificacoes">
        <BlockTitle>
          <BadgeCheck size={22} aria-hidden="true" />{" "}
          {t("pages.about.certifications")}
        </BlockTitle>
        <CertGrid>
          {certificationsByYear.map((cert, index) => (
            <CertCard key={cert.id} delay={index * 0.05}>
              <span className="year">{cert.year}</span>
              <div>
                <h3>{cert.title}</h3>
                <div className="issuer">{cert.issuer}</div>
              </div>
            </CertCard>
          ))}
        </CertGrid>
      </SectionBlock>

      <SectionBlock id="sobre-valores">
        <BlockTitle>
          <Heart size={22} aria-hidden="true" /> {t("pages.about.valuesLabel")}
        </BlockTitle>
        <Values>
          {values.map((value, index) => (
            <Value key={value.title} delay={index * 0.08}>
              <h3>
                <value.icon size={18} aria-hidden="true" /> {value.title}
              </h3>
              <p>{value.text}</p>
            </Value>
          ))}
        </Values>
      </SectionBlock>

      <Reveal>
        <CtaPanel id="sobre-contacto">
          <span className="cta-icon" aria-hidden="true">
            <Sparkles size={26} />
          </span>
          <h2>{t("pages.home.ctaTitle")}</h2>
          <p>{t("pages.home.ctaText")}</p>
          <div className="cta-actions">
            <CtaPrimary to="/contact">{t("ui.common.talkToMe")}</CtaPrimary>
            <CtaGhost to="/projects">{t("ui.common.viewProjects")}</CtaGhost>
          </div>
        </CtaPanel>
      </Reveal>
    </Section>
  );
}
