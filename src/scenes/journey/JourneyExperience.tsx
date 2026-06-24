"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import { colors } from "@/styles/theme";

import { useLanguage } from "@/i18n";

import { PolaroidCard } from "./PolaroidCard";
import { ScrapbookDoodles } from "./ScrapbookDoodles";
import {
  CARD_WIDTH_CLASS,
  DESKTOP_CARD_WIDTH_CLASS,
  JOURNEY_ITEMS,
  MOBILE_CAROUSEL_GAP,
} from "./journey.config";

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
    <div
      className="flex items-center justify-center gap-2"
      role="tablist"
      aria-label="Story progress"
    >
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          type="button"
          role="tab"
          aria-selected={activeIndex === index}
          aria-label={`Memory ${index + 1} of ${total}`}
          onClick={() => onSelect(index)}
          className="flex min-h-[44px] min-w-[44px] items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <motion.span
            className="block rounded-full"
            animate={{
              width: activeIndex === index ? 24 : 8,
              height: 8,
              backgroundColor:
                activeIndex === index
                  ? colors.gold
                  : `color-mix(in srgb, ${colors.gold} 40%, transparent)`,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        </button>
      ))}
    </div>
  );
}

function DesktopTimeline() {
  return (
    <div className="relative mx-auto hidden w-full max-w-5xl flex-col gap-16 px-10 py-10 md:flex lg:max-w-6xl lg:gap-20 lg:px-16">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 top-0 w-0.5 -translate-x-1/2"
        style={{
          background: `linear-gradient(180deg, transparent, ${colors.gold} 15%, ${colors.gold} 85%, transparent)`,
        }}
      />

      {JOURNEY_ITEMS.map((item, index) => {
        const isLeft = index % 2 === 0;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 1, x: isLeft ? -24 : 24, y: 16 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`relative flex ${isLeft ? "justify-start pr-[46%]" : "justify-end pl-[46%]"}`}
          >
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-10 z-10 size-5 -translate-x-1/2 rounded-full"
              style={{
                background: colors.gold,
                boxShadow: `0 0 16px color-mix(in srgb, ${colors.gold} 55%, transparent)`,
                border: `2px solid ${colors.ivory}`,
              }}
            />

            <div className={DESKTOP_CARD_WIDTH_CLASS}>
              <PolaroidCard
                item={item}
                index={index}
                isActive
                variant="desktop"
              />
            </div>
          </motion.div>
        );
      })}
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

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    const cards = container.querySelectorAll<HTMLElement>("[data-polaroid-card]");

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  const scrollToIndex = useCallback((index: number): void => {
    const container = scrollRef.current;
    const card = container?.querySelectorAll<HTMLElement>("[data-polaroid-card]")[index];
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, []);

  useEffect(() => {
    updateActiveIndex();
  }, [updateActiveIndex]);

  return (
    <div className="flex flex-1 flex-col md:hidden">
      <div
        ref={scrollRef}
        onScroll={updateActiveIndex}
        className={`flex flex-1 items-center overflow-x-auto overflow-y-visible px-[5vw] pb-6 pt-4 snap-x snap-mandatory hide-scrollbar ${MOBILE_CAROUSEL_GAP}`}
      >
        {JOURNEY_ITEMS.map((item, index) => (
          <div key={item.id} data-polaroid-card className={`${CARD_WIDTH_CLASS} shrink-0 snap-center`}>
            <PolaroidCard
              item={item}
              index={index}
              isActive={activeIndex === index}
              variant="mobile"
            />
          </div>
        ))}
      </div>

      <div className="px-6 pb-6 pt-2">
        <PaginationDots
          total={JOURNEY_ITEMS.length}
          activeIndex={activeIndex}
          onSelect={scrollToIndex}
        />

        <motion.p
          animate={{ opacity: [0.7, 1, 0.7], x: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="mt-4 text-center font-body text-sm tracking-wide text-navy"
        >
          {t.story.swipeHint}
        </motion.p>
      </div>
    </div>
  );
}

export function JourneyExperience() {
  const { t } = useLanguage();

  return (
    <section
      id="story"
      aria-label={t.story.ariaLabel}
      className="relative min-h-dvh snap-start overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, color-mix(in srgb, ${colors.champagne} 40%, transparent) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, color-mix(in srgb, ${colors.gold} 15%, transparent) 0%, transparent 45%),
            ${colors.ivory}
          `,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 28px,
            color-mix(in srgb, ${colors.navy} 15%, transparent) 28px,
            color-mix(in srgb, ${colors.navy} 15%, transparent) 29px
          )`,
        }}
        aria-hidden="true"
      />

      <ScrapbookDoodles />

      <div className="relative z-10 flex h-full min-h-dvh flex-col">
        <header className="px-6 pt-14 sm:px-10 sm:pt-16">
          <p className="font-section text-[10px] uppercase tracking-[0.3em] text-muted">
            {t.story.scene}
          </p>
          <h2 className="font-script mt-1 text-[clamp(2.5rem,10vw,3.75rem)] leading-none text-maroon">
            {t.story.title}
          </h2>
          <p className="font-body mt-3 max-w-md text-sm font-light text-foreground sm:text-base">
            {t.story.subtitle}
          </p>
        </header>

        <MobileCarousel />
        <DesktopTimeline />
      </div>
    </section>
  );
}
