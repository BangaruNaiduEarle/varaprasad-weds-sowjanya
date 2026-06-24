import type {
  AmbientIntensity,
  DeepamPlacement,
  LotusPetalSeed,
  SparkleSeed,
} from "./ambient.types";

export const DEFAULT_AMBIENT_INTENSITY: AmbientIntensity = {
  mandala: 0.04,
  marigold: 0.85,
  lotus: 0.7,
  deepam: 0.8,
  sparkle: 0.9,
} as const;

export const LOTUS_PETAL_SEEDS: readonly LotusPetalSeed[] = Array.from(
  { length: 10 },
  (_, index) => ({
    id: index,
    x: (index * 11 + 7) % 100,
    delay: index * 1.4,
    duration: 16 + (index % 4) * 2,
    size: 16 + (index % 3) * 4,
    drift: index % 2 === 0 ? 28 : -24,
  }),
);

export const SPARKLE_SEEDS: readonly SparkleSeed[] = Array.from(
  { length: 18 },
  (_, index) => ({
    id: index,
    x: `${(index * 17 + 9) % 96 + 2}%`,
    y: `${(index * 23 + 11) % 88 + 6}%`,
    delay: index * 0.45,
    size: 3 + (index % 3),
  }),
);

export const DEEPAM_PLACEMENTS: readonly DeepamPlacement[] = [
  { id: 0, x: "6%", y: "88%", scale: 0.9 },
  { id: 1, x: "90%", y: "86%", scale: 0.85 },
  { id: 2, x: "4%", y: "14%", scale: 0.7 },
  { id: 3, x: "92%", y: "12%", scale: 0.75 },
] as const;

export const MANDALA_ROTATION_DURATION = 140;
