import { INVITATION_DATA } from "@/content/invitation.data";

/**
 * Muhurtham scene configuration.
 *
 * Toggle `MUHURTHAM_USE_EXPERIMENTAL_CARD` to switch between the legacy card
 * and the experimental invitation redesign. Set to `false` to revert instantly.
 */
export const MUHURTHAM_USE_EXPERIMENTAL_CARD = true;

const { muhurtham } = INVITATION_DATA;

export const MUHURTHAM = {
  title: muhurtham.title,
  date: muhurtham.dateDisplay,
  day: muhurtham.day,
  time: muhurtham.time,
  samvatsara: muhurtham.samvatsara,
  tithi: muhurtham.tithi,
  nakshatram: muhurtham.nakshatram,
  lagnam: muhurtham.lagnam,
  venue: muhurtham.venue,
  blessingIntro: muhurtham.blessingIntro,
  quote: muhurtham.quote,
} as const;

export type MuhurthamData = {
  readonly title: string;
  readonly date: string;
  readonly day: string;
  readonly time: string;
  readonly samvatsara: string;
  readonly tithi: string;
  readonly nakshatram: string;
  readonly lagnam: string;
  readonly venue: string;
  readonly blessingIntro: string;
  readonly quote: string;
};
