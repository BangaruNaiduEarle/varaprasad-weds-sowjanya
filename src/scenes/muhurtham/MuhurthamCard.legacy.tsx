"use client";

import { motion } from "framer-motion";

import { colors } from "@/styles/theme";

function CornerMandala({ className, flip }: { readonly className: string; readonly flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={`pointer-events-none absolute size-20 opacity-[0.18] sm:size-24 ${className}`}
      style={flip ? { transform: "scale(-1, 1)" } : undefined}
      aria-hidden="true"
    >
      <circle cx="40" cy="40" r="36" fill="none" stroke={colors.gold} strokeWidth="0.6" />
      <circle cx="40" cy="40" r="24" fill="none" stroke={colors.maroon} strokeWidth="0.4" />
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (Math.PI / 4) * i;
        return (
          <line
            key={i}
            x1={40}
            y1={40}
            x2={40 + Math.cos(angle) * 34}
            y2={40 + Math.sin(angle) * 34}
            stroke={colors.gold}
            strokeWidth="0.5"
          />
        );
      })}
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (Math.PI / 6) * i;
        const cx = 40 + Math.cos(angle) * 18;
        const cy = 40 + Math.sin(angle) * 18;
        return (
          <circle key={`p-${i}`} cx={cx} cy={cy} r="2" fill={colors.kumkuma} opacity="0.6" />
        );
      })}
    </svg>
  );
}

function LotusDivider() {
  return (
    <div className="my-8 flex items-center justify-center gap-3" aria-hidden="true">
      <div className="h-px flex-1 max-w-[80px]" style={{ background: `linear-gradient(90deg, transparent, ${colors.gold})` }} />
      <svg viewBox="0 0 40 24" className="h-6 w-10" aria-hidden="true">
        <path
          d="M20 4C16 10 10 14 20 22C30 14 24 10 20 4Z"
          fill={colors.kumkuma}
          opacity="0.7"
        />
        <path
          d="M20 8C18 12 14 14 20 18C26 14 22 12 20 8Z"
          fill={colors.gold}
          opacity="0.8"
        />
      </svg>
      <div className="h-px flex-1 max-w-[80px]" style={{ background: `linear-gradient(90deg, ${colors.gold}, transparent)` }} />
    </div>
  );
}

function GoldenParticles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-theme-xl">
      {Array.from({ length: 12 }, (_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${8 + (i * 17) % 85}%`,
            top: `${10 + (i * 23) % 80}%`,
            width: 2 + (i % 3),
            height: 2 + (i % 3),
            backgroundColor: colors.gold,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + (i % 4),
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function ShimmerOverlay() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-theme-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(105deg, transparent 42%, color-mix(in srgb, ${colors.yellow} 12%, transparent) 50%, transparent 58%)`,
        }}
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

export interface MuhurthamCardProps {
  readonly title: string;
  readonly day: string;
  readonly date: string;
  readonly time: string;
  readonly venue: string;
  readonly quote: string;
}

/** @deprecated Use experimental MuhurthamInvitationCard when MUHURTHAM_USE_EXPERIMENTAL_CARD is true */
export function MuhurthamCardLegacy({
  title,
  day,
  date,
  time,
  venue,
  quote,
}: MuhurthamCardProps) {
  return (
    <motion.article
      initial={{ opacity: 1, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-xl"
    >
      <motion.div
        className="absolute -inset-1 rounded-theme-xl"
        animate={{
          boxShadow: [
            `0 0 20px color-mix(in srgb, ${colors.gold} 20%, transparent)`,
            `0 0 36px color-mix(in srgb, ${colors.gold} 35%, transparent)`,
            `0 0 20px color-mix(in srgb, ${colors.gold} 20%, transparent)`,
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <div
        className="relative overflow-hidden rounded-theme-xl px-7 py-12 text-center sm:px-10 sm:py-14"
        style={{
          background: `
            linear-gradient(165deg, ${colors.ivory} 0%, ${colors.champagne} 45%, ${colors.cream} 100%)
          `,
          border: `2px solid color-mix(in srgb, ${colors.gold} 55%, transparent)`,
          boxShadow: `
            0 4px 24px color-mix(in srgb, ${colors.gold} 18%, transparent),
            0 16px 48px color-mix(in srgb, ${colors.maroon} 10%, transparent),
            inset 0 1px 0 color-mix(in srgb, ${colors.ivory} 80%, transparent)
          `,
        }}
      >
        <GoldenParticles />
        <ShimmerOverlay />

        <CornerMandala className="left-0 top-0" />
        <CornerMandala className="right-0 top-0" flip />
        <CornerMandala className="bottom-0 left-0" flip />
        <CornerMandala className="bottom-0 right-0" />

        <div
          className="pointer-events-none absolute inset-3 rounded-theme-lg sm:inset-4"
          style={{
            border: `1px solid color-mix(in srgb, ${colors.gold} 25%, transparent)`,
          }}
          aria-hidden="true"
        />

        <p className="font-section relative text-[10px] uppercase tracking-[0.35em] text-maroon sm:text-xs">
          ॐ &nbsp; Sacred Union &nbsp; ॐ
        </p>

        <h2 className="font-heading relative mt-4 text-[clamp(1.75rem,6vw,2.5rem)] font-medium leading-tight text-maroon">
          {title}
        </h2>

        <LotusDivider />

        <p className="font-body relative text-base text-navy sm:text-lg">{day}</p>
        <p className="font-heading relative mt-2 text-2xl text-gold sm:text-3xl">{date}</p>

        <div
          className="relative mx-auto my-8 max-w-xs rounded-theme-lg px-6 py-8 sm:my-10 sm:px-8 sm:py-10"
          style={{
            background: `linear-gradient(145deg, color-mix(in srgb, ${colors.yellow} 15%, ${colors.champagne}) 0%, color-mix(in srgb, ${colors.gold} 12%, ${colors.ivory}) 100%)`,
            border: `2px solid color-mix(in srgb, ${colors.gold} 50%, transparent)`,
            boxShadow: `0 8px 32px color-mix(in srgb, ${colors.gold} 20%, transparent), inset 0 0 0 1px color-mix(in srgb, ${colors.ivory} 60%, transparent)`,
          }}
        >
          <p className="font-section text-[10px] uppercase tracking-[0.3em] text-maroon">
            Muhurtham
          </p>
          <p className="font-heading mt-3 text-[clamp(2.5rem,10vw,4rem)] font-semibold leading-none tracking-wide text-maroon">
            {time}
          </p>
          <p className="font-body mt-3 text-sm text-navy sm:text-base">
            Auspicious hour of union
          </p>
        </div>

        <LotusDivider />

        <p className="font-section relative text-[10px] uppercase tracking-[0.28em] text-muted">
          Venue
        </p>
        <p className="font-heading relative mt-3 text-lg leading-relaxed text-navy sm:text-xl">
          {venue}
        </p>

        <p className="font-script relative mt-8 text-xl text-gold sm:text-2xl">
          Seeking your blessings and presence
        </p>

        <p className="font-body relative mt-6 text-sm leading-relaxed text-navy sm:text-base">
          {quote}
        </p>
      </div>
    </motion.article>
  );
}
