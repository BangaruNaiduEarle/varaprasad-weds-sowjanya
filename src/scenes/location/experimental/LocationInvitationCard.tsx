"use client";

import { motion } from "framer-motion";
import { Mail, Navigation, Phone } from "lucide-react";

import { useLanguage } from "@/i18n";

import type { LocationDetail } from "../location.types";

import {
  DetailIcon,
  DetailSeparator,
  LocationHeroPin,
  MandalaWatermark,
  VenueNameDivider,
} from "./LocationDecor";

export interface LocationInvitationCardProps {
  readonly venueName: string;
  readonly address: string;
  readonly city: string;
  readonly mapsUrl: string;
  readonly details: readonly LocationDetail[];
}

export function LocationInvitationCard({
  venueName,
  address,
  city,
  mapsUrl,
  details,
}: LocationInvitationCardProps) {
  const { t } = useLanguage();

  return (
    <motion.article
      className="location-chapter__invitation-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
    >
      <MandalaWatermark />

      <div className="location-chapter__hero">
        <LocationHeroPin />
      </div>

      <div className="location-chapter__body">
        <div className="location-chapter__venue-block">
          <p className="location-chapter__venue-label">
            {t.location.venueLabel}
          </p>
          <h3 className="location-chapter__venue-name">{venueName}</h3>
          <VenueNameDivider />
          <p className="location-chapter__address">{address}</p>
          <p className="location-chapter__city">{city}</p>
        </div>

        <ul className="location-chapter__details list-none p-0 m-0">
          {details.map((detail, index) => (
            <motion.li
              key={detail.label}
              className="location-chapter__detail-row"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <DetailIcon label={detail.label} />
              <div className="min-w-0 flex-1">
                <p className="location-chapter__detail-label">{detail.label}</p>
                <p className="location-chapter__detail-value">{detail.value}</p>
              </div>
              {index < details.length - 1 ? <DetailSeparator /> : null}
            </motion.li>
          ))}
        </ul>

        <motion.a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="button"
          className="location-chapter__cta"
          whileHover={{
            y: -3,
            boxShadow:
              "0 8px 28px color-mix(in srgb, #D4AF37 38%, transparent), 0 4px 14px color-mix(in srgb, #6B0F1A 18%, transparent)",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
        >
          <Navigation size={18} stroke="#6B0F1A" strokeWidth={2.25} />
          {t.location.directionsCta}
        </motion.a>
      </div>
    </motion.article>
  );
}

const CONTACT_ICONS = {
  phone: Phone,
  email: Mail,
} as const;

export interface ContactCardProps {
  readonly id: keyof typeof CONTACT_ICONS;
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly index: number;
}

export function ContactMiniCard({ id, label, value, href, index }: ContactCardProps) {
  const Icon = CONTACT_ICONS[id];

  return (
    <motion.a
      href={href}
      data-cursor="button"
      className="location-chapter__contact-card"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
      whileHover={{ y: -2 }}
    >
      <div className="location-chapter__contact-icon">
        <Icon size={17} stroke="#D4AF37" strokeWidth={1.75} />
      </div>
      <p className="location-chapter__contact-label">{label}</p>
      <p className="location-chapter__contact-value">{value}</p>
    </motion.a>
  );
}
