import gsap from "gsap";
import type { MotionValue } from "framer-motion";
import { animate } from "framer-motion";

import { colorValues } from "@/styles/theme";

import {
  CURSOR_DATA_ATTR,
  CURSOR_MODE_TARGETS,
  DEFAULT_CURSOR_CONFIG,
  type CursorConfig,
  type CursorMode,
  type CursorMotionTargets,
  type CursorPosition,
  type CursorTargetType,
} from "./cursor.types";

const BUTTON_SELECTOR =
  'button, a[href], [role="button"], input[type="submit"], input[type="button"]';

const IMAGE_SELECTOR = "img, picture";

const CURSOR_TARGET_VALUES: readonly CursorTargetType[] = [
  "button",
  "image",
  "card",
];

export function isTouchDevice(): boolean {
  if (typeof window === "undefined") {
    return true;
  }

  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(hover: none) and (pointer: coarse)").matches
  );
}

export function lerp(current: number, target: number, factor: number): number {
  return current + (target - current) * factor;
}

export function getPointerPosition(event: MouseEvent | PointerEvent): CursorPosition {
  return { x: event.clientX, y: event.clientY };
}

function isCursorTargetType(value: string | null): value is CursorTargetType {
  return CURSOR_TARGET_VALUES.includes(value as CursorTargetType);
}

export function resolveCursorMode(element: Element | null): CursorMode {
  if (!element) {
    return "default";
  }

  const explicitTarget = element.closest(`[${CURSOR_DATA_ATTR}]`);

  if (explicitTarget) {
    const value = explicitTarget.getAttribute(CURSOR_DATA_ATTR);

    if (isCursorTargetType(value)) {
      return value;
    }
  }

  if (element.closest(BUTTON_SELECTOR)) {
    return "button";
  }

  if (element.closest(IMAGE_SELECTOR)) {
    return "image";
  }

  return "default";
}

export function cursorTargetProps(
  type: CursorTargetType,
): Record<typeof CURSOR_DATA_ATTR, CursorTargetType> {
  return { [CURSOR_DATA_ATTR]: type };
}

export interface CursorMotionValues {
  readonly dotScale: MotionValue<number>;
  readonly ringOpacity: MotionValue<number>;
  readonly ringScale: MotionValue<number>;
  readonly heartOpacity: MotionValue<number>;
  readonly heartScale: MotionValue<number>;
  readonly bloomOpacity: MotionValue<number>;
  readonly bloomScale: MotionValue<number>;
  readonly containerOpacity: MotionValue<number>;
}

export function applyCursorMode(
  mode: CursorMode,
  motionValues: CursorMotionValues,
  config: CursorConfig = DEFAULT_CURSOR_CONFIG,
): void {
  const targets: CursorMotionTargets = CURSOR_MODE_TARGETS[mode];
  const duration = config.modeTransitionDuration;
  const ease = [0.16, 1, 0.3, 1] as const;

  animate(motionValues.dotScale, targets.dotScale, { duration, ease });
  animate(motionValues.ringOpacity, targets.ringOpacity, { duration, ease });
  animate(motionValues.ringScale, targets.ringScale, { duration, ease });
  animate(motionValues.heartOpacity, targets.heartOpacity, { duration, ease });
  animate(motionValues.heartScale, targets.heartScale, { duration, ease });
  animate(motionValues.bloomOpacity, targets.bloomOpacity, { duration, ease });
  animate(motionValues.bloomScale, targets.bloomScale, { duration, ease });
}

function createMandalaSvg(): SVGSVGElement {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");

  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const gradient = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "radialGradient",
  );
  gradient.setAttribute("id", `mandala-gradient-${crypto.randomUUID()}`);
  gradient.innerHTML = `
    <stop offset="0%" stop-color="${colorValues.gold}" stop-opacity="0.9" />
    <stop offset="55%" stop-color="${colorValues.maroon}" stop-opacity="0.45" />
    <stop offset="100%" stop-color="${colorValues.gold}" stop-opacity="0" />
  `;
  defs.appendChild(gradient);
  svg.appendChild(defs);

  const gradientId = gradient.getAttribute("id") ?? "";

  const outerRing = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  outerRing.setAttribute("cx", "50");
  outerRing.setAttribute("cy", "50");
  outerRing.setAttribute("r", "46");
  outerRing.setAttribute("fill", "none");
  outerRing.setAttribute("stroke", colorValues.gold);
  outerRing.setAttribute("stroke-width", "0.6");
  outerRing.setAttribute("opacity", "0.85");
  svg.appendChild(outerRing);

  const innerRing = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  innerRing.setAttribute("cx", "50");
  innerRing.setAttribute("cy", "50");
  innerRing.setAttribute("r", "28");
  innerRing.setAttribute("fill", "none");
  innerRing.setAttribute("stroke", colorValues.maroon);
  innerRing.setAttribute("stroke-width", "0.5");
  innerRing.setAttribute("opacity", "0.7");
  svg.appendChild(innerRing);

  for (let i = 0; i < 8; i += 1) {
    const angle = (Math.PI / 4) * i;
    const x1 = 50 + Math.cos(angle) * 12;
    const y1 = 50 + Math.sin(angle) * 12;
    const x2 = 50 + Math.cos(angle) * 42;
    const y2 = 50 + Math.sin(angle) * 42;

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", String(x1));
    line.setAttribute("y1", String(y1));
    line.setAttribute("x2", String(x2));
    line.setAttribute("y2", String(y2));
    line.setAttribute("stroke", colorValues.gold);
    line.setAttribute("stroke-width", "0.35");
    line.setAttribute("opacity", "0.55");
    svg.appendChild(line);

    const petal = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    petal.setAttribute("cx", String(50 + Math.cos(angle) * 34));
    petal.setAttribute("cy", String(50 + Math.sin(angle) * 34));
    petal.setAttribute("r", "4.5");
    petal.setAttribute("fill", `url(#${gradientId})`);
    petal.setAttribute("opacity", "0.75");
    svg.appendChild(petal);
  }

  const center = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  center.setAttribute("cx", "50");
  center.setAttribute("cy", "50");
  center.setAttribute("r", "6");
  center.setAttribute("fill", colorValues.gold);
  center.setAttribute("opacity", "0.9");
  svg.appendChild(center);

  return svg;
}

export function spawnMandalaRipple(
  parent: HTMLElement,
  config: CursorConfig = DEFAULT_CURSOR_CONFIG,
): void {
  const ripple = document.createElement("div");
  ripple.className = "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2";

  const svg = createMandalaSvg();
  svg.style.width = "72px";
  svg.style.height = "72px";
  svg.style.display = "block";
  ripple.appendChild(svg);
  parent.appendChild(ripple);

  gsap.fromTo(
    svg,
    {
      scale: 0.2,
      opacity: 0.85,
      rotation: 0,
    },
    {
      scale: config.mandalaMaxScale,
      opacity: 0,
      rotation: 45,
      duration: config.mandalaDuration,
      ease: "power2.out",
      onComplete: () => {
        ripple.remove();
      },
    },
  );
}
