export type StepId =
  | "name"
  | "layoutType"
  | "customTileCount"
  | "sprinklerCount"
  | "fertilizer"
  | "cost";

export type Step = {
  id: StepId;
  label: string;
};
