/** Isolated config for the experimental Muhurtham invitation card — safe to delete with the experimental folder. */

import { INVITATION_DATA } from "@/content/invitation.data";

/** Existing mandala asset used elsewhere in the project (see MandalaBackground). */
export const MUHURTHAM_MANDALA_IMAGE = INVITATION_DATA.illustrations.mandala;

export const MUHURTHAM_INVITATION_TOKENS = {
  gold: "#D4AF37",
  yellow: "#EFBF04",
  maroon: "#6B0F1A",
  kumkuma: "#800020",
  champagne: "#F7E7CE",
  ivory: "#FFF8F0",
  cream: "#F5EFE6",
  navy: "#1D2635",
} as const;

/** Mandala opacity — kept very low so text remains the hero */
export const MUHURTHAM_MANDALA_OPACITY = {
  watermark: 0.032,
  corner: 0.04,
} as const;
