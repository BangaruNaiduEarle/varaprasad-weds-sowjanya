"use client";

import { motion } from "framer-motion";

import { useLanguage, useLocalizedCelebrationEvents } from "@/i18n";
import { colors } from "@/styles/theme";

import { CardSeparator } from "./CelebrationDecor";
import { InvitationEventCard } from "./InvitationEventCard";

import "./celebrations-invitation.css";

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
} as const;

/**
 * Experimental premium Celebrations section — invitation-style stacked cards.
 * Toggle via CELEBRATIONS_USE_EXPERIMENTAL in celebrations.config.ts.
 */
export function CelebrationsInvitationSection() {
  const { t } = useLanguage();
  const events = useLocalizedCelebrationEvents();

  return (
    <section
      id="events"
      aria-label={t.celebrations.ariaLabel}
      className="celebrations-invitation relative min-h-dvh snap-start overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 0%, color-mix(in srgb, ${colors.yellow} 16%, ${colors.champagne}) 0%, transparent 55%),
            radial-gradient(ellipse at 20% 80%, color-mix(in srgb, ${colors.gold} 10%, transparent) 0%, transparent 45%),
            radial-gradient(ellipse at 80% 60%, color-mix(in srgb, ${colors.kumkuma} 5%, transparent) 0%, transparent 40%),
            ${colors.cream}
          `,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <motion.header
          className="celebrations-invitation__header"
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-section text-[10px] uppercase tracking-[0.28em] text-muted">
            {t.celebrations.scene}
          </p>
          <h2 className="font-script mt-1 text-[clamp(2.25rem,10vw,3.75rem)] leading-none text-maroon">
            {t.celebrations.title}
          </h2>
          <p className="font-body mx-auto mt-3 max-w-md text-base font-light leading-relaxed text-navy md:mx-0 md:text-lg">
            {t.celebrations.subtitle}
          </p>
        </motion.header>

        <motion.div
          className="celebrations-invitation__list"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {events.map((event, index) => (
            <div key={event.id} className="w-full">
              <InvitationEventCard event={event} index={index} />
              {index < events.length - 1 ? <CardSeparator /> : null}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
