/* eslint-disable @typescript-eslint/no-unused-vars */

import { Crop } from "types/Crop";
import { Farmer } from "types/Farmer";
import { Fertilizer } from "types/Fertilizers";

export function getAdjustedGrowthTime(
  crop: Crop,
  farmer: Farmer,
  fertilizer: Fertilizer
): number {
  // @TODO: Apply agriculturist bonus
  // @TODO: Apply fertilizer speed modifier
  // @TODO: Return adjusted base growth time (min 1 day)
  return crop.growth.base_days;
}
