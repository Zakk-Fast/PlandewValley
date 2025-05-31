import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { zustandLocalStorage } from "lib/zustandStorage";
import { Farmer } from "types/Farmer";

type FarmerState = Farmer & {
  hasHydrated: boolean;
  setHasHydrated: (value: boolean) => void;
};

export const useFarmerStore = create<FarmerState>()(
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
          const current = state.professions;
          const updated = { ...current };

          const toggled = !current[key];
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
