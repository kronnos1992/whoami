import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Send } from "lucide-react";
import { ButtonLink } from "@/ui/components";
import { useLocalizedData } from "@/data/localized.data";
import { useI18n } from "@/core/i18n";

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-14px) rotate(2deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`;

const HeroWrap = styled.section`
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 3rem;
  align-items: center;
  padding: 3.5rem 0 2.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 0 1.5rem;
  }
`;

const Availability = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--color-success);
  background: color-mix(in srgb, var(--color-success) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-success) 35%, transparent);
  padding: 0.4rem 0.9rem;
  border-radius: 9999px;
  margin-bottom: 1.25rem;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--color-success);
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.4rem, 6vw, 4rem);
  line-height: 1.08;
  margin-bottom: 0.75rem;
  letter-spacing: -0.03em;
`;

const Subtitle = styled.p`
  font-size: 1.15rem;
  color: var(--color-textSecondary);
  max-width: 540px;
  margin-bottom: 1.5rem;
`;

const TypeWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  .prefix {
    font-family: var(--font-mono);
    color: var(--color-textMuted);
    font-size: 0.95rem;
  }
`;

const Type = styled.span`
  font-family: var(--font-mono);
  font-size: 0.95rem;
  color: var(--color-primary);
  min-height: 1.5rem;
  border-bottom: 2px solid var(--color-primary);
`;

const CTAs = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const Stats = styled.dl`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1.75rem;
  border-top: 1px solid var(--color-border);

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Stat = styled.div`
  dt {
    font-family: var(--font-heading);
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--color-text);
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  dd {
    font-size: 0.82rem;
    color: var(--color-textMuted);
    margin: 0;
  }
`;

const Visual = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 360px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const CodeCard = styled(motion.div)`
  position: absolute;
  width: 320px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 18px;
  box-shadow: var(--color-shadow);
  padding: 1.25rem;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  line-height: 1.9;
  color: var(--color-textSecondary);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      600px 300px at 70% 0%,
      var(--color-glow) 0%,
      transparent 60%
    );
    pointer-events: none;
  }

  .kw { color: var(--color-primary); }
  .str { color: var(--color-secondary); }
  .fn { color: var(--color-success); }
  .cm { color: var(--color-textMuted); }
`;

const CardBack = styled(CodeCard)`
  transform: rotate(-6deg) translate(-30px, -20px) scale(0.94);
  animation: ${float} 7s ease-in-out infinite;
  z-index: 1;
`;

const CardFront = styled(CodeCard)`
  transform: rotate(3deg) translate(24px, 26px);
  animation: ${float} 8s ease-in-out infinite reverse;
  z-index: 2;
`;

const Ornament = styled.div`
  position: absolute;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    var(--color-glow) 0%,
    transparent 65%
  );
  filter: blur(8px);
  z-index: 0;
`;

function useRotatingRoles(roles: string[]) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % roles.length),
      2400,
    );
    return () => clearInterval(id);
  }, [reduceMotion, roles.length]);

  return roles[index];
}

export function HeroSection() {
  const { t } = useI18n();
  const { profile, stats } = useLocalizedData();
  const roles = profile.roles ?? [];
  const role = useRotatingRoles(roles.length ? roles : [""]);

  return (
    <HeroWrap>
      <div>
        <Availability>{profile.availability}</Availability>

        <Title>
          {t("pages.hero.hi")}{" "}
          <span className="gradient-text">{profile.firstName} Kiala</span>.
          <br />
          {t("pages.hero.tagline")}
        </Title>

        <TypeWrap>
          <span className="prefix">&gt;</span>
          <Type aria-live="polite">{role}</Type>
        </TypeWrap>

        <Subtitle>{profile.summary}</Subtitle>

        <CTAs>
          <ButtonLink to="/projects">
            {t("ui.common.viewProjects")}{" "}
            <ArrowRight size={17} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink to="/contact" variant="ghost">
            <Send size={16} aria-hidden="true" /> {t("ui.common.talkToMe")}
          </ButtonLink>
          <ButtonLink href="/cv.pdf" variant="ghost">
            <Download size={16} aria-hidden="true" /> {t("ui.common.cv")}
          </ButtonLink>
        </CTAs>

        <Stats>
          {stats.map((stat) => (
            <Stat key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </Stat>
          ))}
        </Stats>
      </div>

      <Visual aria-hidden="true">
        <Ornament />
        <CardBack>
          <pre>
            <span className="kw">const</span> career = {"{"}
            {"\n  "}role: <span className="str">"Full Stack"</span>,{"\n  "}data:{" "}
            <span className="str">"SQL · BI"</span>,{"\n  "}cloud:{" "}
            <span className="str">"Docker · K8s"</span>,{"\n"}
            {"}"};
          </pre>
        </CardBack>
        <CardFront>
          <pre>
            <span className="kw">export</span> <span className="kw">async</span>{" "}
            <span className="fn">function</span> deliver() {"{"}
            {"\n"}  <span className="kw">await</span> build();{"\n"}  <span className="kw">await</span> test();{"\n"}  <span className="kw">await</span> deploy();
            {"\n  "}<span className="cm">{t("pages.hero.comment")}</span>{"\n"}
            {"}"}
          </pre>
        </CardFront>
      </Visual>
    </HeroWrap>
  );
}
