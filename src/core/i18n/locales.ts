export const locales = [
  { code: "pt", short: "PT", label: "Português", tag: "pt-PT" },
  { code: "en", short: "EN", label: "English", tag: "en-GB" },
  { code: "fr", short: "FR", label: "Français", tag: "fr-FR" },
  { code: "es", short: "ES", label: "Español", tag: "es-ES" },
  { code: "zh", short: "ZH", label: "中文", tag: "zh-CN" },
] as const;

export type Locale = (typeof locales)[number]["code"];

export function isLocale(value: string | null | undefined): value is Locale {
  return locales.some((locale) => locale.code === value);
}

export function localeTag(locale: Locale): string {
  return locales.find((l) => l.code === locale)?.tag ?? "pt-PT";
}

export const DEFAULT_LOCALE: Locale = "pt";
export const STORAGE_KEY = "jkc:locale";

export function detectLocale(preferred?: string | null): Locale {
  if (isLocale(preferred)) return preferred;
  const navLang = typeof navigator !== "undefined" ? navigator.language : "";
  const prefix = navLang.slice(0, 2).toLowerCase();
  if (isLocale(prefix)) return prefix;
  return DEFAULT_LOCALE;
}
