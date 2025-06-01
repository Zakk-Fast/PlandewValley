import { Fertilizer } from "types/Fertilizers";
import { useFarmerStore } from "store/useFarmerStore";

/**
 * Calculates adjusted time to first harvest based on speed bonuses.
 * Pulls agriculturist flag from farmer state.
 *
 * @param baseDays - The crop’s unmodified time to grow.
 * @param fertilizer - The selected fertilizer (may have a speed modifier).
 * @returns Adjusted growth time in days (minimum 1).
 */
export function getAdjustedGrowthTime(
  baseDays: number,
  fertilizer: Fertilizer | null
): number {
  const agriculturist =
    typeof window !== "undefined"
      ? useFarmerStore.getState().professions.agriculturist
      : false;

  let speedBonus = 0;

  if (fertilizer?.speedModifier) {
    speedBonus += fertilizer.speedModifier;
  }

  if (agriculturist) {
    speedBonus += 0.1;
  }

  const adjusted = Math.floor(baseDays * (1 - speedBonus));
  return Math.max(1, adjusted);
}
