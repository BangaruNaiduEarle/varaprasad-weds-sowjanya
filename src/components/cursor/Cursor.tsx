"use client";

import { Heart } from "lucide-react";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

import { colors } from "@/styles/theme";

import {
  CURSOR_BODY_CLASS,
  DEFAULT_CURSOR_CONFIG,
  type CursorMode,
  type CursorPosition,
} from "./cursor.types";
import {
  applyCursorMode,
  getPointerPosition,
  isTouchDevice,
  lerp,
  resolveCursorMode,
  spawnMandalaRipple,
} from "./cursor.utils";

export function Cursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ripplesRef = useRef<HTMLDivElement>(null);

  const targetPosition = useRef<CursorPosition>({ x: 0, y: 0 });
  const currentPosition = useRef<CursorPosition>({ x: 0, y: 0 });
  const modeRef = useRef<CursorMode>("default");
  const rafRef = useRef<number | null>(null);
  const isActiveRef = useRef(false);

  const motionX = useMotionValue(0);
  const motionY = useMotionValue(0);
  const dotScale = useMotionValue(1);
  const ringOpacity = useMotionValue(0);
  const ringScale = useMotionValue(0.6);
  const heartOpacity = useMotionValue(0);
  const heartScale = useMotionValue(0.5);
  const bloomOpacity = useMotionValue(0);
  const bloomScale = useMotionValue(0.8);
  const containerOpacity = useMotionValue(0);

  useEffect(() => {
    const container = containerRef.current;
    const ripples = ripplesRef.current;

    if (!container || !ripples) {
      return;
    }

    if (isTouchDevice()) {
      container.style.display = "none";
      return;
    }

    isActiveRef.current = true;
    document.body.classList.add(CURSOR_BODY_CLASS);
    containerOpacity.set(1);

    const motionValues = {
      dotScale,
      ringOpacity,
      ringScale,
      heartOpacity,
      heartScale,
      bloomOpacity,
      bloomScale,
      containerOpacity,
    };

    const config = DEFAULT_CURSOR_CONFIG;

    const updateModeFromPoint = (x: number, y: number): void => {
      const element = document.elementFromPoint(x, y);
      const nextMode = resolveCursorMode(element);

      if (nextMode === modeRef.current) {
        return;
      }

      modeRef.current = nextMode;
      applyCursorMode(nextMode, motionValues, config);
    };

    const tick = (): void => {
      if (!isActiveRef.current) {
        return;
      }

      const { lerpFactor } = config;

      currentPosition.current = {
        x: lerp(currentPosition.current.x, targetPosition.current.x, lerpFactor),
        y: lerp(currentPosition.current.y, targetPosition.current.y, lerpFactor),
      };

      motionX.set(currentPosition.current.x);
      motionY.set(currentPosition.current.y);

      rafRef.current = requestAnimationFrame(tick);
    };

    const handlePointerMove = (event: PointerEvent): void => {
      if (event.pointerType === "touch") {
        return;
      }

      const position = getPointerPosition(event);
      targetPosition.current = position;
      updateModeFromPoint(position.x, position.y);
    };

    const handlePointerDown = (event: PointerEvent): void => {
      if (event.pointerType === "touch") {
        return;
      }

      spawnMandalaRipple(ripples, config);
    };

    const handlePointerLeave = (): void => {
      containerOpacity.set(0);
    };

    const handlePointerEnter = (event: PointerEvent): void => {
      if (event.pointerType === "touch") {
        return;
      }

      const position = getPointerPosition(event);
      targetPosition.current = position;
      currentPosition.current = position;
      motionX.set(position.x);
      motionY.set(position.y);
      containerOpacity.set(1);
    };

    rafRef.current = requestAnimationFrame(tick);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);
    document.documentElement.addEventListener("pointerenter", handlePointerEnter);

    return () => {
      isActiveRef.current = false;

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }

      document.body.classList.remove(CURSOR_BODY_CLASS);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
      document.documentElement.removeEventListener("pointerenter", handlePointerEnter);
    };
  }, [
    bloomOpacity,
    bloomScale,
    containerOpacity,
    dotScale,
    heartOpacity,
    heartScale,
    motionX,
    motionY,
    ringOpacity,
    ringScale,
  ]);

  const { dotSize, ringSize, heartSize, bloomSize } = DEFAULT_CURSOR_CONFIG;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999]"
    >
      <motion.div
        className="pointer-events-none absolute left-0 top-0 will-change-transform"
        style={{
          x: motionX,
          y: motionY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: containerOpacity,
        }}
      >
        <div ref={ripplesRef} className="pointer-events-none absolute inset-0" />

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: bloomSize,
            height: bloomSize,
            opacity: bloomOpacity,
            scale: bloomScale,
            background: `radial-gradient(circle, color-mix(in srgb, ${colors.peach} 55%, transparent) 0%, color-mix(in srgb, ${colors.gold} 18%, transparent) 45%, transparent 72%)`,
            filter: "blur(8px)",
          }}
        />

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{
            width: ringSize,
            height: ringSize,
            opacity: ringOpacity,
            scale: ringScale,
            borderColor: colors.gold,
            borderWidth: 1.5,
            boxShadow: `0 0 18px color-mix(in srgb, ${colors.gold} 35%, transparent)`,
          }}
        />

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
          style={{
            opacity: heartOpacity,
            scale: heartScale,
          }}
        >
          <Heart
            size={heartSize}
            fill={colors.maroon}
            stroke={colors.gold}
            strokeWidth={1.5}
            className="drop-shadow-[0_0_12px_var(--color-gold)]"
          />
        </motion.div>

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: dotSize,
            height: dotSize,
            scale: dotScale,
            backgroundColor: colors.gold,
            boxShadow: `0 0 14px color-mix(in srgb, ${colors.gold} 80%, transparent), 0 0 28px color-mix(in srgb, ${colors.gold} 40%, transparent)`,
          }}
        />
      </motion.div>
    </div>
  );
}
