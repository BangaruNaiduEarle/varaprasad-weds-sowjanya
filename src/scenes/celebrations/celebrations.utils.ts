import { colors } from "@/styles/theme";
import type { ThemeColor } from "@/styles/theme";

import type { CelebrationGradient } from "./celebrations.types";

export function gradientForEvent(gradient: CelebrationGradient): string {
  const from = colors[gradient.from];
  const via = colors[gradient.via];
  const to = colors[gradient.to];

  return `linear-gradient(145deg, color-mix(in srgb, ${from} 90%, ${colors.champagne}) 0%, color-mix(in srgb, ${via} 75%, ${colors.gold}) 48%, color-mix(in srgb, ${to} 85%, ${colors.champagne}) 100%)`;
}

export function overlayGradient(): string {
  return `linear-gradient(to top, color-mix(in srgb, ${colors.maroon} 75%, transparent) 0%, color-mix(in srgb, ${colors.kumkuma} 25%, transparent) 42%, transparent 100%)`;
}

export function accentColorToken(accent: ThemeColor): string {
  return colors[accent];
}

export function shimmerGradient(accent: ThemeColor): string {
  return `linear-gradient(105deg, transparent 35%, color-mix(in srgb, ${colors[accent]} 22%, transparent) 50%, transparent 65%)`;
}

export function invitationTexture(): string {
  return `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.06'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E")`;
}
