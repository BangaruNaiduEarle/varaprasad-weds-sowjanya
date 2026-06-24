import { INVITATION_DATA } from "@/content/invitation.data";

import type { WeddingWish } from "./wishes.types";

export const WEDDING_WISHES: readonly WeddingWish[] = [
  {
    id: "amma",
    guestName: "Lakshmi Devi",
    relation: "Family",
    message:
      "May your home always be filled with the fragrance of jasmine and the warmth of unconditional love. We are so proud of you both.",
    rotate: -2.2,
    offsetX: -8,
    floatDelay: 0,
    floatDuration: 5.2,
  },
  {
    id: "best-friend",
    guestName: "Priya",
    relation: "Friend",
    message:
      "From college canteen laughs to this beautiful day — I've watched your love grow quietly and powerfully. Dance extra hard at the sangeet for me!",
    rotate: 1.6,
    offsetX: 12,
    floatDelay: 0.4,
    floatDuration: 4.8,
  },
  {
    id: "uncle",
    guestName: "Venkat Rao",
    relation: "Elder",
    message:
      "Two good hearts finding each other is rare. Cherish every ordinary morning together — that is where forever lives.",
    rotate: -1.4,
    offsetX: -4,
    floatDelay: 0.8,
    floatDuration: 5.6,
  },
  {
    id: "cousin",
    guestName: "Ananya",
    relation: "Cousin",
    message:
      "You two feel like poetry written in the same language. Wishing you a lifetime of inside jokes and shared desserts.",
    rotate: 2.8,
    offsetX: 6,
    floatDelay: 1.2,
    floatDuration: 4.5,
  },
  {
    id: "colleague",
    guestName: "Arjun",
    relation: "Friend",
    message:
      "Varaprasad, the office will never be the same. Sowjanya, thank you for making him smile on Monday mornings. Much love to you both.",
    rotate: -0.9,
    offsetX: -10,
    floatDelay: 0.6,
    floatDuration: 5,
  },
  {
    id: "grandmother",
    guestName: "Saraswati",
    relation: "Family",
    message:
      "My blessings are with you, my children. May every threshold you cross together bring prosperity and peace.",
    rotate: 1.2,
    offsetX: 8,
    floatDelay: 1.6,
    floatDuration: 5.4,
  },
  {
    id: "childhood",
    guestName: "Karthik",
    relation: "Friend",
    message:
      "Still remember the cricket field where you first told me about her. Some stories are meant to become weddings.",
    rotate: -2.6,
    offsetX: 0,
    floatDelay: 2,
    floatDuration: 4.9,
  },
] as const;

/** Set to `false` to revert to the legacy stacked wishes layout. */
export const WISHES_USE_EXPERIMENTAL = true;

export const WISHES_SECTION_SUBTITLE = INVITATION_DATA.blessings.wishesSection;
