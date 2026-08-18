import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "../theme";
import { useNavigationConfig } from "@/core/configs";
import { profile, socials } from "@/data/profile.data";
import {
  Monitor,
  Moon,
  Sun,
  Menu,
  X,
  Terminal,
  Mail,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, type IconComponent } from "@/ui/components/BrandIcons";
import { useI18n } from "@/core/i18n";
import { LanguageSwitcher, LanguageTabs } from "@/ui/components";

const HeaderBar = styled.header`
  height: 64px;
  flex-shrink: 0;
  background: color-mix(in srgb, var(--color-bg) 78%, transparent);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 1.5rem;
  position: sticky;
  top: 0;
  z-index: 40;

  @media (max-width: 1024px) {
    padding: 0 1rem;
  }
`;

const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  color: var(--color-textMuted);
  text-transform: uppercase;

  @media (max-width: 640px) {
    display: none;
  }
`;

const StatusDot = styled.span<{ $online: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ $online }) =>
    $online ? "var(--color-success)" : "var(--color-error)"};
  box-shadow: ${({ $online }) =>
    $online ? "0 0 8px var(--color-success)" : "none"};
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const IconButton = styled.button<{ $active?: boolean }>`
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  border: 1px solid
    ${({ $active }) =>
      $active ? "var(--color-primary)" : "var(--color-border)"};
  background: ${({ $active }) =>
    $active ? "var(--gradient-accent-soft)" : "transparent"};
  color: ${({ $active }) =>
    $active ? "var(--color-primary)" : "var(--color-textSecondary)"};
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
`;

const ThemeButton = IconButton;

const TerminalIconButton = styled(IconButton)`
  @media (min-width: 641px) {
    display: none;
  }
`;

const HeaderLanguage = styled(LanguageSwitcher)`
  @media (max-width: 640px) {
    display: none;
  }
`;

const MobileBrand = styled(NavLink)`
  display: none;
  align-items: center;
  gap: 0.6rem;

  @media (max-width: 1024px) {
    display: flex;
  }

  span {
    font-family: var(--font-heading);
    font-weight: 700;
    color: var(--color-text);
  }
`;

const MobileBadge = styled.span`
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: var(--gradient-accent);
  color: #fff;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.8rem;
  display: grid;
  place-items: center;
`;

const Drawer = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 100;
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  transition: visibility 0.3s ease;
`;

const Backdrop = styled.div<{ $open: boolean }>`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

const DrawerPanel = styled.div<{ $open: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: min(320px, 85vw);
  background: var(--color-surface);
  border-left: 1px solid var(--color-border);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transform: translateX(${({ $open }) => ($open ? "0" : "100%")});
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  box-shadow: var(--color-shadow);
`;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DrawerBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  strong {
    font-family: var(--font-heading);
    color: var(--color-text);
  }
`;

const DrawerNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
`;

const DrawerLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0.875rem;
  border-radius: 12px;
  color: var(--color-textSecondary);
  font-weight: 500;
  border: 1px solid transparent;

  &:hover {
    background: var(--color-bgAlt);
    color: var(--color-text);
  }

  &.active {
    background: var(--gradient-accent-soft);
    border-color: var(--color-border);
    color: var(--color-text);
  }
`;

const DrawerSocials = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
`;

const iconByLabel: Record<string, IconComponent> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Email: Mail,
};

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useI18n();

  return (
    <div role="group" aria-label={t("ui.header.themeGroup")} style={{ display: "flex", gap: "0.25rem" }}>
      <ThemeButton
        type="button"
        $active={theme === "light"}
        onClick={() => setTheme("light")}
        aria-label={t("ui.header.themeLight")}
        aria-pressed={theme === "light"}
        title={t("ui.header.themeLight")}
      >
        <Sun size={17} aria-hidden="true" />
      </ThemeButton>
      <ThemeButton
        type="button"
        $active={theme === "system"}
        onClick={() => setTheme("system")}
        aria-label={t("ui.header.themeSystem")}
        aria-pressed={theme === "system"}
        title={t("ui.header.themeSystem")}
      >
        <Monitor size={17} aria-hidden="true" />
      </ThemeButton>
      <ThemeButton
        type="button"
        $active={theme === "dark"}
        onClick={() => setTheme("dark")}
        aria-label={t("ui.header.themeDark")}
        aria-pressed={theme === "dark"}
        title={t("ui.header.themeDark")}
      >
        <Moon size={17} aria-hidden="true" />
      </ThemeButton>
    </div>
  );
}

export function Header() {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== "undefined" ? navigator.onLine : true,
  );
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { t, tr } = useI18n();
  const navigationItems = useNavigationConfig();

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <HeaderBar>
        <MobileBrand to="/" aria-label={t("ui.header.goHome")}>
          <MobileBadge aria-hidden="true">{profile.monogram}</MobileBadge>
          <span>{profile.firstName} Kiala</span>
        </MobileBrand>

        <Status role="status">
          <StatusDot $online={isOnline} aria-hidden="true" />
          <span>{isOnline ? t("ui.header.online") : t("ui.header.offline")}</span>
        </Status>

        <Controls>
          <TerminalIconButton
            as={NavLink}
            to="/terminal"
            aria-label={t("ui.header.openTerminal")}
            title={t("ui.nav.terminal")}
          >
            <Terminal size={17} aria-hidden="true" />
          </TerminalIconButton>

          <HeaderLanguage />

          <ThemeToggle />

          <IconButton
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label={t("ui.header.openMenu")}
            aria-expanded={drawerOpen}
            title={t("ui.header.menu")}
          >
            <Menu size={18} aria-hidden="true" />
          </IconButton>
        </Controls>
      </HeaderBar>

      <Drawer $open={drawerOpen} aria-hidden={!drawerOpen}>
        <Backdrop $open={drawerOpen} onClick={() => setDrawerOpen(false)} />
        <DrawerPanel
          $open={drawerOpen}
          role="dialog"
          aria-modal="true"
          aria-label={t("ui.header.navDialog")}
        >
          <DrawerHeader>
            <DrawerBrand>
              <MobileBadge aria-hidden="true">{profile.monogram}</MobileBadge>
              <strong>{profile.name}</strong>
            </DrawerBrand>
            <IconButton
              type="button"
              onClick={() => setDrawerOpen(false)}
              aria-label={t("ui.header.closeMenu")}
              title={t("ui.header.close")}
            >
              <X size={18} aria-hidden="true" />
            </IconButton>
          </DrawerHeader>

          <DrawerNav>
            <DrawerLink to="/terminal" onClick={closeDrawer}>
              <Terminal size={18} aria-hidden="true" />
              <span>{t("ui.nav.terminal")}</span>
            </DrawerLink>
            {navigationItems.map((item) => (
              <DrawerLink key={item.path} to={item.path} onClick={closeDrawer}>
                <item.icon size={18} aria-hidden="true" />
                <span>{item.label}</span>
              </DrawerLink>
            ))}
          </DrawerNav>

          <LanguageTabs />

          <DrawerSocials>
            {socials.map((social) => {
              const Icon = iconByLabel[social.label] ?? GithubIcon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={tr("ui.header.social", {
                    label: social.label,
                    username: social.username,
                  })}
                  style={{
                    width: 38,
                    height: 38,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 10,
                    border: "1px solid var(--color-border)",
                    color: "var(--color-textSecondary)",
                  }}
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              );
            })}
          </DrawerSocials>
        </DrawerPanel>
      </Drawer>
    </>
  );
}
