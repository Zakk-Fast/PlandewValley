"use client";

import CropCard from "../cropCard/CropCard";
import Select from "../select/Select";

import Crops from "../../../data/crops.json";
import style from "./CropLibrary.module.scss";
import { useState } from "react";

const seasons = ["All", "Spring", "Summer", "Fall", "Winter"];

export default function CropLibrary() {
  const [selection, setSelection] = useState("All");

  const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelection(e.target.value);
  };

  const filteredCrops =
    selection.toLowerCase() === "all"
      ? Crops
      : Crops.filter((crop) => crop.seasons.includes(selection.toLowerCase()));

  return (
    <>
      <div className={style.crop_header}>
        Season:{" "}
        <Select
          options={seasons}
          value={selection}
          onChange={handleSelection}
          id="season-select"
        />
      </div>
      <div className={style.crop_library}>
        {filteredCrops.map((crop) => {
          return (
            <CropCard
              key={crop.name}
              name={crop.name}
              image_key={crop.image_key}
              seedPrice={crop.seed_price}
              description={crop.description}
              baseGoldPerDay={crop.base_gold_per_day}
              category={crop.category}
              growth={{
                baseDays: crop.growth.base_days,
                regrowthDays: crop.growth.regrowth_days,
              }}
            />
          );
        })}
      </div>
    </>
  );
}
