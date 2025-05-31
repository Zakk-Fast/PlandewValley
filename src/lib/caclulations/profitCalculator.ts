/* eslint-disable @typescript-eslint/no-unused-vars */

import { Crop } from "types/Crop";
import { Farmer } from "types/Farmer";
import { Fertilizer } from "types/Fertilizers";

import { getAdjustedGrowthTime } from "./cropGrowth";
import { getQualityDistribution, QualityLevel } from "./qualityDistribution";
import { calculateHarvestDays, calculateTotalYield } from "./yieldCalculator";

export type FieldCalculationResult = {
  averageCropSellPrice: number;
  cropsPerSeason: number;
  totalYield: number;
  totalValue: number;
  totalSeedCost: number;
  totalFertilizerCost: number;
  harvests: number[];
};

export function calculateFieldValue(
  crop: Crop,
  farmer: Farmer,
  tileCount: number,
  fertilizer: Fertilizer,
  paysForSeeds: boolean,
  paysForFertilizer: boolean
): FieldCalculationResult {
  // @TODO: Combine all helpers to compute adjusted growth
  // @TODO: Calculate quality-weighted average sell price
  // @TODO: Total yield, costs, and value

  return {
    averageCropSellPrice: 0,
    cropsPerSeason: 0,
    totalYield: 0,
    totalValue: 0,
    totalSeedCost: 0,
    totalFertilizerCost: 0,
    harvests: [],
  };
}
