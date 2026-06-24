"use client";

import { motion } from "framer-motion";

import { colorValues } from "@/styles/theme";

import { DEEPAM_PLACEMENTS } from "./ambient.config";

function Deepam({ scale }: { readonly scale: number }) {
  return (
    <svg
      viewBox="0 0 48 56"
      width={48 * scale}
      height={56 * scale}
      aria-hidden="true"
    >
      <path
        d="M24 8 C18 20 10 28 14 38 C16 44 20 48 24 52 C28 48 32 44 34 38 C38 28 30 20 24 8 Z"
        fill={colorValues.gold}
        opacity="0.85"
      />
      <motion.ellipse
        cx="24"
        cy="10"
        rx="4"
        ry="7"
        fill={colorValues.maroon}
        animate={{
          ry: [7, 9, 6, 8, 7],
          opacity: [0.7, 1, 0.75, 0.95, 0.7],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <ellipse cx="24" cy="48" rx="14" ry="4" fill={colorValues.gold} opacity="0.4" />
      <path
        d="M14 48 L34 48 L30 54 L18 54 Z"
        fill={colorValues.maroon}
        opacity="0.6"
      />
    </svg>
  );
}

export function Deepams({ opacity }: { readonly opacity: number }) {
  if (opacity <= 0) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0"
      style={{ opacity }}
    >
      {DEEPAM_PLACEMENTS.map((deepam) => (
        <motion.div
          key={deepam.id}
          className="absolute"
          style={{
            left: deepam.x,
            top: deepam.y,
          }}
          animate={{
            opacity: [0.65, 1, 0.7, 0.95, 0.65],
          }}
          transition={{
            duration: 3 + deepam.id * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Deepam scale={deepam.scale} />
        </motion.div>
      ))}
    </div>
  );
}
