"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import { colors } from "@/styles/theme";

import { useLanguage } from "@/i18n";

import { WEDDING_WISHES } from "../wishes.config";

import { BlessingWishCard } from "./BlessingWishCard";
import { FloralAccent, SectionHeaderOrnament } from "./WishesDecor";
import { MOBILE_CARD_WIDTH, WISHES_TOKENS as T } from "./wishes-blessings.config";

import "./wishes-blessings.css";

function PaginationDots({
  total,
  activeIndex,
  onSelect,
}: {
  readonly total: number;
  readonly activeIndex: number;
  readonly onSelect: (index: number) => void;
}) {
  return (
    <div className="wishes-blessings__dots" role="tablist" aria-label="Wish progress">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          type="button"
          role="tab"
          aria-selected={activeIndex === index}
          aria-label={`Wish ${index + 1} of ${total}`}
          onClick={() => onSelect(index)}
          className="flex min-h-[44px] min-w-[44px] items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <motion.span
            className="block rounded-full"
            animate={{
              width: activeIndex === index ? 22 : 8,
              height: 8,
              backgroundColor:
                activeIndex === index
                  ? T.gold
                  : `color-mix(in srgb, ${T.gold} 35%, transparent)`,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        </button>
      ))}
    </div>
  );
}

function MobileCarousel() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback((): void => {
    const container = scrollRef.current;
    if (!container) return;

    const center = container.scrollLeft + container.clientWidth / 2;
    let closest = 0;
    let minDist = Number.POSITIVE_INFINITY;

    container.querySelectorAll<HTMLElement>("[data-wish-slide]").forEach((slide, i) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const dist = Math.abs(center - slideCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });

    setActiveIndex(closest);
  }, []);

  const scrollToIndex = useCallback((index: number): void => {
    const slide = scrollRef.current?.querySelectorAll<HTMLElement>("[data-wish-slide]")[index];
    slide?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, []);

  useEffect(() => {
    updateActiveIndex();
  }, [updateActiveIndex]);

  return (
    <div className="wishes-blessings__carousel-wrap">
      <div
        ref={scrollRef}
        onScroll={updateActiveIndex}
        className="wishes-blessings__carousel"
      >
        {WEDDING_WISHES.map((wish, index) => (
          <div
            key={wish.id}
            data-wish-slide
            className={`wishes-blessings__carousel-item ${MOBILE_CARD_WIDTH}`}
          >
            <BlessingWishCard wish={wish} index={index} />
          </div>
        ))}
      </div>

      <PaginationDots
        total={WEDDING_WISHES.length}
        activeIndex={activeIndex}
        onSelect={scrollToIndex}
      />

      <motion.p
        animate={{ opacity: [0.65, 1, 0.65], x: [0, 5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="wishes-blessings__swipe-hint"
      >
        {t.common.swipeWishes}
      </motion.p>
    </div>
  );
}

function WishesGrid() {
  return (
    <div className="wishes-blessings__grid">
      {WEDDING_WISHES.map((wish, index) => (
        <BlessingWishCard key={wish.id} wish={wish} index={index} />
      ))}
    </div>
  );
}

/**
 * Experimental premium Wedding Wishes section.
 * Toggle via WISHES_USE_EXPERIMENTAL in wishes.config.ts.
 */
export function WishesBlessingsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="blessings"
      aria-label={t.wishes.ariaLabel}
      className="wishes-blessings relative min-h-dvh snap-start overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 25% 20%, color-mix(in srgb, ${colors.champagne} 45%, transparent) 0%, transparent 50%),
            radial-gradient(ellipse at 75% 75%, color-mix(in srgb, ${colors.yellow} 12%, transparent) 0%, transparent 45%),
            radial-gradient(ellipse at 50% 50%, color-mix(in srgb, ${colors.gold} 6%, transparent) 0%, transparent 60%),
            ${colors.cream}
          `,
        }}
      />

      <div className="relative z-10">
        <header className="wishes-blessings__header">
          <p className="font-section text-[10px] uppercase tracking-[0.28em] text-muted">
            {t.wishes.scene}
          </p>
          <h2 className="font-script mt-1 text-[clamp(2.25rem,10vw,3.75rem)] leading-none text-maroon">
            {t.wishes.title}
          </h2>
          <SectionHeaderOrnament />
          <FloralAccent />
          <p className="font-body mx-auto mt-4 text-base leading-relaxed text-navy md:text-lg">
            {t.wishes.subtitle}
          </p>
        </header>

        <MobileCarousel />
        <WishesGrid />

        {/* <div className="wishes-blessings__cta-wrap">
          <motion.button
            type="button"
            data-cursor="button"
            className="min-h-[48px] rounded-full px-10 py-4 font-section text-xs uppercase tracking-[0.22em] outline-none focus-visible:ring-2 focus-visible:ring-accent sm:text-sm"
            style={{
              background: `linear-gradient(135deg, ${colors.gold}, ${colors.yellow})`,
              color: colors.maroon,
              boxShadow: `0 4px 24px color-mix(in srgb, ${colors.gold} 35%, transparent)`,
            }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
          >
            Leave a Wish
          </motion.button>
        </div> */}
      </div>
    </section>
  );
}
