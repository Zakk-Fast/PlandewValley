import style from "./PlannerFooter.module.scss";

export default function PlannerFooter() {
  // Placeholder values (replace with actual derived data later)
  const totalSeedCost = 2400;
  const totalFertilizerCost = 960;
  const totalValue = 6200;

  return (
    <div className={style.planner_footer}>
      <div>
        <strong>Total Seed Cost:</strong> {totalSeedCost}g
      </div>
      <div>
        <strong>Total Fertilizer Cost:</strong> {totalFertilizerCost}g
      </div>
      <div>
        <strong>Total Value:</strong> {totalValue}g
      </div>
    </div>
  );
}
