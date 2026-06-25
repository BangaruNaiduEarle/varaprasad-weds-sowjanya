import type { JourneyItem, ScrapbookDoodle } from "./journey.types";

export const JOURNEY_ITEMS: readonly JourneyItem[] = [
  {
    id: "destiny-hearts",
    title: "Destiny Hearts",
    date: "22nd November 2025",
    image: "/images/bride-groom/ds28.jpeg",
    aspect: "portrait",
    description:
      "What began with a simple glance slowly blossomed into a bond written by destiny.",
    rotate: -4,
    offsetY: 8,
  },
  {
    id: "moments-memories",
    title: "Moments & Memories",
    date: "",
    image: "/images/bride-groom/ds25.jpeg",
    aspect: "landscape",
    description:
      "Endless conversations, shared dreams, and countless smiles made every day special.",
    rotate: 3,
    offsetY: -6,
  },
  {
    id: "two-families-one-celebration",
    title: "Two Families & One Celebration",
    date: "",
    image: "/images/bride-groom/ds26.jpeg",
    aspect: "landscape",
    description:
      "Amid marigolds and laughter, two families came together as one.",
    rotate: 4,
    offsetY: -4,
  },
  {
    id: "promise-forever",
    title: "Promise Forever",
    date: "25th February 2026",
    image: "/images/bride-groom/ds27.jpeg",
    aspect: "portrait",
    description:
      "With love in our hearts and blessings all around, forever became our promise.",
    rotate: -2.5,
    offsetY: 10,
  },
  {
    id: "beginning-forever",
    title: "The Beginning Forever",
    date: "2nd July 2026",
    image: "/images/bride-groom/ds24.jpeg",
    aspect: "portrait",
    description:
      "Surrounded by love and blessings, our beautiful journey continues as husband and wife.",
    rotate: -3,
    offsetY: 6,
  },
];

export const SCRAPBOOK_DOODLES: readonly ScrapbookDoodle[] = [
  { id: 0, type: "heart", x: "8%", y: "18%", rotate: -12, scale: 0.9 },
  { id: 1, type: "star", x: "92%", y: "22%", rotate: 18, scale: 1 },
  { id: 2, type: "swirl", x: "6%", y: "68%", rotate: 8, scale: 0.85 },
  { id: 3, type: "heart", x: "88%", y: "62%", rotate: 22, scale: 1.1 },
  { id: 4, type: "sparkle", x: "14%", y: "42%", rotate: -6, scale: 0.75 },
  { id: 5, type: "sparkle", x: "84%", y: "44%", rotate: 14, scale: 0.8 },
  { id: 6, type: "heart", x: "48%", y: "12%", rotate: 0, scale: 0.7 },
] as const;

export const POLAROID_OVERLAP = "";

export const CARD_WIDTH_CLASS = "w-[82vw] max-w-[360px]";

export const DESKTOP_CARD_WIDTH_CLASS = "w-full max-w-[520px]";

export const MOBILE_CAROUSEL_GAP = "gap-5";
