import type { ThemeColor } from "@/styles/theme";

export type MemoryAspect = "portrait" | "landscape" | "square" | "tall";

export interface MemoryGradient {
  readonly from: ThemeColor;
  readonly to: ThemeColor;
  readonly accent: ThemeColor;
}

export interface MemoryItem {
  readonly id: string;
  readonly src: string;
  readonly aspect: MemoryAspect;
  readonly rotate: number;
  readonly gradient: MemoryGradient;
}

export interface MemoryPhotoCardProps {
  readonly memory: MemoryItem;
  readonly index: number;
  readonly onOpen: (memory: MemoryItem) => void;
}

export const MEMORY_ASPECT_CLASS: Record<MemoryAspect, string> = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/10]",
  square: "aspect-square",
  tall: "aspect-[3/4]",
} as const;
