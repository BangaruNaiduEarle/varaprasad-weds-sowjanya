"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Car, MapPin, Navigation, Sparkles } from "lucide-react";

import {
  LOCATION_MANDALA_IMAGE,
  LOCATION_TOKENS as T,
} from "./location-chapter.config";

/** Sparse ambient layer — bokeh, petals, particles only. */
export function CinematicBackground() {
  const bokeh = [
    { x: "14%", y: "22%", size: 130, opacity: 0.04 },
    { x: "80%", y: "68%", size: 110, opacity: 0.035 },
    { x: "48%", y: "88%", size: 150, opacity: 0.038 },
  ];

  const petals = [
    { x: "10%", y: "30%", delay: 0, rotate: -12 },
    { x: "90%", y: "40%", delay: 1.5, rotate: 18 },
    { x: "18%", y: "78%", delay: 2.2, rotate: 6 },
    { x: "72%", y: "82%", delay: 0.9, rotate: -20 },
    { x: "50%", y: "14%", delay: 2.8, rotate: 10 },
  ];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {bokeh.map((b, i) => (
        <motion.div
          key={`bokeh-${i}`}
          className="location-chapter__bokeh"
          style={{
            left: b.x,
            top: b.y,
            width: b.size,
            height: b.size,
            opacity: b.opacity,
            transform: "translate(-50%, -50%)",
          }}
          animate={{ opacity: [b.opacity * 0.55, b.opacity, b.opacity * 0.55] }}
          transition={{ duration: 7 + i * 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {Array.from({ length: 4 }, (_, i) => (
        <motion.span
          key={`particle-${i}`}
          className="location-chapter__particle"
          style={{
            left: `${18 + i * 20}%`,
            top: `${28 + (i * 17) % 50}%`,
          }}
          animate={{ y: [0, -8, 0], opacity: [0.06, 0.18, 0.06] }}
          transition={{
            duration: 5 + i,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {petals.map((p, i) => (
        <motion.span
          key={`petal-${i}`}
          className="location-chapter__petal"
          style={{ left: p.x, top: p.y, rotate: p.rotate }}
          animate={{ y: [0, -10, 0], opacity: [0.1, 0.24, 0.1] }}
          transition={{
            duration: 6 + (i % 3),
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/** Single blurred mandala watermark — discovered, not announced. */
export function MandalaWatermark() {
  return (
    <div className="location-chapter__mandala-watermark" aria-hidden="true">
      <Image src={LOCATION_MANDALA_IMAGE} alt="" width={480} height={480} priority={false} />
    </div>
  );
}

function Diya({ className }: { readonly className: string }) {
  return (
    <motion.svg
      viewBox="0 0 32 40"
      className={`location-chapter__diya ${className}`}
      aria-hidden="true"
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <ellipse cx="16" cy="30" rx="12" ry="4" fill={T.gold} opacity="0.3" />
      <path d="M6 28 C6 20 10 16 16 16 C22 16 26 20 26 28 Z" fill={T.kumkuma} opacity="0.65" />
      <path d="M8 28 L24 28" stroke={T.gold} strokeWidth="0.75" opacity="0.45" />
      <motion.path
        d="M16 16 C14 10 16 4 16 4 C16 4 18 10 16 16 Z"
        fill={T.yellow}
        opacity="0.8"
        animate={{ scaleY: [1, 1.07, 1], opacity: [0.65, 0.95, 0.65] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "16px 16px" }}
      />
    </motion.svg>
  );
}

export function CornerDiyas() {
  return (
    <>
      <Diya className="location-chapter__diya--tl" />
      <Diya className="location-chapter__diya--tr" />
      <Diya className="location-chapter__diya--bl" />
      <Diya className="location-chapter__diya--br" />
    </>
  );
}

export function VenueNameDivider() {
  return (
    <div className="location-chapter__venue-divider" aria-hidden="true">
      <span className="location-chapter__venue-divider-line" />
      <span className="location-chapter__venue-divider-gem" />
      <span className="location-chapter__venue-divider-line" />
    </div>
  );
}

export function DetailSeparator() {
  return <div className="location-chapter__detail-separator" aria-hidden="true" />;
}

const DETAIL_ICONS: Record<string, typeof Calendar> = {
  Ceremony: Calendar,
  Reception: Sparkles,
  Parking: Car,
};

export function DetailIcon({ label }: { readonly label: string }) {
  const Icon = DETAIL_ICONS[label] ?? MapPin;
  return (
    <div className="location-chapter__detail-icon">
      <Icon size={17} stroke={T.gold} strokeWidth={1.75} />
    </div>
  );
}

export function LocationHeroPin() {
  return (
    <div className="location-chapter__hero-scene">
      <div className="location-chapter__hero-glow" aria-hidden="true" />

      <div className="location-chapter__hero-ring" aria-hidden="true">
        <svg viewBox="0 0 120 120" className="location-chapter__temple-arch">
          <path
            d="M12 88 Q60 28 108 88"
            fill="none"
            stroke={T.gold}
            strokeWidth="0.75"
            opacity="0.35"
          />
        </svg>
      </div>

      <div className="location-chapter__pin-wrap">
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            className="location-chapter__ripple"
            style={{ width: 56 + i * 32, height: 56 + i * 32 }}
            animate={{ scale: [1, 1.28, 1], opacity: [0.35, 0.06, 0.35] }}
            transition={{
              duration: 3.8,
              delay: i * 1,
              repeat: Infinity,
              ease: "easeOut",
            }}
            aria-hidden="true"
          />
        ))}

        <div className="location-chapter__pin-frame">
          <motion.div
            className="location-chapter__pin-inner"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <MapPin size={44} stroke={T.gold} fill={T.kumkuma} strokeWidth={1.4} />
          </motion.div>
        </div>

        <motion.div
          className="location-chapter__compass"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        >
          <Navigation size={14} stroke={T.champagne} strokeWidth={1.25} className="opacity-45" />
        </motion.div>
      </div>
    </div>
  );
}
