export const hexToRgba = (hex: string, alpha: string): string => {
  const [r, g, b] = hex.match(/\w\w/g)!.map((x: string) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};
