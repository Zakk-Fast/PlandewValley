"use client";

import FarmerInfo from "../plannerFarmerInfo/PlannerFarmerInfo";
import style from "./plannerHeader.module.scss";

export default function PlannerHeader() {
  return (
    <div className={style.header}>
      <div className={style.header__info}>
        <h2>Crop Planner</h2>
        <p>
          Use this planner to organize your seasonal plots and calculate total
          profit, seed cost, and ROI in real time.
        </p>
      </div>
      <FarmerInfo />
    </div>
  );
}
