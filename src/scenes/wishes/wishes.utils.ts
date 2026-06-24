import { colors } from "@/styles/theme";

export function goldBorderStyle(width: number): string {
  return `${width}px solid color-mix(in srgb, ${colors.gold} 80%, ${colors.maroon})`;
}

export function wishCardShadow(): string {
  return `0 2px 8px color-mix(in srgb, ${colors.navy} 6%, transparent), 0 12px 32px color-mix(in srgb, ${colors.gold} 12%, transparent), 0 4px 16px color-mix(in srgb, ${colors.maroon} 5%, transparent)`;
}

export function sceneWarmBackground(): string {
  return colors.cream;
}

export function paperBackground(): string {
  return colors.ivory;
}

export function paperTextureOverlay(): string {
  return "none";
}
