"use client";

import { useRef } from "react";
import { useDrop } from "react-dnd";
import { useFieldCardStore } from "store/useFieldCardStore";
import cropData from "../../../data/crops.json";
import Image from "next/image";
import Card from "../card/Card";
import Button from "../button/Button";

import style from "./FieldCard.module.scss";
import { FieldCardData } from "types/FieldCard";
import { getAdjustedGrowthTime } from "lib/caclulations/cropGrowth";

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
    fertilizer,
    cropImageSrc,
    seedCost,
    paysForSeeds,
    paysForFertilizer,
    daysToFirstHarvest,
    daysToSubsequentHarvest,
  } = card;

  const adjustedFirstHarvest =
    daysToFirstHarvest && fertilizer
      ? getAdjustedGrowthTime(daysToFirstHarvest, fertilizer)
      : daysToFirstHarvest;

  const infoRows: InfoEntry[] = [
    { label: "Total Plots", value: tileCount },
    { label: "Layout Type", value: layoutType },
    { label: "Fertilizer", value: fertilizer?.name ?? "None" },
    {
      label: "Crop",
      value: cropImageSrc ? (
        <Image
          src={`/image/crop_assets/crops/${cropImageSrc}.png`}
          height={40}
          width={40}
          alt={cropImageSrc}
        />
      ) : (
        "No Assigned Crop"
      ),
    },
  ];

  const cardRef = useRef<HTMLDivElement>(null);
  const updateCard = useFieldCardStore((state) => state.updateCard);
  const removeCard = useFieldCardStore((state) => state.removeCard);

  const [, drop] = useDrop({
    accept: "CROP",
    drop: (item: { name: string; image_key: string }) => {
      const crop = cropData.find((c) => c.name === item.name);
      if (!crop) return;

      updateCard(card.id, {
        cropName: crop.name,
        cropImageSrc: crop.image_key,
        seedCost: crop.seed_price,
        daysToFirstHarvest: crop.growth.base_days,
        daysToSubsequentHarvest: crop.growth.regrowth_days ?? null,
      });
    },
  });

  drop(cardRef);

  return (
    <Card className={style.field_card} ref={cardRef}>
      <div className={style.field_card__header}>
        <p className={style["field_card__header--title"]}>{name}</p>
        <div className={style["field_card__header--controls"]}>
          <Button onClick={() => removeCard(card.id)}>X</Button>
        </div>
      </div>

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

        <div className={style["field_card__info--money"]}>
          <div>
            <Image
              src="/image/icons/gold_icon.png"
              height={30}
              width={30}
              alt=""
            />
            <div>Seed Price</div>
            <div>
              {paysForSeeds && seedCost ? `${seedCost * tileCount}g` : "0g"}
            </div>
          </div>
          <div>
            <Image
              src="/image/icons/quality_gold_icon.png"
              height={30}
              width={30}
              alt=""
            />
            <div>Fertilizer Cost</div>
            <div>
              {paysForFertilizer && fertilizer
                ? `${(fertilizer.price ?? 0) * tileCount}g`
                : "0g"}
            </div>
          </div>
          <div>
            <Image
              src="/image/icons/time_icon.png"
              height={30}
              width={30}
              alt=""
            />
            <div>Harvest Time</div>
            <div>
              {adjustedFirstHarvest ?? "0 Days"}
              {daysToSubsequentHarvest ? `/${daysToSubsequentHarvest}` : ""}
            </div>
          </div>
        </div>

        <div className={style["field_card__crop-control"]}></div>
      </div>
    </Card>
  );
}
