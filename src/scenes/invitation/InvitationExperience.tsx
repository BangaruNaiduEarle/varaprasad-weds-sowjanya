"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useLanguage, useLocalizedInvitation } from "@/i18n";
import { colors } from "@/styles/theme";

import { INVITATION_CONFIG } from "./invitation.config";
import { AmbientLayer } from "./AmbientLayer";
import { MandalaBackground } from "./MandalaBackground";
import type { CountdownValues } from "./invitation.types";
import {
  computeCountdown,
  padCountdownUnit,
  scrollToSection,
} from "./invitation.utils";

const revealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.5,
    },
  },
} as const;

const revealItem: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
  },
};

function DecorativeBorder() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-4 rounded-theme-xl sm:inset-6 md:inset-10"
      style={{
        border: `1.5px solid color-mix(in srgb, ${colors.gold} 35%, transparent)`,
        boxShadow: `
          inset 0 0 0 1px color-mix(in srgb, ${colors.yellow} 15%, transparent),
          0 0 40px color-mix(in srgb, ${colors.gold} 10%, transparent)
        `,
      }}
    >
      <div
        className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45"
        style={{ backgroundColor: colors.gold }}
      />
      <div
        className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2 rotate-45"
        style={{ backgroundColor: colors.gold }}
      />
      <div
        className="absolute left-0 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45"
        style={{ backgroundColor: colors.kumkuma }}
      />
      <div
        className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 translate-x-1/2 rotate-45"
        style={{ backgroundColor: colors.kumkuma }}
      />
    </div>
  );
}

function CountdownPlaceholder({
  labels = ["Days", "Hours", "Mins", "Secs"],
}: {
  readonly labels?: readonly string[];
}) {
  return (
    <div
      className="flex items-center justify-center gap-3 sm:gap-4"
      aria-hidden="true"
    >
      {labels.map((label) => (
        <div key={label} className="flex flex-col items-center">
          <span className="font-heading text-2xl tabular-nums text-accent opacity-40 sm:text-3xl">
            00
          </span>
          <span className="font-section text-[9px] uppercase tracking-[0.2em] text-muted sm:text-[10px]">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

function CountdownDisplay({
  countdown,
  labels,
}: {
  readonly countdown: CountdownValues;
  readonly labels: readonly string[];
}) {
  const values = [
    countdown.days,
    countdown.hours,
    countdown.minutes,
    countdown.seconds,
  ];

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      {values.map((value, index) => (
        <div key={labels[index]} className="flex flex-col items-center">
          <div
            className="temple-border rounded-theme-md px-3 py-2 sm:px-4 sm:py-2.5"
            style={{
              background: `color-mix(in srgb, ${colors.champagne} 60%, transparent)`,
            }}
          >
            <span className="font-heading text-2xl tabular-nums text-maroon sm:text-3xl">
              {padCountdownUnit(value)}
            </span>
          </div>
          <span className="font-section mt-1.5 text-[9px] uppercase tracking-[0.2em] text-muted sm:text-[10px]">
            {labels[index]}
          </span>
          {index < values.length - 1 ? (
            <span
              aria-hidden="true"
              className="absolute hidden font-heading text-xl text-gold sm:block"
              style={{ marginLeft: "3.5rem" }}
            >
              :
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function InvitationExperience() {
  const [countdown, setCountdown] = useState<CountdownValues | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const { auspiciousGreeting, groomName, brideName } = useLocalizedInvitation();
  const countdownLabels = [t.common.days, t.common.hours, t.common.mins, t.common.secs] as const;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const mandalaScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);

  useEffect(() => {
    const tick = (): void => {
      setCountdown(computeCountdown(INVITATION_CONFIG.weddingDateIso));
    };

    tick();
    const intervalId = window.setInterval(tick, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const handleExplore = (): void => {
    scrollToSection(INVITATION_CONFIG.exploreTargetId);
  };

  return (
    <section
      ref={sectionRef}
      id="heart"
      aria-label="Invitation Experience"
      className="relative h-dvh w-full snap-start overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 30%, color-mix(in srgb, ${colors.yellow} 22%, transparent) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 70%, color-mix(in srgb, ${colors.kumkuma} 12%, transparent) 0%, transparent 45%),
            radial-gradient(ellipse at 50% 40%, color-mix(in srgb, ${colors.champagne} 45%, transparent) 0%, ${colors.ivory} 55%, ${colors.cream} 100%)
          `,
        }}
      />

      <motion.div style={{ scale: mandalaScale }} className="absolute inset-0">
        <MandalaBackground />
      </motion.div>

      <AmbientLayer />
      <DecorativeBorder />

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, color-mix(in srgb, ${colors.yellow} 8%, transparent) 0%, transparent 40%, color-mix(in srgb, ${colors.maroon} 6%, transparent) 100%)`,
          }}
        />
      </motion.div>

      <motion.div
        variants={revealContainer}
        initial="hidden"
        animate="visible"
        style={{ y: contentY }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 pb-32 pt-16 text-center sm:px-10 sm:pb-36"
      >
        <motion.div
          variants={revealItem}
          className="font-section mb-5 text-[10px] uppercase tracking-[0.35em] text-muted sm:mb-6 sm:text-xs"
        >
          {auspiciousGreeting}
        </motion.div>

        <motion.h1
          variants={revealItem}
          className="hero-couple-name"
        >
          {groomName}
        </motion.h1>

        <motion.div variants={revealItem} className="my-3 sm:my-5">
          <motion.span
            animate={{ scale: [1, 1.15, 1] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-flex"
          >
            <Heart
              size={32}
              className="text-accent drop-shadow-[0_0_20px_var(--color-gold)]"
              fill={colors.kumkuma}
              stroke={colors.gold}
              strokeWidth={1.5}
            />
          </motion.span>
        </motion.div>

        <motion.h2
          variants={revealItem}
          className="hero-couple-name"
        >
          {brideName}
        </motion.h2>

        <motion.div
          variants={revealItem}
          className="mt-8 flex flex-col items-center gap-6 sm:mt-10"
        >
          <p className="font-body text-sm font-light tracking-[0.12em] text-foreground sm:text-base">
            {INVITATION_CONFIG.weddingDateDisplay}
          </p>

          {countdown === null ? (
            <CountdownPlaceholder labels={[...countdownLabels]} />
          ) : countdown.isComplete ? (
            <p className="font-script text-3xl text-accent">
              {t.hero.countdownComplete}
            </p>
          ) : (
            <CountdownDisplay countdown={countdown} labels={[...countdownLabels]} />
          )}
        </motion.div>

        <motion.div variants={revealItem} className="mt-10 sm:mt-12">
          <motion.button
            type="button"
            data-cursor="button"
            onClick={handleExplore}
            className="group relative overflow-hidden rounded-full px-10 py-4 font-section text-xs uppercase tracking-[0.25em] outline-none focus-visible:ring-2 focus-visible:ring-accent sm:text-sm"
            style={{
              background: `linear-gradient(135deg, ${colors.gold} 0%, ${colors.yellow} 50%, ${colors.gold} 100%)`,
              color: colors.maroon,
              boxShadow: `0 4px 24px color-mix(in srgb, ${colors.gold} 40%, transparent), inset 0 1px 0 color-mix(in srgb, ${colors.ivory} 40%, transparent)`,
            }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
          >
            <span className="relative z-10">
              {t.hero.cta}
            </span>
            <motion.span
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background: `linear-gradient(135deg, color-mix(in srgb, ${colors.ivory} 20%, transparent) 0%, transparent 100%)`,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
