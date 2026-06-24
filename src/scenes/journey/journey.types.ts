export type JourneyAspect = "portrait" | "landscape" | "square";

export interface JourneyItem {
  readonly id: string;
  readonly title: string;
  readonly date: string;
  readonly image: string;
  readonly aspect: JourneyAspect;
  readonly description: string;
  readonly rotate: number;
  readonly offsetY: number;
}

export const JOURNEY_ASPECT_CLASS: Record<JourneyAspect, string> = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/10]",
  square: "aspect-square",
} as const;

export interface ScrapbookDoodle {
  readonly id: number;
  readonly type: "heart" | "star" | "swirl" | "sparkle";
  readonly x: string;
  readonly y: string;
  readonly rotate: number;
  readonly scale: number;
}

export type PolaroidVariant = "mobile" | "desktop";

export interface PolaroidCardProps {
  readonly item: JourneyItem;
  readonly index: number;
  readonly isActive: boolean;
  readonly variant?: PolaroidVariant;
}
