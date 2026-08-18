import pt from "./pt";
import en from "./en";
import fr from "./fr";
import es from "./es";
import type { Locale } from "../locales";

type ToWide<T> = T extends string
  ? string
  : T extends readonly unknown[]
    ? ToWideArray<T>
    : { [K in keyof T]: ToWide<T[K]> };

type ToWideArray<T extends readonly unknown[]> = {
  [K in keyof T]: ToWide<T[K]>;
};

export type Messages = ToWide<typeof pt>;

export const messages: Record<Locale, Messages> = { pt, en, fr, es };
