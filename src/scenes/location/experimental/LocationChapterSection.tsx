"use client";

import { motion } from "framer-motion";

import { INVITATION_DATA } from "@/content/invitation.data";
import { useLanguage, useLocalizedInvitation, useLocalizedLocationDetails } from "@/i18n";

import { CinematicBackground, CornerDiyas } from "./LocationDecor";
import { ContactMiniCard, LocationInvitationCard } from "./LocationInvitationCard";

import "./location-chapter.css";

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
} as const;

/**
 * Experimental premium Location chapter — calm luxury invitation page.
 * Toggle via LOCATION_USE_EXPERIMENTAL in location.config.ts.
 */
export function LocationChapterSection() {
  const { t } = useLanguage();
  const inv = useLocalizedInvitation();
  const details = useLocalizedLocationDetails();
  const { venue, contact } = INVITATION_DATA;

  const contacts = contact.map((item) => ({
    ...item,
    label: item.id === "phone" ? t.common.callUs : t.common.email,
  }));

  return (
    <section
      id="location"
      aria-label={t.location.ariaLabel}
      className="location-chapter relative flex min-h-dvh snap-start flex-col overflow-hidden"
    >
      <CinematicBackground />
      <CornerDiyas />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center">
        <div className="location-chapter__inner">
          <motion.header
            className="location-chapter__header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <p className="location-chapter__scene-label">
              {t.location.scene}
            </p>
            <h2 className="location-chapter__title">
              {t.location.title}
            </h2>
            <p className="location-chapter__subtitle">
              {t.location.subtitle}
            </p>
          </motion.header>

          <LocationInvitationCard
            venueName={inv.venueName}
            address={inv.venueAddress}
            city={inv.venueCityLine}
            mapsUrl={venue.mapsUrl}
            details={details}
          />

          {/* <div className="location-chapter__contact-grid">
            {contacts.map((contactItem, index) => (
              <ContactMiniCard
                key={contactItem.id}
                id={contactItem.id}
                label={contactItem.label}
                value={contactItem.value}
                href={contactItem.href}
                index={index}
              />
            ))}
          </div> */}

          <motion.footer
            className="location-chapter__footer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <p className="location-chapter__footer-text">
              {t.location.footerMessage}
            </p>
          </motion.footer>
        </div>
      </div>
    </section>
  );
}
