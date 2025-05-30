import { create } from "zustand";
import { FieldCardData, FieldCardFormData } from "types/FieldCard";

type FieldCardStore = {
  fieldCards: FieldCardData[];
  addFieldCard: (formData: FieldCardFormData) => void;
  removeFieldCard: (id: string) => void;
  updateFieldCard: (id: string, updates: Partial<FieldCardData>) => void;
};

export const useFieldCardStore = create<FieldCardStore>((set) => ({
  fieldCards: [],

  addFieldCard: (formData) =>
    set((state) => {
      const newCard: FieldCardData = {
        id: crypto.randomUUID(),
        name: formData.name,
        layoutType: formData.layoutType,
        tileCount: formData.tileCount,
        fertilizerType: formData.fertilizerType,
        paysForSeeds: formData.paysForSeeds,
        paysForFertilizer: formData.paysForFertilizer,
        fertilizerCost: formData.fertilizerCost,
        seedCost: null,
        initialized: true,
        cropId: null,
        cropName: null,
        cropImageSrc: null,
        daysToFirstHarvest: null,
        daysToSubsequentHarvest: null,
      };

      return { fieldCards: [...state.fieldCards, newCard] };
    }),

  removeFieldCard: (id) =>
    set((state) => ({
      fieldCards: state.fieldCards.filter((card) => card.id !== id),
    })),

  updateFieldCard: (id, updates) =>
    set((state) => ({
      fieldCards: state.fieldCards.map((card) =>
        card.id === id ? { ...card, ...updates } : card
      ),
    })),
}));
