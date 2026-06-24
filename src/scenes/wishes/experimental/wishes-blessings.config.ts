import { INVITATION_DATA } from "@/content/invitation.data";

/** Isolated config for experimental Wedding Wishes section. */

export const WISHES_MANDALA_IMAGE = INVITATION_DATA.illustrations.mandala;

export const WISHES_TOKENS = {
  gold: "#D4AF37",
  yellow: "#EFBF04",
  maroon: "#6B0F1A",
  kumkuma: "#800020",
  champagne: "#F7E7CE",
  ivory: "#FFF8F0",
  cream: "#F5EFE6",
  navy: "#1D2635",
} as const;

export const MANDALA_OPACITY = {
  watermark: 0.06,
  corner: 0.08,
} as const;

/** Mobile carousel — ~85vw card shows ~15% of next card */
export const MOBILE_CARD_WIDTH = "w-[85vw] max-w-[340px]";

export interface RelationBadgeStyle {
  readonly background: string;
  readonly color: string;
  readonly border: string;
}

const DEFAULT_BADGE: RelationBadgeStyle = {
  background: `linear-gradient(135deg, color-mix(in srgb, #F7E7CE 90%, #FFF8F0) 0%, color-mix(in srgb, #D4AF37 18%, #F7E7CE) 100%)`,
  color: "#6B0F1A",
  border: "color-mix(in srgb, #D4AF37 45%, transparent)",
};

const RELATION_BADGES: Record<string, RelationBadgeStyle> = {
  Family: {
    background: `linear-gradient(135deg, color-mix(in srgb, #D4AF37 22%, #F7E7CE) 0%, #FFF8F0 100%)`,
    color: "#6B0F1A",
    border: "color-mix(in srgb, #D4AF37 50%, transparent)",
  },
  Friend: {
    background: `linear-gradient(135deg, color-mix(in srgb, #800020 12%, #F7E7CE) 0%, #FFF8F0 100%)`,
    color: "#800020",
    border: "color-mix(in srgb, #800020 30%, transparent)",
  },
  Cousin: {
    background: `linear-gradient(135deg, color-mix(in srgb, #EFBF04 20%, #F7E7CE) 0%, #FFF8F0 100%)`,
    color: "#6B0F1A",
    border: "color-mix(in srgb, #EFBF04 40%, transparent)",
  },
  Elder: {
    background: `linear-gradient(135deg, color-mix(in srgb, #6B0F1A 10%, #F7E7CE) 0%, #FFF8F0 100%)`,
    color: "#6B0F1A",
    border: "color-mix(in srgb, #6B0F1A 25%, transparent)",
  },
  Brother: {
    background: `linear-gradient(135deg, color-mix(in srgb, #D4AF37 18%, #F7E7CE) 0%, #FFF8F0 100%)`,
    color: "#6B0F1A",
    border: "color-mix(in srgb, #D4AF37 45%, transparent)",
  },
  Sister: {
    background: `linear-gradient(135deg, color-mix(in srgb, #800020 10%, #F7E7CE) 0%, #FFF8F0 100%)`,
    color: "#800020",
    border: "color-mix(in srgb, #800020 28%, transparent)",
  },
};

export function getRelationBadgeStyle(relation: string): RelationBadgeStyle {
  return RELATION_BADGES[relation] ?? DEFAULT_BADGE;
}

export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return `${parts[0][0] ?? ""}${parts[parts.length - 1][0] ?? ""}`.toUpperCase();
  }
  return (parts[0]?.slice(0, 2) ?? "?").toUpperCase();
}

/** Deterministic avatar hue from guest name */
export function getAvatarGradient(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash % 40) + 30;
  return `linear-gradient(145deg, hsl(${hue} 45% 88%) 0%, hsl(${hue + 15} 35% 78%) 100%)`;
}
