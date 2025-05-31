import style from "./PlannerFooter.module.scss";

export default function PlannerFooter() {
  return (
    <div className={style.planner_footer}>
      <div>Total Seed Cost</div> {/*totalSeedCost */}
      <div>Total Fertilizer Cost</div> {/* totalFertilizerCost */}
      <div>Total Value</div> {/* totalValue */}
      <div></div>
    </div>
  );
}


/*

return {
    averageCropSellPrice: priceWithTiller,
    cropsPerSeason: harvests.length,
    totalYield,
    totalValue,
    totalSeedCost,
    totalFertilizerCost,
    harvests,
  };

*/