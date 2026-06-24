"use client";

import { motion } from "framer-motion";

import { colors, semanticColors } from "@/styles/theme";

import { DEFAULT_DOCK_ITEM_MOTION } from "./dock.types";
import type { DockItemProps } from "./dock.types";

const motionConfig = DEFAULT_DOCK_ITEM_MOTION;

export function DockItem({
  item,
  isActive,
  variant,
  onSelect,
}: DockItemProps) {
  const Icon = item.icon;
  const isCompact = variant === "floating" || variant === "mobile";

  const handleClick = (): void => {
    onSelect(item);
  };

  if (variant === "desktop") {
    return (
      <motion.button
        type="button"
        aria-label={item.label}
        aria-current={isActive ? "page" : undefined}
        data-cursor="button"
        onClick={handleClick}
        className="relative flex size-11 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-accent"
        whileHover={{
          scale: motionConfig.hoverScale,
          y: motionConfig.hoverLift,
        }}
        whileTap={{ scale: motionConfig.tapScale }}
        transition={{
          type: "spring",
          stiffness: motionConfig.springStiffness,
          damping: motionConfig.springDamping,
        }}
      >
        {isActive ? (
          <motion.span
            layoutId="dock-active-glow"
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle, color-mix(in srgb, ${colors.gold} 32%, transparent) 0%, transparent 70%)`,
              boxShadow: `0 0 20px color-mix(in srgb, ${colors.gold} 40%, transparent)`,
            }}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          />
        ) : null}

        <motion.span
          animate={{
            color: isActive ? colors.gold : colors.navy,
          }}
          transition={{ duration: 0.25 }}
          className="relative z-10"
        >
          <Icon
            size={22}
            strokeWidth={isActive ? 2.25 : 1.75}
            fill={isActive ? colors.maroon : "none"}
          />
        </motion.span>
      </motion.button>
    );
  }

  return (
    <motion.button
      type="button"
      aria-label={item.label}
      aria-current={isActive ? "page" : undefined}
      data-cursor="button"
      onClick={handleClick}
      className={`relative flex min-w-0 flex-col items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        isCompact
          ? "min-h-[44px] flex-1 gap-0.5 px-1 py-1.5"
          : "flex-1 gap-0.5 px-1 pt-2 focus-visible:ring-inset"
      }`}
      whileTap={{ scale: motionConfig.tapScale }}
      transition={{
        type: "spring",
        stiffness: motionConfig.springStiffness,
        damping: motionConfig.springDamping,
      }}
    >
      {isActive ? (
        <motion.span
          layoutId="dock-floating-indicator"
          className="absolute inset-x-2 inset-y-1 rounded-xl md:inset-x-1 md:inset-y-0.5 md:rounded-full"
          style={{
            background: `color-mix(in srgb, ${colors.gold} 18%, transparent)`,
            boxShadow: `0 0 16px color-mix(in srgb, ${colors.gold} 25%, transparent)`,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 32,
          }}
        />
      ) : null}

      <motion.span
        animate={{
          scale: isActive ? 1.08 : 1,
          color: isActive ? colors.gold : semanticColors.muted,
        }}
        transition={{
          type: "spring",
          stiffness: 360,
          damping: 26,
        }}
        className="relative z-10"
      >
        <Icon
          size={isCompact ? 20 : 21}
          strokeWidth={isActive ? 2.25 : 1.85}
          fill={isActive ? colors.maroon : "none"}
        />
      </motion.span>

      <motion.span
        animate={{
          color: isActive ? colors.maroon : semanticColors.muted,
          opacity: isActive ? 1 : 0.75,
        }}
        transition={{ duration: 0.2 }}
        className="relative z-10 max-w-full truncate font-body text-[9px] leading-none tracking-wide sm:text-[10px]"
      >
        {item.label}
      </motion.span>
    </motion.button>
  );
}
