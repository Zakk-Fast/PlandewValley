import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { zustandLocalStorage } from "lib/zustandStorage";
import { FieldCardData, FieldCardFormData } from "types/FieldCard";
import { nanoid } from "nanoid";

type FieldCardState = {
  hasHydrated: boolean;
  cards: FieldCardData[];
  addCard: (formData: FieldCardFormData) => void;
  clearCrop: (id: string) => void;
  updateCard: (id: string, updates: Partial<FieldCardData>) => void;
  setHasHydrated: (value: boolean) => void;
  removeCard: (id: string) => void;
};

export const useFieldCardStore = create<FieldCardState>()(
  persist(
    (set) => ({
      hasHydrated: false,
      setHasHydrated: (value) => set({ hasHydrated: value }),
      cards: [],
      addCard: (formData) =>
        set((state) => ({
          cards: [
            ...state.cards,
            {
              ...formData,
              id: nanoid(),
              initialized: true,
              cropId: null,
              cropName: null,
              cropImageSrc: null,
              seedCost: formData.seedCost ?? null,
              fertilizerCost: formData.fertilizerCost ?? null,
              daysToFirstHarvest: null,
              daysToSubsequentHarvest: null,
            },
          ],
        })),
      removeCard: (id) =>
        set((state) => ({
          cards: state.cards.filter((card) => card.id !== id),
        })),
      clearCrop: (id) =>
        set((state) => ({
          cards: state.cards.map((card) =>
            card.id === id
              ? {
                  ...card,
                  cropName: null,
                  cropImageSrc: null,
                  daysToFirstHarvest: null,
                  daysToSubsequentHarvest: null,
                }
              : card
          ),
        })),
      updateCard: (id, updates) =>
        set((state) => ({
          cards: state.cards.map((card) =>
            card.id === id ? { ...card, ...updates } : card
          ),
        })),
    }),
    {
      name: "plandew-field-cards",
      storage: createJSONStorage(() => zustandLocalStorage),
      onRehydrateStorage: () => {
        return (state) => {
          state?.setHasHydrated(true);
        };
      },
    }
  )
);
