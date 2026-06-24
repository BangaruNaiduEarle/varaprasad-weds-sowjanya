"use client";

import { CELEBRATIONS_USE_EXPERIMENTAL } from "./celebrations.config";
import { CelebrationsExperienceLegacy } from "./CelebrationsExperience.legacy";
import { CelebrationsInvitationSection } from "./experimental";

export function CelebrationsExperience() {
  if (CELEBRATIONS_USE_EXPERIMENTAL) {
    return <CelebrationsInvitationSection />;
  }

  return <CelebrationsExperienceLegacy />;
}
