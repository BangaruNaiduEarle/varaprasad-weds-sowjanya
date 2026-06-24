"use client";

import { FOOTER_USE_EXPERIMENTAL } from "./footer.config";
import { FooterFinale } from "./experimental";
import { SiteFooterLegacy } from "./SiteFooter.legacy";

export function SiteFooter() {
  if (FOOTER_USE_EXPERIMENTAL) {
    return <FooterFinale />;
  }

  return <SiteFooterLegacy />;
}
