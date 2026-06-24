"use client";

import { motion } from "framer-motion";

import { colors } from "@/styles/theme";

import { LOTUS_PETAL_SEEDS } from "./ambient.config";

function LotusPetal({ size }: { readonly size: number }) {
  return (
    <svg viewBox="0 0 32 24" width={size} height={size * 0.75} aria-hidden="true">
      <path
        d="M16 2 C10 8 6 14 16 22 C26 14 22 8 16 2 Z"
        fill={colors.peach}
        opacity="0.55"
      />
      <path
        d="M16 6 C13 10 12 14 16 18 C20 14 19 10 16 6 Z"
        fill={colors.ivory}
        opacity="0.35"
      />
    </svg>
  );
}

export function LotusPetals({ opacity }: { readonly opacity: number }) {
  if (opacity <= 0) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ opacity }}
    >
      {LOTUS_PETAL_SEEDS.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{ left: `${petal.x}%`, top: "-8%" }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, petal.drift, 0],
            rotate: [0, 180, 360],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <LotusPetal size={petal.size} />
        </motion.div>
      ))}
    </div>
  );
}
