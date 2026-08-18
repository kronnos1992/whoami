import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useNavigationConfig } from "@/core/configs";
import { profile, socials } from "@/data/profile.data";
import { Terminal, MapPin, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, type IconComponent } from "@/ui/components/BrandIcons";
import { useI18n } from "@/core/i18n";

const SidebarContainer = styled.aside`
  width: 280px;
  height: 100dvh;
  position: sticky;
  top: 0;
  flex-shrink: 0;
  background: var(--color-surface);
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  gap: 1.5rem;
  overflow-y: auto;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0 0.5rem;
`;

const Monogram = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: var(--gradient-accent);
  color: #fff;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.05rem;
  display: grid;
  place-items: center;
  letter-spacing: 0.02em;
  box-shadow: 0 8px 24px -8px var(--color-glow);
  flex-shrink: 0;
`;

const BrandText = styled.div`
  line-height: 1.3;

  strong {
    display: block;
    font-family: var(--font-heading);
    font-size: 1.05rem;
    color: var(--color-text);
  }

  span {
    font-size: 0.78rem;
    color: var(--color-textMuted);
    font-family: var(--font-mono);
  }
`;

const TerminalLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.625rem 0.875rem;
  border-radius: 12px;
  background: var(--gradient-accent-soft);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: var(--color-primary);
    color: var(--color-text);
  }

  &.active {
    border-color: var(--color-primary);
  }
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0.875rem;
  border-radius: 12px;
  color: var(--color-textSecondary);
  font-weight: 500;
  font-size: 0.95rem;
  border: 1px solid transparent;
  transition: background-color 0.2s ease, color 0.2s ease,
    border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background: var(--color-bgAlt);
    color: var(--color-text);
  }

  &.active {
    background: var(--gradient-accent-soft);
    border-color: var(--color-border);
    color: var(--color-text);

    svg {
      color: var(--color-primary);
    }
  }
`;

const SidebarFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: var(--color-textMuted);
  padding: 0 0.5rem;

  svg {
    width: 14px;
    height: 14px;
    color: var(--color-primary);
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 0.5rem;
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

const iconByLabel: Record<string, IconComponent> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Email: Mail,
};

export function Sidebar() {
  const { t, tr, m } = useI18n();
  const navigationItems = useNavigationConfig();

  return (
    <SidebarContainer aria-label={t("ui.sidebar.label")}>
      <Brand>
        <Monogram aria-hidden="true">{profile.monogram}</Monogram>
        <BrandText>
          <strong>{profile.firstName} Kiala</strong>
          <span>{m.data.profile.roles[0]}</span>
        </BrandText>
      </Brand>

      <TerminalLink to="/terminal">
        <span>{t("ui.sidebar.terminal")}</span>
        <Terminal size={16} aria-hidden="true" />
      </TerminalLink>

      <Nav>
        {navigationItems.map((item) => (
          <NavItem key={item.path} to={item.path}>
            <item.icon size={18} aria-hidden="true" />
            <span>{item.label}</span>
          </NavItem>
        ))}
      </Nav>

      <SidebarFooter>
        <Location>
          <MapPin aria-hidden="true" />
          <span>{profile.location}</span>
        </Location>
        <Socials>
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
        </Socials>
      </SidebarFooter>
    </SidebarContainer>
  );
}
