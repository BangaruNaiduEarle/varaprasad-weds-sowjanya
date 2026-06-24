import { colors } from "@/styles/theme";

import type { MemoryGradient } from "./memories.types";

export function memoryPhotoGradient(gradient: MemoryGradient): string {
  const from = colors[gradient.from];
  const to = colors[gradient.to];
  const accent = colors[gradient.accent];

  return `linear-gradient(160deg, color-mix(in srgb, ${from} 80%, ${colors.ivory}) 0%, color-mix(in srgb, ${to} 75%, ${colors.ivory}) 55%, color-mix(in srgb, ${accent} 25%, transparent) 100%)`;
}

export function polaroidShadow(elevated = false): string {
  const base = `0 2px 8px color-mix(in srgb, ${colors.navy} 6%, transparent), 0 12px 32px color-mix(in srgb, ${colors.navy} 10%, transparent)`;
  const lift = `0 8px 24px color-mix(in srgb, ${colors.navy} 12%, transparent), 0 20px 48px color-mix(in srgb, ${colors.maroon} 8%, transparent)`;

  return elevated ? lift : base;
}
