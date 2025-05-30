export type FertilizerType =
  | "None"
  | "Basic Fertilizer"
  | "Quality Fertilizer"
  | "Deluxe Fertilizer"
  | "Speed-Gro"
  | "Deluxe Speed-Gro"
  | "Hyper Speed-Gro";

export type FieldCardFormData = {
  name: string;
  layoutType: "Custom" | "Preset";
  tileCount: number;
  fertilizerType: FertilizerType;
  fertilizerCost: number | null;
  paysForFertilizer: boolean;
  seedCost: number | null;
  paysForSeeds: boolean;
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
