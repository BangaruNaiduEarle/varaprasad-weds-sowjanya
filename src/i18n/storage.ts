import type { Locale } from "@/translations";

import { LOCALE_STORAGE_KEY } from "./constants";

/** Call only from useEffect — never during render. */
export function readPersistedLocale(): Locale | null {
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored === "en" || stored === "te") {
      return stored;
    }
  } catch {
    // Private browsing or blocked storage — fall back to default.
  }
  return null;
}

/** Call only from useEffect — never during render. */
export function writePersistedLocale(locale: Locale): void {
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // Ignore write failures.
  }
}
