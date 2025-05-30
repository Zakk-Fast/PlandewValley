import { create } from "zustand";
import { FieldCardData, FieldCardFormData } from "types/FieldCard";
import { nanoid } from "nanoid";

type FieldCardState = {
  cards: FieldCardData[];
  addCard: (formData: FieldCardFormData) => void;
  clearCrop: (id: string) => void;
  updateCard: (id: string, updates: Partial<FieldCardData>) => void;
};

export const useFieldCards = create<FieldCardState>((set) => ({
  cards: [],
  addCard: (formData) =>
    set((state) => ({
      cards: [
        ...state.cards,
        {
          ...formData,
          id: nanoid(),
          initialized: true,
          cropId: null, // ← this was missing
          cropName: null,
          cropImageSrc: null,
          daysToFirstHarvest: null,
          daysToSubsequentHarvest: null,
        },
      ],
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
}));
