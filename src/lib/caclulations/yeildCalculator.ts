/* eslint-disable @typescript-eslint/no-unused-vars */

import { Crop } from "types/Crop";

export function calculateHarvestDays(
  growthTime: number,
  regrowth: number | null,
  seasonLength: number = 28
): number[] {
  // @TODO: Return array of harvest days
  return [];
}

export function calculateTotalYield(
  tileCount: number,
  harvests: number[]
): number {
  // @TODO: Multiply tile count by number of harvests
  return tileCount * harvests.length;
}
