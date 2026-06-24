import { galleryImages } from "./galleryImages";
import type { MemoryAspect, MemoryGradient, MemoryItem } from "./memories.types";

const aspectOverrides: Record<string, MemoryAspect> = {
  d1: "square",
  d3: "portrait",
  ds1: "portrait",
  ds2: "landscape",
  ds3: "portrait",
  ds4: "landscape",
  ds5: "portrait",
  ds6: "portrait",
  ds7: "portrait",
  ds8: "landscape",
  ds9: "landscape",
  ds10: "portrait",
  ds11: "portrait",
  ds12: "portrait",
  ds13: "portrait",
  ds14: "landscape",
  ds15: "portrait",
  ds16: "portrait",
  ds17: "portrait",
  ds18: "portrait",
  ds19: "portrait",
  ds20: "landscape",
  ds21: "landscape",
  ds22: "portrait",
  ds23: "square",
  s1: "portrait",
  s2: "landscape",
};

const layoutPresets: {
  readonly rotate: number;
  readonly gradient: MemoryGradient;
}[] = [
  { rotate: -2.5, gradient: { from: "gold", to: "peach", accent: "maroon" } },
  { rotate: 1.8, gradient: { from: "green", to: "maroon", accent: "gold" } },
  { rotate: -1.2, gradient: { from: "maroon", to: "navy", accent: "gold" } },
  { rotate: 2.4, gradient: { from: "peach", to: "gold", accent: "maroon" } },
  { rotate: -1.6, gradient: { from: "ivory", to: "green", accent: "gold" } },
  { rotate: 1.4, gradient: { from: "maroon", to: "gold", accent: "ivory" } },
  { rotate: -2, gradient: { from: "peach", to: "maroon", accent: "gold" } },
  { rotate: 1.1, gradient: { from: "navy", to: "maroon", accent: "peach" } },
  { rotate: -0.8, gradient: { from: "gold", to: "green", accent: "maroon" } },
  { rotate: 2, gradient: { from: "maroon", to: "peach", accent: "gold" } },
];

export const MEMORY_ITEMS: readonly MemoryItem[] = galleryImages.map((src, index) => {
  const preset = layoutPresets[index % layoutPresets.length]!;
  const filename = src.split("/").pop()?.replace(/\.[^.]+$/, "") ?? `photo-${index}`;

  return {
    id: filename,
    src,
    aspect: aspectOverrides[filename],
    rotate: preset.rotate,
    gradient: preset.gradient,
  };
});

export const MASONRY_COLUMN_CLASS =
  "columns-2 gap-4 sm:columns-3 sm:gap-5 lg:columns-3 xl:columns-4";
