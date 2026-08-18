import { createContext } from "react";
import { type ThemeColors, type ThemeMode } from "./theme.config";

export interface ThemeContextType {
  theme: ThemeMode;
  /** Resolved theme actually displayed (light | dark) */
  resolvedTheme: "light" | "dark";
  setTheme: (theme: ThemeMode) => void;
  /** Resolved color tokens for the currently displayed theme */
  colors: ThemeColors;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);
