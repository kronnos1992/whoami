import { routeConfig } from "../routes/routeConfig";
import type { LucideIcon } from "lucide-react";
import { Home, FolderGit2, Code2, UserRound, Mail } from "lucide-react";
import { useI18n, type UiKey } from "@/core/i18n";

export interface NavItem {
  label: string;
  shortLabel: string;
  path: string;
  icon: LucideIcon;
}

interface NavItemConfig {
  labelKey: UiKey;
  path: string;
  icon: LucideIcon;
}

export const navigationConfig: NavItemConfig[] = [
  {
    labelKey: "ui.nav.home",
    path: routeConfig.home.path,
    icon: Home,
  },
  {
    labelKey: "ui.nav.projects",
    path: routeConfig.projects.path,
    icon: FolderGit2,
  },
  {
    labelKey: "ui.nav.skills",
    path: routeConfig.skills.path,
    icon: Code2,
  },
  {
    labelKey: "ui.nav.about",
    path: routeConfig.about.path,
    icon: UserRound,
  },
  {
    labelKey: "ui.nav.contact",
    path: routeConfig.contact.path,
    icon: Mail,
  },
];

export function useNavigationConfig(): NavItem[] {
  const { t } = useI18n();
  return navigationConfig.map((item) => ({
    label: t(item.labelKey),
    shortLabel: t(item.labelKey),
    path: item.path,
    icon: item.icon,
  }));
}
