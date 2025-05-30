import { Step } from "types/Step";

export const allSteps: readonly Step[] = [
  { id: "name", label: "What is the field name?" },
  { id: "layoutType", label: "Choose layout type (Preset or Custom)" },
  { id: "customTileCount", label: "How many plots? (Custom layout)" },
  { id: "sprinklerCount", label: "Sprinkler setup (Preset layout)" },
  { id: "fertilizer", label: "Pick a fertilizer type" },
  { id: "cost", label: "Are you paying for seeds and fertilizer?" },
] as const;
