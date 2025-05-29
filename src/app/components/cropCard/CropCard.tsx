import Image from "next/image";
import Card from "../card/Card";

import style from "./CropCard.module.scss";

type CropCardProps = {
  name: string;
  image_key: string;
  seedPrice: number | null;
  category: string;
  growth: {
    baseDays: number;
    regrowthDays: number | null;
  };
  baseGoldPerDay: number;
  description: string;
};

export default function CropCard({
  name,
  image_key,
  seedPrice,
  baseGoldPerDay,
  growth,
}: CropCardProps) {
  return (
    <Card>
      <div className={style.crop_card}>
        {/* crop info */}
        <div className={style.crop_card__info}>
          <div className={style.crop_card__name}>
            <p>{name}</p>
            <Image
              src={`/image/crop_assets/crops/${image_key}.png`}
              width={40}
              height={40}
              alt={""}
              className={style.crop_card__icon}
            />
          </div>
          {/* crop stats */}
          <div className={style.crop_card__stats}>
            <div className={style["crop_card__stats"]}>
              <div className={style["crop_card__price"]}>
                price:{" "}
                {seedPrice ? (
                  <>
                    {seedPrice}{" "}
                    <Image
                      src={"/image/icons/gold_icon.png"}
                      width={20}
                      height={20}
                      alt={""}
                    />
                  </>
                ) : (
                  "Not Sold"
                )}
              </div>
            </div>
            <div className={style["crop_card__growth"]}>
              <div>
                time: {growth.baseDays}
                <Image
                  src={"/image/icons/time_icon.png"}
                  width={20}
                  height={20}
                  alt={""}
                />
              </div>
            </div>
            <div className={style["crop_card__gold-per-day"]}>
              gold per day: {baseGoldPerDay}{" "}
              <Image
                src={"/image/icons/gold_icon.png"}
                width={20}
                height={20}
                alt={""}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
