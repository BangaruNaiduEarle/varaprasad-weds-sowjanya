"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { motion } from "framer-motion";

import {
  MANDALA_OPACITY,
  WISHES_MANDALA_IMAGE,
  WISHES_TOKENS as T,
} from "./wishes-blessings.config";

export function CardMandalaLayers() {
  return (
    <>
      <div
        className="wishes-blessings__mandala-watermark"
        aria-hidden="true"
        style={{ "--wb-mandala-opacity": MANDALA_OPACITY.watermark } as CSSProperties}
      >
        <Image src={WISHES_MANDALA_IMAGE} alt="" width={400} height={400} />
      </div>
      {(["tl", "tr", "bl", "br"] as const).map((corner) => (
        <div
          key={corner}
          className={`wishes-blessings__mandala-corner wishes-blessings__mandala-corner--${corner}`}
          aria-hidden="true"
          style={{ "--wb-corner-opacity": MANDALA_OPACITY.corner } as CSSProperties}
        >
          <Image src={WISHES_MANDALA_IMAGE} alt="" width={56} height={56} className="size-11" />
        </div>
      ))}
    </>
  );
}

export function GoldenDivider() {
  return (
    <div className="wishes-blessings__divider" aria-hidden="true">
      <div className="wishes-blessings__divider-line" />
      <svg viewBox="0 0 32 20" className="h-3.5 w-6 shrink-0">
        <path d="M16 2C13 8 8 11 16 18C24 11 19 8 16 2Z" fill={T.kumkuma} opacity="0.75" />
        <path d="M16 6C14 10 11 12 16 15C21 12 18 10 16 6Z" fill={T.gold} opacity="0.85" />
      </svg>
      <div className="wishes-blessings__divider-line" />
    </div>
  );
}

export function CardShimmer() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.25rem]"
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(105deg, transparent 42%, color-mix(in srgb, ${T.yellow} 8%, transparent) 50%, transparent 58%)`,
        }}
        animate={{ x: ["-120%", "220%"] }}
        transition={{ duration: 6, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

export function SectionHeaderOrnament() {
  return (
    <div className="wishes-blessings__header-ornament" aria-hidden="true">
      <div className="wishes-blessings__header-line" />
      <Image
        src={WISHES_MANDALA_IMAGE}
        alt=""
        width={36}
        height={36}
        className="size-9 opacity-[0.35]"
      />
      <div className="wishes-blessings__header-line" />
    </div>
  );
}

export function FloralAccent() {
  return (
    <svg viewBox="0 0 80 12" className="mx-auto mt-3 h-2.5 w-16 opacity-60" aria-hidden="true">
      <path
        d="M40 6C36 1 28 1 24 6C28 11 36 11 40 6C44 11 52 11 56 6C52 1 44 1 40 6Z"
        fill={T.gold}
      />
    </svg>
  );
}
