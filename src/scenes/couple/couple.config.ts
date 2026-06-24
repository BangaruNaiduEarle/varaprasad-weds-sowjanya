import { INVITATION_DATA } from "@/content/invitation.data";

import type { CoupleConfig } from "./couple.types";

const { groom, bride, parents, sections, blessings, illustrations } = INVITATION_DATA;

export const COUPLE_CONFIG: CoupleConfig = {
  groom: {
    id: "groom",
    name: groom.name,
    title: groom.title,
    qualification: groom.qualification,
    role: "The Groom",
    tagline: `${groom.qualification} · ${groom.title}`,
    illustration: illustrations.groomPortrait,
  },
  bride: {
    id: "bride",
    name: bride.name,
    title: bride.title,
    qualification: bride.qualification,
    role: "The Bride",
    tagline: `${bride.qualification} · ${bride.hometown.split(",")[0]?.trim() ?? bride.hometown}`,
    illustration: illustrations.bridePortrait,
  },
  unionQuote: sections.couple.unionQuote,
  sectionLabel: sections.couple.label,
  sectionTitle: sections.couple.title,
  coupleQuote: blessings.coupleQuote,
  parents: {
    groom: {
      label: "Groom's Parents",
      father: parents.groom.father,
      mother: parents.groom.mother,
    },
    bride: {
      label: "Bride's Parents",
      father: parents.bride.father,
      mother: parents.bride.mother,
    },
    elderBlessings: parents.elderBlessings.names,
  },
} as const satisfies CoupleConfig;
