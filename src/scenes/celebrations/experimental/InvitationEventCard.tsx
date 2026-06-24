"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import { StoryImage } from "@/components/media";
import { getIllustration } from "@/content/illustrations";

import type { CelebrationEvent } from "../celebrations.types";

import {
  BorderShimmer,
  FloatingParticles,
  FloralTopOrnament,
  GoldenDivider,
  MandalaLayers,
} from "./CelebrationDecor";
import { EVENT_INVITATION_THEMES } from "./celebrations-invitation.config";

export interface InvitationEventCardProps {
  readonly event: CelebrationEvent;
  readonly index: number;
}

export function InvitationEventCard({ event, index }: InvitationEventCardProps) {
  const theme = EVENT_INVITATION_THEMES[event.id];

  return (
    <motion.article
      data-cursor="card"
      data-event-card
      className="celebrations-invitation__card-wrap"
      initial={{ opacity: 1, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 320, damping: 28 },
      }}
    >
      <motion.div
        className="celebrations-invitation__card"
        style={{ background: theme.cardBackground }}
        animate={{
          boxShadow: [
            `0 4px 20px color-mix(in srgb, #D4AF37 14%, transparent), 0 16px 48px color-mix(in srgb, #6B0F1A 8%, transparent)`,
            `0 6px 28px ${theme.glowColor}, 0 20px 56px color-mix(in srgb, #6B0F1A 10%, transparent)`,
            `0 4px 20px color-mix(in srgb, #D4AF37 14%, transparent), 0 16px 48px color-mix(in srgb, #6B0F1A 8%, transparent)`,
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="celebrations-invitation__top-border"
          style={{ background: theme.topBorder }}
          aria-hidden="true"
        />

        <MandalaLayers />
        <FloatingParticles glowColor={theme.glowColor} />
        <BorderShimmer accentLine={theme.accentLine} />
        <div className="celebrations-invitation__inner-frame" aria-hidden="true" />

        {theme.ribbon ? (
          <div
            className="celebrations-invitation__ribbon"
            style={{ background: theme.ribbon }}
            aria-hidden="true"
          />
        ) : null}

        <div className="celebrations-invitation__card-inner">
          <div className="celebrations-invitation__media">
            {event.image ? (
              <Image
                src={event.image}
                alt={getIllustration(event.illustration).alt}
                fill
                priority={index === 0}
                sizes="(max-width: 640px) 90vw, 480px"
                className="object-cover scale-105"
              />
            ) : (
              <StoryImage
                illustrationId={event.illustration}
                priority={index === 0}
                className="scale-105"
              />
            )}
            <div
              className="absolute inset-0"
              style={{ background: theme.imageOverlay }}
              aria-hidden="true"
            />
          </div>

          <div className="celebrations-invitation__body">
            <FloralTopOrnament />

            <p
              className="font-section text-[0.625rem] uppercase tracking-[0.28em] md:text-[0.6875rem]"
              style={{ color: theme.dateColor }}
            >
              {theme.label}
            </p>

            <div className="celebrations-invitation__date-row">
              <span
                className="celebrations-invitation__date-pill font-section text-[0.6875rem] uppercase tracking-[0.14em] md:text-xs"
                style={{ color: theme.dateColor }}
              >
                {event.date}
              </span>
              <span
                className="celebrations-invitation__date-pill font-heading text-sm font-semibold md:text-base"
                style={{ color: theme.titleColor }}
              >
                {event.time}
              </span>
            </div>

            <GoldenDivider />

            <h3
              className="font-heading text-[clamp(1.65rem,6vw,2.25rem)] font-medium leading-tight md:text-[clamp(1.75rem,3vw,2.5rem)]"
              style={{ color: theme.titleColor }}
            >
              {event.title}
            </h3>

            <p
              className="font-body mt-2.5 text-base font-light leading-relaxed md:mt-3 md:text-lg"
              style={{ color: theme.subtitleColor }}
            >
              {event.subtitle}
            </p>

            <GoldenDivider />

            <p
              className="font-section text-[0.625rem] uppercase tracking-[0.22em]"
              style={{ color: theme.dateColor, opacity: 0.85 }}
            >
              Venue
            </p>
            <p
              className="font-body mt-1 text-sm font-medium leading-relaxed md:text-base"
              style={{ color: theme.venueColor }}
            >
              {event.venue}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}
