"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { colorValues } from "@/styles/theme";

import type { CinematicCurtainProps } from "./experience.types";

export function CinematicCurtain({ chapterIndex }: CinematicCurtainProps) {
  const [visible, setVisible] = useState(false);
  const previousChapter = useRef(chapterIndex);

  useEffect(() => {
    if (previousChapter.current === chapterIndex) {
      return;
    }

    previousChapter.current = chapterIndex;
    setVisible(true);

    const timeoutId = window.setTimeout(() => {
      setVisible(false);
    }, 900);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [chapterIndex]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key={chapterIndex}
          className="pointer-events-none fixed inset-0 z-[55] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.35, 0] }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
            style={{
              background: `radial-gradient(circle at 50% 50%, color-mix(in srgb, ${colorValues.gold} 30%, transparent) 0%, color-mix(in srgb, ${colorValues.maroon} 20%, transparent) 40%, transparent 70%)`,
            }}
          />

          <motion.svg
            viewBox="0 0 120 120"
            className="h-28 w-28 opacity-20 sm:h-36 sm:w-36"
            initial={{ scale: 0.6, rotate: -20, opacity: 0 }}
            animate={{ scale: 1.4, rotate: 20, opacity: 0.2 }}
            exit={{ scale: 1.8, opacity: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke={colorValues.gold}
              strokeWidth="0.8"
            />
            {Array.from({ length: 8 }, (_, index) => {
              const angle = (Math.PI / 4) * index;

              return (
                <line
                  key={index}
                  x1={60}
                  y1={60}
                  x2={60 + Math.cos(angle) * 50}
                  y2={60 + Math.sin(angle) * 50}
                  stroke={colorValues.maroon}
                  strokeWidth="0.5"
                />
              );
            })}
          </motion.svg>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
