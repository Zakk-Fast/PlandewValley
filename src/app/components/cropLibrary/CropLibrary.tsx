import CropCard from "../cropCard/CropCard";

import Crops from "../../data/crops.json";
import style from "./CropLibrary.module.scss";

export default function CropLibrary() {
  return (
    <div className={style.crop_library}>
      {Crops.map((crop) => {
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
  );
}
