"use client";

import { LocationChapterSection } from "./experimental";
import { LocationExperienceLegacy } from "./LocationExperience.legacy";
import { LOCATION_USE_EXPERIMENTAL } from "./location.config";

export function LocationExperience() {
  if (LOCATION_USE_EXPERIMENTAL) {
    return <LocationChapterSection />;
  }

  return <LocationExperienceLegacy />;
}
