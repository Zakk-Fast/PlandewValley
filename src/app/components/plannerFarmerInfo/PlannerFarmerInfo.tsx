import { useFarmerStore } from "../../../store/useFarmerStore";
import Checkbox from "../checkbox/Checkbox";
import Select from "../select/Select";

import style from "./plannerFarmerInfo.module.scss";

export default function FarmerInfo() {
  const farmingLevel = useFarmerStore((state) => state.farmingLevel);
  const professions = useFarmerStore((state) => state.professions);
  const setFarmingLevel = useFarmerStore((state) => state.setFarmingLevel);
  const toggleProfession = useFarmerStore((state) => state.toggleProfession);

  const selectOptions = Array.from({ length: 14 }, (_, i) => i + 1);

  return (
    <div className={style["farmer-info"]}>
      <h3>Farmer Info</h3>
      <div>
        <div className={style["farmer-info--level"]}>
          <p>Farming Level:</p>
          <Select
            id="farming-level"
            value={farmingLevel}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setFarmingLevel(Number(e.target.value))
            }
            options={selectOptions}
          />
        </div>
        <div className={style["farmer-info--professions"]}>
          <p>Farmer Professions</p>
          <ul>
            {Object.entries(professions).map(([key, value]) => (
              <li key={key}>
                <Checkbox
                  id={key}
                  label={key.charAt(0).toUpperCase() + key.slice(1)}
                  checked={value}
                  onChange={() =>
                    toggleProfession(key as keyof typeof professions)
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
