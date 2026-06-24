export type AmbientElement =
  | "mandala"
  | "marigold"
  | "lotus"
  | "deepam"
  | "sparkle";

export interface LotusPetalSeed {
  readonly id: number;
  readonly x: number;
  readonly delay: number;
  readonly duration: number;
  readonly size: number;
  readonly drift: number;
}

export interface SparkleSeed {
  readonly id: number;
  readonly x: string;
  readonly y: string;
  readonly delay: number;
  readonly size: number;
}

export interface DeepamPlacement {
  readonly id: number;
  readonly x: string;
  readonly y: string;
  readonly scale: number;
}

export interface AmbientIntensity {
  readonly mandala: number;
  readonly marigold: number;
  readonly lotus: number;
  readonly deepam: number;
  readonly sparkle: number;
}

export interface GlobalAmbientProps {
  readonly intensity?: Partial<AmbientIntensity>;
}
