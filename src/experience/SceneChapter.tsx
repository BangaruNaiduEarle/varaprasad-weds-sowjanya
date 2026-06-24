"use client";

import { motion } from "framer-motion";

import type { SceneChapterProps } from "./experience.types";

export function SceneChapter({ chapterIndex, children }: SceneChapterProps) {
  return (
    <motion.div
      data-scene-chapter={chapterIndex}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -5% 0px" }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}
