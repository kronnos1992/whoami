import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { CommandResult, TerminalEntry } from "../types/terminal.types";
import { socials } from "@/data/profile.data";
import { useLocalizedData } from "@/data/localized.data";
import { useTheme } from "@/core/theme";
import { useI18n, localeTag } from "@/core/i18n";

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

const bannerArt = [
  "  __  __   _  __   ___   ___   _  __  ___   __  ",
  " |  \\/  | (_) \\ \\ / / | | \\ \\ | || | |  /  \\  \\/ / ",
  " | |\\/| |  _   \\ V /  | |  \\ \\| || |_| |()| |\\  | ",
  " |_|  |_| (_)   |_|   |_|   |_\\___/ \\___/|_| \\_|  ",
  "",
];

export function useTerminal() {
  const { locale, t, tr, m } = useI18n();
  const { profile, projects, skillGroups } = useLocalizedData();
  const [history, setHistory] = useState<TerminalEntry[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [inputHistory, setInputHistory] = useState<string[]>([]);
  const navigate = useNavigate();
  const { setTheme } = useTheme();

  const banner = useMemo(
    () => [
      ...bannerArt,
      tr("ui.terminal.bannerTitle", { role: m.data.profile.roles[0] }),
      t("ui.terminal.bannerHint"),
    ],
    [t, tr, m.data.profile.roles],
  );

  const helpText = useMemo<CommandResult>(
    () => ({
      type: "output",
      content: [
        t("ui.terminal.helpTitle"),
        `  help          ${t("ui.terminal.helpList.help")}`,
        `  banner        ${t("ui.terminal.helpList.banner")}`,
        `  whoami        ${t("ui.terminal.helpList.whoami")}`,
        `  about         ${t("ui.terminal.helpList.about")}`,
        `  projects      ${t("ui.terminal.helpList.projects")}`,
        `  skills        ${t("ui.terminal.helpList.skills")}`,
        `  contact       ${t("ui.terminal.helpList.contact")}`,
        `  social        ${t("ui.terminal.helpList.social")}`,
        `  theme         ${t("ui.terminal.helpList.theme")}`,
        `  ls / bio      ${t("ui.terminal.helpList.bio")}`,
        `  skills-list   ${t("ui.terminal.helpList.skillsList")}`,
        `  date          ${t("ui.terminal.helpList.date")}`,
        `  echo <texto>  ${t("ui.terminal.helpList.echo")}`,
        `  clear         ${t("ui.terminal.helpList.clear")}`,
        `  exit          ${t("ui.terminal.helpList.exit")}`,
        "",
        t("ui.terminal.helpTip"),
      ],
    }),
    [t],
  );

  const execute = useCallback(
    (raw: string) => {
      const command = raw.trim();
      const input: TerminalEntry = {
        id: uid(),
        type: "input",
        content: `$ ${command}`,
      };

      setInputHistory((prev) => [...prev, command]);
      setHistoryIndex(-1);

      if (!command) {
        setHistory((prev) => [...prev, input]);
        return;
      }

      const [cmd, ...args] = command.toLowerCase().split(/\s+/);
      const rest = command.trim().split(/\s+/).slice(1).join(" ");
      let result: CommandResult | null = null;

      switch (cmd) {
        case "help":
        case "h":
          result = helpText;
          break;
        case "banner":
          result = { type: "success", content: banner };
          break;
        case "whoami":
          result = {
            type: "output",
            content: [
              `${t("ui.terminal.whoamiLabels.name")}:      ${profile.name}`,
              `${t("ui.terminal.whoamiLabels.role")}:     ${profile.title}`,
              `${t("ui.terminal.whoamiLabels.location")}:     ${profile.location}`,
              `${t("ui.terminal.whoamiLabels.email")}:     ${profile.email}`,
              `${t("ui.terminal.whoamiLabels.summary")}:    ${profile.summary}`,
            ],
          };
          break;
        case "about":
        case "profile":
          result = {
            type: "info",
            content: tr("ui.terminal.opening", { module: t("ui.nav.about") }),
            navigate: "/about",
          };
          break;
        case "projects":
          result = {
            type: "info",
            content: tr("ui.terminal.opening", { module: t("ui.nav.projects") }),
            navigate: "/projects",
          };
          break;
        case "skills":
          result = {
            type: "info",
            content: tr("ui.terminal.opening", { module: t("ui.nav.skills") }),
            navigate: "/skills",
          };
          break;
        case "contact":
          result = {
            type: "info",
            content: tr("ui.terminal.opening", { module: t("ui.nav.contact") }),
            navigate: "/contact",
          };
          break;
        case "social":
          result = {
            type: "output",
            content: socials.map(
              (s) => `  ${s.label.padEnd(9)} ${s.username.padEnd(24)} ${s.href}`,
            ),
          };
          break;
        case "theme":
        case "tema": {
          const next =
            args[0] && ["light", "dark", "system"].includes(args[0])
              ? args[0]
              : undefined;
          if (next) {
            setTheme(next as "light" | "dark" | "system");
          }
          result = {
            type: "info",
            content: next
              ? tr("ui.terminal.themeSet", { theme: next })
              : t("ui.terminal.themeUsage"),
          };
          break;
        }
        case "ls":
        case "bio":
          result = {
            type: "output",
            content: [
              t("ui.terminal.bioExp"),
              t("ui.terminal.bioRole"),
              t("ui.terminal.bioRoles"),
              `${profile.location}`,
            ],
          };
          break;
        case "skills-list":
        case "stack":
          result = {
            type: "success",
            content: skillGroups.map(
              (g) => `  ${g.label}: ${g.skills.map((s) => s.name).join(", ")}`,
            ),
          };
          break;
        case "projects-list": {
          result = {
            type: "success",
            content: [
              t("ui.terminal.projectsTitle"),
              ...projects
                .filter((p) => p.featured)
                .map((p) => `  - ${p.name}: ${p.description}`),
              "",
              t("ui.terminal.projectsHint"),
            ],
          };
          break;
        }
        case "date":
          result = {
            type: "output",
            content: new Date().toLocaleString(localeTag(locale), {
              dateStyle: "full",
              timeStyle: "short",
            }),
          };
          break;
        case "echo":
          result = { type: "output", content: rest || "" };
          break;
        case "clear":
          setHistory([]);
          return;
        case "exit":
          navigate("/");
          return;
        case "sudo":
          result = {
            type: "error",
            content: [t("ui.terminal.sudo")],
          };
          break;
        case "jkc":
          result = { type: "success", content: [t("ui.terminal.jkcOnline")] };
          break;
        default:
          result = {
            type: "error",
            content: tr("ui.terminal.notFound", { cmd }),
          };
      }

      if (result) {
        const entry: TerminalEntry = {
          id: uid(),
          type: result.type,
          content: result.content,
        };
        setHistory((prev) => [...prev, input, entry]);
        if (result.navigate) {
          setTimeout(() => navigate(result.navigate!), 450);
        }
      }
    },
    [
      navigate,
      setTheme,
      t,
      tr,
      locale,
      banner,
      helpText,
      profile,
      projects,
      skillGroups,
    ],
  );

  const handleHistory = useCallback(
    (direction: "up" | "down", current: string) => {
      if (inputHistory.length === 0) return current;

      const nextIndex =
        direction === "up"
          ? Math.min(historyIndex + 1, inputHistory.length - 1)
          : Math.max(historyIndex - 1, -1);

      setHistoryIndex(nextIndex);
      return nextIndex === -1
        ? ""
        : inputHistory[inputHistory.length - 1 - nextIndex];
    },
    [historyIndex, inputHistory],
  );

  return { history, execute, handleHistory };
}
