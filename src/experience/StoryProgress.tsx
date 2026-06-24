"use client";

import { motion } from "framer-motion";

import { colors } from "@/styles/theme";

import type { StoryProgressProps } from "./experience.types";

export function StoryProgress({
  activeIndex,
  progress,
  total,
}: StoryProgressProps) {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] px-3 pt-[max(0.5rem,env(safe-area-inset-top))] sm:px-5"
      aria-hidden="true"
    >
      <div className="glass mx-auto flex max-w-lg gap-1 rounded-full p-1.5 shadow-soft sm:max-w-xl">
        {Array.from({ length: total }, (_, index) => {
          const isPast = index < activeIndex;
          const isActive = index === activeIndex;
          const fill = isPast ? 1 : isActive ? progress : 0;

          return (
            <div
              key={index}
              className="h-0.5 flex-1 overflow-hidden rounded-full sm:h-1"
              style={{
                backgroundColor: `color-mix(in srgb, ${colors.ivory} 25%, transparent)`,
              }}
            >
              <motion.div
                className="h-full rounded-full bg-accent"
                animate={{ scaleX: fill }}
                initial={false}
                style={{ transformOrigin: "left center" }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
