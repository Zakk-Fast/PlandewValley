import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { zustandLocalStorage } from "lib/zustandStorage";
import { Farmer } from "types/Farmer";
import { Professions } from "types/Professions";

type FarmerStore = Farmer & {
  hasHydrated: boolean;
  setHasHydrated: (value: boolean) => void;
  setFarmingLevel: (level: number) => void;
  toggleProfession: (key: keyof Professions) => void;
};

export const useFarmerStore = create<FarmerStore>()(
  persist(
    (set) => ({
      farmingLevel: 1,
      professions: {
        tiller: false,
        artisan: false,
        agriculturist: false,
      },
      hasHydrated: false,
      setHasHydrated: (value) => set({ hasHydrated: value }),
      setFarmingLevel: (level) => set({ farmingLevel: level }),
      toggleProfession: (key) =>
        set((state) => {
          const updated = { ...state.professions };
          const toggled = !updated[key];
          updated[key] = toggled;

          if (key === "tiller" && !toggled) {
            updated.artisan = false;
            updated.agriculturist = false;
          }

          if (key === "artisan" && toggled) {
            updated.agriculturist = false;
            updated.tiller = true;
          }

          if (key === "agriculturist" && toggled) {
            updated.artisan = false;
            updated.tiller = true;
          }

          return { professions: updated };
        }),
    }),
    {
      name: "plandew-farmer",
      storage: createJSONStorage(() => zustandLocalStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
