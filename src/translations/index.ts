import { en } from "./en";
import { te } from "./te";
import type { Locale, Translations } from "./types";

export type { Locale, Translations } from "./types";

const translations: Record<Locale, Translations> = { en, te };

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}

export { en, te };
