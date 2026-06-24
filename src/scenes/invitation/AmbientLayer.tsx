"use client";

import { motion } from "framer-motion";

import { colors } from "@/styles/theme";
import { formatSvgCoord } from "@/utils/svgCoords";

import {
  AMBIENT_PARTICLES,
  FLOATING_PETALS,
  MARIGOLD_PLACEMENTS,
} from "./invitation.config";

function Marigold({ scale }: { readonly scale: number }) {
  return (
    <svg
      viewBox="0 0 80 80"
      width={80 * scale}
      height={80 * scale}
      aria-hidden="true"
      className="overflow-visible"
    >
      {Array.from({ length: 12 }, (_, index) => {
        const angle = (Math.PI / 6) * index;
        const cx = 40 + Math.cos(angle) * 22;
        const cy = 40 + Math.sin(angle) * 22;

        return (
          <ellipse
            key={index}
            cx={formatSvgCoord(cx)}
            cy={formatSvgCoord(cy)}
            rx="9"
            ry="16"
            fill={colors.yellow}
            opacity="0.65"
            transform={`rotate(${formatSvgCoord((angle * 180) / Math.PI)} ${formatSvgCoord(cx)} ${formatSvgCoord(cy)})`}
          />
        );
      })}
      <circle cx="40" cy="40" r="14" fill={colors.kumkuma} opacity="0.5" />
      <circle cx="40" cy="40" r="8" fill={colors.champagne} opacity="0.85" />
    </svg>
  );
}

function PetalShape({ size }: { readonly size: number }) {
  return (
    <svg
      viewBox="0 0 24 32"
      width={size}
      height={size * 1.3}
      aria-hidden="true"
    >
      <path
        d="M12 2C8 10 4 18 12 30C20 18 16 10 12 2Z"
        fill={colors.champagne}
        opacity="0.35"
      />
    </svg>
  );
}

function Sparkle({ x, y, size }: { readonly x: number; readonly y: number; readonly size: number }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{
        opacity: [0.2, 0.8, 0.2],
        scale: [0.8, 1.2, 0.8],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 3 + (x % 2),
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    >
      <path
        d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z"
        fill={colors.gold}
        opacity="0.6"
      />
    </motion.svg>
  );
}

export function AmbientLayer() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-50"
        style={{
          background: `radial-gradient(circle, color-mix(in srgb, ${colors.yellow} 25%, transparent) 0%, transparent 70%)`,
        }}
      />

      {Array.from({ length: 8 }, (_, i) => (
        <Sparkle key={i} x={10 + i * 11} y={15 + (i % 3) * 25} size={8 + (i % 3) * 4} />
      ))}

      {AMBIENT_PARTICLES.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: colors.gold,
            filter: "blur(1px)",
            boxShadow: `0 0 12px ${colors.yellow}`,
          }}
          animate={{
            y: [0, -16, 0],
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.35, 0.1],
          }}
          transition={{
            duration: particle.duration + 3,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {MARIGOLD_PLACEMENTS.map((marigold) => (
        <motion.div
          key={marigold.id}
          className="absolute opacity-75"
          style={{
            left: marigold.x,
            top: marigold.y,
          }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{
            opacity: 0.75,
            scale: marigold.scale,
            rotate: marigold.rotation,
          }}
          transition={{
            duration: 1.2,
            delay: marigold.delay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5 + marigold.id,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Marigold scale={1} />
          </motion.div>
        </motion.div>
      ))}

      {FLOATING_PETALS.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: `${petal.startY}%`,
          }}
          animate={{
            y: ["0%", "-105vh"],
            x: [0, petal.id % 2 === 0 ? 30 : -30, 0],
            rotate: [petal.rotation, petal.rotation + 140],
            opacity: [0, 0.28, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <PetalShape size={petal.size} />
        </motion.div>
      ))}
    </div>
  );
}
