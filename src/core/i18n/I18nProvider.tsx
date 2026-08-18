import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { messages, type Messages } from "./messages";
import {
  detectLocale,
  isLocale,
  localeTag,
  STORAGE_KEY,
  type Locale,
} from "./locales";
import { I18nContext, type I18nContextValue } from "./i18n.context";

function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    /* ignore */
  }
  return null;
}

function resolvePath(source: Messages, path: string): unknown {
  return path
    .split(".")
    .reduce<unknown>((acc, part) => {
      const record = acc as Record<string, unknown> | undefined;
      return record?.[part];
    }, source);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() =>
    detectLocale(readStoredLocale()),
  );

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = localeTag(locale);
  }, [locale]);

  const value = useMemo<I18nContextValue>(() => {
    const m = messages[locale];
    const t = (key: Parameters<I18nContextValue["t"]>[0]): string => {
      const resolved = resolvePath(m, key);
      return typeof resolved === "string" ? resolved : key;
    };
    const tr = (
      key: Parameters<I18nContextValue["tr"]>[0],
      params?: Record<string, string | number>,
    ) => {
      let output = t(key);
      if (params) {
        for (const [name, replacement] of Object.entries(params)) {
          output = output.split(`{${name}}`).join(String(replacement));
        }
      }
      return output;
    };
    return { locale, setLocale, t, tr, m };
  }, [locale, setLocale]);

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}
