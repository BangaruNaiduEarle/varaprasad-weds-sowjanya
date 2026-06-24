import { INVITATION_DATA } from "@/content/invitation.data";

import type {
  AmbientParticle,
  FloatingPetal,
  InvitationConfig,
  MarigoldPlacement,
} from "./invitation.types";

/** Hero scene — derived from centralized invitation data. */
export const INVITATION_CONFIG: InvitationConfig = {
  groomName: INVITATION_DATA.groom.name,
  brideName: INVITATION_DATA.bride.name,
  weddingDateIso: INVITATION_DATA.muhurtham.iso,
  weddingDateDisplay: INVITATION_DATA.muhurtham.dateDisplay,
  heroSubtitle: INVITATION_DATA.hero.subtitle,
  auspiciousGreeting: INVITATION_DATA.auspiciousGreeting.english,
  exploreTargetId: INVITATION_DATA.hero.exploreTargetId,
  ctaLabel: INVITATION_DATA.hero.ctaLabel,
} as const;

export const MANDALA_IMAGE = INVITATION_DATA.illustrations.mandala;

export const MANDALA_ROTATION_DURATION = 120;

export const AMBIENT_PARTICLES: readonly AmbientParticle[] = Array.from(
  { length: 28 },
  (_, index) => ({
    id: index,
    x: (index * 19 + 11) % 100,
    y: (index * 27 + 9) % 100,
    size: 2 + (index % 4),
    duration: 10 + (index % 6) * 1.8,
    delay: index * 0.35,
  }),
);

export const FLOATING_PETALS: readonly FloatingPetal[] = Array.from(
  { length: 14 },
  (_, index) => ({
    id: index,
    x: (index * 13 + 5) % 95,
    startY: 105 + (index % 4) * 8,
    size: 14 + (index % 5) * 3,
    duration: 14 + (index % 5) * 2.5,
    delay: index * 1.1,
    rotation: (index * 47) % 360,
  }),
);

export const MARIGOLD_PLACEMENTS: readonly MarigoldPlacement[] = [
  { id: 0, x: "-4%", y: "6%", scale: 0.72, rotation: -18, delay: 0.2 },
  { id: 1, x: "88%", y: "4%", scale: 0.65, rotation: 22, delay: 0.45 },
  { id: 2, x: "-6%", y: "78%", scale: 0.8, rotation: 12, delay: 0.65 },
  { id: 3, x: "90%", y: "72%", scale: 0.7, rotation: -14, delay: 0.85 },
  { id: 4, x: "42%", y: "-8%", scale: 0.55, rotation: 8, delay: 1.05 },
] as const;

export const COUNTDOWN_LABELS = ["Days", "Hours", "Mins", "Secs"] as const;
