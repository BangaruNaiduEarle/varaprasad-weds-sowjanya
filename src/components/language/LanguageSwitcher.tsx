"use client";

import { useLanguage } from "@/i18n";
import type { Locale } from "@/translations";

type SwitcherVariant = "floating" | "inline" | "dock";

interface LanguageSwitcherProps {
  readonly variant?: SwitcherVariant;
  readonly className?: string;
}

const LABELS: Record<SwitcherVariant, Record<Locale, string>> = {
  dock: { en: "En", te: "తె" },
  floating: { en: "En", te: "తె" },
  inline: { en: "English", te: "తెలుగు" },
};

/**
 * Premium pill language switcher — CSS-driven indicator, hydration-safe.
 */
export function LanguageSwitcher({
  variant = "dock",
  className = "",
}: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useLanguage();
  const labels = LABELS[variant];

  const shellClass =
    variant === "floating"
      ? "language-switcher language-switcher--floating glass-premium"
      : variant === "dock"
        ? "language-switcher language-switcher--dock glass-premium"
        : "language-switcher language-switcher--inline glass-premium";

  return (
    <div
      role="radiogroup"
      aria-label={t.common.languageLabel}
      data-active-locale={locale}
      className={`${shellClass} ${className}`}
    >
      <span className="language-switcher__indicator" aria-hidden="true" />

      {(["en", "te"] as const).map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={code === "en" ? t.common.english : t.common.telugu}
            data-cursor="button"
            onClick={() => setLocale(code)}
            className="language-switcher__btn"
            data-active={active ? "true" : "false"}
          >
            <span className="language-switcher__label font-section">{labels[code]}</span>
          </button>
        );
      })}
    </div>
  );
}
