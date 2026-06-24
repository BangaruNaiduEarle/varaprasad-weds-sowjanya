import { INVITATION_DATA } from "@/content/invitation.data";

/** Footer configuration — toggle experimental grand finale design. */

export const FOOTER_USE_EXPERIMENTAL = true;

export const FOOTER_MANDALA_IMAGE = INVITATION_DATA.illustrations.mandala;

export const FOOTER_BLESSINGS = INVITATION_DATA.footer.blessings;

export const FOOTER_EMOTIONAL_NOTE = INVITATION_DATA.footer.emotionalNote;

export const FOOTER_COPYRIGHT = INVITATION_DATA.footer.copyright;

export const FOOTER_SOCIAL = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com",
    ariaLabel: "Follow us on Instagram",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/919876543210",
    ariaLabel: "Message us on WhatsApp",
  },
  // {
  //   id: "email",
  //   label: "Email",
  //   href: INVITATION_DATA.contact.find((c) => c.id === "email")?.href ?? "mailto:hello@wedding.com",
  //   ariaLabel: "Send us an email",
  // },
] as const;

export type FooterSocialId = (typeof FOOTER_SOCIAL)[number]["id"];
