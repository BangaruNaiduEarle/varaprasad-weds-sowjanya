"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Mail } from "lucide-react";

import { colors } from "@/styles/theme";

import { LOCATION_CONFIG, LOCATION_DETAILS } from "./location.config";

export function LocationExperienceLegacy() {
  return (
    <section
      id="location"
      aria-label="Venue Location"
      className="relative flex min-h-dvh snap-start flex-col items-center justify-center overflow-hidden px-6 pb-32 pt-20 sm:pb-36"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, color-mix(in srgb, ${colors.maroon} 25%, ${colors.navy}) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, color-mix(in srgb, ${colors.gold} 12%, ${colors.navy}) 0%, transparent 45%),
            linear-gradient(180deg, ${colors.navy} 0%, color-mix(in srgb, ${colors.maroon} 40%, ${colors.navy}) 100%)
          `,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(${colors.gold} 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="mb-8 text-center">
          <p className="font-section text-[10px] uppercase tracking-[0.28em] text-gold opacity-80">
            Scene VI · The Final Chapter
          </p>
          <h2 className="font-script mt-2 text-[clamp(2.5rem,11vw,4rem)] leading-none text-ivory">
            Find Us
          </h2>
        </div>

        <div
          className="overflow-hidden rounded-theme-xl"
          style={{
            background: `color-mix(in srgb, ${colors.navy} 85%, transparent)`,
            border: `1px solid color-mix(in srgb, ${colors.gold} 40%, transparent)`,
            boxShadow: `0 16px 48px color-mix(in srgb, ${colors.gold} 15%, transparent), 0 4px 16px color-mix(in srgb, ${colors.maroon} 20%, transparent)`,
            backdropFilter: "blur(16px)",
          }}
        >
          <div
            className="relative flex aspect-[16/10] items-center justify-center"
            style={{
              background: `linear-gradient(145deg, color-mix(in srgb, ${colors.maroon} 60%, ${colors.navy}) 0%, color-mix(in srgb, ${colors.gold} 20%, ${colors.navy}) 100%)`,
            }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <MapPin
                size={52}
                stroke={colors.gold}
                fill={colors.kumkuma}
                strokeWidth={1.5}
                className="drop-shadow-[0_0_28px_var(--color-gold)]"
              />
            </motion.div>

            <div
              className="absolute inset-0 opacity-35"
              style={{
                background: `radial-gradient(circle at 50% 60%, color-mix(in srgb, ${colors.yellow} 35%, transparent) 0%, transparent 60%)`,
              }}
              aria-hidden="true"
            />
          </div>

          <div className="space-y-5 p-6 sm:p-7">
            <div>
              <h3 className="font-heading text-xl text-gold sm:text-2xl">
                {LOCATION_CONFIG.venueName}
              </h3>
              <p className="font-body mt-1 font-light text-champagne">
                {LOCATION_CONFIG.address}, {LOCATION_CONFIG.city}
              </p>
            </div>

            <ul
              className="space-y-4 border-t pt-4"
              style={{ borderColor: `color-mix(in srgb, ${colors.gold} 25%, transparent)` }}
            >
              {LOCATION_DETAILS.map((detail) => (
                <li key={detail.label} className="flex flex-col gap-0.5">
                  <span className="font-section text-[9px] uppercase tracking-[0.22em] text-gold opacity-80">
                    {detail.label}
                  </span>
                  <span className="font-body text-sm font-light text-ivory opacity-90">
                    {detail.value}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex gap-3 pt-2">
              <motion.a
                href={LOCATION_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-full py-4 font-section text-[10px] uppercase tracking-[0.18em] outline-none focus-visible:ring-2 focus-visible:ring-accent sm:text-xs"
                style={{
                  background: `linear-gradient(135deg, ${colors.gold}, ${colors.yellow})`,
                  color: colors.maroon,
                }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Navigation size={16} stroke={colors.maroon} />
                Directions
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {[
            { icon: Phone, label: "Call Us", value: "+91 98765 43210" },
            { icon: Mail, label: "Email", value: "hello@wedding.com" },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="rounded-theme-lg p-4 text-center"
              style={{
                background: `color-mix(in srgb, ${colors.maroon} 30%, ${colors.navy})`,
                border: `1px solid color-mix(in srgb, ${colors.gold} 20%, transparent)`,
              }}
            >
              <Icon size={18} stroke={colors.gold} className="mx-auto mb-2" />
              <p className="font-section text-[8px] uppercase tracking-[0.2em] text-gold opacity-70">
                {label}
              </p>
              <p className="font-body mt-1 text-xs font-light text-champagne">{value}</p>
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-script mt-10 text-center text-2xl text-champagne"
        >
          We cannot wait to celebrate with you
        </motion.p>
      </motion.div>
    </section>
  );
}
