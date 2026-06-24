"use client";

import { motion } from "framer-motion";

import { colorValues } from "@/styles/theme";

import { SCRAPBOOK_DOODLES } from "./journey.config";
import type { ScrapbookDoodle } from "./journey.types";

function DoodleShape({ doodle }: { readonly doodle: ScrapbookDoodle }) {
  switch (doodle.type) {
    case "heart":
      return (
        <path
          d="M12 20 C6 14 0 10 0 6 C0 2 3 0 6 0 C8 0 10 1 12 4 C14 1 16 0 18 0 C21 0 24 2 24 6 C24 10 18 14 12 20Z"
          fill={colorValues.maroon}
          opacity="0.35"
        />
      );
    case "star":
      return (
        <path
          d="M12 0 L14.5 8.5 L24 8.5 L16.5 13.5 L19 22 L12 17 L5 22 L7.5 13.5 L0 8.5 L9.5 8.5 Z"
          fill={colorValues.gold}
          opacity="0.45"
        />
      );
    case "swirl":
      return (
        <path
          d="M4 20 C4 8 20 8 20 16 C20 22 12 22 12 16"
          fill="none"
          stroke={colorValues.green}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      );
    case "sparkle":
      return (
        <>
          <line x1="12" y1="2" x2="12" y2="22" stroke={colorValues.gold} strokeWidth="1.2" opacity="0.5" />
          <line x1="2" y1="12" x2="22" y2="12" stroke={colorValues.gold} strokeWidth="1.2" opacity="0.5" />
        </>
      );
  }
}

export function ScrapbookDoodles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {SCRAPBOOK_DOODLES.map((doodle) => (
        <motion.div
          key={doodle.id}
          className="absolute"
          style={{
            left: doodle.x,
            top: doodle.y,
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: doodle.scale }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: doodle.id * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.div
            animate={{ rotate: [doodle.rotate, doodle.rotate + 6, doodle.rotate] }}
            transition={{
              duration: 4 + doodle.id * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width={28 * doodle.scale}
              height={28 * doodle.scale}
              style={{ transform: `rotate(${doodle.rotate}deg)` }}
            >
              <DoodleShape doodle={doodle} />
            </svg>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
