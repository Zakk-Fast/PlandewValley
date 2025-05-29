import { useFarmerStore } from "../../../store/useFarmerStore";
import Checkbox from "../checkbox/Checkbox";
import Select from "../select/Select";

import style from "./plannerFarmerInfo.module.scss";

export default function FarmerInfo() {
  const level = useFarmerStore((state) => state.farmingLevel);
  const professions = useFarmerStore((state) => state.professions);
  const setFarmerLevel = useFarmerStore((state) => state.setFarmingLevel);
  const toggleProfession = useFarmerStore((state) => state.toggleProfession);

  const selectOptions = Array.from({ length: 10 }, (_, i) => i + 1);
  // const professionsCheck = {
  //   tiller: true,
  //   artisan: false,
  //   agriculturist: true,
  // };

  return (
    <div className={style["farmer-info"]}>
      <h4>Farmer Info</h4>
      <div>
        <div className={style["farmer-info--level"]}>
          <p>Farmer Level:</p>
          <Select
            id="farming-level"
            value={level}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setFarmerLevel(Number(e.target.value))
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
