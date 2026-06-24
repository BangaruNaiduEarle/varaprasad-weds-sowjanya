"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

import { StoryImage } from "@/components/media";
import { useLanguage } from "@/i18n";
import { colors } from "@/styles/theme";

import { VIDEO_CONFIG } from "./video.config";

export function VideoExperience() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useLanguage();

  return (
    <section
      id="video"
      aria-label={t.video.ariaLabel}
      className="relative flex min-h-dvh snap-start flex-col items-center justify-center overflow-hidden px-6 pb-32 pt-16 sm:pb-36"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 30%, color-mix(in srgb, ${colors.maroon} 15%, ${colors.navy}) 0%, ${colors.navy} 60%),
            ${colors.navy}
          `,
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mb-8 text-center sm:mb-10"
      >
        <p className="font-section text-[10px] uppercase tracking-[0.3em] text-gold opacity-80">
          {t.video.label}
        </p>
        <h2 className="font-script mt-2 text-[clamp(2.25rem,10vw,3.5rem)] leading-none text-ivory">
          {t.video.title}
        </h2>
        <p className="font-body mt-3 text-sm font-light text-champagne opacity-90">
          {t.video.subtitle}
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-2xl"
      >
        <div
          className="absolute -inset-4 rounded-theme-2xl opacity-40 blur-2xl"
          style={{
            background: `radial-gradient(ellipse, color-mix(in srgb, ${colors.gold} 30%, transparent) 0%, transparent 70%)`,
          }}
          aria-hidden="true"
        />

        <div
          className="relative overflow-hidden rounded-theme-xl"
          style={{
            border: `2px solid color-mix(in srgb, ${colors.gold} 50%, transparent)`,
            boxShadow: `0 0 48px color-mix(in srgb, ${colors.gold} 20%, transparent), inset 0 0 0 1px color-mix(in srgb, ${colors.yellow} 15%, transparent)`,
          }}
        >
          <div className="relative aspect-video w-full">
            {isPlaying ? (
              <iframe
                src={`${VIDEO_CONFIG.videoUrl}?autoplay=1`}
                title={t.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 size-full"
              />
            ) : (
              <>
                <StoryImage
                  illustrationId={VIDEO_CONFIG.posterIllustration}
                  priority={false}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, color-mix(in srgb, ${colors.navy} 80%, transparent) 0%, color-mix(in srgb, ${colors.navy} 30%, transparent) 50%, transparent 100%)`,
                  }}
                />
                <motion.button
                  type="button"
                  data-cursor="button"
                  onClick={() => setIsPlaying(true)}
                  className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-accent sm:size-20"
                  style={{
                    background: `linear-gradient(135deg, ${colors.gold}, ${colors.yellow})`,
                    boxShadow: `0 0 32px color-mix(in srgb, ${colors.gold} 50%, transparent)`,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={t.video.playLabel}
                >
                  <Play size={28} fill={colors.maroon} stroke={colors.maroon} className="ml-1" />
                </motion.button>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
