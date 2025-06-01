import { Fertilizer } from "types/Fertilizers";

export function getAdjustedGrowthTime(
  baseDays: number,
  fertilizer: Fertilizer | null,
  isAgriculturist: boolean = false
): number {
  let speedBonus = 0;

  if (fertilizer?.speedModifier) {
    speedBonus += fertilizer.speedModifier;
  }

  if (isAgriculturist) {
    speedBonus += 0.1;
  }

  const adjusted = Math.floor(baseDays * (1 - speedBonus));
  return Math.max(1, adjusted);
}
