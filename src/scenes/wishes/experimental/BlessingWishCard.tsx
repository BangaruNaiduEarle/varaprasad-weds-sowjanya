"use client";

import { motion } from "framer-motion";

import type { WeddingWish } from "../wishes.types";

import {
  CardMandalaLayers,
  CardShimmer,
  GoldenDivider,
} from "./WishesDecor";
import {
  getAvatarGradient,
  getInitials,
  getRelationBadgeStyle,
} from "./wishes-blessings.config";

export interface BlessingWishCardProps {
  readonly wish: WeddingWish;
  readonly index: number;
}

export function BlessingWishCard({ wish, index }: BlessingWishCardProps) {
  const badge = getRelationBadgeStyle(wish.relation);
  const initials = getInitials(wish.guestName);

  return (
    <motion.article
      data-cursor="card"
      className="wishes-blessings__card h-full"
      initial={{ opacity: 1, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: (index % 3) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -6,
        boxShadow: `0 4px 20px color-mix(in srgb, #D4AF37 18%, transparent), 0 20px 48px color-mix(in srgb, #6B0F1A 8%, transparent)`,
        transition: { type: "spring", stiffness: 320, damping: 26 },
      }}
    >
      <CardMandalaLayers />
      <CardShimmer />
      <div className="wishes-blessings__inner-frame" aria-hidden="true" />

      <div className="wishes-blessings__card-inner">
        <header className="wishes-blessings__profile">
          <div className="wishes-blessings__avatar-ring">
            <div
              className="wishes-blessings__avatar"
              style={{ background: getAvatarGradient(wish.guestName) }}
              aria-hidden="true"
            >
              {initials}
            </div>
          </div>

          <h3 className="font-heading mt-3 text-xl font-medium leading-tight text-[#6B0F1A] md:text-[1.35rem]">
            {wish.guestName}
          </h3>

          <span
            className="wishes-blessings__badge"
            style={{
              background: badge.background,
              color: badge.color,
              borderColor: badge.border,
            }}
          >
            {wish.relation}
          </span>
        </header>

        <GoldenDivider />

        <blockquote className="wishes-blessings__message">
          &ldquo;{wish.message}&rdquo;
        </blockquote>

        <footer className="wishes-blessings__footer">
          <p className="font-script text-xl text-[#D4AF37] md:text-2xl">with love</p>
        </footer>
      </div>
    </motion.article>
  );
}
