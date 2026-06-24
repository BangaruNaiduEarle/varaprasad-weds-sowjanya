"use client";

import { motion } from "framer-motion";

import { colors } from "@/styles/theme";

import { SPARKLE_SEEDS } from "./ambient.config";

export function Sparkles({ opacity }: { readonly opacity: number }) {
  if (opacity <= 0) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0"
      style={{ opacity }}
    >
      {SPARKLE_SEEDS.map((sparkle) => (
        <motion.span
          key={sparkle.id}
          className="absolute block rounded-full"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            backgroundColor: colors.gold,
            boxShadow: `0 0 ${sparkle.size * 3}px color-mix(in srgb, ${colors.gold} 60%, transparent)`,
          }}
          animate={{
            opacity: [0.1, 0.9, 0.15, 0.7, 0.1],
            scale: [0.6, 1.2, 0.8, 1, 0.6],
          }}
          transition={{
            duration: 2.5 + (sparkle.id % 3),
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
