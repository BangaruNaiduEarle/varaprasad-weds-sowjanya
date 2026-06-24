import { brideDisplayName, groomDisplayName } from "./invitation.data";

export type IllustrationId =
  | "family-meeting"
  | "family-gathering"
  | "wedding-arch"
  | "sacred-fire"
  | "cake-cutting";

export interface IllustrationAsset {
  readonly id: IllustrationId;
  readonly src: string;
  readonly alt: string;
}

export const ILLUSTRATIONS: Record<IllustrationId, IllustrationAsset> = {
  "family-meeting": {
    id: "family-meeting",
    // src: "/images/illustrations/family-meeting.png",
    src: "/images/bride-groom/d1.jpeg",

    alt: `${groomDisplayName()} with family elders in a warm blessing ceremony`,
  },
  "family-gathering": {
    id: "family-gathering",
    // src: "/images/illustrations/family-gathering.png",
     src: "/images/bride-groom/s2.jpeg",
    alt: `Joyful gathering celebrating ${groomDisplayName()} & ${brideDisplayName()}`,
  },
  "wedding-arch": {
    id: "wedding-arch",
    src: "/images/illustrations/wedding-arch.png",
    alt: `${groomDisplayName()} and ${brideDisplayName()} under a golden wedding arch`,
  },
  "sacred-fire": {
    id: "sacred-fire",
    src: "/images/illustrations/sacred-fire.png",
    alt: "Traditional mandap wedding ceremony with sacred fire",
  },
  "cake-cutting": {
    id: "cake-cutting",
    src: "/images/illustrations/cake-cutting.png",
    alt: "Reception celebration with family and loved ones",
  },
} as const;

export function getIllustration(id: IllustrationId): IllustrationAsset {
  return ILLUSTRATIONS[id];
}
