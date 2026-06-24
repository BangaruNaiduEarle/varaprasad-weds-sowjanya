"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { getTranslations } from "@/translations";
import type { Locale, Translations } from "@/translations";

import { DEFAULT_LOCALE } from "./constants";
import { readPersistedLocale, writePersistedLocale } from "./storage";

interface LanguageContextValue {
  readonly locale: Locale;
  readonly t: Translations;
  readonly isTelugu: boolean;
  readonly localeClass: string;
  readonly setLocale: (locale: Locale) => void;
  readonly toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function applyDocumentLocale(locale: Locale): void {
  document.documentElement.lang = locale === "te" ? "te" : "en";
  document.documentElement.dataset.locale = locale;
}

export function LanguageProvider({ children }: { readonly children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const persisted = readPersistedLocale();
    if (persisted) {
      setLocaleState(persisted);
    }
  }, []);

  useEffect(() => {
    applyDocumentLocale(locale);
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState((current) => {
      if (current === next) return current;
      writePersistedLocale(next);
      return next;
    });
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((current) => {
      const next: Locale = current === "en" ? "te" : "en";
      writePersistedLocale(next);
      return next;
    });
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      t: getTranslations(locale),
      isTelugu: locale === "te",
      localeClass: locale === "te" ? "locale-te" : "locale-en",
      setLocale,
      toggleLocale,
    }),
    [locale, setLocale, toggleLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
