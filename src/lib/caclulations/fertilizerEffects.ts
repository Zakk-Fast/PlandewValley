/* eslint-disable @typescript-eslint/no-unused-vars */

import { Fertilizer } from "types/Fertilizers";

export function getSpeedModifier(fertilizer: Fertilizer): number {
  // @TODO: Return fertilizer speed multiplier (e.g., 0.9 for Speed-Gro)
  return 1;
}

export function isSpeedGro(fertilizer: Fertilizer): boolean {
  // @TODO: Return true if fertilizer is Speed-Gro type
  return false;
}
