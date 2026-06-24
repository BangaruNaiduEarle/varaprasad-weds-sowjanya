"use client";

import { motion } from "framer-motion";

import { colors } from "@/styles/theme";

import { DEFAULT_PAPER_STYLE } from "./wishes.types";
import type { WishCardProps } from "./wishes.types";
import { goldBorderStyle, wishCardShadow } from "./wishes.utils";

export function WishCardLegacy({ wish, index }: WishCardProps) {
  const { borderWidth } = DEFAULT_PAPER_STYLE;

  return (
    <motion.article
      data-cursor="card"
      className="relative mx-auto w-full"
      style={{ zIndex: index + 1 }}
      initial={{ opacity: 1, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div
        className="relative overflow-hidden rounded-theme-lg p-6 sm:p-8"
        style={{
          backgroundColor: colors.ivory,
          border: goldBorderStyle(borderWidth),
          boxShadow: wishCardShadow(),
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(135deg, ${colors.champagne} 0%, transparent 50%, ${colors.cream} 100%)`,
          }}
          aria-hidden="true"
        />

        <header
          className="relative mb-5 border-b pb-4"
          style={{ borderColor: `color-mix(in srgb, ${colors.gold} 35%, transparent)` }}
        >
          <p className="font-heading text-xl leading-tight text-maroon sm:text-2xl">
            {wish.guestName}
          </p>
          <p className="font-section mt-1.5 text-[11px] uppercase tracking-[0.22em] text-muted">
            {wish.relation}
          </p>
        </header>

        <blockquote className="relative">
          <p className="font-body text-base leading-[1.85] text-navy sm:text-[17px]">
            &ldquo;{wish.message}&rdquo;
          </p>
        </blockquote>

        <footer className="relative mt-6 text-right">
          <p className="font-script text-2xl text-gold">with love</p>
        </footer>
      </div>
    </motion.article>
  );
}
