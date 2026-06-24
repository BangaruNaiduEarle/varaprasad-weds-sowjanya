"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { motion } from "framer-motion";

import {
  CELEBRATIONS_INVITATION_TOKENS as T,
  CELEBRATIONS_MANDALA_IMAGE,
  MANDALA_OPACITY,
} from "./celebrations-invitation.config";

export function MandalaLayers() {
  return (
    <>
      <div
        className="celebrations-invitation__mandala-watermark"
        aria-hidden="true"
        style={{ "--ci-mandala-opacity": MANDALA_OPACITY.watermark } as CSSProperties}
      >
        <Image src={CELEBRATIONS_MANDALA_IMAGE} alt="" width={600} height={600} />
      </div>

      {(["tl", "tr", "bl", "br"] as const).map((corner) => (
        <div
          key={corner}
          className={`celebrations-invitation__mandala-corner celebrations-invitation__mandala-corner--${corner}`}
          aria-hidden="true"
          style={{ "--ci-corner-opacity": MANDALA_OPACITY.corner } as CSSProperties}
        >
          <Image
            src={CELEBRATIONS_MANDALA_IMAGE}
            alt=""
            width={72}
            height={72}
            className="size-14 md:size-16"
          />
        </div>
      ))}
    </>
  );
}

export function GoldenDivider() {
  return (
    <div className="celebrations-invitation__divider" aria-hidden="true">
      <div className="celebrations-invitation__divider-line" />
      <svg viewBox="0 0 32 20" className="h-4 w-7 shrink-0">
        <path d="M16 2C13 8 8 11 16 18C24 11 19 8 16 2Z" fill={T.kumkuma} opacity="0.75" />
        <path d="M16 6C14 10 11 12 16 15C21 12 18 10 16 6Z" fill={T.gold} opacity="0.85" />
      </svg>
      <div className="celebrations-invitation__divider-line" />
    </div>
  );
}

export function CardSeparator() {
  return (
    <div className="celebrations-invitation__separator" aria-hidden="true">
      <div className="celebrations-invitation__separator-ornament">
        <div className="celebrations-invitation__separator-line" />
        <svg viewBox="0 0 24 24" className="size-3 shrink-0">
          <circle cx="12" cy="12" r="3" fill={T.gold} opacity="0.8" />
          <path
            d="M12 2v4M12 18v4M2 12h4M18 12h4"
            stroke={T.gold}
            strokeWidth="0.8"
            opacity="0.6"
          />
        </svg>
        <div className="celebrations-invitation__separator-line" />
      </div>
    </div>
  );
}

export function FloatingParticles({ glowColor }: { readonly glowColor: string }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.25rem]">
      {Array.from({ length: 6 }, (_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${10 + (i * 15) % 80}%`,
            top: `${12 + (i * 18) % 75}%`,
            width: 2,
            height: 2,
            backgroundColor: T.gold,
            boxShadow: `0 0 6px ${glowColor}`,
          }}
          animate={{ y: [0, -8, 0], opacity: [0.15, 0.45, 0.15] }}
          transition={{
            duration: 3.5 + i * 0.5,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function BorderShimmer({ accentLine }: { readonly accentLine: string }) {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.25rem]"
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(105deg, transparent 42%, color-mix(in srgb, ${accentLine} 15%, transparent) 50%, transparent 58%)`,
        }}
        animate={{ x: ["-120%", "220%"] }}
        transition={{ duration: 5, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

export function FloralTopOrnament() {
  return (
    <svg
      viewBox="0 0 120 16"
      className="mx-auto mb-3 h-3 w-24 opacity-70"
      aria-hidden="true"
    >
      <path
        d="M60 8C55 2 45 2 40 8C45 14 55 14 60 8C65 14 75 14 80 8C75 2 65 2 60 8Z"
        fill={T.gold}
        opacity="0.7"
      />
      <circle cx="60" cy="8" r="2" fill={T.kumkuma} opacity="0.6" />
    </svg>
  );
}
