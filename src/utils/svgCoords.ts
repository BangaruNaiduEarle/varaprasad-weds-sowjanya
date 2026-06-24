/** Stable string coords for SVG — prevents SSR/client hydration drift from float math. */
export function formatSvgCoord(value: number): string {
  return value.toFixed(2);
}
