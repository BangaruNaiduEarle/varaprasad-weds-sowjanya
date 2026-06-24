"use client";

import { motion } from "framer-motion";

import { FOOTER_SOCIAL } from "../footer.config";

import { useLanguage } from "@/i18n";
import { useLocalizedInvitation } from "@/i18n/useLocalizedContent";

import {
  CornerDiyas,
  FinaleBackground,
  MandalaWatermark,
  SocialIcon,
} from "./FooterDecor";

import "./footer-finale.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
} as const;

/**
 * Experimental grand finale footer — refined luxury invitation closing page.
 * Toggle via FOOTER_USE_EXPERIMENTAL in footer.config.ts.
 */
export function FooterFinale() {
  const { t } = useLanguage();
  const { groomName, brideName, weddingDateDisplay } = useLocalizedInvitation();

  return (
    <footer
      id="footer"
      aria-label={t.footer.ariaLabel}
      className="site-footer-finale relative snap-start overflow-hidden pb-[max(2rem,env(safe-area-inset-bottom))]"
    >
      <FinaleBackground />
      <MandalaWatermark />
      <CornerDiyas />

      <motion.div
        className="site-footer-finale__shell"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        <motion.div variants={itemVariants} className="site-footer-finale__card">
          <motion.div variants={itemVariants} className="site-footer-finale__names">
            <h2 className="site-footer-finale__groom">{groomName}</h2>

            <span className="site-footer-finale__amp" aria-hidden="true">
              &amp;
            </span>

            <h2 className="site-footer-finale__bride">{brideName}</h2>

            <div className="site-footer-finale__name-divider" aria-hidden="true">
              <span className="site-footer-finale__name-divider-line" />
              <span className="site-footer-finale__name-divider-gem" />
              <span className="site-footer-finale__name-divider-line" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <span className="site-footer-finale__date-badge">{weddingDateDisplay}</span>
          </motion.div>

          <motion.p variants={itemVariants} className="site-footer-finale__blessings">
            {t.footer.blessings}
          </motion.p>

          <motion.p variants={itemVariants} className="site-footer-finale__note">
            &ldquo;{t.footer.emotionalNote}&rdquo;
          </motion.p>

          <motion.div variants={itemVariants} className="site-footer-finale__social">
            {FOOTER_SOCIAL.map((link) => (
              <motion.a
                key={link.id}
                href={link.href}
                // target={link.id === "email" ? undefined : "_blank"}
                // rel={link.id === "email" ? undefined : "noopener noreferrer"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                data-cursor="button"
                className="site-footer-finale__social-btn"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <SocialIcon id={link.id} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.p variants={itemVariants} className="site-footer-finale__copyright">
          © 2026 · {t.footer.copyright}
        </motion.p>
      </motion.div>
    </footer>
  );
}
