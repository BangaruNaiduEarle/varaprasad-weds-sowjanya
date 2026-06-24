"use client";

import { WISHES_USE_EXPERIMENTAL } from "./wishes.config";
import { WishesBlessingsSection } from "./experimental";
import { WishesExperienceLegacy } from "./WishesExperience.legacy";

export function WishesExperience() {
  if (WISHES_USE_EXPERIMENTAL) {
    return <WishesBlessingsSection />;
  }

  return <WishesExperienceLegacy />;
}
