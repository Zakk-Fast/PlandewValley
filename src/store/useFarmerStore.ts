import { create } from "zustand";

type Professions = {
  tiller: boolean;
  artisan: boolean;
  agriculturist: boolean;
};

type Farmer = {
  farmingLevel: number;
  professions: Professions;
  setFarmingLevel: (level: number) => void;
  toggleProfession: (key: keyof Professions) => void;
};

export const useFarmerStore = create<Farmer>((set) => ({
  farmingLevel: 1,
  professions: {
    tiller: false,
    artisan: false,
    agriculturist: false,
  },
  setFarmingLevel: (level) => set({ farmingLevel: level }),
  toggleProfession: (key) =>
    set((state) => {
      const current = state.professions;
      const updated = { ...current };

      const toggled = !current[key];
      updated[key] = toggled;

      // Rule: If turning off Tiller, reset both advanced professions
      if (key === "tiller" && !toggled) {
        updated.artisan = false;
        updated.agriculturist = false;
      }

      // Rule: If turning on Artisan, disable Agriculturist and force Tiller on
      if (key === "artisan" && toggled) {
        updated.agriculturist = false;
        updated.tiller = true;
      }

      // Rule: If turning on Agriculturist, disable Artisan and force Tiller on
      if (key === "agriculturist" && toggled) {
        updated.artisan = false;
        updated.tiller = true;
      }

      return { professions: updated };
    }),
}));
