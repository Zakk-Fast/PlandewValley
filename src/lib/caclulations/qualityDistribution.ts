import { Fertilizer } from "types/Fertilizers";

export function getQualityDistribution(
  fertilizer: Fertilizer,
  farmingLevel: number
): { regular: number; silver: number; gold: number; iridium: number } {
  const level = Math.max(0, Math.min(14, farmingLevel));

  const distribution = fertilizer.qualityDistribution[level];

  if (!distribution) {
    return { regular: 1, silver: 0, gold: 0, iridium: 0 };
  }

  return distribution;
}
