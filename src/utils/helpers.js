export const clamp01 = (value) => Math.max(0, Math.min(value, 1));

export const smoothstep = (min, max, value) => {
  const t = clamp01((value - min) / (max - min));
  return t * t * (3 - 2 * t);
};
