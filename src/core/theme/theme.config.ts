export type ThemeMode = "light" | "dark" | "system";

export type ThemeColors = {
  bg: string;
  bgAlt: string;
  surface: string;
  surfaceAlt: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  primary: string;
  primaryStrong: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  border: string;
  borderStrong: string;
  shadow: string;
  glow: string;
};

export const themeColors: Record<"light" | "dark", ThemeColors> = {
  light: {
    bg: "#f6f6fa",
    bgAlt: "#eeeeff",
    surface: "#ffffff",
    surfaceAlt: "#f1f1f8",
    text: "#181620",
    textSecondary: "#4b4657",
    textMuted: "#6f6a80",
    primary: "#6d28d9",
    primaryStrong: "#5b21b6",
    secondary: "#0e7490",
    success: "#059669",
    warning: "#b45309",
    error: "#dc2626",
    border: "#e4e1ee",
    borderStrong: "#c9c4da",
    shadow: "0 24px 60px -24px rgba(60, 40, 120, 0.22)",
    glow: "rgba(124, 58, 237, 0.25)",
  },
  dark: {
    bg: "#0b0a10",
    bgAlt: "#100e1a",
    surface: "#14121d",
    surfaceAlt: "#1b1826",
    text: "#edeaf6",
    textSecondary: "#b6b0c8",
    textMuted: "#868098",
    primary: "#a78bfa",
    primaryStrong: "#8b5cf6",
    secondary: "#22d3ee",
    success: "#34d399",
    warning: "#fbbf24",
    error: "#f87171",
    border: "#262238",
    borderStrong: "#3a3450",
    shadow: "0 24px 60px -24px rgba(0, 0, 0, 0.7)",
    glow: "rgba(139, 92, 246, 0.45)",
  },
};

export const themeConfig = {
  fonts: {
    heading:
      '"Space Grotesk", "Inter", system-ui, -apple-system, "Segoe UI", sans-serif',
    body: '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif',
    mono: '"JetBrains Mono", ui-monospace, "SFMono-Regular", Consolas, monospace',
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4.5rem",
  },
  radius: {
    sm: "6px",
    md: "12px",
    lg: "20px",
    xl: "28px",
    full: "9999px",
  },
  gradients: {
    accent: "linear-gradient(120deg, #7c3aed 0%, #a855f7 45%, #22d3ee 100%)",
    accentText:
      "linear-gradient(120deg, #a855f7 0%, #22d3ee 100%)",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};
