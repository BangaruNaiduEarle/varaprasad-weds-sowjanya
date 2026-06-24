"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { colors } from "@/styles/theme";

import { JOURNEY_ASPECT_CLASS } from "./journey.types";
import type { PolaroidCardProps } from "./journey.types";

export function PolaroidCard({
  item,
  index,
  isActive,
  variant = "mobile",
}: PolaroidCardProps) {
  const isMobile = variant === "mobile";

  return (
    <motion.article
      data-cursor="card"
      style={{
        marginTop: isMobile ? 0 : item.offsetY,
      }}
      initial={{ opacity: 1, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      animate={{
        scale: isMobile ? (isActive ? 1 : 0.96) : 1,
        rotate: isMobile ? (isActive ? 0 : item.rotate * 0.2) : item.rotate,
      }}
      whileHover={
        !isMobile
          ? {
              y: -8,
              rotate: item.rotate + (item.rotate > 0 ? 1.5 : -1.5),
              transition: { type: "spring", stiffness: 320, damping: 24 },
            }
          : undefined
      }
    >
      <div
        className="relative rounded-theme-lg p-4 pb-8 sm:p-5 sm:pb-10"
        style={{
          backgroundColor: colors.ivory,
          boxShadow: isActive
            ? `0 8px 32px color-mix(in srgb, ${colors.gold} 22%, transparent), 0 16px 48px color-mix(in srgb, ${colors.navy} 8%, transparent)`
            : `0 4px 12px color-mix(in srgb, ${colors.navy} 6%, transparent), 0 12px 36px color-mix(in srgb, ${colors.navy} 8%, transparent)`,
          border: `1.5px solid color-mix(in srgb, ${colors.gold} ${isActive ? 45 : 22}%, transparent)`,
        }}
      >
        <div
          className="absolute -top-2.5 left-1/2 h-6 w-16 -translate-x-1/2 opacity-70"
          style={{
            background: `color-mix(in srgb, ${colors.champagne} 90%, transparent)`,
            transform: `translateX(-50%) rotate(${item.rotate > 0 ? -2 : 2}deg)`,
          }}
          aria-hidden="true"
        />

        <div
          className={`relative w-full overflow-hidden rounded-theme-sm ${JOURNEY_ASPECT_CLASS[item.aspect]}`}
          style={{ backgroundColor: `color-mix(in srgb, ${colors.champagne} 55%, ${colors.ivory})` }}
        >
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(max-width: 768px) 82vw, 520px"
            className="object-contain"
            priority={index === 0}
          />
        </div>

        <div className="mt-5 space-y-2 px-1 sm:mt-6 sm:space-y-2.5">
          <h3 className="font-heading text-xl leading-tight text-maroon sm:text-2xl">
            {item.title}
          </h3>
          {item.date ? (
            <p className="font-section text-[11px] uppercase tracking-[0.22em] text-muted">
              {item.date}
            </p>
          ) : null}
          <p className="font-body text-base leading-relaxed text-navy sm:text-lg">
            {item.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
