"use client";

import { motion } from "framer-motion";

import { colors } from "@/styles/theme";

import { useLanguage } from "@/i18n";

import { MASONRY_COLUMN_CLASS, MEMORY_ITEMS } from "./memories.config";
import { MemoryPhotoCard, useGalleryLightbox } from "./MemoryPhotoCard";

export function MemoriesExperience() {
  const { open, modal } = useGalleryLightbox();
  const { t } = useLanguage();

  return (
    <section
      id="gallery"
      aria-label={t.gallery.ariaLabel}
      className="relative min-h-dvh snap-start overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 15% 20%, color-mix(in srgb, ${colors.champagne} 45%, transparent) 0%, transparent 45%),
            radial-gradient(circle at 85% 75%, color-mix(in srgb, ${colors.gold} 18%, transparent) 0%, transparent 40%),
            ${colors.ivory}
          `,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(${colors.navy} 0.5px, transparent 0.5px)`,
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 px-5 pb-36 pt-14 sm:px-8 sm:pb-40 sm:pt-16">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-10"
        >
          <p className="font-section text-[10px] uppercase tracking-[0.28em] text-muted">
            {t.gallery.scene}
          </p>
          <h2 className="font-script mt-1 text-[clamp(2.25rem,10vw,3.5rem)] leading-none text-maroon">
            {t.gallery.title}
          </h2>
          <p className="font-body mt-3 max-w-md text-sm font-light leading-relaxed text-foreground sm:text-base">
            {t.gallery.subtitle}
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={MASONRY_COLUMN_CLASS}
        >
          {MEMORY_ITEMS.map((memory, index) => (
            <MemoryPhotoCard
              key={memory.id}
              memory={memory}
              index={index}
              onOpen={open}
            />
          ))}
        </motion.div>
      </div>

      {modal}
    </section>
  );
}
