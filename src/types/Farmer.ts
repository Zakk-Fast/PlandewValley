import { Professions } from "./Professions";

export type Farmer = {
  farmingLevel: number;
  professions: Professions;
  setFarmingLevel: (level: number) => void;
  toggleProfession: (key: keyof Professions) => void;
};
