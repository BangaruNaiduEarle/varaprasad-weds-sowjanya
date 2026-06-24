"use client";

import { motion } from "framer-motion";

import { colors } from "@/styles/theme";
import { formatSvgCoord } from "@/utils/svgCoords";

function MarigoldBloom({ size }: { readonly size: number }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} aria-hidden="true">
      {Array.from({ length: 8 }, (_, index) => {
        const angle = (Math.PI / 4) * index;
        const cx = 20 + Math.cos(angle) * 11;
        const cy = 20 + Math.sin(angle) * 11;

        return (
          <ellipse
            key={index}
            cx={formatSvgCoord(cx)}
            cy={formatSvgCoord(cy)}
            rx="4"
            ry="7"
            fill={colors.gold}
            opacity="0.65"
            transform={`rotate(${formatSvgCoord((angle * 180) / Math.PI)} ${formatSvgCoord(cx)} ${formatSvgCoord(cy)})`}
          />
        );
      })}
      <circle cx="20" cy="20" r="5" fill={colors.maroon} opacity="0.5" />
    </svg>
  );
}

function MarigoldString({ side }: { readonly side: "left" | "right" }) {
  const blooms = side === "left" ? [0, 1, 2, 3, 4] : [0, 1, 2, 3, 4];
  const origin = side === "left" ? "left-0" : "right-0";

  return (
    <div
      className={`pointer-events-none absolute top-0 ${origin} h-32 w-36 sm:h-40 sm:w-44`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 160 140"
        className="h-full w-full"
        preserveAspectRatio="none"
      >
        <path
          d={
            side === "left"
              ? "M8 0 Q40 50 24 90 Q12 120 20 140"
              : "M152 0 Q120 50 136 90 Q148 120 140 140"
          }
          fill="none"
          stroke={colors.gold}
          strokeWidth="1.2"
          opacity="0.45"
        />
      </svg>
      {blooms.map((index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: side === "left" ? `${8 + index * 14}%` : undefined,
            right: side === "right" ? `${8 + index * 14}%` : undefined,
            top: `${12 + index * 22}%`,
          }}
          animate={{ rotate: [-4, 4, -4], y: [0, -3, 0] }}
          transition={{
            duration: 4 + index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        >
          <MarigoldBloom size={22 + (index % 2) * 4} />
        </motion.div>
      ))}
    </div>
  );
}

export function MarigoldStrings({ opacity }: { readonly opacity: number }) {
  if (opacity <= 0) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[1]" style={{ opacity }}>
      <MarigoldString side="left" />
      <MarigoldString side="right" />
    </div>
  );
}
