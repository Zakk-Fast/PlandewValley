import MenuPanel from "app/components/menuPanel/MenuPanel";
import PlannerHeader from "app/components/plannerHeader/PlannerHeader";
import CropLibrary from "app/components/cropLibrary/CropLibrary";

import style from "./planner.module.scss";

export default function PlannerPage() {
  return (
    <MenuPanel>
      <div className={style.planner}>
        <PlannerHeader />

        <div className={style.planner__workspace}>
          <div className={style["planner__crop-library"]}>
            <CropLibrary />
          </div>
          <div className={style["planner__plot-grid"]}>Planner Grid</div>
        </div>

        <div className={style.planner__profit}>Profit Foot</div>
      </div>
    </MenuPanel>
  );
}

/*
- Farming Level: Dropdown (1–10)

- Professions: Toggle buttons or checkboxes with tooltips
*/
