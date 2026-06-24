export interface WeddingWish {
  readonly id: string;
  readonly guestName: string;
  readonly relation: string;
  readonly message: string;
  readonly rotate: number;
  readonly offsetX: number;
  readonly floatDelay: number;
  readonly floatDuration: number;
}

export interface WishCardProps {
  readonly wish: WeddingWish;
  readonly index: number;
}

export interface PaperStyleConfig {
  readonly borderWidth: number;
  readonly padding: string;
}

export const DEFAULT_PAPER_STYLE: PaperStyleConfig = {
  borderWidth: 1.5,
  padding: "1.5rem",
} as const;
