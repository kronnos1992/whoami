import styled from "styled-components";
import { Section, Reveal } from "@/ui/components";
import { ButtonLink } from "@/ui/components";
import { Terminal } from "lucide-react";
import { profile } from "@/data/profile.data";
import { useI18n } from "@/core/i18n";

const CtaCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  background: var(--gradient-accent);
  color: #fff;
  padding: 3.5rem 2.5rem;
  text-align: center;
  box-shadow: 0 24px 60px -20px var(--color-glow);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(600px 300px at 20% 0%, rgba(255, 255, 255, 0.25) 0%, transparent 55%),
      radial-gradient(600px 300px at 90% 100%, rgba(34, 211, 238, 0.35) 0%, transparent 55%);
  }

  h2 {
    color: #fff;
    font-size: clamp(1.6rem, 4vw, 2.4rem);
    margin-bottom: 0.75rem;
    position: relative;
  }

  p {
    color: rgba(255, 255, 255, 0.92);
    max-width: 560px;
    margin: 0 auto 1.75rem;
    position: relative;
    font-size: 1.05rem;
  }
`;

const CtaActions = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
`;

const GhostBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.28);
    color: #fff;
    transform: translateY(-2px);
  }
`;

const SolidBtn = styled(ButtonLink)`
  background: #fff !important;
  border-color: #fff !important;
  color: #5b21b6 !important;
  box-shadow: 0 12px 32px -12px rgba(0, 0, 0, 0.4) !important;

  &:hover {
    color: #5b21b6 !important;
  }
`;

export function ContactCta() {
  const { t } = useI18n();

  return (
    <Section>
      <Reveal>
        <CtaCard>
          <h2>{t("pages.home.ctaTitle")}</h2>
          <p>{t("pages.home.ctaText")}</p>
          <CtaActions>
            <SolidBtn to="/contact">{t("ui.common.letTalk")}</SolidBtn>
            <GhostBtn href={`mailto:${profile.email}`}>
              <Terminal size={16} aria-hidden="true" /> {profile.email}
            </GhostBtn>
          </CtaActions>
        </CtaCard>
      </Reveal>
    </Section>
  );
}
