"use client";

import { Deepams } from "./Deepams";
import { LotusPetals } from "./LotusPetals";
import { MandalaLayer } from "./MandalaLayer";
import { MarigoldStrings } from "./MarigoldStrings";
import { Sparkles } from "./Sparkles";
import { DEFAULT_AMBIENT_INTENSITY } from "./ambient.config";
import type { AmbientIntensity, GlobalAmbientProps } from "./ambient.types";

function mergeIntensity(
  partial?: Partial<AmbientIntensity>,
): AmbientIntensity {
  return { ...DEFAULT_AMBIENT_INTENSITY, ...partial };
}

export function GlobalAmbient({ intensity }: GlobalAmbientProps) {
  const levels = mergeIntensity(intensity);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1]">
      <MandalaLayer opacity={levels.mandala} />
      {/* <MarigoldStrings opacity={levels.marigold} /> */}
      <LotusPetals opacity={levels.lotus} />
      <Deepams opacity={levels.deepam} />
      <Sparkles opacity={levels.sparkle} />
    </div>
  );
}
