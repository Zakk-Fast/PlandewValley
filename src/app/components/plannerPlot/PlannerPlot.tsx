"use client";

import Button from "../button/Button";
import style from "./PlannerPlot.module.scss";

export default function PlannerPlot() {
  return (
    <div className={style.planner_plot}>
      <div className={style.header}>
        <Button>Add Plot</Button>
      </div>
      <div className={style.planner}>planner plot</div>
    </div>
  );
}
