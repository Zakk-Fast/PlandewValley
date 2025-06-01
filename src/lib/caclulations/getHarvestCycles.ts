import { Crop } from "types/Crop";
import { Fertilizer } from "types/Fertilizers";
import { getAdjustedGrowthTime } from "./cropGrowth";

const DEFAULT_SEASON_LENGTH = 28;

export function getHarvestCycles(
  crop: Crop,
  fertilizer: Fertilizer,
  isAgriculturist: boolean = false,
  seasonLength: number = DEFAULT_SEASON_LENGTH
): number {
  const adjustedGrowth = getAdjustedGrowthTime(
    crop.growth.base_days,
    fertilizer,
    isAgriculturist
  );
  const regrowth = crop.growth.regrowth_days;

  if (adjustedGrowth > seasonLength) return 0;

  if (regrowth !== null && regrowth > 0) {
    const remainingDays = seasonLength - adjustedGrowth;
    const extraHarvests = Math.floor(remainingDays / regrowth);
    return 1 + extraHarvests;
  } else {
    return Math.floor(seasonLength / adjustedGrowth);
  }
}
