import { Fertilizer } from "./Fertilizers";

export type FieldCardFormData = {
  name: string;
  layoutType: "Custom" | "Preset" | "Select";
  tileCount: number;
  fertilizer: Fertilizer;
  paysForFertilizer: boolean;
  paysForSeeds: boolean;
  seedCost: number | null;
  fertilizerCost: number | null;
};

export type FieldCardData = FieldCardFormData & {
  id: string;
  initialized: boolean;
  cropId: string | null;
  cropName: string | null;
  cropImageSrc: string | null;
  daysToFirstHarvest: number | null;
  daysToSubsequentHarvest: number | null;
};
