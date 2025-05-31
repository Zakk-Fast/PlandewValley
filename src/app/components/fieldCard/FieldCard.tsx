import Image from "next/image";
import Card from "../card/Card";
import Button from "../button/Button";

import style from "./FieldCard.module.scss";
import { FieldCardData } from "types/FieldCard";

type InfoEntry = {
  label: string;
  value: string | React.ReactNode;
};

type Props = {
  card: FieldCardData;
};
export function FieldCard({ card }: Props) {
  const {
    name,
    tileCount,
    layoutType,
    fertilizerType,
    cropImageSrc,
    seedCost,
    paysForSeeds,
    fertilizerCost,
    paysForFertilizer,
    daysToFirstHarvest,
    daysToSubsequentHarvest,
  } = card;

  console.log(card);

  const infoRows: InfoEntry[] = [
    { label: "Total Plots", value: tileCount },
    { label: "Layout Type", value: layoutType },
    { label: "Fertilizer", value: fertilizerType },
    {
      label: "Crop",
      value: cropImageSrc ? (
        <Image
          src={`/image/crop_assets/crops/${cropImageSrc}.png`}
          height={40}
          width={40}
          alt="Strawberry"
        />
      ) : (
        "No Assigned Crop"
      ),
    },
  ];

  return (
    <Card className={style.field_card}>
      {/* Header */}
      <div className={style.field_card__header}>
        <p className={style["field_card__header--title"]}>{name}</p>
        <div className={style["field_card__header--controls"]}>
          <Button>?</Button>
          <Button>X</Button>
        </div>
      </div>

      {/* Plot Info Rows */}
      <div className={style.field_card__info}>
        {infoRows.map((row, i) => {
          const isLast = i === infoRows.length - 1;
          return (
            <div
              key={row.label}
              className={`${style["field_card__info--plot"]} ${
                isLast ? style["field_card__info--plot--last"] : ""
              }`}
            >
              <div>{row.label}</div>
              <div>{row.value}</div>
            </div>
          );
        })}

        {/* Profit Metrics */}
        <div className={style["field_card__info--money"]}>
          <div>
            <div>
              <Image
                src="/image/icons/gold_icon.png"
                height={30}
                width={30}
                alt=""
              />
            </div>
            <div>Seed Price</div>
            <div>{paysForSeeds ? seedCost : "0g"}</div>
          </div>
          <div>
            <div>
              <Image
                src="/image/icons/quality_gold_icon.png"
                height={30}
                width={30}
                alt=""
              />
            </div>
            <div>Fertilizer Cost</div>
            <div>{paysForFertilizer ? fertilizerCost : "0g"}</div>
          </div>
          <div>
            <div>
              <Image
                src="/image/icons/time_icon.png"
                height={30}
                width={30}
                alt=""
              />
            </div>
            <div>Harvest Time</div>
            <div>{daysToFirstHarvest ? daysToFirstHarvest : "0 Days"}</div>
            {daysToSubsequentHarvest ? `/${daysToSubsequentHarvest}` : ""}
          </div>
        </div>

        {/* Clear Crop Button */}
        <div className={style["field_card__crop-control"]}>
          <Button className={style["field_card__crop-control--button"]}>
            clear crops
          </Button>
        </div>
      </div>
    </Card>
  );
}
