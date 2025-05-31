import { StateStorage } from "zustand/middleware";

export const zustandLocalStorage: StateStorage = {
  getItem: (name) => {
    const value = localStorage.getItem(name);
    return value ? value : null;
  },
  setItem: (name, value) => {
    localStorage.setItem(name, value);
  },
  removeItem: (name) => {
    localStorage.removeItem(name);
  },
};
