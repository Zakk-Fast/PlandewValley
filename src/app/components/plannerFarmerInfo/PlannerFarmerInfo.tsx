import { useState } from "react";

import style from "./plannerFarmerInfo.module.scss";

export default function FarmerInfo() {
  const [level, setLevel] = useState(1);
  const [professions, setProfessions] = useState({
    tiller: false,
    artisan: false,
    agriculturist: false,
  });

  console.log(professions, setProfessions);

  const handleProfessionChange = (key: keyof typeof professions) => {
    setProfessions((prev) => {
      const updated = { ...prev, [key]: !prev[key] };

      // Auto-select Tiller if Artisan or Agriculturist is being turned on
      if ((key === "artisan" || key === "agriculturist") && updated[key]) {
        updated.tiller = true;
      }

      // If Tiller is being turned off, clear both advanced professions
      if (key === "tiller" && !updated.tiller) {
        updated.artisan = false;
        updated.agriculturist = false;
      }

      // Enforce mutual exclusivity between artisan/agriculturist
      if (key === "artisan" && updated.artisan) {
        updated.agriculturist = false;
      }

      if (key === "agriculturist" && updated.agriculturist) {
        updated.artisan = false;
      }

      return updated;
    });
  };

  return (
    <div className={style["farmer-info"]}>
      <h4>Farmer Info</h4>
      <div>
        <div className={style["farmer-info--level"]}>
          <p>Farmer Level:</p>
          <select
            id="farming-level"
            value={level}
            onChange={() => (e: React.ChangeEvent<HTMLInputElement>) =>
              setLevel(Number(e.target.value))}
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
                onChange={() => handleProfessionChange("tiller")}
              />
            </li>
            <li>
              Artisan
              <input
                type="checkbox"
                checked={professions.artisan}
                onChange={() => handleProfessionChange("artisan")}
              />
            </li>
            <li>
              Agricultarist
              <input
                type="checkbox"
                checked={professions.agriculturist}
                onChange={() => handleProfessionChange("agriculturist")}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
