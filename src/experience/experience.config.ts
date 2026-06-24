import type { ExperienceChapter } from "./experience.types";

export const EXPERIENCE_CHAPTERS: readonly ExperienceChapter[] = [
  { id: "heart", dockId: "heart", title: "Invitation", label: "I" },
  { id: "story", dockId: "story", title: "Our Journey", label: "II" },
  { id: "events", dockId: "events", title: "Celebrations", label: "III" },
  { id: "gallery", dockId: "gallery", title: "Memories", label: "IV" },
  { id: "blessings", dockId: "blessings", title: "Wishes", label: "V" },
  { id: "location", dockId: "location", title: "Venue", label: "VI" },
] as const;

export const EXPERIENCE_SCROLL_ID = "experience-scroll";

export const CHAPTER_AMBIENT_INTENSITY = [
  { mandala: 0.05, marigold: 1, lotus: 0.8, deepam: 0.9, sparkle: 1 },
  { mandala: 0.035, marigold: 0.7, lotus: 0.6, deepam: 0.5, sparkle: 0.7 },
  { mandala: 0.025, marigold: 0.4, lotus: 0.35, deepam: 0.6, sparkle: 0.85 },
  { mandala: 0.04, marigold: 0.55, lotus: 0.75, deepam: 0.45, sparkle: 0.8 },
  { mandala: 0.045, marigold: 0.65, lotus: 0.5, deepam: 0.85, sparkle: 0.65 },
  { mandala: 0.05, marigold: 0.8, lotus: 0.55, deepam: 1, sparkle: 0.9 },
] as const;
