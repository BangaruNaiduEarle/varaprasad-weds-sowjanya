import type { LucideIcon } from "lucide-react";

export type DockItemId =
  | "heart"
  | "story"
  | "events"
  | "gallery"
  | "blessings"
  | "location";

export type DockVariant = "desktop" | "mobile" | "floating";

export interface DockNavItem {
  readonly id: DockItemId;
  readonly label: string;
  readonly href: string;
  readonly icon: LucideIcon;
}

export interface DockItemMotionConfig {
  readonly hoverScale: number;
  readonly hoverLift: number;
  readonly tapScale: number;
  readonly springStiffness: number;
  readonly springDamping: number;
}

export interface DockLayoutConfig {
  readonly bottomOffset: string;
  readonly mobileSafeAreaClass: string;
}

export interface DockItemProps {
  readonly item: DockNavItem;
  readonly isActive: boolean;
  readonly variant: DockVariant;
  readonly onSelect: (item: DockNavItem) => void;
}

export interface DockProps {
  readonly activeId?: DockItemId;
  readonly defaultActiveId?: DockItemId;
  readonly onNavigate?: (item: DockNavItem) => void;
}

export const DEFAULT_DOCK_ITEM_MOTION: DockItemMotionConfig = {
  hoverScale: 1.12,
  hoverLift: -4,
  tapScale: 0.92,
  springStiffness: 420,
  springDamping: 28,
} as const;

export const DEFAULT_DOCK_LAYOUT: DockLayoutConfig = {
  bottomOffset: "max(1rem, env(safe-area-inset-bottom, 1rem))",
  mobileSafeAreaClass: "pb-[max(0.5rem,env(safe-area-inset-bottom))]",
} as const;
