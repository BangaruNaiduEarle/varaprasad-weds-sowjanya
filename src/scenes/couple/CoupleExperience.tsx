"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import { StoryImage } from "@/components/media";
import { useLanguage, useLocalizedCouple } from "@/i18n";
import { colors } from "@/styles/theme";

import type { CoupleMember, ParentDisplay } from "./couple.types";

function OrnamentalFrame({
  member,
  index,
}: {
  readonly member: CoupleMember;
  readonly index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.85, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute -inset-3 rounded-full opacity-60"
          style={{
            background: `conic-gradient(from ${index * 45}deg, ${colors.gold}, ${colors.yellow}, ${colors.champagne}, ${colors.gold})`,
            padding: "3px",
          }}
        />
        <div
          className="relative size-36 overflow-hidden rounded-full sm:size-44"
          style={{
            border: `3px solid ${colors.gold}`,
            boxShadow: `0 0 32px color-mix(in srgb, ${colors.gold} 30%, transparent)`,
          }}
        >
          <StoryImage illustrationId={member.illustration} priority={index === 0} />
        </div>

        <svg
          viewBox="0 0 100 100"
          className="pointer-events-none absolute -inset-6 size-[calc(100%+3rem)]"
          aria-hidden="true"
        >
          {Array.from({ length: 12 }, (_, i) => {
            const angle = (Math.PI / 6) * i;
            const cx = 50 + Math.cos(angle) * 46;
            const cy = 50 + Math.sin(angle) * 46;
            return (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r="1.5"
                fill={colors.gold}
                opacity="0.7"
              />
            );
          })}
        </svg>
      </div>

      <p className="font-section mt-5 text-[10px] uppercase tracking-[0.28em] text-muted">
        {member.role}
      </p>
      <h3 className="font-heading mt-1 text-center text-xl text-maroon sm:text-2xl">
        {member.title} {member.name}
      </h3>
      <p className="font-body mt-2 max-w-[220px] text-center text-sm font-light italic text-foreground">
        {member.tagline}
      </p>
    </motion.div>
  );
}

function HeartConnection() {
  return (
    <motion.div
      className="relative flex items-center justify-center py-4"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 200 }}
    >
      <motion.div
        className="absolute h-px w-16 sm:w-24"
        style={{ background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }}
        animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart
          size={28}
          fill={colors.kumkuma}
          stroke={colors.gold}
          strokeWidth={1.5}
          className="relative z-10 drop-shadow-[0_0_16px_var(--color-gold)]"
        />
      </motion.div>
    </motion.div>
  );
}

function ParentCard({ parent }: { readonly parent: ParentDisplay }) {
  return (
    <div
      className="rounded-theme-lg p-5 text-center sm:p-6"
      style={{
        border: `1px solid color-mix(in srgb, ${colors.gold} 28%, transparent)`,
        background: `color-mix(in srgb, ${colors.champagne} 35%, ${colors.ivory})`,
      }}
    >
      <p className="font-section text-[10px] uppercase tracking-[0.24em] text-muted">
        {parent.label}
      </p>
      <p className="font-heading mt-3 text-base leading-relaxed text-maroon sm:text-lg">
        {parent.father}
      </p>
      <p className="font-heading mt-1 text-base leading-relaxed text-maroon sm:text-lg">
        {parent.mother}
      </p>
    </div>
  );
}

export function CoupleExperience() {
  const { t } = useLanguage();
  const { groom, bride, unionQuote, sectionLabel, sectionTitle, coupleQuote, parents } =
    useLocalizedCouple();

  return (
    <section
      id="couple"
      aria-label={t.couple.ariaLabel}
      className="relative flex min-h-dvh snap-start flex-col items-center justify-center overflow-hidden px-6 pb-32 pt-16 sm:pb-36"
    >
      <div
        className="absolute inset-0 invitation-card-texture"
        style={{
          background: `
            radial-gradient(ellipse at 30% 50%, color-mix(in srgb, ${colors.champagne} 50%, transparent) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 50%, color-mix(in srgb, ${colors.yellow} 12%, transparent) 0%, transparent 45%),
            ${colors.cream}
          `,
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mb-10 text-center sm:mb-12"
      >
        <p className="font-section text-[10px] uppercase tracking-[0.3em] text-muted">
          {sectionLabel}
        </p>
        <h2 className="font-script mt-2 text-[clamp(2.25rem,10vw,3.5rem)] leading-none text-maroon">
          {sectionTitle}
        </h2>
        <p className="font-body mx-auto mt-3 max-w-sm text-sm font-light text-foreground">
          {unionQuote}
        </p>
      </motion.header>

      <div className="relative z-10 flex w-full max-w-lg flex-col items-center gap-8 sm:max-w-xl sm:flex-row sm:items-start sm:justify-center sm:gap-4">
        <OrnamentalFrame member={groom} index={0} />
        <HeartConnection />
        <OrnamentalFrame member={bride} index={1} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, duration: 0.7 }}
        className="relative z-10 mt-10 grid w-full max-w-2xl gap-4 sm:grid-cols-2"
      >
        <ParentCard parent={parents.groom} />
        <ParentCard parent={parents.bride} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="relative z-10 mt-8 w-full max-w-md"
      >
        <div
          className="glass-premium rounded-theme-xl p-6 text-center sm:p-8"
          style={{
            borderColor: `color-mix(in srgb, ${colors.gold} 40%, transparent)`,
          }}
        >
          <div className="font-heading text-lg leading-relaxed text-maroon sm:text-xl">
            &ldquo;{coupleQuote}&rdquo;
          </div>
          {/* <p className="font-body mt-4 text-sm font-light text-foreground">
            {parents.elderBlessings}
          </p> */}
          <p className="font-script mt-4 text-2xl text-gold">{t.common.withLoveGratitude}</p>
        </div>
      </motion.div>
    </section>
  );
}
