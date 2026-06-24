export type CursorMode = "default" | "button" | "image" | "card";

export type CursorTargetType = Extract<CursorMode, "button" | "image" | "card">;

export interface CursorPosition {
  readonly x: number;
  readonly y: number;
}

export interface CursorMotionTargets {
  readonly dotScale: number;
  readonly ringOpacity: number;
  readonly ringScale: number;
  readonly heartOpacity: number;
  readonly heartScale: number;
  readonly bloomOpacity: number;
  readonly bloomScale: number;
}

export interface CursorConfig {
  readonly lerpFactor: number;
  readonly dotSize: number;
  readonly ringSize: number;
  readonly heartSize: number;
  readonly bloomSize: number;
  readonly modeTransitionDuration: number;
  readonly mandalaDuration: number;
  readonly mandalaMaxScale: number;
}

export interface CursorElementRefs {
  readonly container: HTMLDivElement | null;
  readonly ripples: HTMLDivElement | null;
}

export const CURSOR_DATA_ATTR = "data-cursor" as const;

export const CURSOR_BODY_CLASS = "custom-cursor-active" as const;

export const DEFAULT_CURSOR_CONFIG: CursorConfig = {
  lerpFactor: 0.18,
  dotSize: 8,
  ringSize: 44,
  heartSize: 22,
  bloomSize: 96,
  modeTransitionDuration: 0.35,
  mandalaDuration: 0.9,
  mandalaMaxScale: 3.2,
} as const;

export const CURSOR_MODE_TARGETS: Record<CursorMode, CursorMotionTargets> = {
  default: {
    dotScale: 1,
    ringOpacity: 0,
    ringScale: 0.6,
    heartOpacity: 0,
    heartScale: 0.5,
    bloomOpacity: 0,
    bloomScale: 0.8,
  },
  button: {
    dotScale: 1.35,
    ringOpacity: 1,
    ringScale: 1,
    heartOpacity: 0,
    heartScale: 0.5,
    bloomOpacity: 0,
    bloomScale: 0.8,
  },
  image: {
    dotScale: 0.85,
    ringOpacity: 0,
    ringScale: 0.6,
    heartOpacity: 1,
    heartScale: 1,
    bloomOpacity: 0,
    bloomScale: 0.8,
  },
  card: {
    dotScale: 1.1,
    ringOpacity: 0,
    ringScale: 0.6,
    heartOpacity: 0,
    heartScale: 0.5,
    bloomOpacity: 1,
    bloomScale: 1.45,
  },
} as const;
