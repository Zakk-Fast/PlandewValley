import Image from "next/image";
import Card from "../card/Card";
import Button from "../button/Button";

import style from "./FieldCard.module.scss";

type InfoEntry = {
  label: string;
  value: string | React.ReactNode;
};

export function FieldCard() {
  const infoRows: InfoEntry[] = [
    { label: "Total Plots", value: "48" },
    { label: "Layout Type", value: "Custom" },
    { label: "Fertilizer", value: "Hyper Speed-Gro" },
    {
      label: "Crop",
      value: (
        <Image
          src="/image/crop_assets/crops/strawberry.png"
          height={40}
          width={40}
          alt="Strawberry"
        />
      ),
    },
  ];

  return (
    <Card className={style.field_card}>
      {/* Header */}
      <div className={style.field_card__header}>
        <p className={style["field_card__header--title"]}>Plot 1</p>
        <div className={style["field_card__header--controls"]}>
          <Button>?</Button>
          <Button>X</Button>
        </div>
      </div>

      {/* Plot Info Rows */}
      <div className={style.field_card__info}>
        {infoRows.map((row) => (
          <div key={row.label} className={style["field_card__info--plot"]}>
            <div>{row.label}</div>
            <div>{row.value}</div>
          </div>
        ))}

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
            <div>0g</div>
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
            <div>0g</div>
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
            <div>1 day</div>
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
