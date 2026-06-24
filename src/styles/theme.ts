/**
 * Wedding design system — single source of truth for token values.
 * Raw values inject CSS custom properties; `colors` / `fonts` expose var() refs for TS/JS.
 */

export const colorValues = {
  ivory: "#FFF8F0",
  gold: "#D4AF37",
  yellow: "#EFBF04",
  champagne: "#F7E7CE",
  cream: "#F5EFE6",
  maroon: "#6B0F1A",
  kumkuma: "#800020",
  peach: "#F7E7CE",
  green: "#4F6F52",
  navy: "#1D2635",
  pink: "#D4849A",
} as const;

export type ThemeColor = keyof typeof colorValues;

export const colors = {
  ivory: "var(--color-ivory)",
  gold: "var(--color-gold)",
  yellow: "var(--color-yellow)",
  champagne: "var(--color-champagne)",
  cream: "var(--color-cream)",
  maroon: "var(--color-maroon)",
  kumkuma: "var(--color-kumkuma)",
  peach: "var(--color-peach)",
  green: "var(--color-green)",
  navy: "var(--color-navy)",
  pink: "var(--color-pink)",
} as const satisfies Record<ThemeColor, string>;

export const semanticColors = {
  background: colors.ivory,
  surface: colors.champagne,
  foreground: colors.navy,
  muted: colors.green,
  accent: colors.gold,
  accentAlt: colors.maroon,
  highlight: colors.cream,
} as const;

export type SemanticColor = keyof typeof semanticColors;

export const fontFamily = {
  script: "var(--font-script)",
  heading: "var(--font-heading)",
  section: "var(--font-section)",
  body: "var(--font-body)",
} as const;

export type FontFamily = keyof typeof fontFamily;

export const radiusValues = {
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.5rem",
  "2xl": "2rem",
  full: "9999px",
} as const;

export type ThemeRadius = keyof typeof radiusValues;

export const radii = {
  sm: "var(--radius-sm)",
  md: "var(--radius-md)",
  lg: "var(--radius-lg)",
  xl: "var(--radius-xl)",
  "2xl": "var(--radius-2xl)",
  full: "var(--radius-full)",
} as const satisfies Record<ThemeRadius, string>;

export const shadowValues = {
  soft: "0 4px 24px color-mix(in srgb, var(--color-navy) 8%, transparent)",
  medium:
    "0 8px 32px color-mix(in srgb, var(--color-navy) 12%, transparent)",
  elevated:
    "0 16px 48px color-mix(in srgb, var(--color-maroon) 12%, transparent)",
  glow: "0 0 32px color-mix(in srgb, var(--color-gold) 32%, transparent)",
  premium:
    "0 8px 32px color-mix(in srgb, var(--color-gold) 18%, transparent), 0 2px 8px color-mix(in srgb, var(--color-maroon) 8%, transparent)",
} as const;

export type ThemeShadow = keyof typeof shadowValues;

export const shadows = {
  soft: "var(--shadow-soft)",
  medium: "var(--shadow-medium)",
  elevated: "var(--shadow-elevated)",
  glow: "var(--shadow-glow)",
  premium: "var(--shadow-premium)",
} as const satisfies Record<ThemeShadow, string>;

export const glassValues = {
  bg: "color-mix(in srgb, var(--color-ivory) 78%, transparent)",
  border: "color-mix(in srgb, var(--color-gold) 32%, transparent)",
  blur: "20px",
} as const;

export const glass = {
  bg: "var(--glass-bg)",
  border: "var(--glass-border)",
  blur: "var(--glass-blur)",
} as const;

export const motionValues = {
  easeOutExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
  easeInOutSoft: "cubic-bezier(0.45, 0, 0.55, 1)",
  durationFast: "200ms",
  durationBase: "400ms",
  durationSlow: "700ms",
} as const;

export const motion = {
  easeOutExpo: "var(--ease-out-expo)",
  easeInOutSoft: "var(--ease-in-out-soft)",
  durationFast: "var(--duration-fast)",
  durationBase: "var(--duration-base)",
  durationSlow: "var(--duration-slow)",
} as const;

/** Maps palette tokens to `--color-*` custom properties for injection on `:root`. */
function paletteCssVariables(): Record<string, string> {
  return Object.fromEntries(
    Object.entries(colorValues).map(([name, value]) => [
      `--color-${name}`,
      value,
    ]),
  );
}

/** Maps semantic tokens to `--color-*` custom properties. */
function semanticCssVariables(): Record<string, string> {
  const semanticToPalette: Record<SemanticColor, ThemeColor> = {
    background: "ivory",
    surface: "champagne",
    foreground: "navy",
    muted: "green",
    accent: "gold",
    accentAlt: "maroon",
    highlight: "cream",
  };

  return Object.fromEntries(
    Object.entries(semanticToPalette).map(([semantic, palette]) => [
      `--color-${semantic}`,
      colorValues[palette],
    ]),
  );
}

/** Full set of CSS custom properties applied to the document root. */
export const rootCssVariables: Record<string, string> = {
  ...paletteCssVariables(),
  ...semanticCssVariables(),
  ...Object.fromEntries(
    Object.entries(radiusValues).map(([name, value]) => [
      `--radius-${name}`,
      value,
    ]),
  ),
  ...Object.fromEntries(
    Object.entries(shadowValues).map(([name, value]) => [
      `--shadow-${name}`,
      value,
    ]),
  ),
  "--glass-bg": glassValues.bg,
  "--glass-border": glassValues.border,
  "--glass-blur": glassValues.blur,
  "--ease-out-expo": motionValues.easeOutExpo,
  "--ease-in-out-soft": motionValues.easeInOutSoft,
  "--duration-fast": motionValues.durationFast,
  "--duration-base": motionValues.durationBase,
  "--duration-slow": motionValues.durationSlow,
};

export function varColor(name: ThemeColor | SemanticColor): string {
  return `var(--color-${name})`;
}

export const theme = {
  colors,
  colorValues,
  semanticColors,
  fontFamily,
  radii,
  radiusValues,
  shadows,
  shadowValues,
  glass,
  glassValues,
  motion,
  motionValues,
  rootCssVariables,
  varColor,
} as const;

export type Theme = typeof theme;
