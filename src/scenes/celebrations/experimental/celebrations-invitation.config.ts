import type { CelebrationEventId } from "../celebrations.types";
import { INVITATION_DATA } from "@/content/invitation.data";

/** Existing mandala asset — sourced from centralized invitation data. */
export const CELEBRATIONS_MANDALA_IMAGE = INVITATION_DATA.illustrations.mandala;

export const CELEBRATIONS_INVITATION_TOKENS = {
  gold: "#D4AF37",
  yellow: "#EFBF04",
  maroon: "#6B0F1A",
  kumkuma: "#800020",
  champagne: "#F7E7CE",
  ivory: "#FFF8F0",
  cream: "#F5EFE6",
  navy: "#1D2635",
  invitationPink: INVITATION_DATA.design.invitationPink,
} as const;

export const MANDALA_OPACITY = {
  watermark: 0.04,
  corner: 0.06,
} as const;

export interface EventInvitationTheme {
  readonly label: string;
  readonly cardBackground: string;
  readonly imageOverlay: string;
  readonly accentLine: string;
  readonly topBorder: string;
  readonly dateColor: string;
  readonly titleColor: string;
  readonly subtitleColor: string;
  readonly venueColor: string;
  readonly glowColor: string;
  readonly ribbon?: string;
}

/** Visual personality per ceremony — keyed to invitation card events. */
export const EVENT_INVITATION_THEMES: Record<CelebrationEventId, EventInvitationTheme> = {
  kalyanam: {
    label: "Sacred Union",
    cardBackground: `linear-gradient(165deg, #FFF8F0 0%, color-mix(in srgb, #EFBF04 14%, #F7E7CE) 40%, color-mix(in srgb, #6B0F1A 6%, #F5EFE6) 100%)`,
    imageOverlay: `linear-gradient(to top, color-mix(in srgb, #6B0F1A 55%, transparent) 0%, color-mix(in srgb, #800020 25%, transparent) 40%, transparent 100%)`,
    accentLine: "#6B0F1A",
    topBorder: `linear-gradient(90deg, #6B0F1A, #D4AF37, #EFBF04, #D4AF37, #6B0F1A)`,
    dateColor: "#800020",
    titleColor: "#6B0F1A",
    subtitleColor: "#1D2635",
    venueColor: "#1D2635",
    glowColor: "color-mix(in srgb, #D4AF37 30%, transparent)",
    ribbon: `linear-gradient(90deg, #6B0F1A, #800020)`,
  },
  reception: {
    label: "Evening Vindu",
    cardBackground: `linear-gradient(165deg, #FFF8F0 0%, color-mix(in srgb, ${INVITATION_DATA.design.invitationPink} 12%, #F7E7CE) 55%, #F5EFE6 100%)`,
    imageOverlay: `linear-gradient(to top, color-mix(in srgb, #800020 30%, transparent) 0%, color-mix(in srgb, ${INVITATION_DATA.design.invitationPink} 18%, transparent) 50%, transparent 100%)`,
    accentLine: INVITATION_DATA.design.invitationPink,
    topBorder: `linear-gradient(90deg, #800020, ${INVITATION_DATA.design.invitationPink}, #D4AF37, ${INVITATION_DATA.design.invitationPink}, #800020)`,
    dateColor: "#800020",
    titleColor: "#6B0F1A",
    subtitleColor: "#1D2635",
    venueColor: "#1D2635",
    glowColor: `color-mix(in srgb, ${INVITATION_DATA.design.invitationPink} 22%, transparent)`,
    ribbon: `linear-gradient(90deg, #800020, ${INVITATION_DATA.design.invitationPink})`,
  },
} as const;
