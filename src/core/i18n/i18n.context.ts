import { createContext } from "react";
import type { Messages } from "./messages";
import type { Locale } from "./locales";

type DeepKeys<T> = {
  [K in keyof T & string]: T[K] extends string
    ? K
    : T[K] extends readonly unknown[]
      ? never
      : K | `${K}.${DeepKeys<T[K]>}`;
}[keyof T & string];

export type UiKey = DeepKeys<Omit<Messages, "data">>;

export interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: UiKey) => string;
  tr: (key: UiKey, params?: Record<string, string | number>) => string;
  m: Messages;
}

export const I18nContext = createContext<I18nContextValue | null>(null);
