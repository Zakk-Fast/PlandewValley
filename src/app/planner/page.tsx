"use client";

import { useState } from "react";

import MenuPanel from "app/components/menuPanel/MenuPanel";
import PlannerHeader from "app/components/plannerHeader/PlannerHeader";
import CropLibrary from "app/components/cropLibrary/CropLibrary";
import PlannerPlot from "app/components/plannerPlot/PlannerPlot";

import NewFieldCardModal from "app/components/newFieldCardModal/CreateFieldCardModal";

import style from "./planner.module.scss";

export default function PlannerPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <MenuPanel>
        <div className={style.planner}>
          <PlannerHeader />

          <div className={style.planner__workspace}>
            <div className={style["planner__crop-library"]}>
              <CropLibrary />
            </div>
            <div className={style["planner__plot-grid"]}>
              <PlannerPlot setModalOpen={setModalOpen} />
            </div>
          </div>

          <div className={style.planner__profit}>Profit Foot</div>
        </div>
      </MenuPanel>
      <NewFieldCardModal
        modalOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
      />
      ;
    </>
  );
}
