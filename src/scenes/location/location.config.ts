import { INVITATION_DATA } from "@/content/invitation.data";

import type { LocationConfig, LocationDetail } from "./location.types";

const { venue, muhurtham, ceremonies } = INVITATION_DATA;

export const LOCATION_CONFIG: LocationConfig = {
  venueName: venue.name,
  address: venue.address,
  city: `${venue.city}, ${venue.district}, ${venue.state}`,
  mapsUrl: venue.mapsUrl,
} as const;

export const LOCATION_DETAILS: readonly LocationDetail[] = [
  {
    label: "Kalyanam",
    value: `${muhurtham.day}, ${muhurtham.dateDisplay} — ${muhurtham.time}`,
  },
  {
    label: "Vindu",
    value: `${ceremonies.reception.day}, ${ceremonies.reception.date} — ${ceremonies.reception.time}`,
  },
  {
    label: "Venue",
    value: venue.name,
  },
] as const;

/** Set to `false` to revert to the legacy location layout. */
export const LOCATION_USE_EXPERIMENTAL = true;

export const LOCATION_SECTION_SUBTITLE = INVITATION_DATA.sections.location.subtitle;

export const LOCATION_FOOTER_MESSAGE = INVITATION_DATA.blessings.locationFooter;

export const LOCATION_CONTACT = INVITATION_DATA.contact;
