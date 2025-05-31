export type QualityLevel = "regular" | "silver" | "gold" | "iridium";

export type QualityDistribution = Record<number, Record<QualityLevel, number>>;

export type Fertilizer = {
  name: string;
  price: number | null;
  speedModifier: number;
  qualityDistribution: QualityDistribution;
};
