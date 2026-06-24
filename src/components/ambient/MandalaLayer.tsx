"use client";

import { motion } from "framer-motion";

import { colorValues } from "@/styles/theme";
import { formatSvgCoord } from "@/utils/svgCoords";

import { MANDALA_ROTATION_DURATION } from "./ambient.config";

export function MandalaLayer({ opacity }: { readonly opacity: number }) {
  if (opacity <= 0) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 flex items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: MANDALA_ROTATION_DURATION,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <svg
          viewBox="0 0 400 400"
          className="h-[140vmax] w-[140vmax] max-w-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="200" r="188" stroke={colorValues.gold} strokeWidth="0.8" />
          <circle cx="200" cy="200" r="150" stroke={colorValues.maroon} strokeWidth="0.5" />
          {Array.from({ length: 16 }, (_, index) => {
            const angle = (Math.PI / 8) * index;
            const x2 = 200 + Math.cos(angle) * 170;
            const y2 = 200 + Math.sin(angle) * 170;

            return (
              <line
                key={index}
                x1="200"
                y1="200"
                x2={formatSvgCoord(x2)}
                y2={formatSvgCoord(y2)}
                stroke={colorValues.gold}
                strokeWidth="0.35"
              />
            );
          })}
          {Array.from({ length: 8 }, (_, index) => {
            const angle = (Math.PI / 4) * index;
            const cx = 200 + Math.cos(angle) * 120;
            const cy = 200 + Math.sin(angle) * 120;

            return (
              <circle
                key={`ring-${index}`}
                cx={formatSvgCoord(cx)}
                cy={formatSvgCoord(cy)}
                r="10"
                stroke={colorValues.maroon}
                strokeWidth="0.4"
              />
            );
          })}
        </svg>
      </motion.div>
    </div>
  );
}
