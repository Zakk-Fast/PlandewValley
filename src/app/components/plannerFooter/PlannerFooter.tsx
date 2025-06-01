"use client";

import style from "./PlannerFooter.module.scss";
import { useFieldCardStore } from "store/useFieldCardStore";
import { calculatePlannerFooterStats } from "../../../lib/caclulations/getPlannerTotals";
import { useFarmerStore } from "store/useFarmerStore";

export default function PlannerFooter() {
  const farmingLevel = useFarmerStore((state) => state.farmingLevel);
  const profressions = useFarmerStore((state) => state.professions);

  const fieldCards = useFieldCardStore((state) => state.cards);
  const { totalSeedCost, totalFertilizerCost, totalValue, profit, roi } =
    calculatePlannerFooterStats(fieldCards, farmingLevel, profressions);

  console.log(totalFertilizerCost, "totalFertilizerCost");
  return (
    <div className={style.planner_footer}>
      <div>
        <strong>Total Seed Cost:</strong> {totalSeedCost}g
      </div>
      <div>
        <strong>Total Fertilizer Cost:</strong> {totalFertilizerCost}g
      </div>
      <div>
        <strong>Estimated Sell Total:</strong> {totalValue.toFixed(0)}g
      </div>
      <div>
        <strong>Estimated Profit:</strong> {profit.toFixed(0)}g
      </div>
      <div>
        <strong>ROI:</strong> {roi.toFixed(1)}%
      </div>
    </div>
  );
}
