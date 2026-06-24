"use client";

import { motion } from "framer-motion";

import { colors } from "@/styles/theme";

import { INVITATION_CONFIG } from "@/scenes/invitation/invitation.config";

function MandalaOrnament() {
  return (
    <svg viewBox="0 0 120 40" className="mx-auto h-8 w-32 opacity-60" aria-hidden="true">
      <circle cx="60" cy="20" r="8" fill="none" stroke={colors.gold} strokeWidth="0.8" />
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (Math.PI / 4) * i;
        return (
          <line
            key={i}
            x1={60}
            y1={20}
            x2={60 + Math.cos(angle) * 18}
            y2={20 + Math.sin(angle) * 18}
            stroke={colors.gold}
            strokeWidth="0.6"
          />
        );
      })}
    </svg>
  );
}

export function SiteFooterLegacy() {
  return (
    <footer
      id="footer"
      aria-label="Site footer"
      className="relative snap-start overflow-hidden px-6 py-16 sm:py-20"
      style={{
        background: `linear-gradient(180deg, ${colors.maroon} 0%, color-mix(in srgb, ${colors.kumkuma} 80%, ${colors.maroon}) 100%)`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(${colors.gold} 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-lg text-center">
        <MandalaOrnament />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script mt-4 text-[clamp(2rem,8vw,3rem)] leading-none text-gold"
        >
          {INVITATION_CONFIG.groomName.split(" ").slice(-1)[0]} & {INVITATION_CONFIG.brideName}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-section mt-4 text-[10px] uppercase tracking-[0.35em] text-champagne opacity-80"
        >
          {INVITATION_CONFIG.weddingDateDisplay}
        </motion.p>

        <div
          className="mx-auto my-6 h-px w-24"
          style={{
            background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)`,
          }}
          aria-hidden="true"
        />

        <p className="font-body text-sm font-light text-champagne opacity-75">
          With hearts full of gratitude, we await your presence
          <br />
          to bless our union.
        </p>

        <p className="font-section mt-8 text-[9px] uppercase tracking-[0.3em] text-gold opacity-50">
          © {new Date().getFullYear()} · Crafted with love
        </p>
      </div>
    </footer>
  );
}
