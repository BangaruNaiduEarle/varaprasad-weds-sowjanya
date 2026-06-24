import {
  BookOpen,
  CalendarHeart,
  Heart,
  Images,
  MapPin,
  Sparkles,
} from "lucide-react";

import type { DockNavItem } from "./dock.types";

export const DOCK_NAV_ITEMS: readonly DockNavItem[] = [
  {
    id: "heart",
    label: "Heart",
    href: "#heart",
    icon: Heart,
  },
  {
    id: "story",
    label: "Story",
    href: "#story",
    icon: BookOpen,
  },
  {
    id: "events",
    label: "Events",
    href: "#events",
    icon: CalendarHeart,
  },
  {
    id: "gallery",
    label: "Gallery",
    href: "#gallery",
    icon: Images,
  },
  {
    id: "blessings",
    label: "Blessings",
    href: "#blessings",
    icon: Sparkles,
  },
  {
    id: "location",
    label: "Location",
    href: "#location",
    icon: MapPin,
  },
] as const;
