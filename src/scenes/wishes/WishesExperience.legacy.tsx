"use client";

import { motion } from "framer-motion";

import { colors } from "@/styles/theme";

import { WishCardLegacy } from "./WishCard.legacy";
import { WEDDING_WISHES } from "./wishes.config";

export function WishesExperienceLegacy() {
  return (
    <section
      id="blessings"
      aria-label="Wedding Wishes"
      className="relative min-h-dvh snap-start overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, color-mix(in srgb, ${colors.champagne} 40%, transparent) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, color-mix(in srgb, ${colors.yellow} 10%, transparent) 0%, transparent 45%),
            ${colors.cream}
          `,
        }}
      />

      <div className="relative z-10 px-5 pb-36 pt-14 sm:px-8 sm:pb-40 sm:pt-16">
        <header className="mb-10 text-center sm:mb-12">
          <p className="font-section text-[10px] uppercase tracking-[0.28em] text-muted">
            Scene V
          </p>
          <h2 className="font-script mt-1 text-[clamp(2.25rem,10vw,3.75rem)] leading-none text-maroon">
            Wedding Wishes
          </h2>
          <p className="font-body mx-auto mt-4 max-w-md text-base leading-relaxed text-navy sm:text-lg">
            Letters from the heart — folded with care, kept forever.
          </p>
        </header>

        <div className="relative mx-auto flex max-w-xl flex-col gap-5 sm:max-w-2xl sm:gap-6">
          {WEDDING_WISHES.map((wish, index) => (
            <WishCardLegacy key={wish.id} wish={wish} index={index} />
          ))}
        </div>

        <div className="mt-12 flex justify-center sm:mt-14">
          <motion.button
            type="button"
            data-cursor="button"
            className="rounded-full px-10 py-4 font-section text-xs uppercase tracking-[0.22em] outline-none focus-visible:ring-2 focus-visible:ring-accent sm:text-sm"
            style={{
              background: `linear-gradient(135deg, ${colors.gold}, ${colors.yellow})`,
              color: colors.maroon,
              boxShadow: `0 4px 24px color-mix(in srgb, ${colors.gold} 35%, transparent)`,
            }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
          >
            Leave a Wish
          </motion.button>
        </div>
      </div>
    </section>
  );
}
