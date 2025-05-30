type GrowthTime = {
  base_days: number;
  regrowth_days: number | null;
};

type SellPrices = {
  base: number | null;
  silver: number | null;
  gold: number | null;
  iridium: number | null;
};

export type CropCategory = "fruit" | "vegetable" | "flower" | "special";

type FruitProcessType = "wine" | "jelly";
type VegetableProcessType = "juice" | "pickles";
type FlowerProcessType = "honey";
type SpecialArtisanProduct = "coffee" | "beer" | "pale_ale";

type ProcessType =
  | FruitProcessType
  | VegetableProcessType
  | FlowerProcessType
  | SpecialArtisanProduct;

export const PROCESS_TYPE_GROUPS = {
  fruit: ["wine", "jelly"] as ProcessType[],
  vegetable: ["juice", "pickles"] as ProcessType[],
  flower: ["honey"] as ProcessType[],
  special: ["coffee", "beer", "pale_ale"] as ProcessType[],
};

type Seasons = "Spring" | "Summer" | "Fall" | "Winter";

export type Crop = {
  name: string;
  season: Seasons[];
  image_key: string;
  category: CropCategory;
  seed_price: number | null;
  growth: GrowthTime;
  sell_prices: SellPrices;
  base_gold_per_day: number;
  artisan_products: ProcessType[];
  description: string;
  notes: string | null;
};
