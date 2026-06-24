"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import { FOOTER_MANDALA_IMAGE } from "../footer.config";
import type { FooterSocialId } from "../footer.config";

const T = {
  gold: "#D4AF37",
  yellow: "#EFBF04",
  kumkuma: "#800020",
  champagne: "#F7E7CE",
} as const;

/** Soft bokeh + minimal particles — light, breathable atmosphere. */
export function FinaleBackground() {
  const bokeh = [
    { x: "22%", y: "32%", size: 120, opacity: 0.022 },
    { x: "76%", y: "58%", size: 100, opacity: 0.018 },
  ];

  const petals = [
    { x: "14%", y: "38%", delay: 0, rotate: -12 },
    { x: "86%", y: "48%", delay: 1.5, rotate: 18 },
    { x: "48%", y: "85%", delay: 2.2, rotate: 6 },
  ];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {bokeh.map((b, i) => (
        <motion.div
          key={`bokeh-${i}`}
          className="site-footer-finale__bokeh"
          style={{
            left: b.x,
            top: b.y,
            width: b.size,
            height: b.size,
            opacity: b.opacity,
            transform: "translate(-50%, -50%)",
          }}
          animate={{ opacity: [b.opacity * 0.7, b.opacity, b.opacity * 0.7] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {Array.from({ length: 2 }, (_, i) => (
        <motion.span
          key={`particle-${i}`}
          className="site-footer-finale__particle"
          style={{
            left: `${30 + i * 35}%`,
            top: `${30 + i * 25}%`,
          }}
          animate={{ y: [0, -8, 0], opacity: [0.05, 0.14, 0.05] }}
          transition={{
            duration: 6 + i,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {petals.map((p, i) => (
        <motion.span
          key={`petal-${i}`}
          className="site-footer-finale__petal"
          style={{ left: p.x, top: p.y, rotate: p.rotate }}
          animate={{ y: [0, -10, 0], opacity: [0.08, 0.16, 0.08] }}
          transition={{
            duration: 7 + (i % 2),
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/** Single blurred watermark — supports content, never competes with it. */
export function MandalaWatermark() {
  return (
    <div className="site-footer-finale__mandala-watermark" aria-hidden="true">
      <Image src={FOOTER_MANDALA_IMAGE} alt="" width={420} height={420} priority={false} />
    </div>
  );
}

function Diya({ className }: { readonly className: string }) {
  return (
    <motion.svg
      viewBox="0 0 32 40"
      className={`site-footer-finale__diya ${className}`}
      aria-hidden="true"
      animate={{ opacity: [0.55, 0.85, 0.55] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <ellipse cx="16" cy="30" rx="12" ry="4" fill={T.gold} opacity="0.35" />
      <path
        d="M6 28 C6 20 10 16 16 16 C22 16 26 20 26 28 Z"
        fill={T.gold}
        opacity="0.55"
      />
      <path d="M8 28 L24 28" stroke={T.gold} strokeWidth="0.75" opacity="0.5" />
      <motion.path
        d="M16 16 C14 10 16 4 16 4 C16 4 18 10 16 16 Z"
        fill={T.yellow}
        opacity="0.85"
        animate={{ scaleY: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "16px 16px" }}
      />
    </motion.svg>
  );
}

export function CornerDiyas() {
  return (
    <>
      <Diya className="site-footer-finale__diya--tl" />
      <Diya className="site-footer-finale__diya--tr" />
      <Diya className="site-footer-finale__diya--bl" />
      <Diya className="site-footer-finale__diya--br" />
    </>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width={17} height={17} fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.25" cy="6.75" r="1.1" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width={17} height={17} fill="none" aria-hidden="true">
      <path
        d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 9.5c.3-.7.5-.7.8-.7h.6c.2 0 .4.1.5.4l.8 1.9c.1.2 0 .5-.2.7l-.5.5c-.1.1-.1.3 0 .4.4.7 1.1 1.4 1.8 1.8.1.1.3.1.4 0l.5-.5c.2-.2.5-.3.7-.2l1.9.8c.3.1.4.3.4.5v.6c0 .3-.1.5-.7.8-1 .5-2.2.2-3.7-.9-1.6-1.2-2.8-2.8-3.2-3.8-.4-1-.1-1.8.4-2.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

const SOCIAL_ICONS: Record<FooterSocialId, () => ReactElement> = {
  instagram: InstagramIcon,
  whatsapp: WhatsAppIcon,
  // email: () => <Mail size={17} strokeWidth={1.75} aria-hidden="true" />,
};

export function SocialIcon({ id }: { readonly id: FooterSocialId }) {
  const Icon = SOCIAL_ICONS[id];
  return <Icon />;
}
