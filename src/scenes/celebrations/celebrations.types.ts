import type { IllustrationId } from "@/content/illustrations";
import type { ThemeColor } from "@/styles/theme";

export type CelebrationEventId = "kalyanam" | "reception";

export interface CelebrationGradient {
  readonly from: ThemeColor;
  readonly via: ThemeColor;
  readonly to: ThemeColor;
}

export interface CelebrationEvent {
  readonly id: CelebrationEventId;
  readonly title: string;
  readonly subtitle: string;
  readonly date: string;
  readonly time: string;
  readonly venue: string;
  readonly gradient: CelebrationGradient;
  readonly accent: ThemeColor;
  readonly illustration: IllustrationId;
  readonly image?: string;
}

export interface EventCardProps {
  readonly event: CelebrationEvent;
  readonly index: number;
  readonly isActive: boolean;
}

export interface CelebrationPattern {
  readonly id: number;
  readonly x: string;
  readonly y: string;
  readonly size: number;
  readonly opacity: number;
}
