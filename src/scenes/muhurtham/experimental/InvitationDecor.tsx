"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  MUHURTHAM_INVITATION_TOKENS as T,
  MUHURTHAM_MANDALA_IMAGE,
  MUHURTHAM_MANDALA_OPACITY,
} from "./muhurtham-invitation.config";

export function MandalaLayers() {
  return (
    <>
      <div
        className="muhurtham-invitation__mandala-watermark"
        aria-hidden="true"
        style={
          {
            "--mi-watermark-opacity": MUHURTHAM_MANDALA_OPACITY.watermark,
          } as React.CSSProperties
        }
      >
        <Image
          src={MUHURTHAM_MANDALA_IMAGE}
          alt=""
          width={800}
          height={800}
          priority={false}
        />
      </div>

      {(["tl", "tr", "bl", "br"] as const).map((corner) => (
        <div
          key={corner}
          className={`muhurtham-invitation__mandala-corner muhurtham-invitation__mandala-corner--${corner}`}
          aria-hidden="true"
          style={
            {
              "--mi-corner-opacity": MUHURTHAM_MANDALA_OPACITY.corner,
            } as React.CSSProperties
          }
        >
          <Image
            src={MUHURTHAM_MANDALA_IMAGE}
            alt=""
            width={96}
            height={96}
            className="size-16 md:size-20"
          />
        </div>
      ))}
    </>
  );
}

export function MarigoldGarlands() {
  return (
    <>
      <MarigoldCluster className="muhurtham-invitation__marigold muhurtham-invitation__marigold--left" />
      <MarigoldCluster className="muhurtham-invitation__marigold muhurtham-invitation__marigold--right" flip />
    </>
  );
}

function MarigoldCluster({
  className,
  flip,
}: {
  readonly className: string;
  readonly flip?: boolean;
}) {
  return (
    <motion.svg
      viewBox="0 0 64 32"
      className={`h-8 w-16 md:h-9 md:w-[4.5rem] ${className}`}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <ellipse
          key={i}
          cx={12 + i * 10}
          cy={16}
          rx="5"
          ry="9"
          fill={T.yellow}
          opacity="0.75"
          transform={`rotate(${(i - 2) * 8} ${12 + i * 10} 16)`}
        />
      ))}
      <circle cx="32" cy="16" r="4" fill={T.kumkuma} opacity="0.6" />
    </motion.svg>
  );
}

export function LotusDivider({ className = "" }: { readonly className?: string }) {
  return (
    <div className={`muhurtham-invitation__divider ${className}`} aria-hidden="true">
      <div className="muhurtham-invitation__divider-line" />
      <svg viewBox="0 0 40 24" className="h-5 w-9 shrink-0">
        <path d="M20 4C16 10 10 14 20 22C30 14 24 10 20 4Z" fill={T.kumkuma} opacity="0.75" />
        <path d="M20 8C18 12 14 14 20 18C26 14 22 12 20 8Z" fill={T.gold} opacity="0.85" />
      </svg>
      <div className="muhurtham-invitation__divider-line" />
    </div>
  );
}

export function GoldenParticles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.25rem]">
      {Array.from({ length: 10 }, (_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${6 + (i * 19) % 88}%`,
            top: `${8 + (i * 21) % 85}%`,
            width: 2 + (i % 2),
            height: 2 + (i % 2),
            backgroundColor: T.gold,
          }}
          animate={{ y: [0, -10, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{
            duration: 3.5 + (i % 3),
            delay: i * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function ShimmerOverlay() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.25rem]"
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(105deg, transparent 40%, color-mix(in srgb, ${T.yellow} 10%, transparent) 50%, transparent 60%)`,
        }}
        animate={{ x: ["-120%", "220%"] }}
        transition={{ duration: 5, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

export function BorderGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -inset-px rounded-[1.3rem]"
      style={{
        boxShadow: `0 0 24px color-mix(in srgb, ${T.gold} 22%, transparent)`,
      }}
    />
  );
}
