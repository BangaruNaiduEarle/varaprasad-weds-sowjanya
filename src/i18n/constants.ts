import type { Locale } from "@/translations";

/** Server and first client paint always use English. */
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_STORAGE_KEY = "wedding-locale";

export const LOCALES = ["en", "te"] as const satisfies readonly Locale[];
