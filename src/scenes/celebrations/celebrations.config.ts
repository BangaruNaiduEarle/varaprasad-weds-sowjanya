import { INVITATION_DATA } from "@/content/invitation.data";

import type { CelebrationEvent, CelebrationPattern } from "./celebrations.types";

const { kalyanam, reception } = INVITATION_DATA.ceremonies;

export const CELEBRATION_EVENTS: readonly CelebrationEvent[] = [
  {
    id: "kalyanam",
    title: kalyanam.title,
    subtitle: kalyanam.subtitle,
    date: kalyanam.date,
    time: kalyanam.time,
    venue: kalyanam.venue,
    gradient: { from: "maroon", via: "gold", to: "navy" },
    accent: "maroon",
    illustration: kalyanam.illustration,
  },
  {
    id: "reception",
    title: reception.title,
    subtitle: reception.subtitle,
    date: reception.date,
    time: reception.time,
    venue: reception.venue,
    gradient: { from: "gold", via: "champagne", to: "maroon" },
    accent: "gold",
    illustration: reception.illustration,
    image: reception.image,
  },
] as const;

/** Set to `false` to revert to the legacy celebrations carousel. */
export const CELEBRATIONS_USE_EXPERIMENTAL = true;

export const CELEBRATIONS_SECTION_SUBTITLE =
  INVITATION_DATA.sections.celebrations.subtitle;

export const CARD_WIDTH_CLASS = "w-[88vw] max-w-[420px] sm:w-[72vw] sm:max-w-[480px]";

export const CARD_HEIGHT_CLASS = "h-[58vh] min-h-[420px] max-h-[560px] sm:h-[62vh]";

export const AMBIENT_PATTERNS: readonly CelebrationPattern[] = [
  { id: 0, x: "10%", y: "15%", size: 280, opacity: 0.06 },
  { id: 1, x: "85%", y: "25%", size: 220, opacity: 0.05 },
  { id: 2, x: "70%", y: "75%", size: 320, opacity: 0.04 },
  { id: 3, x: "20%", y: "80%", size: 180, opacity: 0.05 },
] as const;
