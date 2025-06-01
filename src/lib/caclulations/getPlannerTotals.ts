import { FieldCardData } from "types/FieldCard";
import { getQualityDistribution } from "./qualityDistribution";
import { getCropByName } from "helpers/getCropByName";
import { getFertilizerByName } from "helpers/getFertilizerByName";
import { getHarvestCycles } from "./getHarvestCycles";

export function calculatePlannerFooterStats(
  cards: FieldCardData[],
  farmingLevel: number,
  professions: { tiller: boolean; agriculturist: boolean }
) {
  let totalSeedCost = 0;
  let totalFertilizerCost = 0;
  let totalValue = 0;
  let totalTilesPlanted = 0;

  for (const card of cards) {
    console.log("FERT CHECK", {
      name: card.name,
      tileCount: card.tileCount,
      paysForFertilizer: card.paysForFertilizer,
      fertilizerCost: card.fertilizerCost,
      calculation:
        card.paysForFertilizer && card.fertilizerCost
          ? card.fertilizerCost * card.tileCount
          : 0,
    });

    if (!card.cropName || !card.initialized) continue;

    const crop = getCropByName(card.cropName);
    if (!crop) continue;

    const fertilizerName = card.fertilizer?.name ?? "None";
    const fertilizer =
      getFertilizerByName(fertilizerName) ?? getFertilizerByName("None");
    if (!fertilizer) continue;

    const quality = getQualityDistribution(fertilizer, farmingLevel);
    const sellPrices = crop.sell_prices;

    const valuePerTile =
      (sellPrices.base ?? 0) * quality.regular +
      (sellPrices.silver ?? 0) * quality.silver +
      (sellPrices.gold ?? 0) * quality.gold +
      (sellPrices.iridium ?? 0) * quality.iridium;

    const tillerBonus = professions.tiller ? 1.1 : 1;
    const cycles = getHarvestCycles(
      crop,
      fertilizer,
      professions.agriculturist
    );

    totalTilesPlanted += card.tileCount * cycles;
    totalSeedCost +=
      card.paysForSeeds && card.seedCost
        ? card.seedCost * card.tileCount * cycles
        : 0;
    totalFertilizerCost +=
      card.paysForFertilizer && card.fertilizerCost
        ? card.fertilizerCost * card.tileCount
        : 0;
    totalValue += valuePerTile * card.tileCount * cycles * tillerBonus;
  }

  const averageValuePerCrop = totalTilesPlanted
    ? totalValue / totalTilesPlanted
    : 0;
  const profit = totalValue - (totalSeedCost + totalFertilizerCost);
  const roi =
    totalSeedCost + totalFertilizerCost > 0
      ? (profit / (totalSeedCost + totalFertilizerCost)) * 100
      : 0;

  return {
    totalSeedCost,
    totalFertilizerCost,
    totalValue,
    totalTilesPlanted,
    averageValuePerCrop,
    profit,
    roi,
  };
}
