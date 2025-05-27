import { useFarmerStore } from "../../../store/useFarmerStore";

import style from "./plannerFarmerInfo.module.scss";

export default function FarmerInfo() {
  const level = useFarmerStore((state) => state.farmingLevel);
  const professions = useFarmerStore((state) => state.professions);
  const setFarmerLevel = useFarmerStore((state) => state.setFarmingLevel);
  const toggleProfession = useFarmerStore((state) => state.toggleProfession);

  return (
    <div className={style["farmer-info"]}>
      <h4>Farmer Info</h4>
      <div>
        <div className={style["farmer-info--level"]}>
          <p>Farmer Level:</p>
          <select
            id="farming-level"
            value={level}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setFarmerLevel(Number(e.target.value))
            }
          >
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div className={style["farmer-info--professions"]}>
          <p>Farmer Professions</p>
          <ul>
            <li>
              Tiller
              <input
                type="checkbox"
                checked={professions.tiller}
                onChange={() => toggleProfession("tiller")}
              />
            </li>
            <li>
              Artisan
              <input
                type="checkbox"
                checked={professions.artisan}
                onChange={() => toggleProfession("artisan")}
              />
            </li>
            <li>
              Agricultarist
              <input
                type="checkbox"
                checked={professions.agriculturist}
                onChange={() => toggleProfession("agriculturist")}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
