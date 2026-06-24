"use client";

import { colors } from "@/styles/theme";

import { useLanguage } from "@/i18n";
import { useLocalizedMuhurtham } from "@/i18n/useLocalizedContent";

import { MuhurthamInvitationCard } from "./experimental";
import { MuhurthamCardLegacy } from "./MuhurthamCard.legacy";
import { MUHURTHAM_USE_EXPERIMENTAL_CARD } from "./muhurtham.config";

export function MuhurthamExperience() {
  const { t } = useLanguage();
  const muhurtham = useLocalizedMuhurtham();

  return (
    <section
      id="muhurtham"
      aria-label={t.muhurtham.ariaLabel}
      className="relative min-h-dvh snap-start overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 30%, color-mix(in srgb, ${colors.yellow} 18%, transparent) 0%, transparent 55%),
            radial-gradient(ellipse at 50% 70%, color-mix(in srgb, ${colors.kumkuma} 8%, transparent) 0%, transparent 50%),
            radial-gradient(circle at center, color-mix(in srgb, ${colors.champagne} 35%, transparent) 0%, transparent 65%),
            ${colors.cream}
          `,
        }}
      />

      <div className="relative z-10 flex w-full min-h-dvh items-center justify-center px-4 py-24 sm:px-6 sm:py-28">
        <div className="mx-auto flex w-full justify-center">
          {MUHURTHAM_USE_EXPERIMENTAL_CARD ? (
            <MuhurthamInvitationCard data={muhurtham} />
          ) : (
            <MuhurthamCardLegacy
              title={muhurtham.title}
              day={muhurtham.day}
              date={muhurtham.date}
              time={muhurtham.time}
              venue={muhurtham.venue}
              quote={muhurtham.quote}
            />
          )}
        </div>
      </div>
    </section>
  );
}
