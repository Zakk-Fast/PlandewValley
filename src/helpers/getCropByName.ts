import { crops } from "@/data/crops";
import { Crop } from "types/Crop";

export function getCropByName(id: string): Crop | undefined {
  return crops.find((crop) => crop.name === id);
}
