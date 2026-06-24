"use client";

import { motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";

import { LanguageSwitcher } from "@/components/language";
import { useLanguage } from "@/i18n";
import { colors } from "@/styles/theme";

import { DOCK_NAV_ITEMS } from "./dock.config";
import { DockItem } from "./DockItem";
import { DEFAULT_DOCK_LAYOUT } from "./dock.types";
import type { DockItemId, DockNavItem, DockProps } from "./dock.types";

export function Dock({
  activeId: controlledActiveId,
  defaultActiveId = "heart",
  onNavigate,
}: DockProps) {
  const { t } = useLanguage();
  const [internalActiveId, setInternalActiveId] =
    useState<DockItemId>(defaultActiveId);

  const activeId = controlledActiveId ?? internalActiveId;

  const navItems = useMemo((): readonly DockNavItem[] => {
    return DOCK_NAV_ITEMS.map((item) => ({
      ...item,
      label: t.nav[item.id],
    }));
  }, [t]);

  const handleSelect = useCallback(
    (item: DockNavItem): void => {
      if (controlledActiveId === undefined) {
        setInternalActiveId(item.id);
      }

      onNavigate?.(item);

      const target = document.querySelector(item.href);

      if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [controlledActiveId, onNavigate],
  );

  return (
    <motion.nav
      aria-label="Experience navigation"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 32,
        delay: 0.15,
      }}
      style={{ bottom: DEFAULT_DOCK_LAYOUT.bottomOffset }}
      className="pointer-events-auto fixed left-4 right-4 z-50 mx-auto max-w-lg md:left-1/2 md:right-auto md:w-auto md:max-w-none md:-translate-x-1/2"
    >
      <div
        className="glass-premium flex items-center justify-around rounded-2xl px-2 py-2 md:justify-center md:gap-0.5 md:rounded-full md:px-3 md:py-2.5"
        style={{
          paddingBottom: `max(0.5rem, env(safe-area-inset-bottom, 0px))`,
        }}
      >
        {navItems.map((item) => (
          <DockItem
            key={item.id}
            item={item}
            isActive={activeId === item.id}
            variant="floating"
            onSelect={handleSelect}
          />
        ))}
        <LanguageSwitcher variant="dock" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-1 -z-10 rounded-2xl opacity-60 md:rounded-full"
        style={{
          background: `radial-gradient(ellipse at 50% 100%, color-mix(in srgb, ${colors.gold} 12%, transparent) 0%, transparent 70%)`,
          filter: "blur(12px)",
        }}
      />
    </motion.nav>
  );
}
