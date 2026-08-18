import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useNavigationConfig } from "@/core/configs";
import { profile, socials } from "@/data/profile.data";
import { Heart, Terminal, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, type IconComponent } from "@/ui/components/BrandIcons";
import { useI18n } from "@/core/i18n";

const FooterEl = styled.footer`
  border-top: 1px solid var(--color-border);
  background: var(--color-surface);
  padding: 2.5rem 2rem 1.5rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    padding: 2rem 1.25rem 1.25rem;
    margin-top: 2rem;
  }
`;

const FooterInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FooterTitle = styled.h3`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-textMuted);
  margin-bottom: 0.75rem;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    color: var(--color-textSecondary);
    font-size: 0.92rem;

    &:hover {
      color: var(--color-primary);
    }
  }
`;

const FooterSocials = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const SocialLink = styled.a`
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  border: 1px solid var(--color-border);
  color: var(--color-textSecondary);
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-primary);
    color: #fff;
    border-color: var(--color-primary);
    transform: translateY(-2px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const BottomBar = styled.div`
  max-width: 960px;
  margin: 2rem auto 0;
  padding-top: 1.25rem;
  border-top: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  font-size: 0.82rem;
  color: var(--color-textMuted);
`;

const MadeWith = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;

  svg {
    width: 14px;
    height: 14px;
    color: var(--color-primary);
  }
`;

const TerminalHint = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--color-textMuted);

  &:hover {
    color: var(--color-primary);
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

const iconByLabel: Record<string, IconComponent> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Email: Mail,
};

export function Footer() {
  const { t, tr, m } = useI18n();
  const navigationItems = useNavigationConfig();

  return (
    <FooterEl>
      <FooterInner>
        <div>
          <FooterTitle>{profile.name}</FooterTitle>
          <p style={{ color: "var(--color-textSecondary)", fontSize: "0.92rem" }}>
            {tr("ui.footer.tagline", { title: m.data.profile.title })}
          </p>
          <FooterSocials>
            {socials.map((social) => {
              const Icon = iconByLabel[social.label] ?? GithubIcon;
              return (
                <SocialLink
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={tr("ui.header.social", {
                    label: social.label,
                    username: social.username,
                  })}
                >
                  <Icon aria-hidden="true" />
                </SocialLink>
              );
            })}
          </FooterSocials>
        </div>

        <div>
          <FooterTitle>{t("ui.footer.navigation")}</FooterTitle>
          <FooterLinks>
            {navigationItems.map((item) => (
              <NavLink key={item.path} to={item.path}>
                {item.label}
              </NavLink>
            ))}
          </FooterLinks>
        </div>

        <div>
          <FooterTitle>{t("ui.footer.contact")}</FooterTitle>
          <FooterLinks>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span style={{ color: "var(--color-textSecondary)", fontSize: "0.92rem" }}>
              {profile.location}
            </span>
            <TerminalHint to="/terminal">
              <Terminal aria-hidden="true" /> {t("ui.footer.openTerminal")}
            </TerminalHint>
          </FooterLinks>
        </div>
      </FooterInner>

      <BottomBar>
        <span>
          {tr("ui.footer.rights", {
            year: String(new Date().getFullYear()),
            name: profile.name,
          })}
        </span>
        <MadeWith>
          <Heart aria-hidden="true" fill="currentColor" />
          <span>{t("ui.footer.madeBy")}</span>
        </MadeWith>
      </BottomBar>
    </FooterEl>
  );
}
