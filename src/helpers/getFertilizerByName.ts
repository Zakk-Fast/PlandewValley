import { fertilizers } from "data/fertilizers";
import { Fertilizer } from "types/Fertilizers";

export function getFertilizerByName(name: string): Fertilizer | undefined {
  return fertilizers.find((f) => f.name === name);
}
